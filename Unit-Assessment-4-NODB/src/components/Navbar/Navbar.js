import React from 'react';
import { Nav, NavLink, NavIcon, Bars } from './NavbarElements';


const Navbar = ({toggle}) => {
  return (
    <>
      <Nav>
        <NavLink to='/'>Cheefa's Fried Pies</NavLink>
        <NavIcon onClick={toggle}>
          <p>cart</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  )
}

export default Navbar
