import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";

function App() {
  const [light, isOn] = useState(true);

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = light ? "App light" : "App dark";
  const mode = light ? "Dark" : "Light";

  const clickHandler = () => {
    isOn(!light);
  };

  return (
    <div className={appClass}>
      <Header changeMode={clickHandler} mode={mode} />
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
