import React from 'react'
import './programs.scss'

const programs = () => {
  return (
    <div classNameName='program-container'>
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
        
        <div className="colors">
          <h2 className="colors__sub-title">Colors</h2>
          <div className="container-rounded">
            <div className="rounded"></div>
            <div className="rounded"></div>
            <div className="rounded"></div>
            <div className="rounded"></div>
            <div className="rounded"></div>
          </div>
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
        
        <div className="colors">
          <h2 className="colors__sub-title">Colors</h2>
          <div className="container-rounded">
            <div className="rounded"></div>
            <div className="rounded"></div>
            <div className="rounded"></div>
            <div className="rounded"></div>
            <div className="rounded"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default programs
