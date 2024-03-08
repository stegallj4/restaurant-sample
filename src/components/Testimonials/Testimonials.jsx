import React from "react";

import { images } from "../../constants";
import "./Testimonials.css";

//Optional Feature:
import { BsInstagram } from "react-icons/bs";

const Testimonials = ({ imgUrl, name, job, review }) => (
  <div className="app__testimonials-card">
    <div className="app__testimonials-card_image">
      <div className="card_image-picture_container flex__center">
        <img
          src={imgUrl}
          alt="profile picture"
          className="card_image-picture"
        />
        <BsInstagram className="card_image-icon" />
      </div>
      <img
        src={images.quote}
        alt="quotation mark decoration"
        className="card_image-quote"
      />
    </div>

    <div className="app__testimonials-card_content">
      <p className="card_content-review">{review}</p>
      <h4 className="card_content-name">{name}</h4>
      <p className="card_content-job">{job}</p>
    </div>
  </div>
);

export default Testimonials;
