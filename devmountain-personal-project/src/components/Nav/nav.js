import React from 'react'
import {Link} from 'react-router-dom'
import {
  FaFacebookSquare,
  FaLinkedin,
  FaInstagram,
  FaLocationArrow,
  FaTwitterSquare
} from 'react-icons/fa';
import './nav.scss'

const nav = () => {
  return (
    <div className="nav">
      <div className="nav-container">
        <div>
          <h1 className="nav-logo">POWERHOUSE</h1>
        </div>
        <div className="nav-info-wrap">
          <div className="nav-social-wrap">
            <a className="social-links" href="https://www.google.com/maps/dir/40.2861729,-111.749542/athletic+republic+google+maps/@40.3525274,-111.9417521,11z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x874d81e6f4f56b71:0x14fb336b3b3a2144!2m2!1d-111.8334535!2d40.3858813">
              <FaLocationArrow/>
              <Link className="social-links">Lehi, UT</Link>
            </a>
            <Link className="social-links" to="/login">LOGIN</Link>
            <a href="https://www.facebook.com/TuniK78" className="social-links social-icons"><FaFacebookSquare/></a>
            <a href="https://www.instagram.com/t.kanuch78/?hl=en" className="social-links social-icons"><FaInstagram/></a>
            <a href="https://www.linkedin.com/in/tuni-kanuch-b00673140/" className="social-links social-icons"><FaLinkedin/></a>
            <a href="https://twitter.com/kanuch78" className="social-links social-icons"><FaTwitterSquare/></a>
          </div>
          <div className="nav-links-wrap">
            <Link className="links" to="/">HOME</Link>
            <Link className="links" to="/about">ABOUT</Link>
            <Link className="links" to="/contact">CONTACT</Link>
            <Link className="links link-box" to="/programs">PROGRAMS</Link>
            <Link className="links link-box" id="join-box" to="/register">JOIN</Link>
            {/* <Link className="links" to="/register">REGISTER</Link> */}
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default nav
