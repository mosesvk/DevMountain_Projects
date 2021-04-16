import styled from 'styled-components'
import './Sidebar.scss'

export const SidebarContainer = styled.aside`
  position: fixed; 
  z-index: 999; 
  width: 350px; 
  height: 100%; 
  background: #474545; 
  /* border: 5px solid $gray;  */
  display: flex; 
  flex-direction: column;
  align-items: center;
  top: 0; 
  transition: 0.3s ease-in-out;
  right: ${({isOpen}) => (isOpen ? '0' : '-1000px')};
`