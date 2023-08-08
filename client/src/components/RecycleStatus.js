import React from 'react'
import {DashboardContainer, SectionTitle, EditableField, Label, Button, Input} from "../styles/RecycleStatus.styles"

function RecycleStatus(){
    return (
        <DashboardContainer>
        <SectionTitle>Shipping Address</SectionTitle>
        <EditableField>
          <Label>Address:</Label>
          <Input type="text" />
        </EditableField>
        <EditableField>
          <Label>City:</Label>
          <Input type="text" />
        </EditableField>
        <EditableField>
          <Label>State:</Label>
          <Input type="text" />
        </EditableField>
        <EditableField>
          <Label>Zip Code:</Label>
          <Input type="text" />
        </EditableField>
        <Button>Save Address</Button>
  
        <SectionTitle>Current Requests</SectionTitle>
        {/* Add your request list component here */}
        
        <SectionTitle>Contact Form</SectionTitle>
        {/* Add your contact form component here */}
      </DashboardContainer>
    )
}


export default RecycleStatus