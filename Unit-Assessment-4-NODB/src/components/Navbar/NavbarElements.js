import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'

// Main Pink -> #f2b4b4
// Black -> #393232
// Light Brown -> #eabf9f
// Light Gray -> #dddddd
// white -> #fff

export const Nav = styled.nav`
  height: 80px; 
  display: flex; 
  justify-content: center; 
  font-weight: 700;
  /* position: fixed; */
`

export const NavLink = styled(Link)`
  color: #fff; 
  font-size: 2rem; 
  display: flex; 
  align-items: center;
  text-decoration: none; 
  cursor: pointer;
  margin: 55px;

  @media screen and (max-width: 400px){
    position: absolute; 
    top: 10px; 
    left: 25px;
  }
`

export const NavIcon = styled.div`
  display: block; 
  position: absolute; 
  top: 0; 
  right: 0; 
  cursor: pointer; 
  color: #393232; 

  p {
    transform: translate(-175%, 100%); 
    font-weight: bold; 
  }
`

export const Bars = styled(FaBars)`
  font-size: 2rem; 
  transform: translate(-50%, -15%);
`