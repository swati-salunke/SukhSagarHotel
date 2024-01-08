import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/resturant.css';
import Testimonial from '../components/Testimonial';


const Resturant = () => {
  const [activeTab, setActiveTab] = useState('mains');
  const [sliderRef, setSliderRef] = useState(null);
  const images = [
    'images/resto-slider1.jpg',
    'images/resto-slider2.jpg',
    'images/resto-slider3.jpg',
  ];
  const settings1 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2, //Object.keys(menuContent).length,
    slidesToScroll: 2,
    swipeToSlide: true,
    variableWidth: true,
    focusOnSelect: true,
    centerMode: true,
    beforeChange: (current, next) => setActiveTab(Object.keys(menuContent)[next]),
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
  };
  
  const menuContent = {
    staters: [
      { name: 'Mozzarella Dippers', description: 'Romaine lettuce, croutons, parmigiano, Caesar dressing.', price: '150Rs' },
      { name: 'Buffalo Wings', description: 'Romaine lettuce, croutons, parmigiano, Caesar dressing.', price: '47$' },
      { name: 'Onion Rings', description: 'Romaine lettuce, croutons, parmigiano, Caesar dressing.', price: '47$' },
      { name: 'Chilli Con Carne', description: 'Romaine lettuce, croutons, parmigiano, Caesar dressing.', price: '120Rs' },
      {name: 'Fried Jalapeno', description: 'Romaine lettuce, croutons, parmigiano, Caesar dressing.', price: '120Rs' },
      {name: 'Potato Skins', description: 'Romaine lettuce, croutons, parmigiano, Caesar dressing.', price: '120Rs' },
    ],
    mains: [
      { name: 'Rusty’s Burger', description: 'Romaine lettuce, croutons, parmigiano, Caesar dressing.', price: '150Rs' },
      { name: 'Crab Cake', description: 'Romaine lettuce, croutons, parmigiano, Caesar dressing.', price: '47$' },
      { name: 'Cajun Fish Steak', description: 'Romaine lettuce, croutons, parmigiano, Caesar dressing.', price: '47$' },
      { name: 'Baby Back Ribs', description: 'Romaine lettuce, croutons, parmigiano, Caesar dressing.', price: '120Rs' },
      { name: 'Southern Fried Chicken', description: 'Romaine lettuce, croutons, parmigiano, Caesar dressing.', price: '120Rs' },
      { name: 'Smokehouse Combo', description: 'Romaine lettuce, croutons, parmigiano, Caesar dressing.', price: '120Rs' },
    ],
    wine: [
      { name: 'Fratelli', description: 'Lettuce, celery, apple, grape, walnut, waldorf sauce', price: '52$' },
      { name: 'Syrah', description: 'Lettuce, celery, apple, grape, walnut, waldorf sauce', price: '52$' },
      { name: 'Big Banyan', description: 'Lettuce, celery, apple, grape, walnut, waldorf sauce', price: '52$' },
      { name: 'Cabernet Sauvignon', description: 'Lettuce, celery, apple, grape, walnut, waldorf sauce', price: '52$' },
      { name: 'Sangiovese', description: 'Lettuce, celery, apple, grape, walnut, waldorf sauce', price: '52$' },
      { name: 'Sula', description: 'Lettuce, celery, apple, grape, walnut, waldorf sauce', price: '52$' },

    ],
    salad: [
      { name: 'Waldorf Salad', description: 'Lettuce, celery, apple, grape, walnut, waldorf sauce', price: '52$' },
      { name: 'Grilled Salmon Salad', description: 'Lettuce, celery, apple, grape, walnut, waldorf sauce', price: '52$' },
      { name: 'Waldorf Salad', description: 'Lettuce, celery, apple, grape, walnut, waldorf sauce', price: '52$' },
      { name: 'Chicken Cobb Salad', description: 'Lettuce, celery, apple, grape, walnut, waldorf sauce', price: '52$' },
      { name: 'Quinoa & Avocado Salad', description: 'Lettuce, celery, apple, grape, walnut, waldorf sauce', price: '52$' },
      { name: 'Salad Chicken', description: 'Lettuce, celery, apple, grape, walnut, waldorf sauce', price: '52$' },

    ],
    breakfast: [
      { name: 'Egg Benedict', description: 'Lettuce, celery, apple, grape, walnut, waldorf sauce', price: '52$' },
      { name: 'Salmon Bagel', description: 'Lettuce, celery, apple, grape, walnut, waldorf sauce', price: '52$' },
      { name: 'Rusty’s Omlette', description: 'Lettuce, celery, apple, grape, walnut, waldorf sauce', price: '52$' },
      { name: 'Rusty’s Pancake', description: 'Lettuce, celery, apple, grape, walnut, waldorf sauce', price: '52$' },
      { name: ' English muffin with cheese', description: 'Lettuce, celery, apple, grape, walnut, waldorf sauce', price: '52$' },
      { name: ' Fruit pudding', description: 'Lettuce, celery, apple, grape, walnut, waldorf sauce', price: '52$' },

    ],
    dessert: [
      { name: 'Bourbon Pecan Pie', description: 'Lettuce, celery, apple, grape, walnut, waldorf sauce', price: '52$' },
      { name: 'Cheesecake', description: 'Lettuce, celery, apple, grape, walnut, waldorf sauce', price: '52$' },
      { name: 'Rusty’s ice-cream', description: 'Lettuce, celery, apple, grape, walnut, waldorf sauce', price: '52$' },
      { name: 'Rabri', description: 'Lettuce, celery, apple, grape, walnut, waldorf sauce', price: '52$' },
      { name: 'Basundi', description: 'Lettuce, celery, apple, grape, walnut, waldorf sauce', price: '52$' },
      { name: 'Gulab jamun', description: 'Lettuce, celery, apple, grape, walnut, waldorf sauce', price: '52$' },

    ],
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
        <div className="resturant-info">
        <div className="resto-body">
          <span className='star-icon'>
            <i class="ri-star-s-fill"></i>
            <i class="ri-star-s-fill"></i>
            <i class="ri-star-s-fill"></i>
            <i class="ri-star-s-fill"></i>
            <i class="ri-star-s-fill"></i>
          </span>
          <p className='small-heading'>AN EXPERIENCE FOR THE SENSES</p>
          <h1 className='heading'>The Resturant</h1>
          <p>Welcome to Sukh-Sagar, Pune's Pinnacle of 5-Star Luxury.Nestled in the heart of Pune, Sukh-Sagar stands as the city's premier destination for luxury and indulgence. As you enter our distinguished establishment, we extend to you a warm and gracious welcome to a world of opulence and refinement.</p>
          <p>Indulge in the height of comfort and sophistication as you explore our world-class amenities, savor exquisite culinary delights, and retire to the tranquility of our lavish accommodations. </p>
          <section class="hours">
            <h2>Hours</h2>
            <ul>
              <li><i class="fa fa-clock-o"></i> Breakfast: 7:00 am - 11:00 am (daily)</li>
              <li><i class="fa fa-clock-o"></i> Lunch: 12:00 noon - 2:00 pm (daily)</li>
              <li><i class="fa fa-clock-o"></i> Dinner: open from 6:30 pm, last order at 10:00 pm (daily)</li>
            </ul>
          </section>
          <section class="dress-code">
            <h2>Dress Code</h2>
            <p>Smart casual (no shorts, hats, or sandals permitted)</p>
          </section>
          <section class="terrace">
            <h2>Terrace</h2>
            <p>Open for drinks only</p>
          </section>

        </div>
      </div>
      <div className="menu-container">
        <p className='sub-heading'>Luxury Hotel</p>
        <h1 className='resto-heading'>Restaurant Menu</h1>
        <Slider ref={setSliderRef} {...settings1}>
          {Object.keys(menuContent).map((tab) => (
            <div key={tab} className="menu-tab-container">
              <button
                className={`menu-tab ${activeTab === tab ? 'active' : ''}`}
                onClick={() => {
                  setActiveTab(tab);
                  sliderRef.slickGoTo(Object.keys(menuContent).indexOf(tab));
                }}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            </div>
          ))}
        </Slider>
        <div className="menu-content">
          {menuContent[activeTab].map((item, index) => (
            <div key={index} className="menu-item">
              <div className="name-price">
                <h3>{item.name}</h3>
                <span className="price">{item.price}</span>
              </div>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Testimonial /> 
    </>
  )
}

export default Resturant
