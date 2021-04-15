import React from 'react'
import {
  FaFacebookSquare,
  FaYoutubeSquare,
  FaInstagram,
  FaTwitterSquare
} from 'react-icons/fa';
import {Link} from 'react-router-dom'
import './Footer.scss'

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-wrap">
        <div>
          <Link className="footer-link" to="/">HOME</Link>
          <Link className="footer-link" to="/contact">CONTACT</Link>
          <Link className="footer-link" to="/login">LOGIN</Link>
          <Link className="footer-link" to="/register">JOIN</Link>
        </div>
        <p> Copyright &copy; Moses Kaumatule</p>
        <div>
          <a href="https://twitter.com/kanuch78" target="_blank" rel="noreferrer" className="social-footer-links"><FaTwitterSquare/></a>
          <a href="https://www.facebook.com/TuniK78" target="_blank" rel="noreferrer" className="social-footer-links"><FaFacebookSquare/></a>
          <a href="https://www.instagram.com/t.kanuch78/?hl=en" target="_blank" rel="noreferrer" className="social-footer-links"><FaInstagram/></a>
          <a href="https://www.youtube.com/watch?app=desktop&v=mSa3CtE7DSE" target="_blank" rel="noreferrer" className="social-footer-links"><FaYoutubeSquare/></a>
        </div>
      </div>
    </div>
  )
}

export default Footer
