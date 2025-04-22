import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

//style main part- background coloe, padding, flexbox for laypit, add space, center align
const Nav = styled.nav`
  background: #1a1a1a;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

//style the "nav logo" - "Lauren's Portfolio"- font color white, font size, no margin
const NavLogo = styled.h1`
  color: #fff;
  font-size: 1.5rem;
  margin: 0;
`;

//style nav links- links for other pages- flex to put in a row, set a gap
const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

//style each link- white color, no underline, chamge font weight, color on hover
const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;

  &:hover {
    color:rgb(75, 155, 142);
  }
`;

//main navbar content
const Navbar = () => {
  return (
    <Nav>
      <NavLogo>Lauren's Portfolio</NavLogo>
      <NavLinks>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/projects">Projects</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;

