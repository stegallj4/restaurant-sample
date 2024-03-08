import { useState, useRef } from "react";

import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { SubHeading } from "../../components";
import { happyhour } from "../../constants";
import "./About.css";

const About = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = useRef();
  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);

    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };

  return (
    <div className="app__about flex__center section__padding app__bg">
      <div className="app__about-title">
        <SubHeading title={"About Us"} />
        <h1 className="headtext__cormorant">Happy Hours With Us</h1>
      </div>

      <div className="app__about-content">
        <p className="p__opensans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et.
        </p>

        <div className="app__about-content_video" onClick={handleVideo}>
          <video
            src={happyhour}
            ref={vidRef}
            type="video/mp4"
            loop
            controls={false}
            muted
          />
          <div className="app__about-content_video-overlay flex__center">
            <div className="app__about-content_video-circle flex__center">
              {playVideo ? (
                <BsPauseFill color="#fff" fontSize={30} opacity={0}/>
              ) : (
                <BsFillPlayFill color="#fff" fontSize={30} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
