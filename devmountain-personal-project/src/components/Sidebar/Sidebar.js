import React from 'react'
import {Link} from 'react-router-dom'
import {FaTimes} from 'react-icons/fa'
import {SidebarContainer} from './SidebarContainer'
import './Sidebar.scss'

const Sidebar = (props) => {
  
  const {toggle, isOpen} = props

  return (
    <SidebarContainer isOpen={isOpen} toggle={toggle}>
      <div className="icon-wrap">
        <FaTimes onClick={toggle}/>
      </div>
      <div className="sidebar-header">
        <h1 className="sidebar-nav-logo">POWERHOUSE</h1>
      </div>
      <div className="sidebar-wrap">
        <div className="sidebar-menu">
          <Link className="sidebar-link sidebar-join" to="/register"
            onClick={toggle}>JOIN</Link>
          <Link className="sidebar-link" to="/"
            onClick={toggle}>HOME</Link>
          <Link className="sidebar-link" to="/about"
            onClick={toggle}>ABOUT</Link>
          <Link className="sidebar-link" to="/contact"
            onClick={toggle}>CONTACT</Link>
          <Link className="sidebar-link" to="/programs"
            onClick={toggle}>PROGRAMS</Link>
          <Link className="sidebar-link" to="/login"
            onClick={toggle}>LOGIN</Link>
          <hr/>
        </div>
      </div>
    </SidebarContainer>
  )
}

export default Sidebar
