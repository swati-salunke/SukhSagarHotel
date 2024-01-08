import React from 'react'
const Hero = () => {
  return (
    <>
    <div className="main-container">
      <div className="image-content">
        <img src="images/section9.jpg" alt="Description" />
        <div className="overlay-text">
        <span className='star-icon'>
            <i class="ri-star-s-fill"></i>
            <i class="ri-star-s-fill"></i>
            <i class="ri-star-s-fill"></i>
            <i class="ri-star-s-fill"></i>
            <i class="ri-star-s-fill"></i>
            </span>
          <p className='small-heading'>The Ultimate Luxury Experience</p>
          <h1 className='heading'>Enjoy the best movement of the life</h1>
          <button>Room & Suits</button>
        </div>
      </div>
    </div>
  </>
  )
}

export default Hero
