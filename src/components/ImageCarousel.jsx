import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import '../css/ImageCarousel.css';
import { FaCheck,  FaTimes } from 'react-icons/fa';

function ImageCard({ title, price, time, text1, text2, text3, imageUrl }) {
    return (
      <div className="image-card">
            <img src={imageUrl} alt={title} />
            <div className="card-content">
                <h3>{title}</h3>
                <h2>{price}<span className='time'>{time}</span></h2>
                <p><FaCheck style={{ color: '#aa8453', marginRight: '10px' }}/>{text1}</p>
                <p><FaCheck style={{ color: '#aa8453', marginRight: '10px' }}/>{text2}</p>
                <p><FaTimes style={{ color: '#2c2b2b', marginRight: '10px' }}/>{text3}</p>
            </div>
        </div>
    );
  }
const ImageCarousel = ({backgroundColor,headingcolor}) => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const imageCardsData = [
    {
      title: 'Room Cleaning',
      price:'1000Rs',
      time:'/Month',
      text1: 'Daily Service.',
      text2: 'Expert Staff.',
      text3: 'Eco-friendly Products.',
      imageUrl: 'images/curosel1.jpg',
    },
    {
      title: 'Drink Included',
      price:'1000Rs',
      time:'/Daily',
      text1: 'Variety of Beverages.',
      text2: 'Affordable Prices.',
      text3: 'Local Brews.',
      imageUrl: 'images/curosel2.jpg',
    },
    {
      title: 'Room Breakfast',
      price:'300Rs',
      time:'/Daily',
      text1: 'Fresh Ingredients.',
      text2: 'Room Service.',
      text3: 'Dietary Options.',
      imageUrl: 'images/curosel3.jpg',
    },
    {
      title: 'Safe & Secure',
      price:'200Rs',
      time:'/Daily',
      text1: 'Access Control.',
      text2: 'Secure Parking.',
      text3: 'Guest Escorts.',
      imageUrl: 'images/curosel4.jpg',
    },
  
  ];
  return (
    <>
    <div className="carousel-container" style={{backgroundColor : backgroundColor || '#222222'}}>
    <div className="row">
      {/* First Column with Text */}
      <div className="column text-column">
        <p className='small-heading'>Best Prices</p>
        <h1 style={{color : headingcolor || '#fff'}}>Extra Services</h1>
        <p>Enjoy ultimate relaxation at Sukh Sagar Hotel with our affordable relaxation packages, designed to help you unwind and rejuvenate without breaking the bank.</p>
        <p>Our in-room drink and beverage services for a truly convenient and room service breakfast options, ensuring a delicious and hassle-free morning during your stay with us</p>
        <div className='call-details'>
            <img src="/images/phone-ringing.png" alt="phone call" />
            <p>For Information</p>
          </div>
          <p className='number'>9607555500</p>
      </div>

      {/* Second Column with Image Slider */}
      <div className="slider-column">
        <Slider {...settings}>
          {imageCardsData.map((card, index) => (
            <ImageCard
              key={index}
              title={card.title}
              price={card.price}
              time={card.time}
              text1={card.text1}
              text2={card.text2}
              text3={card.text3}
              imageUrl={card.imageUrl}
            />
          ))}
        </Slider>
      </div>
    </div>
  </div>

  </>
  );
};

export default ImageCarousel;


