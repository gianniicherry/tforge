import React from "react"
import RequestItem from "./RequestItem"
import {RequestContainer, Address, ItemList, Item } from "../styles/RecycleStatus.styles"


function Request({request}){
    return(
        <RequestContainer key={request.id}>
            <h2>Request ID: {request.id}</h2>
            <Address>
              Address: {request.address1}, {request.city}, {request.state} {request.zip}
            </Address>
            <h3>Items:</h3>
            <ItemList>
              {request.ewastes.map((item, index) => (
                <RequestItem item={item} index={index}/>
                /*<Item key={index}>
                  <p>Category: {item.category.name}</p>
                  <p>Brand: {item.category.brand}</p>
                  <p>Product: {item.name}</p>
                  <p>Condition: {item.condition}</p>
                </Item> */
              ))}
            </ItemList>
          </RequestContainer>
    )
}

export default Request