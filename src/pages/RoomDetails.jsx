import React from 'react'
import { FaSwimmingPool, FaBath, FaCoffee, FaUsers, FaBed, FaWifi, FaCheck } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ImageCarousel from '../components/ImageCarousel';
import ContactContainer from '../components/ContactContainer';
import RoomBookSlider from '../components/RoomBookSlider';
import '../css/RoomDetails.css';
const RoomDetails = () => {
    const images = [
        'images/room-suite1.jpg',
        'images/main.jpg',
        'images/section9.jpg',
    ];
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
    };
    return (
        <>
            <div className="resto-slider">
                <Slider {...settings}>
                    {images.map((image, index) => (
                        <div key={index} className='slider'>
                            <img src={image} alt={`slides ${index + 1}`} />
                        </div>
                    ))}
                </Slider>
                <button className="center-bottom-button"></button>
            </div>
            <div className="room-details-info">
                <div className="resto-body-part1">
                    <span className='star-icon'>
                        <i className="ri-star-s-fill"></i>
                        <i className="ri-star-s-fill"></i>
                        <i className="ri-star-s-fill"></i>
                        <i className="ri-star-s-fill"></i>
                        <i className="ri-star-s-fill"></i>
                    </span>
                    <p className='small-heading'>Luxury Hotel</p>
                    <h1>Junior Suite</h1>
                    <p>Welcome to Sukh-Sagar, Pune's Pinnacle of 5-Star Luxury.Nestled in the heart of Pune, Sukh-Sagar stands as the city's premier destination for luxury and indulgence. As you enter our distinguished establishment, we extend to you a warm and gracious welcome to a world of opulence and refinement.</p>
                    <p>Indulge in the height of comfort and sophistication as you explore our world-class amenities, savor exquisite culinary delights, and retire to the tranquility of our lavish accommodations. </p>
                    <div className="checking-info">
                        <div className="check-in">
                            <h2>Check In</h2>
                            <div className='amenities-list'>
                                <p> <FaCheck style={{ color: '#aa8453', marginRight: '12px' }} /> Check-in from 9:00 AM - anytime</p>
                                <p> <FaCheck style={{ color: '#aa8453', marginRight: '12px' }} /> Early check-in subject to availability</p>
                            </div>
                        </div>
                        <div className="check-out">
                        <h2>Check Out</h2>
                            <div className='amenities-list'>
                                <p> <FaCheck style={{ color: '#aa8453', marginRight: '12px' }} /> 1-2 person</p>
                                <p> <FaCheck style={{ color: '#aa8453', marginRight: '12px' }} />  200 sqft room</p>
                            </div>
                        </div>
                    </div>
                    <div className='resutant-details'>
                        <h2>Special check-in instructions</h2>
                        <p>Contact the hotel in advance at +91-177-2653088 to confirm if early check-in is possible and arrange baggage storage if needed. Provide a government-issued photo ID and credit/debit card/cash deposit upon check-in for incidental charges.</p>
                        <h2>Pets</h2>
                        <p>Pets Not Allowed</p>
                        <h2>Childeren And Extra Beds</h2>
                        <p>Children are welcome Kids stay free! Children stay free when using existing bedding; children may not be eligible for complimentary breakfast Rollaway/extra beds are available for 200rs per day.</p>
                        </div>
                </div>
                <div className="resto-body-part2">
                    <h2>Amenities</h2>
                    <div className="amenities-list">
                        <p><FaUsers style={{ color: '#aa8453', marginRight: '12px' , fontSize:'22px' }} /> 1-2 person</p>
                        <p><FaBed style={{ color: '#aa8453', marginRight: '12px' , fontSize:'22px' }} />  200 sqft room</p>
                        <p><FaWifi style={{ color: '#aa8453', marginRight: '12px' , fontSize:'22px' }} /> Free Wi-Fi</p>
                        <p><FaSwimmingPool style={{ color: '#aa8453', marginRight: '12px' , fontSize:'22px' }} /> Swimming pool</p>
                        <p><FaBath style={{ color: '#aa8453', marginRight: '12px' , fontSize:'22px' }} /> Towels</p>
                        <p><FaCoffee style={{ color: '#aa8453', marginRight: '12px' , fontSize:'22px' }} /> Breakfast</p>
                    </div>

                </div>
            </div>
            <RoomBookSlider/>
            <ImageCarousel backgroundColor="#FFFFFF" headingcolor="#000"/>
            <ContactContainer/>
        </>
    )
}

export default RoomDetails
