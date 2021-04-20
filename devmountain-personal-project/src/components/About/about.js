import React from 'react'
import './about.scss'

const about = () => {
  return (
    <>
      <div className="about-section">
        <div className="container">
            <div className="row">                
                <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
                    <div className="inner-column">
                        <div className="sec-title">
                            <span className="title">About Us</span>
                            <h2> <br/>Tuni Kanuch</h2>
                        </div>
                        <div className="text">
                          <p>
                            Tuni is a former collegiate and professional football player. Received "Mr. Football" honors in high school while leading the Bingham Miners to a State Championship.
                          </p>
                        <br/>
                          <p>
                            Powerhouse Fitness is a program designed to help high school and collegiate athletes refine their skills on the field through intensive workouts. 
                          </p>
                        </div>
                        <ul className="list-style-one">
                            <li>Lorem Ipsum is simply dummy tex</li>
                            <li>Consectetur adipisicing elit</li>
                            <li>Sed do eiusmod tempor incididunt</li>
                        </ul>
                        <div className="btn-box">
                            <a href="https://google.com" className="theme-btn btn-style-one">Contact Us</a>
                        </div>
                    </div>
                </div>

                {/* Image Column  */}
                <div className="image-column col-lg-6 col-md-12 col-sm-12">
                    <div className="inner-column wow fadeInLeft">
                        <figure className="image-1"><a href="https://google.com" className="lightbox-image" data-fancybox="images"><img src="https://images-na.ssl-images-amazon.com/images/I/61bNYjc2tiL._AC_SX679_.jpg" alt=""/></a></figure>
                        <figure className="image-2"><a href="https://google.com" className="lightbox-image" data-fancybox="images"><img src="https://bloximages.chicago2.vip.townnews.com/heraldextra.com/content/tncms/assets/v3/editorial/b/18/b185e5ff-4b62-5d73-aff3-e7a346796ca0/57c4d267b986b.image.jpg?resize=1200%2C816" alt=""/></a></figure>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default about
