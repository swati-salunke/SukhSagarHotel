import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offsetY = window.scrollY;
      if (offsetY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (

   <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
   <button 
        className="navbar-menu" 
        onClick={() => setMenuOpen(!isMenuOpen)}
      >
        ☰
      </button>
      <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        {isMenuOpen && (
          <button 
            className="navbar-close" 
            onClick={() => setMenuOpen(false)}
          >
            &times;
          </button>
        )}
        <div className="navbar-logo">
            <Link to="/"><img src="images/resturant.png" alt="Logo" /></Link>
        </div>
        <Link to="/about">About</Link>
        
        <div className="dropdown">
          <button className="room_suites" onClick={() => setShowDropdown(!showDropdown)}>
            Room & Suites
          </button>
          {showDropdown && (
            <div className="dropdown-content">
              <Link to="/room">Room</Link>
              <Link to="/roomdetails">Room Details</Link>
            </div>
          )}
        </div>

        <Link to="/resturant">Resturant</Link>
        <Link to="/spa">SPA Wellness</Link>
        <Link to="/blog">Blog</Link>
      </div>
      <Link to="/contact" className="cta-button-link">
          <button className="cta-button">Enquire Now</button>
        </Link>
    </nav>
  );
}

export default Navbar;
