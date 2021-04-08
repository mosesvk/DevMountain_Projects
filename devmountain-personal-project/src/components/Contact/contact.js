import React from "react";
import "./contact.scss";

const contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-wrap">
        <input className="contact-input" placeholder="Name *" />
        <input className="contact-input" placeholder="Email *" />
        <input className="contact-input" placeholder="Subject *" />
        <input className="contact-message" placeholder="Message *" />
        <button className="contact-button" type="submit">SUBMIT</button>
      </div>
    </div>
  );
};

export default contact;
