
import React, { useState } from 'react';
import 'remixicon/fonts/remixicon.css';
import '../css/Video.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import OurServices from './OurServices';


const VideoContainer = () => {
  
  const [showVideo, setShowVideo] = useState(false);

  const handlePlay = () => {
    setShowVideo(true);
};

const handleClose = () => {
    setShowVideo(false);
};

  return (
    <div>
      <div className="video-container">
            <div className="content">
              <span className='star'>
              <i class="ri-star-s-fill"></i>
              <i class="ri-star-s-fill"></i>
              <i class="ri-star-s-fill"></i>
              <i class="ri-star-s-fill"></i>
              <i class="ri-star-s-fill"></i>
              </span>
            <p className='small-heading'>The Sukh-Sagar Luxury Hotel</p>
               <h1 className='top-heading'>Promotional Video</h1>
                <div className="circle">
                <i class="ri-play-fill" onClick={handlePlay}></i>
                </div>
                {showVideo && (
                <div className="lightbox">
                    <span className="close" onClick={handleClose}>&times;</span>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/cr2Rrl3vz9I?si=Ov8t391f7Al8_L1W" // Replace VIDEO_ID with your video's ID
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                    </div>
            )}
            </div>
        </div>
        <OurServices/>
    </div>
  );
};

 
export default VideoContainer;

