import styled from "styled-components";

export const DashboardContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
`;

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

export const StyledFormContainer = styled.div`
  /* Add styles for the form container */
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const RequestContainer = styled.div`
  /* Add styles for the request container */
  margin: 20px 0;
  padding: 15px;
  background-color: #ffffff;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  h2 {
    color: #333;
  }
`;

export const Address = styled.p`
  /* Add styles for the address */
  font-size: 14px;
  color: #666;
`;

export const CategoryList = styled.ul`
  /* Add styles for the category list */
  list-style: none;
  padding: 0;
`;

export const CategoryItem = styled.li`
  /* Add styles for the category item */
  margin-bottom: 10px;
  color: #333;

  p {
    font-size: 16px;
    margin: 5px 0;
  }
`;

export const ItemList = styled.ul`
  /* Add styles for the item list */
  list-style: none;
  padding: 0;
`;

export const Item = styled.li`
  /* Add styles for the item */
  margin-bottom: 15px;
  color: #333;

  p {
    font-size: 16px;
    margin: 5px 0;
  }
`;

export const ExpandButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;

  svg {
    margin-left: 5px;
    transition: transform 0.3s;
    transform: ${({ expanded }) => (expanded ? "rotate(180deg)" : "rotate(0deg)")};
  }
`;