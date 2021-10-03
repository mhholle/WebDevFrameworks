import React from "react";
import Title from './components/Title';
import ShoppingList from './components/ShoppingList';
import styles from './App.module.css';
import './App.css';

/* A ES6 class style stateful component for the shopping list application */
class App extends React.Component {
  constructor(props)
  {
    /* You should call super(props) before any other statement. 
       Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
    */
    super(props);

    this.state = {
      items: [
        { id: 1, value: 'Milk', qty: 5, unit: 'ltr' },
        { id: 2, value: 'Bananas', qty: 6, unit: 'pcs' },
        { id: 3, value: 'Bread', qty: 3, unit: 'x' },
        { id: 4, value: 'Eggs', qty: 16, unit: 'x' }
      ]
    };
  }


  //hae taulukosta onko porkkanoita, jos ei luodaan taulukko. Jos on niin lisätään qty

  //metodi
  addItems = (itemName, itemUnit) => {
    const { items } = this.state;
    let changed = false;
    let newItems = items.map(element => {
      //tarkistetaan onko samalla valuella olevaa itemiä, jos löytyy lisätään qty 
      if (itemName === element.value) {
        changed = true;
        element.qty += this.randomizer();
        return element;
      }
      else {
        return element;
      }
    });

    if (changed) {
      this.setState({items: newItems})
    }
    else {
      //jos samalla valuella olevaa itemiä ei löydy luodaan uusi taulukko, josta uusi item löytyy
      this.setState(
        {
          items: [...items, {id: items.length + 1, value: itemName, qty: this.randomizer(), unit: itemUnit,}]
        }
      );
    }
  }

  //satunnaislukumuuttuja
  randomizer = () => {
    let randomInt = Math.floor(Math.random() * 10) + 1;
    return randomInt;
  }


  render()
  {
    const { applicationDescription, applicationName } = this.props;
    return <div className={ styles.shoppingList }>
      <Title 
        applicationDescription={ applicationDescription }
        applicationName={ applicationName }
      />
      <ShoppingList items={ this.state.items } />
      <button onClick={ () => this.addItems("Carrots", "pcs") } className={styles.button}>Add Carrots</button>
      <button onClick={ () => this.addItems("Strawberries", "pcs") } className={styles.button}>Add Strawberries</button>
      <button onClick={ () => this.addItems("Soda", "ltr") } className={styles.button}>Add Soda</button>
      <button onClick={ () => this.addItems("Beer", "ltr") } className={styles.button}>Add Beer</button>
    </div>
  }
}

export default App;