import React from "react";

import "./ChefGrid.css";
import ChefCard from "../../components/ChefCard/ChefCard";
import { data } from "../../constants";

const ChefGrid = () => {
  return (
    <div className="app__chefgrid section__padding flex__center">
      <div className="app__chefgrid-container">
        <div className="app__chefgrid-container_top">
          {data.chefs.slice(0, 3).map((chef) => (
            <ChefCard
              name={chef.name}
              position={chef.position}
              imgUrl={chef.imgUrl}
              key={chef.id}
            />
          ))}
        </div>
        <div className="app__chefgrid-container_bottom">
          {data.chefs.slice(3).map((chef) => (
            <ChefCard
              name={chef.name}
              position={chef.position}
              imgUrl={chef.imgUrl}
              key={chef.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChefGrid;
