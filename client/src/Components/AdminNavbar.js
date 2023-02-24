import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import lic from "../images/licious.svg";

const Nav = styled.nav`
background-color: #333;
display: flex;
justify-content: space-between;
.links{
  display: flex;

}
a{
  margin: 0rem 3rem 0rem 3rem;
  font-size: 1.4em;
  text-decoration: none;
  color: #fff;
  padding:1rem;
  font-weight: 400;
  transition: 0.4s ease;

  &:hover {
  background-color: yellow;
  border-radius: 7px;
  text-decoration: underline;
  color : black;

  }
}

`
const Logo = styled.img`
margin: 0.8rem 0rem 0.8rem 3rem;
`


const AdminNavbar = () => {
  return (
    <Nav>
      <Logo src={lic} alt="Admin Logo" />
<div className='links'>
            <Link to="/addPro">
                Products
            </Link>
            
            <Link to='/addOrd'>
            Orders
            </Link>
            </div>
    </Nav>
  );
};

export default AdminNavbar;
