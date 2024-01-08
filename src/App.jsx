import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Room from './pages/Room';
import Resturant from './pages/Resturant';
import SPA from './pages/SPA';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import RoomDeatils from './pages/RoomDeatils';
import Home from './pages/Home';

const App = () => {
  return (
  <>
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}/>
         <Route path="/about" element={<About/>} />
         <Route path="/room" element={<Room/>} />
         <Route path="/roomdetails" element={<RoomDeatils/>} />
         <Route path="/resturant" element={<Resturant/>}/>
         <Route path='/spa' element={<SPA/>}/>
         <Route path='/blog' element={<Blog />}/>
         <Route exact path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </Router>
    </>
  );
};

export default App;
