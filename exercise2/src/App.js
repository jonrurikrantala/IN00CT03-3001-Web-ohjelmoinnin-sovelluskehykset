import './App.css';
import { useState } from 'react'
import Title from './components/Title'
import ShoppingListItems from './components/ShoppingListItems';
import Button from './components/Button'

function App() {

  const [ shoppingListItems, setShoppingListItems ] = useState([
    {id: 1, name: "Milk", qty: 0, measurement: "ltr"},
    {id: 2, name: "Apples", qty: 0, measurement: "pcs"},
    {id: 3, name: "Sugar", qty: 0, measurement: "kg"},
    {id: 4, name: "Eggs", qty: 0, measurement: "pcs"}
  ]);

  const addItemToList = (id) => {
    let randomNumber = Math.floor(Math.random() * 5) + 1;
    let newShoppingListItems = [...shoppingListItems];
    let newElement = {...newShoppingListItems[id]};
    newElement.qty = newElement.qty + randomNumber;
    newShoppingListItems[id] = newElement;
    setShoppingListItems(newShoppingListItems);
  }

  return (
    <div className="App">
      <Title />
      <ShoppingListItems listItems={shoppingListItems}/>
      <Button onAddClick={ () => addItemToList(0) } text="Add Milk"/>
      <Button onAddClick={ () => addItemToList(1) } text="Add Apples"/>
      <Button onAddClick={ () => addItemToList(2) } text="Add Sugar"/>
      <Button onAddClick={ () => addItemToList(3) } text="Add Eggs"/>
    </div>
  );
}

export default App;