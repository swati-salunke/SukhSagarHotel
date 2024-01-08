import React from 'react';
import '../css/Contact.css';
import ContactContainer from '../components/ContactContainer';
const Contact = () => {
  return (
    <>
      <div className="about-page">
        <div className="image-content">
          <img src="images/section9.jpg" alt="Description" />
          <div className="overlay-text">
            <p className='small-heading'>Luxury Hotel</p>
            <h1>Contact Us</h1>
          </div>
        </div>
      </div>
      <div className="contact-page-info">
        <div className="contact-body">
          <h3>The Sukh Sagar Luxury Hotel</h3>
          <p>Welcome to Sukh-Sagar, Pune's Pinnacle of 5-Star Luxury.Nestled in the heart of Pune, Sukh-Sagar stands as the city's premier destination for luxury and indulgence. As you enter our distinguished establishment, we extend to you a warm and gracious welcome to a world of opulence and refinement.</p>
          <div className='call-details'>
            <img src="/images/phone-ringing.png" alt="phone call" />
            <div className='call-info'>
              <p>Reservation</p>
              <p className='number'>9607555500</p>
            </div>
          </div>
          <div className='call-details'>
            <img src="/images/email.png" alt="mail-id" />
            <div className='call-info'>
              <p>Email Info</p>
              <p className='number'>info@sukhsagar.com</p>
            </div>
          </div>
          <div className='call-details'>
            <img src="/images/location.png" alt="Address" />
            <div className='call-info'>
              <p>Address</p>
              <p className='address'>Sukhsagar Hotel
                123 Tranquil Lane,
                Blissful Meadows,
                Pune, Maharashtra 411001
                India</p>
            </div>
          </div>
        </div>
        <div className="contact-form-container">
          <h3>Get in touch</h3>
          <form>
            <div className='grid-form'>
              <div className="input-group">
                <input type="text" id="name" name="name" placeholder='Your Name' required />
              </div>
              <div className="input-group">
                <input type="email" id="email" name="email" placeholder='Your Email' required />
              </div>
              <div className="input-group">
                <input type="tel" id="phone" name="phone" placeholder='Your Number' required />
              </div>
              <div className="input-group">
                <input type="text" id="subject" name="subject" placeholder='Subject' required />
              </div>
            </div>
            <div className="input-group">
              <textarea id="message" name="message" required></textarea>
            </div>
            <div className="input-group">
              <button type="submit">SEND MESSAGE</button>
            </div>
          </form>
        </div>
      </div>
  <div className="google-location">
  <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1890.7849305925902!2d73.81909880500079!3d18.593421223636675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b8bfafe5437d%3A0xece5683a32fb6491!2sBhairavnath%20Temple!5e0!3m2!1sen!2sin!4v1704701405897!5m2!1sen!2sin"
      width="1100"
      height="600"
      style={{ border: '5px double #aa8453' }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
  <ContactContainer/>
    </>
  )
}

export default Contact
