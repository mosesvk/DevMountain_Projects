import React from 'react'

import './User.scss'

const User = (props) => {
  const {user} = props

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
        <h3 className="location">San Francisco, CA</h3>
        <ul className="contact_information">
          <li className="work">CEO</li>
          <li className="mail">john.doe@apple.com</li>
          <li className="phone">1-(732)-757-2923</li>
        </ul>
      </div>
		</div>
  )
}

export default User
