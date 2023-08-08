import styled from "styled-components";

export const FormContainer = styled.div`
  font-family: Arial, sans-serif;
  max-width: 400px;
  margin: 0 auto;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-top: 10px;
  font-weight: bold;
`;

export const Select = styled.select`
  margin-top: 5px;
  padding: 5px;
`;

export const Input = styled.input`
  margin-top: 5px;
  padding: 5px;
`;

export const Button = styled.button`
  margin-top: 10px;
  padding: 8px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
`;

export const ItemContainer = styled.div`
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #ccc;
`;

export const AddressForm = styled.form`
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #ccc;
`;