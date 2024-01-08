import React, { useState } from 'react';
import Slider from 'react-slick';
import '../css/Contact.css';


const ContactContainer = () => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  const handleCheckAvailability = () => {
    console.log('Check-in:', checkIn);
    console.log('Check-out:', checkOut);
    console.log('Adults:', adults);
    console.log('Children:', children);
  };
  const settings1 = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Number of logos to display at a time
    slidesToScroll: 1,
    autoplay: true, // Set to true for autoplay
    autoplaySpeed: 2000, // Time (in milliseconds) between slides
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const logos = [
    // Replace these with your logo images and links
    { id: 1, imageSrc: './images/logo1.png', link: '#' },
    { id: 2, imageSrc: './images/logo2.png', link: '#' },
    { id: 3, imageSrc: './images/logo3.png', link: '#' },
    { id: 3, imageSrc: './images/logo4.png', link: '#' },
    { id: 3, imageSrc: './images/logo5.png', link: '#' },
  ];
  return (
    <>
      <div className="contact-section">
        <div className="contact-info">
          <div className="contact-details">
            <div className="contact-text">
              <span className='star-icon'>
                <i class="ri-star-s-fill"></i>
                <i class="ri-star-s-fill"></i>
                <i class="ri-star-s-fill"></i>
                <i class="ri-star-s-fill"></i>
                <i class="ri-star-s-fill"></i>
              </span>
              <p>Each of our guest rooms feature a private bath, wi-fi, cable television and include full breakfast.</p>
              <div className='call-details'>
                <img src="/images/call.png" alt="phone call" />
                <p>Reservation</p>
              </div>
              <p className='number'>9607555500</p>
            </div>
          </div>
          <div className="logo-carousel">
            <div className="logos">
              <Slider {...settings1}>
                {logos.map((logo) => (
                  <div key={logo.id}>
                    <a href={logo.link} target="_blank" rel="noopener noreferrer">
                      <img src={logo.imageSrc} alt={`Logo ${logo.id}`} />
                    </a>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
        <div className="form-info">
          <div className="formcon">
            <div className="hotel-booking-form">
              <h2>Hotel Booking</h2>
              <div className="form-group">
                <label htmlFor="checkin">Check-in:</label>
                <input
                  type="date"
                  id="checkin"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="checkout">Check-out:</label>
                <input
                  type="date"
                  id="checkout"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="adults">Adults:</label>
                <select
                  id="adults"
                  value={adults}
                  onChange={(e) => setAdults(e.target.value)}
                >
                  {Array.from({ length: 10 }, (_, i) => (
                    <option key={i} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="children">Children:</label>
                <select
                  id="children"
                  value={children}
                  onChange={(e) => setChildren(e.target.value)}
                >
                  {Array.from({ length: 5 }, (_, i) => (
                    <option key={i} value={i}>
                      {i}
                    </option>
                  ))}
                </select>
              </div>
              <button onClick={handleCheckAvailability}>Check Availability</button>
            </div>

          </div>
          <div className="form-empty">

          </div>
        </div>
      </div>
    </>
  )
}

export default ContactContainer
