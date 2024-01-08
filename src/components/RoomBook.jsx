import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const RoomBook = ({isRoom}) => {
    return (
        <div>
            <div className="room-book">
                {!isRoom &&(
            <div className="room-body">
                    <p className='small-heading' >THE Sukh-sagar LUXURY HOTEL</p>
                    <h1>Rooms & Suites</h1>
                </div>
                )}
                <div className="room-images-section1">
                    <div className="room-content">
                        <img src="images/section3.jpg" alt="Junior Suite" />
                        <button className="book-button">Book</button>
                        <div className="content">
                            <div className="ctn-btn">
                                <p>400 Rs./Nigth</p>
                                <h1>Junior Suite</h1>
                                <hr className='line' />
                            </div>
                            <div className="button">
                                <button>Details <FontAwesomeIcon icon={faArrowRight} /></button>
                            </div>
                        </div>

                    </div>
                    <div className="room-content">
                        <img src="images/section4.jpg" alt="Junior Suite" />
                        <button className="book-button">Book</button>
                        <div className="content">
                            <div className="ctn-btn">
                                <p>800 Rs./Nigth</p>
                                <h1>Family Room</h1>
                                <hr className='line' />
                            </div>
                            <div className="button">
                                <button>Details <FontAwesomeIcon icon={faArrowRight} /></button>
                            </div>
                        </div>

                    </div>
                    <div className="room-content">
                        <img src="images/section5.jpg" alt="Junior Suite" />
                        <button className="book-button">Book</button>
                        <div className="content">
                            <div className="ctn-btn">
                                <p>1200 Rs./Nigth</p>
                                <h1>Double Room</h1>
                                <hr className='line' />
                            </div>
                            <div className="button">
                                <button>Details <FontAwesomeIcon icon={faArrowRight} /></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="room-images-section2">
                    <div className="room-content2">
                        <img src="images/section6.jpg" alt="Junior Suite" />
                        <button className="book-button">Book</button>
                        <div className="content2">
                            <div className="ctn-btn">
                                <p>1000 Rs./Nigth</p>
                                <h1>Deluxe Room</h1>
                                <hr className='line' />
                            </div>
                            <div className="button">
                                <button>Details <FontAwesomeIcon icon={faArrowRight} /></button>
                            </div>
                        </div>

                    </div>
                    <div className="room-content2">
                        <img src="images/section7.jpg" alt="Junior Suite" />
                        <button className="book-button">Book</button>
                        <div className="content2">
                            <div className="ctn-btn">
                                <p>1000 Rs./Nigth</p>
                                <h1>Superior Room</h1>
                                <hr className='line' />
                            </div>
                            <div className="button">
                                <button>Details <FontAwesomeIcon icon={faArrowRight} /></button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoomBook
