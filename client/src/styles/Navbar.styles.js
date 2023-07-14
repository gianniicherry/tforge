import styled from "styled-components";
import {Link} from "react-router-dom"

export const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: #f1f1f1;
`;

export const SiteTitle = styled(Link)`
  font-size: 1.5rem;
  color: #333;
  text-decoration: none;
`;

export const NavList = styled.ul`
  display: flex;
  list-style-type: none;
`;

export const NavItem = styled.li`
  margin-left: 1rem;
`;

export const NavLink = styled(Link)`
  color: #333;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  &.active {
    font-weight: bold;
  }
`;