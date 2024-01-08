import React from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import '../css/RoomSlider.css';

function RoomBookSlider() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    const rooms = [
        {
            image: 'images/section3.jpg',
            title: 'Junior Suite',
            price: '400 Rs./Nigth',
            buttonText: 'Book Now',
            buttonText2: 'Details',
        },
        {
            image: 'images/section4.jpg',
            title: 'Junior Suite',
            price: '400 Rs./Nigth',
            buttonText: 'Book Now',
            buttonText2: 'Details',
        }, {
            image: 'images/section5.jpg',
            title: 'Junior Suite',
            price: '400 Rs./Nigth',
            buttonText: 'Book Now',
            buttonText2: 'Details',
        }, {
            image: 'images/section6.jpg',
            title: 'Junior Suite',
            price: '400 Rs./Nigth',
            buttonText: 'Book Now',
            buttonText2: 'Details',
        },
    ];
    return (
        <div className="roombook-slider">
            <div className="room-section-slider">
                <p className='small-heading'>Luxury Hotel</p>
                <h1>Similar Rooms</h1>
                <Slider {...settings}>
                    {rooms.map((room) => (
                        <div key={room.id} className="room-slide">
                            <img src={room.image} alt={room.title} />
                            <div className="room-book-content">
                                <div className="button">
                                    <button>{room.buttonText}</button>
                                </div>
                                <h2>{room.title}</h2>
                                <p>{room.price}</p>
                                <div className="button1">
                                    <button>{room.buttonText2}<FontAwesomeIcon icon={faArrowRight} /></button>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default RoomBookSlider;
