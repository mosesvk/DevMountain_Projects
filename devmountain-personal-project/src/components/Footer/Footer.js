import React from 'react'
import {
  FaFacebookSquare,
  FaLinkedin,
  FaInstagram,
  FaTwitterSquare
} from 'react-icons/fa';
import {Link} from 'react-router-dom'
import './Footer.scss'

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-wrap">
        <div className="info-wrap">
          <Link className="footer-link">PRIVACY</Link>
          <Link className="footer-link">TERMS</Link>
          <Link className="footer-link">CANCEL</Link>
          <Link className="footer-link">CONTACT</Link>
          <Link className="footer-link">LOGIN</Link>
        </div>
        <div className="social-wrap">
          <a href="https://twitter.com/kanuch78" target="_blank" rel="noreferrer" className="social-footer-links"><FaTwitterSquare/></a>
          <a href="https://www.facebook.com/TuniK78" target="_blank" rel="noreferrer" className="social-footer-links"><FaFacebookSquare/></a>
          <a href="https://www.instagram.com/t.kanuch78/?hl=en" target="_blank" rel="noreferrer" className="social-footer-links"><FaInstagram/></a>
          <a href="https://www.linkedin.com/in/tuni-kanuch-b00673140/" target="_blank" rel="noreferrer" className="social-footer-links"><FaLinkedin/></a>
        </div>
      </div>
    </div>
  )
}

export default Footer
