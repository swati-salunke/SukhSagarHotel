import React from 'react';
import '../css/Footer.css';
const Footer = () => {
  return (
    <>
      <div className="footer-section">
        <div className="footer">
          <div className="about-hotel">
            <h1>About Hotel</h1>
            <p>
              Welcome to Hotel Sukh-Sagar, a luxurious five-star deluxe hotel in Pune, Maharashtra. Experience our warmth and charm. Book your stay today; we prioritize your comfort.</p>
            <button className='btn-hotel-info'>Explore About Sukh-sagar</button>
          </div>
          <div className="links">
            <h1>Explore</h1>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="">Rooms & Suites</a></li>
              <li><a href="http://">Restaurant</a></li>
              <li><a href="http://">Spa & Wellness</a></li>
              <li><a href="http://">About Hotel</a></li>
              <li><a href="http://">Contact</a></li>
            </ul>
          </div>

          <div className="location">
            <h1>Contact</h1>
            <p>1616 Broadway NY, New York 10001 United States of America</p>
            <div className='call-details'>
              <img src="/images/call.png" alt="phone call" />
              <p>9607555500</p>
            </div>
            <div className="mail">
            <p className='mail-id'>✉ info@luxuryhotel.com</p>
            <hr />
            </div>
            <div className="social-media-icons">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="ri-facebook-fill"></i>
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="ri-twitter-fill"></i>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="ri-instagram-fill"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-footer">
      <p>© Copyright 2023 by sukh-sagar. Designed by Matfly Marketing.</p>
    </div>
    </>
  )
}

export default Footer


