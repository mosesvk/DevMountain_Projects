import axios from 'axios'
import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {updateUser} from '../../redux/userReducer'
import {connect} from 'react-redux'
import './register.scss'

const Register = (props) => {
  const {updateUser} = props

  const [errorMsg, setErrorMsg] = useState('')
  
  const [input, setInput] = useState({
    firstName: '',
    lastName: '',
    email: '', 
    username: '', 
    password: ''
  })

  const handleChange = (e) => {
    setInput({
      ...input, 
      [e.target.name]: e.target.value
    })
  };

  const handleRegister = (e) => {
    e.preventDefault()
    //stops from refreshing. Always apply to forms
    // console.log(input)
    axios.post('/auth/register', input)
      .then(res => {
        updateUser(res.data)
        setInput({
          firstName: '',
          lastName: '',
          email: '', 
          username: '', 
          password: ''
        })
        props.history.push('/')
      })
      .catch(err => setErrorMsg(err.response.data))
  }


  return (
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
            <h2 className="title">Register & Join</h2>
          </div>
          <div className="form">
            <form onSubmit={handleRegister}>
              <div className="row">
                <input type="text" name="firstName" placeholder="First name" onChange={handleChange} value={input.firstName}/>
                <input type="text" name="lastName" placeholder="Last name" onChange={handleChange} value={input.lastName}/>
              </div>
              <input type="email" name="email" placeholder="Email" onChange={handleChange} value={input.email}/>
              <input type="username" name="username" placeholder="username" onChange={handleChange} value={input.username}/>
              <input type="password" name="password" placeholder="Password" onChange={handleChange} value={input.password}/>
              {errorMsg ? <p className="errMsg">{errorMsg}</p> : null}
              <div className="reg-sign-up">
                <p>Already a member?</p><Link to="/login">Sign in</Link>
              </div>
              <button type="submit" name="submit">Sign up for free</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default connect( null, {updateUser} )(Register)
