import React from 'react'
import './Welcome.css'

import images from '../../constants/images';

const Welcome = ({page}) => (
      <div className="app__heading">
        <div className="app__heading-content">
          <img src={images.lobby} alt="lobby" />
          <div className="app__heading-content_text">
            <h1 className="headtext__cormorant">Welcome to Gericht</h1>
            <div className="app__heading-content_path">
              <p className="p__cormorant">Home <span>►</span> {page}</p>
            </div>
          </div>
        </div>
      </div>
)

export default Welcome;
