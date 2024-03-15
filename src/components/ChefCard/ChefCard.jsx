import React from "react";

import "./ChefCard.css";

import { BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";

const ChefCard = ({ name, position, imgUrl }) => {
  return (
    <div className="app__chefCard">
      <div className="chefCard_image-container">
        <img src={imgUrl} alt={name} />
        <div className="chefCard_image-overlay">
          <div className="chefCard_image-overlay_logos">
            <FaFacebookF className="chefCard_image-logo" />
            <FaXTwitter className="chefCard_image-logo" />
            <BsInstagram className="chefCard_image-logo" />
          </div>
        </div>
      </div>
      <h3>{name}</h3>
      <p>{position}</p>
    </div>
  );
};

export default ChefCard;
