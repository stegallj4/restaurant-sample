import React from "react";

import { SubHeading, Testimonials } from "../../components";
import { data } from "../../constants";
import "./Testimony.css";

const Testimony = () => {
  return(
    <div className="app__testimony flex__center section__padding">
      <div className="app__testimony-title">
        <SubHeading title="Testimony" />
        <h1 className="headtext__cormorant">Happy Customers</h1>
      </div>

      <div className="app__testimony-content_cards">
        {data.testimonials.map((testimony) => (
          <Testimonials
            imgUrl={
              testimony.imgUrl
            } name={testimony.name} job={testimony.job} review={testimony.review} key={testimony.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimony;
