import React, { useState, useRef } from 'react';
import {  useNavigate } from 'react-router-dom';
import sampleimg from './sampleimg.jpg';
import './Login.css';
import AuthService from '../../services/AuthService';

function Login() {
  const [showRegistrationOptions, setShowRegistrationOptions] = useState(false);
  const navigate = useNavigate();

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
const authService = new AuthService();
const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    const email = usernameRef.current.value;
    const password = passwordRef.current.value;

    try {
      const token = await authService.login(email, password);
      console.log('Token:', token);
      navigate('/RiderRegistration');
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
