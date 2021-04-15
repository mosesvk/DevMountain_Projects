import React, {useState, useEffect} from 'react'
// import {Link} from 'react-router-dom'
// import Register from '../Register/register'
import {connect} from 'react-redux'
import {updateUser} from '../../redux/userReducer'
import {Link} from 'react-router-dom'
import axios from 'axios'
import './login.scss'

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {user} = props;
  const {push} = props.history

  useEffect(() => {
    if (user){
      push('/')
    }
  }, [user, push])

  const loginUser = () => {
    axios.post('/auth/login', {
      username,
      password
    })
      .then(res => {
        console.log(res.data)
        props.updateUser(res.data)
      })
      .catch(err => console.log(err))
  }

  // console.log(props)

  return (
    <div className="login-container">
      <div className="login-wrap">
        <div className="box" id="sign-up">
          <a className="back" href="/home"><span className="back-arrow">Back</span></a>
          <div className="brand">
            <h2 className="title">Sign In</h2>
          </div>
          <div className="form">
            <input placeholder='Username' onChange={(e) => setUsername(e.target.value)} value={username}/>
            <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} value={password}/>
            <div className="reg-sign-up">
              <p>Not a User?</p><Link to="/register">Register Here</Link>
            </div>
            <button onClick={loginUser}>LOGIN</button>
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

export default connect(mapStateToProps, {updateUser})(Login)


    // <div className='login-container'>
    //   <div className='login-wrap'>
    //     <input placeholder='Username' onChange={(e) => setUsername(e.target.value)} value={username}/>
    //     <input placeholder='Password' onChange={(e) => setPassword(e.target.value)} value={password}/>
    //     <button onClick={loginUser}>Login</button>
    //     <button>Not a User?</button>
    //   </div>
    // </div>