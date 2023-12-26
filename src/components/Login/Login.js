//login.js

import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import sampleimg from './sampleimg.jpg';
import './Login.css';
import AuthService from '../../services/AuthService';

function Login({ isAuthenticated, setIsAuthenticated }) {
  const [showRegistrationOptions, setShowRegistrationOptions] = useState(false);
  
  const navigate = useNavigate();
  const authService = new AuthService();
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  useEffect(() => {
    // If the user is already authenticated, redirect them to the home page
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const handleShowRegistrationOptions = () => {
    setShowRegistrationOptions(true);
  };

  const handleRoleSelection = (role) => {
    if (role === 'rider') {
      navigate('/RiderRegistration');
    } else {
     
      navigate('/UserRegistration'); 
    }
};


  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    const email = usernameRef.current.value;
    const password = passwordRef.current.value;

    try {
      const token = await authService.login(email, password);
      console.log('Token:', token);
      setIsAuthenticated(true);
      navigate('/');
    } catch (error) {
      // Handle errors, such as displaying an error message to the user
      console.error('Login error:', error.message);
    }
  };

   
  return (
    <div className="container">
      <div className="image-container">
        <img src={sampleimg} alt="Sample" className="image" />
      </div>
      <form className="login-container">
        <h1>Login</h1>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" ref={usernameRef} name="username" placeholder="Enter your username" />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" ref={passwordRef} name="password" placeholder="Enter your password" />

        <div className="button-container1">
          <button className="Login" onClick={handleLoginSubmit}>
            Login
          </button>
          {isAuthenticated && (
        <div className="nav-links1">
          <Link to="/">Logout</Link>
        </div>
        )}
          <br />
          <br />

          <div className="new-user-link">
            <p>
              New user?{' '}
              <span onClick={handleShowRegistrationOptions} className="registration-link">
                Register here
              </span>
            </p>
          </div>

          {/* Registration Options */}
          {showRegistrationOptions && (
          <div className="registration-options">
          <p>Choose your role:</p>
          <button class="User" onClick={() => handleRoleSelection('user')} variant="contained" color="Gold">
            User
          </button>
          <button class="User" onClick={() => handleRoleSelection('rider')} variant="contained" color="Gold">
            Rider
          </button>
        </div>
        
          )}
        </div>
      </form>
    </div>
  );
}

export default Login;
