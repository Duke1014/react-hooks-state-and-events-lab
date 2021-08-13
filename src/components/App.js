import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [darkmode, setDarkmode] = useState(false)

  // this data will be passed down to the ShoppingList as a prop
  console.log(items);

  const appClass = darkmode ? "App dark" : "App light"

  function handleClick() {
    setDarkmode((darkmode) => !darkmode)
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick = {handleClick}>Dark Mode</button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
