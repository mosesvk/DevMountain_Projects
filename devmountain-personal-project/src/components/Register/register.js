import React from 'react'
import {Link} from 'react-router-dom'
import './register.scss'

const register = () => {
  return (
    // <div className='register-container'>
    //   <div className="register-panel">
    //     <div className="register-panel-header">
    //       <h5>SIGN UP</h5>
    //     </div>
    //     <div className="register-panel-body">

    //     </div>
    //   </div>
    // </div>
    <div className="register-container">
      <div className="register-wrap">
        <div className="box" id="sign-up">
          <a className="back" href="/home"><span className="back-arrow">Back</span></a>
          <div className="brand">
            <div className="logo">
              <div className="square"></div>
              <div className="square"></div>
              <div className="square"></div>
            </div>
            <h2 className="title">Sign up now</h2>
          </div>
          <div className="form">
            <form>
              <div className="row">
                <input type="text" name="firstname" placeholder="First name"/>
                <input type="text" name="lastname" placeholder="Last name"/>
              </div>
              <input type="email" name="email" placeholder="Email"/>
              <input type="password" name="password" placeholder="Password"/>
              <div className="reg-sign-up">
                <p>Already a member?</p><Link>Sign in</Link>
              </div>
              <button type="submit" name="submit">Sign up for free</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default register
