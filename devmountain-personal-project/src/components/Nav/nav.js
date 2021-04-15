import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {
  FaFacebookSquare,
  FaLinkedin,
  FaInstagram,
  FaLocationArrow,
  FaTwitterSquare,
  FaBars,
  FaUserAlt
} from 'react-icons/fa';
import {connect} from 'react-redux'
import {updateUser} from '../../redux/userReducer'
import './nav.scss'

const Nav = (props) => {
  const { toggle, user, updateUser } = props;

  useEffect(() => {
    axios.get('/auth/getUser')
      .then(res => {
        console.log(res.data)
        updateUser(res.data)
      })
      .catch(err => console.log(err))
  }, [updateUser])

  return (
    <div className="nav">
      <div className="nav-container">
        <div>
          <h1 className="nav-logo">POWERHOUSE</h1>
        </div>
        <div className="nav-info-wrap">
          <div className="nav-social-wrap">
            <a className="social-links phone-size-link" href="https://www.google.com/maps/dir/40.2861729,-111.749542/athletic+republic+google+maps/@40.3525274,-111.9417521,11z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x874d81e6f4f56b71:0x14fb336b3b3a2144!2m2!1d-111.8334535!2d40.3858813" target="_blank" rel="noreferrer">
              <FaLocationArrow/>
              <Link className="social-links">Lehi, UT</Link>
            </a>
            {user ? (
              <div className="nav-login-active">
                <div className="nav-user-icon">
                  <FaUserAlt/>
                  <p>{user.username}</p>
                </div>
                <a href="/home">LOGOUT</a>
              </div>
            ) : (
              <Link className="social-links phone-size-link login-link" to="/login">LOGIN</Link>
            )}
            <a href="https://twitter.com/kanuch78" target="_blank" rel="noreferrer" className="social-links social-icons"><FaTwitterSquare/></a>
            <a href="https://www.facebook.com/TuniK78" target="_blank" rel="noreferrer" className="social-links social-icons"><FaFacebookSquare/></a>
            <a href="https://www.instagram.com/t.kanuch78/?hl=en" target="_blank" rel="noreferrer" className="social-links social-icons"><FaInstagram/></a>
            <a href="https://www.linkedin.com/in/tuni-kanuch-b00673140/" target="_blank" rel="noreferrer" className="social-links social-icons"><FaLinkedin/></a>
          </div>
          <div className="nav-links-wrap">
            <Link className="links" to="/">HOME</Link>
            <Link className="links" to="/about">ABOUT</Link>
            <Link className="links" to="/contact">CONTACT</Link>
            <Link className="links link-box" to="/programs">PROGRAMS</Link>
            <Link className="links link-box" id="join-box" to="/register">JOIN</Link>
            {/* <Link className="links" to="/register">REGISTER</Link> */}
            
          </div>
          <div className="nav-bars" onClick={toggle}>
            <FaBars />
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (stateRedux) => {
  return {
    user: stateRedux.userReducer.user
  }
}

export default connect(mapStateToProps, {updateUser})(Nav)
