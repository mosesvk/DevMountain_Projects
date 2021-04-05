import React from 'react'
import Navbar from '../Navbar/Navbar'
import mainImg from '../../images/cfp-cover-1.jpg'
import './Main.css'


const Main = () => {
  return (
    <div className="MainContainer">
      <Navbar />
      <div className="MainContent">
        <div className="MainItems">
          <img src={mainImg} className="MainImg" alt="main-img"/>
          <p className="MainP">Have a Taste of the Glory</p>
          <button className="MainBtn">Order here</button>
        </div>
      </div>
    </div>
  )
}

export default Main
