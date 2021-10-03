import React, { useState } from 'react'

export default function AdminView(props) {

const [newItemManuFacturer, setNewItemManufacturer] = useState("");
const [newItemModel, setNewItemModel] = useState("");
const [newItemPrice, setNewItemPrice] = useState("");

const addNewItem = () => {
    props.addNewItem(newItemManuFacturer, newItemModel, newItemPrice);
  }

const onDeleteItemClick = (itemId) => {
    console.log("clicked delete for item id " + itemId);
    props.deleteItem(itemId);
  }


    return (
    <div>
      <div>
          <h1>Add new item</h1>
          <div>
            Manufacturer <input type="text" onChange={ (event) => setNewItemManufacturer(event.target.value) } />
          </div>
          <div>
            Model <input type="text" onChange={ (event) => setNewItemModel(event.target.value) } />
          </div>
          <div>
            Price <input type="text" onChange={ (event) => setNewItemPrice(event.target.value) } />
          </div>
          <button onClick={ addNewItem }>Add Item</button>

        </div>
        <button onClick={ props.disableAdminMode }>Disable Admin Mode</button>

        <h1>List of items</h1>
        { props.items.map((item, index) =>
          <div key={index}>
            <button onClick={() => onDeleteItemClick(item.id)}>X</button> {item.manufacturer}, {item.model}, {item.price}
          </div>)}
    </div>
    )
}
