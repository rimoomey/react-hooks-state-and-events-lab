import React, { useState } from "react";
import Item from "./Item";

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
      <div className="Filter">
        <select
          name="filter"
          value={selectedCategory}
          onChange={(e) => handleChange(e.target.value)}
        >
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">{filter(items)}</ul>
    </div>
  );
}

export default ShoppingList;
