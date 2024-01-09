import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import React from 'react';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Room from './pages/Room';
import RoomDetails from './pages/RoomDetails';
import Resturant from './pages/Resturant';
import SPA from './pages/SPA';
import Blog from './pages/Blog';
import Contact from './pages/Contact';


const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About  />} />
          <Route path="/room" element={<Room />} />
          <Route path="/roomdetails" element={<RoomDetails />} />
          <Route path="/resturant" element={<Resturant />} />
          <Route path="/spa" element={<SPA />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
