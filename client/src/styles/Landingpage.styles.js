import styled from "styled-components";


export const LandingPageContainer = styled.div`
  height: 100vh;
  overflow: hidden; /* Hide any potential overflow */
`;

export const LandingImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  z-index: -1; /* Ensure the image stays below the OverlayContainer */
`;

export const OverlayContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center; /* Center items horizontally */
  justify-content: center; /* Center items vertically */
  height: 80%;
  background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.8));
`;

export const Text = styled.p`
  margin: 0;
  font-size: 70px;
  color: #fff;
  align-self: center; /* Center horizontally */
  margin-top: 10px; /* Add margin to move it down */
`;
export const Text2 = styled.p`
  margin: 0;
  font-size: 30px;
  color: #fff;
  align-self: center; /* Center horizontally */
  margin-top: 5px; /* Add margin to move it down */
  
`;
export const ButtonContainer = styled.div`
  display: flex;
  padding: 10px;
  margin: 1;
  gap: 10px;
  margin-top: 5px; /* Add margin to move it down */
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 18px;
  color: #333;
  background-color: #fff; /* Change this to your preferred button color */
  border: none;
  cursor: pointer;
`;


