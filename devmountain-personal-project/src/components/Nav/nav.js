import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router'
import axios from 'axios'
import {
  FaFacebookSquare,
  FaYoutubeSquare,
  FaInstagram,
  FaLocationArrow,
  FaTwitterSquare,
  FaBars,
  FaUserAlt
} from 'react-icons/fa';
import {connect} from 'react-redux'
import Sidebar from '../Sidebar/Sidebar'
import {updateUser} from '../../redux/userReducer'
import './nav.scss'

const Nav = (props) => {
  const {user, updateUser, history} = props;

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    axios.get('/auth/getUser')
      .then(res => {
        console.log(res.data)
        updateUser(res.data)
      })
      .catch(err => console.log(err))
  }, [updateUser])

  const logout = () => {
    axios.get('/auth/logout')
    .then(res => {
      history.push('/')
      updateUser(null)
      })
      .catch(err => console.log(err))
  }

  // console.log(props.user)

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} logout={logout} />
      <div className="nav">
        <div className="nav-container">
          <a className="nav-logo" href="/">
            <h1>POWERHOUSE FITNESS</h1>
          </a>
          <div className="nav-info-wrap">
            <div className="nav-social-wrap">
              <a className="social-links phone-size-link nav-map-link" href="https://www.google.com/maps/dir//athletic+republic+google+maps/@40.3596245,-111.9002664,11.84z/data=!4m8!4m7!1m0!1m5!1m1!1s0x874d81e6f4f56b71:0x14fb336b3b3a2144!2m2!1d-111.8334535!2d40.3858813" target="_blank" rel="noreferrer">
                <FaLocationArrow/>
                <h3 className="">Lehi, UT</h3>
              </a>
              {user ? (
                <div className="nav-login-active">
                  <Link className="nav-user-icon" to="/User">
                    <FaUserAlt/>
                    <p>{user.username}</p>
                  </Link>
                  <h3 onClick={logout} className="logout">LOGOUT</h3>
                </div>
              ) : (
                <Link className="social-links phone-size-link login-link" to="/login">LOGIN</Link>
              )}
              <a href="https://twitter.com/kanuch78" target="_blank" rel="noreferrer" className="social-links social-icons"><FaTwitterSquare/></a>
              <a href="https://www.facebook.com/TuniK78" target="_blank" rel="noreferrer" className="social-links social-icons"><FaFacebookSquare/></a>
              <a href="https://www.instagram.com/t.kanuch78/?hl=en" target="_blank" rel="noreferrer" className="social-links social-icons"><FaInstagram/></a>
              <a href="https://www.youtube.com/watch?app=desktop&v=mSa3CtE7DSE" target="_blank" rel="noreferrer" className="social-links social-icons"><FaYoutubeSquare/></a>
            </div>
            <div className="nav-links-wrap">
              <Link className="links" to="/">HOME</Link>
              <Link className="links" to="/about">ABOUT</Link>
              <Link className="links" to="/contact">CONTACT</Link>
              <Link className="links link-box" id="program-box" to="/programs">PROGRAMS</Link>
              <Link className="links link-box" id="join-box" to="/register">JOIN</Link>
              {/* <Link className="links" to="/register">REGISTER</Link> */}
              
            </div>
            <div className="nav-bars">
              <FaBars className="bars-icon" onClick={toggle}/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (stateRedux) => {
  return {
    user: stateRedux.userReducer.user
  }
};

export default withRouter(connect(mapStateToProps, {updateUser})(Nav));
