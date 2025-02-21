import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 50px;
  background: rgba(52, 2, 2, 0.1);
  backdrop-filter: blur(10px);
  box-shadow: 0px 5px 15px rgba(41, 17, 17, 0.1);
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color:rgb(106, 25, 25);
  font-family: "Poppins", sans-serif;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;

  a {
    text-decoration: none;
    color: black;
    font-size: 18px;
    font-weight: 500;
    padding: 8px 16px;
    border-radius: 20px;
    transition: all 0.3s ease-in-out;
  }

  a:hover {
    background: #8B0000;
    color: black;
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
