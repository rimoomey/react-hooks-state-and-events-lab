import React, { useState } from "react";
import Item from "./Item";
import Filter from "./Filter";

function ShoppingList({ items }) {
  const [selectedCategory, changeCategory] = useState("All");

  const handleChange = (category) => {
    changeCategory(category);
  };

  const filter = (items) => {
    let itemList;

    if (selectedCategory == "All") {
      itemList = items;
    } else {
      itemList = items.filter((item) => item.category == selectedCategory);
    }

    const itemLIList = itemList.map((item) => {
      return <Item key={item.id} name={item.name} category={item.category} />;
    });

    return itemLIList;
  };

  return (
    <div className="ShoppingList">
      <Filter updateList={handleChange}/>
      <ul className="Items">{filter(items)}</ul>
    </div>
  );
}

export default ShoppingList;
