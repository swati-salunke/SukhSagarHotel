import React from 'react';
import RoomBook from '../components/RoomBook';
import ImageCarousel from '../components/ImageCarousel';
import ContactContainer from '../components/ContactContainer';

const Room = () => {
  return (
    <div>
      <div className="about-page">
        <div className="image-content">
          <img src="images/about.jpg" alt="Description" />
          <div className="overlay-text">
          <span className='star-icon'>
              <i class="ri-star-s-fill"></i>
              <i class="ri-star-s-fill"></i>
              <i class="ri-star-s-fill"></i>
              <i class="ri-star-s-fill"></i>
              <i class="ri-star-s-fill"></i>
              </span>
            <p className='small-heading'>Luxury Hotel</p>
            <h1>Room & Suites</h1>
          </div>
        </div>
      </div>
      <RoomBook isRoom={true}/>
    <ImageCarousel/>
    <ContactContainer/>
    </div>
  )
}

export default Room
