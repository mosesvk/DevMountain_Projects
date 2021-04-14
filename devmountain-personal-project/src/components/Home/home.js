import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './home.scss'

const home = () => {
  return (
    <div>
      <div className="top-container" >
        <div className="top-wrap">
          <h1>GET READY TO</h1>
          <div className="top-text-box">
            <Carousel controls={false} indicators={false} >
              <Carousel.Item interval={1500}>
                <h1>WORK</h1>
              </Carousel.Item>
              <Carousel.Item interval={1500}>
                <h1>DOMINATE</h1>
              </Carousel.Item>
              <Carousel.Item interval={1500}>
                <h1>PUSH</h1>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
      <div className="mid-container">
        <div className="mid-wrap">

        </div>
      </div>
    </div>
  )
}

export default home
