import React from "react";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa'
import "./contact.scss";

const contact = () => {
  return (
    <section id="contact">
      <h1 class="section-header">CONTACT</h1>
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
          <button class="btn btn-primary send-button" id="submit" type="submit" value="SEND"/>
            <div class="button">
              <i class="fa fa-paper-plane"></i><span class="send-text">SEND</span>
            </div>
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
            <ul class="social-media-list">
              <li><a href="https://www.facebook.com/TuniK78" target="_blank" rel="noreferrer" class="contact-icon">
                <FaFacebookSquare/></a>
              </li>
              <li><a href="https://twitter.com/kanuch78" target="_blank" rel="noreferrer" class="contact-icon">
              <FaTwitterSquare/></a>
              </li>
              <li><a href="https://www.instagram.com/t.kanuch78/?hl=en" target="_blank" rel="noreferrer" class="contact-icon">
              <FaInstagram/></a>
              </li>
              <li><a href="https://www.youtube.com/watch?app=desktop&v=mSa3CtE7DSE" target="_blank" rel="noreferrer" class="contact-icon">
              <FaYoutube/></a>
              </li>
            </ul>
            <hr/>
            <div class="copyright">&copy; ALL OF THE RIGHTS RESERVED | Moses Kaumatule</div>
          </div>
      </div>
    </section>  
  
  
  );
};

export default contact;
