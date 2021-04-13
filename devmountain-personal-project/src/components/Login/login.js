import React from 'react'
// import {Link} from 'react-router-dom'
// import Register from '../Register/register'
import './login.scss'

const login = () => {
  

  return (
    <div className='login-container'>
      <div className='login-wrap'>
        <input placeholder='Username'/>
        <input placeholder='Password'/>
        <button>Login</button>
        <button>Not a User?</button>
        {/* <Link path='/register' component={Register}>REGISTER</Link> */}
      </div>
    </div>
  )
}

export default login
