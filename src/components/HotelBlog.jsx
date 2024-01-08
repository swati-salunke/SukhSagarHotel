
import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/HotelBlog.css';

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <button className='slider-arrows' onClick={onClick}>
      <img className="arrows" src="images/arrow-right.png" alt="" />
    </button>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <button className='slider-arrows' onClick={onClick}>
      <img className="arrows" src="images/arrow-left.png" alt="" />
    </button>
  );
}
const HotelBlog = ({isBlog}) => {
  const slider = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500, // Adjust speed as needed
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const images = [
    {
      heading: 'Room Cleaning',
      description: 'Daily Service.',
      imageUrl: 'images/section1.jpg',
    },
    {
      heading: 'Drink Included',
      description: 'Variety of Beverages.',
      imageUrl: 'images/section15.jpg',
    },
    {
      heading: 'Room Breakfast',
      description: 'Fresh Ingredients.',
      imageUrl: 'images/section16.jpg',
    },
    {
      heading: 'Safe & Secure',
      description: 'Access Control.',
      imageUrl: 'images/section17.jpg',
    },
    {
      heading: 'Safe & Secure',
      description: 'Access Control.',
      imageUrl: 'images/section18.jpg',
    },
    {
      heading: 'Safe & Secure',
      description: 'Access Control.',
      imageUrl: 'images/section19.jpg',
    },
  ];

  return (
    <div className="slider-container">
    {!isBlog && (
      <div className="slider-heading">
        <p className='small-heading'>Sukh-Sagar Blogs</p>
        <h1>Our News</h1>
      </div>
    )}

    {isBlog ? (
      <div className="news-grid-container">
        {images.map((image, index) => (
          <div key={index} className="grid-item">
            <img src={image.imageUrl} alt={image.heading} />
            <div className="grid-content">
              <h3>{image.heading}</h3>
              <p>{image.description}</p>
            </div>
          </div>
        ))}
      </div>
    ) : (
      <div className="slider-row">
        <Slider ref={slider} {...settings} className='News-Slider'>
          {images.map((image, index) => (
            <div key={index} className="news-slider">
              <div className="image-slider-card">
                <img src={image.imageUrl} alt={image.heading} />
                <div className="image-slider-content">
                  <h3>{image.heading}</h3>
                  <p>{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className='arrow'>
          <SamplePrevArrow onClick={() => slider.current?.slickPrev()} />
          <SampleNextArrow onClick={() => slider.current?.slickNext()} />
        </div>
      </div>
    )}
  </div>
  );
};

export default HotelBlog
