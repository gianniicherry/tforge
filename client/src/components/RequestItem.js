import React, { useState, useContext } from "react";
import { CategoryContext, RequestContext } from "../App";
import {InfoContainer,InfoLabel, InfoValue, EditButton, Form, Label,Select, Input, ButtonContainer, SubmitButton, CancelButton, DeleteButton, Option} from "../styles/RequestItem.styles"

function RequestItem({ item, index }) {
  const { category} = useContext(CategoryContext);
  const {requests, setRequests} = useContext(RequestContext)

 
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
    let updatedCategoryId = null;

    if (updateCategory === "Other") {
      updatedCategoryId = category.find((option) => option.name === "Other").id;
    } else if (updateCategory === "Tablet") {
      updatedCategoryId = category.find((option) => option.name === "Tablet").id;
    } else if (updateCategory === "Smartphone" && updateBrand === "Apple") {
      // Set updatedCategoryId to the ID of the "Smartphone" category with brand "Apple"
      updatedCategoryId = category.find(
        (option) => option.name === "Smartphone" && option.brand === "Apple"
      ).id;
    } else {
      const matchingCategory = category.find((option) => option.brand === updateBrand);
      updatedCategoryId = matchingCategory ? matchingCategory.id : null;
    }
  
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
        handleUpdateEwaste(data);
        setEditForm(true);
      });
  };
  
  
  
  
  

  function handleUpdateEwaste(updatedEwaste) {
    const updatedRequests = requests.map((request) => {
      const updatedEwastesInRequest = request.ewastes.map((ewaste) => {
        if (ewaste.id === updatedEwaste.id) {
          return updatedEwaste;
        }
        return ewaste;
      });

      return {
        ...request,
        ewastes: updatedEwastesInRequest,
      };
    });

    setRequests(updatedRequests);
  }
  
  

  function handleDeleteClick(){
      fetch(`/ewastes/${item.id}`, {
          method: "DELETE",
      })
      .then((r) => handleDelete(item.id))
      setEditForm(!editForm)
  }

  function handleDelete(ewasteId) {
    const updatedRequests = requests.map(request => ({
      ...request,
      ewastes: request.ewastes.filter(ewaste => ewaste.id !== ewasteId)
    }));
    setRequests(updatedRequests);
  }


  

  return editForm ? (
    <InfoContainer>
    <InfoLabel>Category</InfoLabel>
    <InfoValue>{item.category.name}</InfoValue>
    <InfoLabel>Brand</InfoLabel>
    <InfoValue>{item.category.brand}</InfoValue>
    <InfoLabel>Product</InfoLabel>
    <InfoValue>{item.name}</InfoValue>
    <InfoLabel>Condition</InfoLabel>
    <InfoValue>{item.condition}</InfoValue>
    <EditButton onClick={handleEditClick}>Edit</EditButton>
  </InfoContainer>
  ) : (
    <Form onSubmit={handleFormSubmit}>
  <Label>Product Category</Label>
  <Select
    id="category"
    value={updateCategory}
    onChange={(e) => {
      const selectedCategory = e.target.value;
      setUpdateCategory(selectedCategory);

      // Find the default brand for the selected category and set it as the updateBrand
      const defaultBrandForCategory = category.find(
        (option) => option.name === selectedCategory
      )?.brand;
      setUpdateBrand(defaultBrandForCategory || "");
    }}
  >
    <Option value="Laptop">Laptop</Option>
    <Option value="Smartphone">Smartphone</Option>
    <Option value="Tablet">Tablet</Option>
    <Option value="Other">Other</Option>
  </Select>
  <Label>Product Brand</Label>
  <Select
    id="brand"
    value={updateBrand}
    onChange={(e) => setUpdateBrand(e.target.value)}
  >
    {category
      .filter((option) => option.name === updateCategory)
      .map((option) => (
        <Option key={option.id} value={option.brand}>
          {option.brand}
        </Option>
      ))}
  </Select>
  <Label>Name of item</Label>
  <Input
    type="text"
    value={updateName}
    onChange={(e) => setUpdateName(e.target.value)}
  />
  <Label>Product Condition</Label>
  <Select
    id="category"
    value={updateCondition}
    onChange={(e) => setCondition(e.target.value)}
  >
    <Option value="Perfect">Perfect</Option>
    <Option value="Slight wear">Slight wear</Option>
    <Option value="Significant wear">Significant wear</Option>
    <Option value="Broken">Broken</Option>
  </Select>
  <ButtonContainer>
    <SubmitButton type="submit">Submit</SubmitButton>
    <CancelButton onClick={handleCancelClick}>Cancel</CancelButton>
    <DeleteButton onClick={handleDeleteClick}>Delete Item</DeleteButton>
  </ButtonContainer>
</Form>
  );
}

export default RequestItem;
