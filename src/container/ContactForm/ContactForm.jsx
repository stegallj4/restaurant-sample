import React from "react";

import { images } from "../../constants";
import { SubHeading } from "../../components";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="app__contactform section__padding app__wrapper app__bg">
      <div className="app__contactform-form">
        <SubHeading title="Contact Us" />
        <input type="name" placeholder="Full Name" />
        <input type="email" placeholder="Email Address" />
        <div className="contactform-form_message">
          <textarea rows={5} placeholder="Message" wrap="soft" />
        </div>
        <button type='button' className="contactform-button">Submit</button>
      </div>

      <div className="app__wrapper_img">
        <img src={images.laurels} alt="Contact Us" />
      </div>
    </div>
  );
};

export default ContactForm;
