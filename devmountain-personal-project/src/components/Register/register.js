import React from 'react'
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
    
    <div className="container">
      <div className="box" id="sign-up">
        <a className="back" href="#back"><span className="back-arrow">Back</span></a>
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
            <div className="checkbox">
              <input type="checkbox" name="terms" id="terms"/>
              <label for="terms" className="checkbox-label"></label>
              <label for="terms" className="description">I agree with <a href="#terms">Terms & conditions</a></label>
            </div>
            <button type="submit" name="submit">Sign up for free</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default register
