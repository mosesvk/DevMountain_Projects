import React from 'react'
import './programs.scss'

const programs = () => {
  return (
    <div className='program-container'>
      <div className='program-wrap'>
        <div className="card">
          <div className="card__image">
            <div className="blue-filter card-1-img">
              <button className="btn-reveal">See Details</button>
            </div>
          </div>
          <div className="price-title">
            <h2 className="card-title card-title-1">Individual Training</h2>
            <p className="price">$ 89</p>
          </div>
        </div>

        <div className="card">
          <div className="card__image">
            <div className="blue-filter card-2-img">
              <button className="btn-reveal">See Details</button>
            </div>
          </div>
          <div className="price-title">
            <h2 className="card-title card-title-2">Group Training</h2>
            <p className="price">$ 49 per</p>
          </div>

        </div>
      </div>
      
    </div>
  )
}

export default programs
