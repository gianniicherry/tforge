import React, { useState } from "react";
import RequestItem from "./RequestItem";
import { RequestContainer, Address, ItemList, Item, ExpandButton} from "../styles/RecycleStatus.styles";

function Request({ request }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <RequestContainer key={request.id}>
      <h2>Request ID: {request.id}</h2>
      <Address>
        Address: {request.address1}, {request.city}, {request.state} {request.zip}
      </Address>
      <h3>Items:</h3>
      <ExpandButton 
      onClick={toggleExpansion}>{isExpanded ? "" : ""}
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 14.5a.5.5 0 0 1-.354-.854L8 13.293 2.854 8.146a.5.5 0 1 1 .708-.708L8 12.293l4.438-4.438a.5.5 0 0 1 .708.708L8.354 13.293l.354.353a.5.5 0 0 1-.354.854z" />
        </svg>
      </ExpandButton>
      {isExpanded && (
        <ItemList>
          {request.ewastes.map((item, index) => (
            <RequestItem key={index} item={item} index={index} />
            /*<Item key={index}>
              <p>Category: {item.category.name}</p>
              <p>Brand: {item.category.brand}</p>
              <p>Product: {item.name}</p>
              <p>Condition: {item.condition}</p>
            </Item> */
          ))}
        </ItemList>
      )}
    </RequestContainer>
  );
}

export default Request;
