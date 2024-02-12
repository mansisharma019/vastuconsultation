import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar.jsx"
import styled from "styled-components";

const Header = () => {
    return (
        <MainHeader>
            <NavLink to="/">
                <img src="./img/logo.PNG" alt="logo" className="logo"/>
            </NavLink>
            <Navbar />
        </MainHeader>
    )
};

const MainHeader = styled.header`
padding: 4.8rem;
  height: 10rem;
  
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  }
  .logo {
    height: auto;
    max-width: 40%;
    
  }
  `;

export default Header;
