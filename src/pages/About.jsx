import React from 'react'
import '../css/About.css';
import AboutContainer from '../components/AboutContainer';
import ImageCarousel from '../components/ImageCarousel';
import OurServices from '../components/OurServices';
import Testimonial from '../components/Testimonial';

const About = () => {
    return (
        <>
        <div className="about-page">
        <div className="image-content">
          <img src="images/about.jpg" alt="Description" />
          <div className="overlay-text">
            <p className='small-heading'>Luxury Hotel</p>
            <h1>About Us</h1>
          </div>
        </div>
      </div>
      <AboutContainer/>
      <ImageCarousel/>
     <OurServices/>
     <Testimonial/>
        </>
    )
}

export default About
