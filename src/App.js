//App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import RiderRegistration from './components/Register/Rider/RRider';
import Registration from './components/Register/User/RUser';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const handleLogout = () => {
    // Handle logout logic
    setIsAuthenticated(false);
  };

  return (
    <React.Fragment>
    <Router>
    <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      <Routes>
      <Route
            path="/login"
            element={<Login isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />}
          />
        <Route path="/RiderRegistration" element={<RiderRegistration />} /> 
        <Route path="/UserRegistration" element={<Registration />} /> 
      </Routes>
      <Footer />
    </Router>
  </React.Fragment>
  );
}

export default App;
