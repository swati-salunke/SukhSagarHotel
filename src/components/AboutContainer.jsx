import React from 'react';
const AboutContainer = () => {
  return (
    <>
      <div className="about-container">
        <div className="about-body">
        <span className='star-icon'>
              <i class="ri-star-s-fill"></i>
              <i class="ri-star-s-fill"></i>
              <i class="ri-star-s-fill"></i>
              <i class="ri-star-s-fill"></i>
              <i class="ri-star-s-fill"></i>
              </span>
          <p className='small-heading'>THE Sukh-sagar LUXURY HOTEL</p>
          <h1 className='heading'>Enjoy a Luxury Experience</h1>
          <p>Welcome to Sukh-Sagar, Pune's Pinnacle of 5-Star Luxury.Nestled in the heart of Pune, Sukh-Sagar stands as the city's premier destination for luxury and indulgence. As you enter our distinguished establishment, we extend to you a warm and gracious welcome to a world of opulence and refinement.</p>
          <p>Indulge in the height of comfort and sophistication as you explore our world-class amenities, savor exquisite culinary delights, and retire to the tranquility of our lavish accommodations. </p>
          <div className='call-details'>
            <img src="/images/phone-ringing.png" alt="phone call" />
            <p>Reservation</p>
          </div>
          <p className='number'>9607555500</p>
        </div>
        <div className="about-images">
          <img className='about-img1' src="images/section1.jpg" alt="" />
          <img src="images/section2.jpg" alt="" />
        </div>
      </div> 
    </>
  )
}

export default AboutContainer
