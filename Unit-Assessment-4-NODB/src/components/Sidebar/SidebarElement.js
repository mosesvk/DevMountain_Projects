import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {FaTimes} from 'react-icons/fa'

// Main Pink -> #f2b4b4
// Black -> #393232
// Light Brown -> #eabf9f
// Light Gray -> #dddddd

export const SidebarContainer = styled.aside`
  position: fixed; 
  z-index: 999; 
  width: 350px; 
  height: 100%; 
  background: #f2b4b4; 
  border: 5px solid #393232; 
  display: flex; 
  flex-direction: column;
  align-items: center;
  top: 0; 
  transition: 0.3s ease-in-out;
  right: ${({isOpen}) => (isOpen ? '0' : '-1000px')};

  @media screen and (max-width: 400px) {
    width: 100%
  }
`

export const CloseIcon = styled(FaTimes)`
  color: #000;
`

export const Icon = styled.div`
  position: absolute; 
  top: 1.2rem; 
  right: 1.5rem; 
  background: transparent; 
  border: transparent; 
  font-size: 2rem;
  cursor: pointer; 
  outline: none;

`

export const SidebarMenu = styled.div`
  display: grid; 
  grid-template-columns: 1fr; 
  grid-template-rows: repeat(3, 80px);
  text-align: center; 

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(3, 60px);
  }
`

export const SidebarLink = styled.div`
  display: flex; 
  align-items: center;
  justify-content: center; 
  font-size: 1.5rem; 
  text-decoration: none; 
  list-style: none; 
  transition: .2s ease-in-out;
  text-decoration: none; 
  color: #000; 
  cursor: pointer;

  &:hover {
    color: #e31837; 
    transition: .2s ease-in-out;
  }
`

export const SideBtnWrap = styled.div`
  display: flex; 
  justify-content: center;
  flex-direction: column; 
  align-items: center;
  margin-top: 25px;
`
export const SidebarTotal = styled.div`
  font-size: 32px;
  font-family: sans-serif;
  margin-top: 15px;
  margin-bottom: 5px;
  border-radius: 5px;
  padding: 5px;
  background: yellow;
`

export const SidebarRoute = styled(Link)`
  background: #393232; 
  white-space: nowrap; 
  padding: 16px 64px; 
  color: #fff; 
  font-size: 16px; 
  outline: none;
  border: none; 
  cursor: pointer;
  transition: .2s ease-in-out;
  text-decoration: none; 
  border-radius: 5px;

  &:hover {
    transition: .2s ease-in-out;
    background: #fff; 
    color: #010606;
  }
`