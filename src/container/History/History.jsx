import React from "react";
import "./History.css";

import { data, images } from "../../constants";
import { SubHeading, Stats } from "../../components";

const History = () => {
  return (
    <div className="app__history flex__center section__padding">
      <div className="app__history-title">
        <SubHeading title="Our History" />
        <h1 className="headtext__cormorant">
          Serving Customers for Over A Decade
        </h1>
      </div>

      <div className="app__history-content">
        <div className="app__history-content_left card">
          <p className="p__opensans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </p>
          <img src={images.entrance} alt="entrance" />
        </div>
        <div className="app__history-content_right card">
          <img src={images.winewall} alt="winewall" className="winewall" />
          <h3 className="app__history-content_right-header">Over the Years</h3>
          <div className="app__history-content_right-stats">
            <Stats
              className="stat-container"
              number={data.stats[0].number}
              imgUrl={data.stats[0].imgUrl}
              option={data.stats[0].option}
            />
            <div className="app__history-content_right-stats_dash" />
            <Stats
              className="stat-container"
              number={data.stats[1].number}
              imgUrl={data.stats[1].imgUrl}
              option={data.stats[1].option}
            />
            <div className="app__history-content_right-stats_dash" />
            <Stats
              className="stat-container"
              number={data.stats[2].number}
              imgUrl={data.stats[2].imgUrl}
              option={data.stats[2].option}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
