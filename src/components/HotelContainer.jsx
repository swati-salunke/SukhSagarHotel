import React from 'react';
import '../css/HotelBlog.css';
const HotelContainer = ({ isSPA }) => {
  return (
    <>
      <div className="hotel-container">
      {!isSPA && (
        <div className="hotel-sections">
          <div className="image-section">
            <img src="./images/section10.jpg" alt="" />
          </div>
          <div className="hotel-info">
            <p className='small-heading'>Descover</p>
            <h1>The Resturant</h1>
            <p>Restaurant inilla duiman at elit finibus viverra nec a lacus themo the nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru the ivite dianne onen nivami acsestion augue artine.</p>
            <button className='btn-hotel-info'>Learn More</button>
          </div>
        </div>
      )}
        <div className="hotel-sections" id="hotel-reverse">

          <div className="hotel-info">
            <p className='small-heading'>EXPERIENCES</p>
            <h1>Spa Center</h1>
            <p>Restaurant inilla duiman at elit finibus viverra nec a lacus themo the nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru the ivite dianne onen nivami acsestion augue artine.</p>
            <button className='btn-hotel-info'>Learn More</button>
          </div>
          <div className="image-section">
            <img src="./images/section11.jpg" alt="" />
          </div>
        </div>
        <div className="hotel-sections">
          <div className="image-section">
            <img src="./images/section12.jpg" alt="" />
          </div>
          <div className="hotel-info">
            <p className='small-heading'>THE MODERN</p>
            <h1>fitness center</h1>
            <p>Restaurant inilla duiman at elit finibus viverra nec a lacus themo the nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru the ivite dianne onen nivami acsestion augue artine.</p>
            <button className='btn-hotel-info'>Learn More</button>
          </div>
        </div>
        <div className="hotel-sections" id="hotel-reverse">

          <div className="hotel-info">
            <p className='small-heading'>EXPERIENCES</p>
            <h1>The Health Club & Pool</h1>
            <p>Restaurant inilla duiman at elit finibus viverra nec a lacus themo the nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru the ivite dianne onen nivami acsestion augue artine.</p>
            <button className='btn-hotel-info'>Learn More</button>
          </div>
          <div className="image-section">
            <img src="./images/SPA1.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default HotelContainer
