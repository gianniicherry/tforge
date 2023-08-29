import React from 'react'
import {Link} from "react-router-dom"
import {Button, FormContainer} from "../styles/Recycle.styles"


function About(){
    return (
       <div>
           <h1>Our Mission</h1>
           <FormContainer>
           <p>Terraforge was founded as an easier way to recycle electronic waste. 
               Our mission is to ensure E-waste is handled sustainably 
               in an effort to reduce harmful materials polluting 
               our environment.</p>
            <p> 
            Based on current data, we produce approximately 50 million tons of e-waste annually, 
            equivalent to almost 1,100 laptops every second. The issue continues to grow as technology improves, 
            with most laptops, tablets, and smartphones becoming obsolete as more advanced generations are released. 
            Current reports estimate that the average ownership of a smartphone is only 24.2 Months before being discarded. 
            This cycle continues to grow rapidly as technology scales, leaving millions of tons of waste generated, 
            with limited optimization on consumer friendly platforms to send in unwanted e-waste. </p>
            <p> 
            Our platform is handled completely over the air, making it easy for our users to recycle their e-waste from home. </p>
            <Link to={"/recycle"}>
            <Button>Start recycling now</Button>
            </Link>
            </FormContainer> 
       </div> 
    )
}


export default About