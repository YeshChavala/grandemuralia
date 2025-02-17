import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 50px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #8B0000;
  font-family: "Poppins", sans-serif;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;

  a {
    text-decoration: none;
    color: white;
    font-size: 18px;
    font-weight: 500;
    padding: 8px 16px;
    border-radius: 20px;
    transition: all 0.3s ease-in-out;
  }

  a:hover {
    background: #8B0000;
    color: white;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Logo>Grande Muraglia</Logo>
      <NavLinks>
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/story">Story</Link>
        <Link to="/contact">Contact</Link>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
