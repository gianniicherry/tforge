import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../App';
import {FormContainer, Form, Label, Select, Input, Button, ItemContainer, AddressForm} from "../styles/Recycle.styles"

function Recycle() {
    const { currentUser} = useContext(UserContext);
  const [category, setCategory] = useState("Laptop");
  const [categoryId, setCategoryId] = useState('')
  const [brands, setBrands] = useState([]);
  const [product, setProduct] = useState("");
  const [condition, setCondition] = useState("Perfect")
  const [selectedBrand, setSelectedBrand] = useState('');
  const [items, setItems] = useState([]); // Array to store items
  const [requestId, setRequestId] = useState(null);
  const [showRequest,setShowRequest] = useState(false)
  const [requestAddress1, setRequestAddress1] = useState("")
  const [requestAddress2, setRequestAddress2] = useState("")
  const [requestCity, setRequestCity] = useState("")
  const [requestState, setRequestState] = useState("")
  const [requestZip, setRequestZip] = useState("")

  useEffect(() => {
    fetch("/categories")
      .then(response => response.json())
      .then(data => setBrands(data))
  }, []);


  useEffect(() => {
    const filteredBrands = brands.filter(option => option.name === category);
    if (filteredBrands.length > 0) {
      setSelectedBrand(filteredBrands[0].brand);
      setCategoryId(filteredBrands[0].id)
    } else {
      setSelectedBrand('');
    }
  }, [category, brands]);

  useEffect(() => {
    const filteredBrands = brands.filter(option => option.name === category);
    setSelectedBrand(filteredBrands);
  }, []);

  const handleAddItem = () => {
    const newEwaste = {
        name: product, 
        condition: condition,
        user_id: currentUser.id, 
        request_id: requestId, 
        category_id: categoryId,  
      }
    setItems([...items, newEwaste]);
    // Clear input fields
    setProduct("");
  };

function handleSubmit(e) {
  e.preventDefault();

  const addressData = {
    address1: requestAddress1,
    address2: requestAddress2,
    city: requestCity,
    state: requestState,
    zip: requestZip,
    user_id: currentUser.id
  };

  fetch('/requests', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(addressData)
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to submit request');
      }
      return response.json();
    })
    .then(requestData => {
      const itemPromises = items.map(item => {
        return fetch('/ewastes', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            ...item,
            request_id: requestData.id
          })
        })
          .then(itemResponse => {
            if (!itemResponse.ok) {
              console.error('Failed to submit item:', item);
            }
          })
          .catch(error => {
            console.error('Error submitting item:', error);
          });
      });

      return Promise.all(itemPromises);
    })
    .then(() => {
      console.log('Request and items submitted successfully');
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

 function renderRequest(e) {
     e.preventDefault()
     handleAddItem()
     setShowRequest(true)
 }
  
  return (
    <FormContainer>
      <Form onSubmit={renderRequest}>
        <Label>Product Category</Label>
        <Select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Laptop">Laptop</option>
          <option value="Smartphone">Smartphone</option>
          <option value="Tablet">Tablet</option>
          <option value="Other">Other</option>
        </Select>
        <div>
          <Label>Product Brand</Label>
          <Select id="brand" value={selectedBrand} onChange={(e) => setSelectedBrand(e.target.value)}>
            {brands
              .filter(option => option.name === category)
              .map(option => (
                <option key={option.id} value={option.brand}>
                  {option.brand}
                </option>
              ))}
          </Select>
        </div>
        <div>
          <Label>Name of item</Label>
          <Input type="text" value={product} onChange={(e) => setProduct(e.target.value)} />
        </div>
        <Label>Product Condition</Label>
        <Select id="category" value={condition} onChange={(e) => setCondition(e.target.value)}>
          <option value="Perfect">Perfect</option>
          <option value="Slight wear">Slight wear</option>
          <option value="Significant wear">Significant wear</option>
          <option value="Broken">Broken</option>
        </Select>
        <Button type="submit">Submit</Button>
      </Form>

      <Button onClick={handleAddItem}>Add Another Item</Button>

      <ItemContainer>
        <h2>Added Items:</h2>
        {items.map((item, index) => (
          <div key={index}>
            <p>Product: {item.name}</p>
            <p>Condition: {item.condition}</p>
          </div>
        ))}
      </ItemContainer>

      {showRequest && (
        <AddressForm onSubmit={handleSubmit}>
          <Label>Where are these Items being shipped from?</Label>
          <div>
            <Label>Address Line 1</Label>
            <Input type="text" value={requestAddress1} onChange={(e) => setRequestAddress1(e.target.value)} />
          </div>
          <div>
            <Label>Address Line 2(Apt, unit#)</Label>
            <Input type="text" value={requestAddress2} onChange={(e) => setRequestAddress2(e.target.value)} />
          </div>
          <div>
            <Label>City</Label>
            <Input type="text" value={requestCity} onChange={(e) => setRequestCity(e.target.value)} />
          </div>
          <div>
            <Label>State</Label>
            <Input type="text" value={requestState} onChange={(e) => setRequestState(e.target.value)} />
          </div>
          <div>
            <Label>Zip Code</Label>
            <Input type="text" value={requestZip} onChange={(e) => setRequestZip(e.target.value)} />
          </div>
          <Button>Recycle</Button>
        </AddressForm>
      )}
    </FormContainer>
  );
}

export default Recycle;
