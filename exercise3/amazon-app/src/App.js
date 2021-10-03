import React from 'react';
import data from './data.json';
import './App.css';
import MainView from './components/MainView';
import AdminView from './components/AdminView';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: data.items,
      searchString: "",
      adminModeActive: false
    }
  }

  onSearchFieldChange = (event) => {
    console.log('keyboard event');
    console.log(event.target.value);
    this.setState({ searchString: event.target.value });
  }

  addNewItem = (manufacturer, model, price) => {
    let newItems = [...this.state.items];
    newItems.push({
      id: newItems.length + 1,
      manufacturer: manufacturer,
      model: model,
      price: price
    });

    this.setState({ items: newItems });
  }

  deleteItem = itemId => this.setState({items: this.state.items.filter(item => item.id !== itemId)})

  render()
  {
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
