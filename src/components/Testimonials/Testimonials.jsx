import React from 'react'

import { images } from '../../constants';
import './Testimonials.css';

const Testimonials = ( {imgUrl, name, job, review} ) => (
    <div className="app__testimonials-card">
      <div className="app__testimonials-card_image">
        <img src={imgUrl} alt="profile picture" className="card_image-picture" />
        <img src={images.quote} alt="quotation mark decoration" className="card_image-quote" />
      </div>

      <div className="app__testimonials-card_content">
        <p className="card_content-review">{review}</p>
        <h4 className="card_content-name">{name}</h4>
        <p className="card_content-job">{job}</p>
      </div>
    </div>
);

export default Testimonials
