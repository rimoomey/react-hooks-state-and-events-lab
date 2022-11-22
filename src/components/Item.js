import React, { useState } from "react";

function Item({ name, category }) {
  const [ inCart, toggleInCart ] = useState(false);

  const addHandle = () => {
    toggleInCart(!inCart);
  };

  const liClass = inCart ? "in-cart" : "";
  const buttonText = inCart ? "Remove from" : "Add to"

  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addHandle}>
        {buttonText} Cart
      </button>
    </li>
  );
}

export default Item;
