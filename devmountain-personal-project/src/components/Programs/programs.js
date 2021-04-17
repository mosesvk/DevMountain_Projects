import React from 'react'
import './programs.scss'

const programs = () => {
  return (
    <div className='program-container'>
      <div className='program-wrap'>
        <div className="card">
          <div className="card__image img1">
            <div className="blue-filter">
              <button className="btn-reveal">Buy</button>
            </div>
          </div>
          <div className="price-title">
            <h2 className="card-title">Individual Training</h2>
            <p className="price">$ 39</p>
          </div>
          
          <div className="sizes">
            <p className="sizes-text">Sizes</p>
          </div>
          
        </div>

        <div className="card">
          <div className="card__image img2">
            <div className="blue-filter">
              <button className="btn-reveal">Buy</button>
            </div>
          </div>

          <div className="price-title">
            <h2 className="card-title">Group Training</h2>
            <p className="price">$ 39</p>
          </div>
          
          <div className="sizes">
            <p className="sizes-text">Sizes</p>
          </div>

        </div>
      </div>
      
    </div>
  )
}

export default programs
