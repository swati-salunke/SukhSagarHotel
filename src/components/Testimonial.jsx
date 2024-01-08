import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "../css/Testimonial.css";


const quote = {
  qimage:"./images/quote.png"
};
const testimonials = [
  { starRating:5, 
    name: "Jon Doe",
    company: "Company A",
    image: "./images/client1.png",
    text: "Staying at Hotel Sukh Sagar was an absolute delight! From the moment we walked in, we were greeted with warm smiles and exceptional service. The staff went above and beyond to make our stay comfortable and memorable."
  },
  {
    starRating:5,
    name: "Shyam Duke",
    company: "Company A",
    image: "./images/client2.png",
    text: "Their service was incredible and helped us achieve our goals."
  },
  {
    starRating:5,
    name: "Nitya Nayar",
    company: "Company A",
    image: "./images/client3.png",
    text: "Their service was incredible and helped us achieve our goals."
  },
 
];
const Testimonial = () => {
  return (
    
    <>
    <div className="main-testimonial">
      <div className="section-text">
    <p className='small-heading'>Testimonials</p>
        <h1 className='top-heading'>What Client Say's</h1>
        <hr />
        </div>
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {testimonials.map((testimonial, index) => (
     
        <SwiperSlide key={index}>
          
          <div className="testimonial-services">
            <div>
            <blockquote className="testimonial-text">{testimonial.text}</blockquote>
            </div>
            <div className="testimonial">
              <div className='client-info'>
            <div>
            <img src={testimonial.image} alt={testimonial.name}  />
            </div>
            <div className="company">
            <div className="star-rating">
              {Array.from({ length: testimonial.starRating }, (_, i) => (
                <span key={i} className="star active">★</span>
              ))}
            </div>
            <p className="testimonial-name">{testimonial.name}</p>
            <p className="testimonial-company">{testimonial.company}</p>
            </div>
            </div>
            <div>
            <img src={quote.qimage} alt={quote.qimage}  />
            </div>
          </div>
          </div>
        </SwiperSlide>
         
      ))}
    </Swiper>
    </div>
    </>
  );
};

export default Testimonial;
