import React from 'react';
import './App.css';
import MainView from './components/MainView';
import AdminView from './components/AdminView';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: [],
      searchString: "",
      adminModeActive: false
    }
    console.log("Constructor");
  }

  componentDidMount() {
    console.log("Mounted");
    axios.get('http://localhost:4000/products')
      .then(response => {
        console.log(response);
        this.setState({ items: response.data.items });
      })
      .catch(err => console.log(err));
  }

  onSearchFieldChange = (event) => {
    console.log('keyboard event');
    console.log(event.target.value);
    this.setState({ searchString: event.target.value });
  }

  addNewItem = (manufacturer, model, price) => {
    axios.post('http://localhost:4000/products',
    {
      manufacturer,
      model,
      price
    })
    .then( response => {
      this.setState({ items: [...this.state.items, response.data]});
    }
    )
    .catch(err => console.log(err));
  }

  deleteItem = itemId => {
    console.log(itemId);
    axios.delete('http://localhost:4000/products/' + itemId)
      .then(response => {
        console.log(response);
        this.setState({ items: this.state.items.filter(item => item.id !== itemId)})
      })
      .catch(err => console.log(err));
  }

  render()
  {
    console.log("render");
    let output =
    <>
      <div>
      <MainView searchFieldUpdate = {this.onSearchFieldChange} items={this.state.items.filter((item) => item.manufacturer.toUpperCase().includes(this.state.searchString.toUpperCase()) 
          || item.model.toUpperCase().includes(this.state.searchString.toUpperCase())) } />
      </div>
      <button onClick={() => this.setState({adminModeActive: !this.state.adminModeActive})}>Admin mode</button>
    </>

    if(this.state.adminModeActive){
      output = <AdminView 
          disableAdminMode={ () => this.setState({adminModeActive: false}) }
          addNewItem={ this.addNewItem }
          items= { this.state.items }
          deleteItem= { this.deleteItem }
          />;
    }

    return (
      <>
        { output} 
      </>
    
    )
  }
}

export default App;
