import React from 'react'
import {
  FaFacebookSquare,
  FaLinkedin,
  FaInstagram,
  FaTwitterSquare
} from 'react-icons/fa';
import './Footer.scss'

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="social-wrap">
        <a href="https://twitter.com/kanuch78" target="_blank" rel="noreferrer" className="social-links social-icons"><FaTwitterSquare/></a>
        <a href="https://www.facebook.com/TuniK78" target="_blank" rel="noreferrer" className="social-links social-icons"><FaFacebookSquare/></a>
        <a href="https://www.instagram.com/t.kanuch78/?hl=en" target="_blank" rel="noreferrer" className="social-links social-icons"><FaInstagram/></a>
        <a href="https://www.linkedin.com/in/tuni-kanuch-b00673140/" target="_blank" rel="noreferrer" className="social-links social-icons"><FaLinkedin/></a>
      </div>
    </div>
  )
}

export default Footer
