import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {FaTimes} from 'react-icons/fa'
import './Sidebar.scss'

const Sidebar = () => {
  
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className='sidebar-container' isOpen={isOpen} toggle={toggle}>
      <div className="icon-wrap">
        <FaTimes />
      </div>
      <div className="sidebar-wrap">
        <div className="sidebar-menu">
          <Link to="/"
            onClick={toggle}>HOME</Link>
          <Link to="/about"
            onClick={toggle}>ABOUT</Link>
          <Link to="/contact"
            onClick={toggle}>CONTACT</Link>
          <Link to="/programs"
            onClick={toggle}>PROGRAMS</Link>
          <Link to="/register"
            onClick={toggle}>JOIN</Link>
          <Link to="/login"
            onClick={toggle}>LOGIN</Link>
          <hr/>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
