import React from 'react'

import './User.scss'

const User = (props) => {
  // const {user} = props

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
        <h2 className="name">John Doe</h2>
        <ul className="contact_information">
          <li className="mail">test@gmail.com</li>
          <li className="username">test</li>
          <li className="password">test</li>
        </ul>
      </div>
		</div>
  )
}

export default User
