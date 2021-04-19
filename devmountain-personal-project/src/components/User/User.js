import React from 'react'
import {connect} from 'react-redux'
import {updateUser} from '../../redux/userReducer'
import './User.scss'

const User = (props) => {
  const {user} = props

  console.log(user)
  return (
    <div className="portfoliocard">
      <div className="coverphoto"></div>
      <div className="profile_picture"></div>
      <div className="left_col">
        <div className="followers">
          <div className="follow_count">18,541</div>
          Followers
        </div>
        <div className="following">
          <div className="follow_count">181</div>
          Following
        </div>
      </div>
      <div className="right_col">
        <h2 className="name">{user.first_name}</h2>
        <ul className="contact_information">
          <li className="mail">test@gmail.com</li>
          <li className="username">test</li>
          <li className="password">test</li>
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
