import React, {useContext} from 'react'
import { RequestContext } from '../App';
import {DashboardContainer, SectionTitle} from "../styles/RecycleStatus.styles"
import Request from "./Request"

function RecycleStatus(){
  const { requests, errorMessage} = useContext(RequestContext);
 

  

    return (
      <DashboardContainer>
        <SectionTitle>Current Requests</SectionTitle>
        {errorMessage && <div className="error">{errorMessage}</div>}
        {requests.map(request => (
          <Request key={request.id} request={request}/>
         ))}
      </DashboardContainer>
    );
}


export default RecycleStatus