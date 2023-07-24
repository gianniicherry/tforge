import { Link, useLocation } from "react-router-dom";
import { SiteTitle, NavbarContainer, NavLink, NavList, NavItem } from "./styles/Navbar.styles";

export default function Navbar({ isLoggedIn }) {
  return (
    <NavbarContainer>
      <SiteTitle to="/">Terraforge.</SiteTitle>
      <NavList>
        <CustomLink to={isLoggedIn ? "signout" : "/auth"}>
          {isLoggedIn ? "Logout" : "Log In"}
        </CustomLink>
        <CustomLink to="/recycle">Recycle</CustomLink>
        <CustomLink to="/contact">Contact</CustomLink>
        <CustomLink to="/about">About</CustomLink>
        {isLoggedIn && <CustomLink to="/recyclerequests">Account</CustomLink>}
      </NavList>
    </NavbarContainer>
  );
}

function CustomLink({ to, children, ...props }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <NavItem className={isActive ? "active" : ""}>
      <NavLink to={to} {...props}>
        {children}
      </NavLink>
    </NavItem>
  );
}




