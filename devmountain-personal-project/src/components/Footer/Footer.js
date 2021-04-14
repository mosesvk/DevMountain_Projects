import React from 'react'
import {
  FaFacebookSquare,
  FaLinkedin,
  FaInstagram,
  FaTwitterSquare,
  FaRegStar
} from 'react-icons/fa';
import Divider from '@material-ui/core/Divider';
import {Link} from 'react-router-dom'
import './Footer.scss'

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-wrap">
        <div className="footer-top">
          <Link>JOIN NOW</Link>
          <div className="footer-top-review">
            <p>Please leave us a review</p>
            <FaRegStar/>
            <FaRegStar/>
            <FaRegStar/>
            <FaRegStar/>
            <FaRegStar/>
          </div>
        </div>
        <Divider dark/>
        <div className="footer-bottom">
          <div className="info-wrap">
            <Link>PRIVACY</Link>
            <Link>TERMS</Link>
            <Link>CANCEL</Link>
            <Link>CONTACT</Link>
            <Link>LOGIN</Link>
          </div>
          <div className="social-wrap">
            <a href="https://twitter.com/kanuch78" target="_blank" rel="noreferrer" className="social-links social-icons"><FaTwitterSquare/></a>
            <a href="https://www.facebook.com/TuniK78" target="_blank" rel="noreferrer" className="social-links social-icons"><FaFacebookSquare/></a>
            <a href="https://www.instagram.com/t.kanuch78/?hl=en" target="_blank" rel="noreferrer" className="social-links social-icons"><FaInstagram/></a>
            <a href="https://www.linkedin.com/in/tuni-kanuch-b00673140/" target="_blank" rel="noreferrer" className="social-links social-icons"><FaLinkedin/></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
