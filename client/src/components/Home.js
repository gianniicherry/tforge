import React from 'react'
import {Link} from "react-router-dom"
import landingImage from "../images/aerial-view-of-metal-recycling-facility-with-backhoe.jpg"
import {LandingImage, LandingPageContainer, OverlayContainer, Button, ButtonContainer, Text, Text2} from "../styles/Landingpage.styles"

function Home() {
    return (
      <LandingPageContainer>
      <LandingImage src={landingImage} alt="Landing page background" />
      <OverlayContainer>
        <Text>E-Waste Made Easy.</Text>
        <Text2>Powered by humanity, funded by Earth.</Text2>
        <ButtonContainer>
          <Link to={"/recycle"}>
          <Button>Recycle</Button>
          </Link>
          <Link to={"/auth"}>
          <Button>Log In</Button>
          </Link>
        </ButtonContainer>
      </OverlayContainer>
    </LandingPageContainer>
    );
  }


export default Home