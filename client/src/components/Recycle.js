import React, { useState, useEffect, useContext } from 'react';
import {Link} from "react-router-dom"
import { RequestContext, UserContext } from '../App';
import {FormContainer, Form, Label, Select, Input, Button, ItemContainer, AddressForm} from "../styles/Recycle.styles"

function Recycle() {
    const { currentUser} = useContext(UserContext);
    const {handleAddRecycle, requests} = useContext(RequestContext)
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
  const [loginPrompt, setLoginPrompt] = useState(false)
  const [anyItems, setAnyItems] = useState(false)
  const [imageFile, setImageFile] = useState(null)
  const [submitted, setSubmitted] = useState(false);
  const [addressSubmitted, setAddressSubmitted] = useState(false);


  useEffect(() => {
    fetch("/categories")
      .then(response => response.json())
      .then(data => setBrands(data))
  }, []);


  useEffect(() => {
    const filteredBrands = brands.filter(option => option.name === category);
    if (filteredBrands.length > 0) {
      const matchingBrand = filteredBrands.find(option => option.brand === selectedBrand);
      if (matchingBrand) {
        setCategoryId(matchingBrand.id);
      }
    }
  }, [category, selectedBrand, brands]);

  useEffect(() => {
    const filteredBrands = brands.filter(option => option.name === category);
    if (filteredBrands.length > 0) {
      setSelectedBrand(filteredBrands[0].brand);
    }
  }, [category, brands]);
  

  const handleAddItem = () => {
    if (currentUser) {
      // Validate form fields before adding the item
      if (!product || !condition || !selectedBrand || !category || !imageFile) {
        alert('Please fill out all form fields.');
        return;
      }
      const newEwaste = {
        name: product,
        condition: condition,
        user_id: currentUser.id,
        request_id: requestId,
        category_id: categoryId,
        image: imageFile,
        brand: selectedBrand, // Use selectedBrand directly
        category: category,
      };
      
      setItems([...items, newEwaste]);
      // Clear input fields
      setAnyItems(true)
      setProduct('');
      setImageFile(null)
    } else {
      setLoginPrompt(true);
    }
  };

  function handleImageChange(e){
    setImageFile(e.target.files[0])
  }

  function handleSubmit(e) {
    e.preventDefault();
  
    const newRequest = {
      address1: requestAddress1,
      address2: requestAddress2,
      city: requestCity,
      state: requestState,
      zip: requestZip,
      user_id: currentUser.id,
      ewastes: items.map(item => ({
        name: item.name,
        condition: item.condition,
        category: {
          name: item.category,
          brand: item.brand, // Use item's brand here
        },
      })),
    };
    
    
  
    fetch('/requests', {
      method: 'POST',
      body: JSON.stringify(newRequest),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(requestData => {
        const requestId = requestData.id;
  
        const itemPromises = items.map(item => {
          const itemFormData = new FormData();
          itemFormData.append('name', item.name);
          itemFormData.append('condition', item.condition);
          itemFormData.append('user_id', item.user_id);
          itemFormData.append('request_id', requestId);
          itemFormData.append('category_id', item.category_id);
          itemFormData.append('image', item.image);
  
          return fetch('/ewastes', {
            method: 'POST',
            body: itemFormData,
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
  
        Promise.all(itemPromises)
          .then(() => {
            console.log('Items submitted successfully');
            
            // Use the handleAddRecycle function to update the state
            handleAddRecycle(newRequest);
            setSubmitted(true)
            setAddressSubmitted(true);
            // ... rest of your code to handle fetching request value
          })
          .catch(error => {
            console.error('Error submitting items:', error);
          });
      })
      .catch(error => {
        console.error('Error submitting request:', error);
      });
  
    // Reset form fields and state
    setImageFile(null);
    setRequestAddress1('');
    setRequestAddress2('');
    setRequestCity('');
    setRequestState('');
    setRequestZip('');
  }
  
   

function renderRequest(e) {
  if (currentUser) {
    e.preventDefault();

    // Validate form fields before adding the item
    if (!product || !condition || !selectedBrand || !category) {
      alert('Please fill out all form fields.');
      return;
    }

    handleAddItem();
    setShowRequest(true);
  } else {
    e.preventDefault();
    setLoginPrompt(true);
  }
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
          <Label>Name of item</Label>
          <Input type="text" value={product} onChange={(e) => setProduct(e.target.value)} />
        <Label>Product Condition</Label>
        <Select id="category" value={condition} onChange={(e) => setCondition(e.target.value)}>
          <option value="Perfect">Perfect</option>
          <option value="Slight wear">Slight wear</option>
          <option value="Significant wear">Significant wear</option>
          <option value="Broken">Broken</option>
        </Select>
        <Label>Upload Image</Label>
        <Input type="file" onChange={handleImageChange} accept="image/*" />
        <Button type="submit">Submit</Button>
      </Form>
      <Button onClick={handleAddItem}>Add Another Item</Button>
     {anyItems ? <ItemContainer>
        {items.map((item, index) => (
          <div key={index}>
            <p>Product: {item.name}</p>
            <p>Condition: {item.condition}</p>
          </div>
        ))}
      </ItemContainer> : ""}

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
      {loginPrompt && (
        <div>
          <p>You need to log in or sign up to submit items for recycling.</p>
          <Link to={"/auth"}>You can Login or Signup here</Link>
        </div>
      )}
    </FormContainer>
  );
}

export default Recycle;
