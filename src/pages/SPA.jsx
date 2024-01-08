import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HotelContainer from '../components/HotelContainer';


const SPA = () => {
    const images = [
        'images/SPA1.jpg',
        'images/SPA2.jpg',
        'images/SPA3.jpg',
      ];
      const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      };
     
  return (
    <>
       <div className="resto-slider">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className='slider'>
              <img src={image} alt={`slides ${index + 1}`} />
            </div>
          ))}
        </Slider>
        <button className="center-bottom-button"></button>
      </div>
      <div className="spa-info">
        <div className="resto-body">
          <span className='star-icon'>
            <i class="ri-star-s-fill"></i>
            <i class="ri-star-s-fill"></i>
            <i class="ri-star-s-fill"></i>
            <i class="ri-star-s-fill"></i>
            <i class="ri-star-s-fill"></i>
          </span>
          <p className='small-heading'>SO MANY WAYS TO UNWIND</p>
          <h1 className='heading'>SPA & Wellness</h1>
          <p>Welcome to Sukh-Sagar, Pune's Pinnacle of 5-Star Luxury.Nestled in the heart of Pune, Sukh-Sagar stands as the city's premier destination for luxury and indulgence. As you enter our distinguished establishment, we extend to you a warm and gracious welcome to a world of opulence and refinement.</p>
          <p>Indulge in the height of comfort and sophistication as you explore our world-class amenities, savor exquisite culinary delights, and retire to the tranquility of our lavish accommodations. </p>
          <div className='call-details'>
            <img src="/images/phone-ringing.png" alt="phone call" />
            <p>Reservation</p>
          </div>
          <p className='number'>9607555500</p>
        </div>
      </div>
     <HotelContainer isSPA={true}/>
   </>
  )
}

export default SPA
