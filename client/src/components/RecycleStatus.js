import React, {useContext, useState} from 'react'
import { UserContext, RequestContext } from '../App';
import {DashboardContainer, SectionTitle, StyledFormContainer, RequestContainer, Address, CategoryList, CategoryItem, ItemList, Item} from "../styles/RecycleStatus.styles"
import Request from "./Request"

function RecycleStatus(){
  const { currentUser} = useContext(UserContext);
  const { requests} = useContext(RequestContext);
 

  

    return (
      <DashboardContainer>
        <SectionTitle>Current Requests</SectionTitle>
    
        {requests.map(request => (
          <Request key={request.id} request={request}/>
          /*<RequestContainer key={request.id}>
            <h2>Request ID: {request.id}</h2>
            <Address>
              Address: {request.address1}, {request.city}, {request.state} {request.zip}
            </Address>
            <h3>Items:</h3>
            <ItemList>
              {request.ewastes.map((item, index) => (
                <Item key={index}>
                  <p>Category: {item.category.name}</p>
                  <p>Brand: {item.category.brand}</p>
                  <p>Product: {item.name}</p>
                  <p>Condition: {item.condition}</p>
                </Item>
              ))}
            </ItemList>
          </RequestContainer> */
          
          ))}
        <SectionTitle>Contact Form</SectionTitle>
        {/* Add your contact form component here */}
      </DashboardContainer>
    );
}


export default RecycleStatus