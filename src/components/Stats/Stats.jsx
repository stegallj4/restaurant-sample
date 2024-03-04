import React from 'react'

import './Stats.css';

const Stats = ( { number, imgUrl, option } ) => (
  <div className="app__statistic">
    <div className="changes_number">
        <h3>{number}</h3>
    </div>
    <img src={imgUrl} alt="spoon" />
    <div className="changes_option">
        <h4>{option}</h4>
    </div>
  </div>
);

export default Stats
