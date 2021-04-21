import React from "react";
import {withRouter} from 'react-router';
import "./contact.scss";

const contact = () => {
  return (
    <section id="contact">
      <h1 class="section-header">REACH OUT & LET'S CHAT</h1>
      <p class="contact-p">Feel free to reach out through Social Media as well</p>
      <div class="contact-wrapper">
          {/* <!---------------- 
          CONTACT PAGE LEFT 
          ----------------->  */}
        <div id="contact-form" class="form-horizontal" role="form">
          <div class="form-group">
            <div class="col-sm-12">
              <input type="text" class="form-control" id="name" placeholder="NAME" name="name" value="" required/>
            </div>
          </div>
          <div class="form-group">
            <div class="col-sm-12">
              <input type="email" class="form-control" id="email" placeholder="EMAIL" name="email" value="" required/>
            </div>
          </div>

          <textarea class="form-control" rows="10" placeholder="MESSAGE" name="message" required></textarea>
          <button class="btn btn-primary send-button" id="submit" type="submit" value="SEND">SEND</button>
        </div>
          {/* <!---------------- 
          CONTACT PAGE RIGHT 
          ----------------->  */}
        <div class="direct-contact-container">
          <ul class="contact-list">
            <li class="list-item"><i class="fa fa-map-marker fa-2x"><span class="contact-text place">Provo, Utah</span></i></li>
            <li class="list-item"><i class="fa fa-phone fa-2x"><span class="contact-text phone"><a href="tel:1-212-555-5555" title="Give me a call">(212) 555-2368</a></span></i></li>
            <li class="list-item"><i class="fa fa-envelope fa-2x"><span class="contact-text gmail"><a href="mailto:#" title="Send me an email">kanuch78@gmail.com</a></span></i></li>
          </ul>
          <hr/>
          {/* <ul class="social-media-list">
            <a href="https://www.facebook.com/TuniK78" target="_blank" rel="noreferrer" class="contact-icon">
              <FaFacebookSquare/></a>
            <a href="https://twitter.com/kanuch78" target="_blank" rel="noreferrer" class="contact-icon">
            <FaTwitterSquare/></a>
            <a href="https://www.instagram.com/t.kanuch78/?hl=en" target="_blank" rel="noreferrer" class="contact-icon">
            <FaInstagram/></a>
            <a href="https://www.youtube.com/watch?app=desktop&v=mSa3CtE7DSE" target="_blank" rel="noreferrer" class="contact-icon">
            <FaYoutube/></a>
          </ul>
          <hr/> */}
          <div class="copyright">&copy; ALL OF THE RIGHTS RESERVED | Powerhouse Fitness</div>
        </div>
      </div>
    </section>  
  
  
  );
};

export default withRouter(contact);
