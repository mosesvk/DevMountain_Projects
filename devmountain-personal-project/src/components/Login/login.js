import React, {useState} from 'react'
// import {Link} from 'react-router-dom'
// import Register from '../Register/register'
import axios from 'axios'
import './login.scss'

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = () => {
    axios.post('/auth/login', {
      username,
      password
    })
      .then(res => {
        console.log(res.data)
        props.history.push('/')
      })
      .catch(err => console.log(err))
  }

  return (
    <div className='login-container'>
      <div className='login-wrap'>
        <input placeholder='Username' onChange={(e) => setUsername(e.target.value)} value={username}/>
        <input placeholder='Password' onChange={(e) => setPassword(e.target.value)} value={password}/>
        <button onClick={loginUser}>Login</button>
        <button>Not a User?</button>
      </div>
    </div>
  )
}

export default Login
