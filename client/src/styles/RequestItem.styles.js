import styled from "styled-components";


export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const InfoLabel = styled.p`
  font-size: 12px;
  color: #777;
  margin: 2px 0;
`;

export const InfoValue = styled.p`
  font-size: 16px;
  color: #333;
  margin: 2px 0;
`;

export const EditButton = styled.button`
  margin-top: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Form = styled.form`
  background-color: #fff;
  padding: 10px;
  border: 1px solid #ccc;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

export const Select = styled.select`
  width: 100%;
  padding: 5px;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 5px;
  margin-bottom: 10px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SubmitButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
`;

export const CancelButton = styled.button`
  background-color: #ccc;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
`;

export const DeleteButton = styled.button`
  background-color: #e74c3c;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
`;

export const Option = styled.option`
  /* Add your styling here */
  font-size: 16px;
  color: #333;
`;