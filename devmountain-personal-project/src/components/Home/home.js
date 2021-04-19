import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import {Link} from 'react-router-dom'
import './home.scss'

const home = () => {
  return (
    <div>
      <div className="top-container" >
        <div className="top-wrap">
          <h1 className="top-h1">BE READY TO</h1>
          <div className="top-text-box">
            <Carousel controls={false} indicators={false} >
              <Carousel.Item interval={1500}>
                <h1 className="top-carousel-h1">WORK</h1>
              </Carousel.Item>
              <Carousel.Item interval={1500}>
                <h1 className="top-carousel-h1">DOMINATE</h1>
              </Carousel.Item>
              <Carousel.Item interval={1500}>
                <h1 className="top-carousel-h1">PUSH</h1>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="top-join-wrap">
            <h1>TRY FIRST SESSION FOR FREE</h1>
            <Link className="top-join" to="/register">JOIN</Link>
          </div>
        </div>
      </div>
      <div className="mid-container">
        <div className="mid-wrap">
          <div className="mid-wrap-info">
            <h1>WE'RE ON A MISSION TO ADVANCE YOUR SKILLS TO PERFORM EFFECTIVELY ON THE FIELD</h1>
            <h3>We specialize in offensive lineman specific techniques and drills. </h3>
            {/* <img
              src="https://images-na.ssl-images-amazon.com/images/I/61bNYjc2tiL._AC_SX679_.jpg"
              alt="Second slide"
            /> */}
          </div>
        </div>
      </div>
      <div className="bottom-container">
        <div className="bottom-wrap">
          <div className="bottom-wrap-info">
            <h1 className="bottom-main-h1">CHAMPIONS ARE MADE IN THE OFFSEASON</h1>
            <div className="bottom-wrap-info">
              <h2>TODAY I WILL DO WHAT OTHERS WON'T, SO TOMORROW I CAN ACCOMPOLISH WHAT OTHERS CAN'T</h2>
              <h3>- JERRY RICE</h3>
              <br/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default home
