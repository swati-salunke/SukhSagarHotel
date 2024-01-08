import React from 'react'
import ContactContainer from '../components/ContactContainer'
import HotelBlog from '../components/HotelBlog'


const Blog = () => {
  return (
    <>
      <div className="about-page">
        <div className="image-content">
          <img src="/images/section9.jpg" alt="Description" />
          <div className="overlay-text">
            <p className='small-heading'>Luxury Hotel</p>
            <h1>Our News</h1>
          </div>
        </div>
      </div>
        <HotelBlog isBlog={true}/>
      <ContactContainer/>
    </>
  )
}

export default Blog
