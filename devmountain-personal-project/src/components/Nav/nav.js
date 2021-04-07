import React from 'react'
import {Link} from 'react-router-dom'
import './nav.scss'

const nav = () => {
  return (
    <div className="nav">
      <div className="nav-container">
        <div>
          <h1 className="nav-logo">POWERHOUSE</h1>
        </div>
        <div className="nav-links">
          <Link className="links" to="/">HOME</Link>
          <Link className="links" to="/about">ABOUT</Link>
          <Link className="links" to="/programs">PROGRAMS</Link>
          <Link className="links" to="/contact">CONTACT</Link>
          <Link className="links" to="/register">REGISTER</Link>
          <Link className="links" to="/login">LOGIN</Link>
        </div>
      </div>
    </div>
  )
}

export default nav
