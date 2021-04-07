import React from 'react'
import {Link} from 'react-router-dom'
import './nav.scss'

const nav = () => {
  return (
    <div className="nav">
      <div className="nav-container">
        <div className="nav-logo">
          <h1>POWERHOUSE</h1>
        </div>
        <div className="nav-links">
          <Link className="links" to="/">HOME</Link>
          <Link className="links" to="/">ABOUT</Link>
          <Link className="links" to="/">PROGRAMS</Link>
          <Link className="links" to="/">REGISTER</Link>
          <Link className="links" to="/">LOGIN</Link>
        </div>
      </div>
    </div>
  )
}

export default nav
