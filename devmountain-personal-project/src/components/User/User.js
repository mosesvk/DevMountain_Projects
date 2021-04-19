import React from 'react'
import {connect} from 'react-redux'
import {updateUser} from '../../redux/userReducer'
import './User.scss'

const User = (props) => {
  const {user} = props

  // console.log(user)
  return (
    <div className="portfoliocard">
      <div className="coverphoto"></div>
      <div className="profile_picture"></div>
      <div className="left_col">
        <div className="followers">
          <h1>User Profile</h1>
        </div>
      </div>
      <div className="right_col">
        <h2 className="name">{user.first_name} {user.last_name}</h2>
        <ul className="contact_information">
          <li className="firstName">{user.first_name}</li>
          <li className="lastName">{user.last_name}</li>
          <li className="mail">{user.email}</li>
          <li className="username">{user.username}</li>
          <li className="password">{user.hash}</li>
        </ul>
      </div>
		</div>
  )
}

const mapStateToProps = (stateRedux) => {
  return {
    user: stateRedux.userReducer.user
  }
}

export default connect(mapStateToProps, {updateUser})(User)
