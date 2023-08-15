import React, { useState, useContext } from "react";
import { CategoryContext } from "../App";

function RequestItem({ item, index }) {
  const { category, setCategory } = useContext(CategoryContext);

  const [editForm, setEditForm] = useState(true);
  const [updateName, setUpdateName] = useState(item.name);
  const [updateCondition, setCondition] = useState(item.condition);
  const [updateBrand, setUpdateBrand] = useState(item.category.brand);
  const [updateCategory, setUpdateCategory] = useState(item.category.name);

  const handleEditClick = () => {
    setEditForm(false);
  };

  const handleCancelClick = () => {
    setEditForm(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // Find the matching category to get the category_id
    const matchingCategory = category.find((option) => option.name === updateCategory);
    const updatedCategoryId = matchingCategory ? matchingCategory.id : null;

    const updatedItem = {
      name: updateName,
      condition: updateCondition,
      category_id: updatedCategoryId,
    };

    fetch(`/ewastes/${item.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedItem),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };

  return editForm ? (
    <div className="item" key={index}>
      <p>Category: {item.category.name}</p>
      <p>Brand: {item.category.brand}</p>
      <p>Product: {item.name}</p>
      <p>Condition: {item.condition}</p>
      <button onClick={handleEditClick}>Edit</button>
    </div>
  ) : (
    <form onSubmit={handleFormSubmit}>
      <label>Product Category</label>
      <select
        id="category"
        value={updateCategory}
        onChange={(e) => setUpdateCategory(e.target.value)}
      >
        <option value="Laptop">Laptop</option>
        <option value="Smartphone">Smartphone</option>
        <option value="Tablet">Tablet</option>
        <option value="Other">Other</option>
      </select>
      <label>Product Brand</label>
      <select
        id="brand"
        value={updateBrand}
        onChange={(e) => setUpdateBrand(e.target.value)}
      >
        {category
          .filter((option) => option.name === updateCategory)
          .map((option) => (
            <option key={option.id} value={option.brand}>
              {option.brand}
            </option>
          ))}
      </select>
      <label>Name of item</label>
      <input
        type="text"
        value={updateName}
        onChange={(e) => setUpdateName(e.target.value)}
      />
      <label>Product Condition</label>
      <select
        id="category"
        value={updateCondition}
        onChange={(e) => setCondition(e.target.value)}
      >
        <option value="Perfect">Perfect</option>
        <option value="Slight wear">Slight wear</option>
        <option value="Significant wear">Significant wear</option>
        <option value="Broken">Broken</option>
      </select>
      <button type="submit">Submit</button>
      <button onClick={handleCancelClick}>Cancel</button>
    </form>
  );
}

export default RequestItem;
