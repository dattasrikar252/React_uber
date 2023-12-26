// Navbar.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import RiderRegistration from '../Register/Rider/RRider';

const Navbar = ({ isAuthenticated,setIsAuthenticated }) => {
  const [isActive, setIsActive] = useState(false);
  

  const toggleNavbar = () => {
    setIsActive(!isActive);
  };
  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <nav className={`navbar ${isActive ? 'active' : ''}`}>
      <div className="logo">Your Logo</div>
      <div className="hamburger-menu" onClick={toggleNavbar}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/">Contact</Link>
      </div>
      {isAuthenticated ? (
        <div className="nav-links1">
          <Link onClick={handleLogout}>Logout</Link>
        </div>
      ) : (
        <div className="nav-links1">
          <Link to="/login">Login/SignUp</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

