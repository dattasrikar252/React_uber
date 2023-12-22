import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import RiderRegistration from './components/Register/Rider/RRider';
import Registration from './components/Register/User/RUser';
function App() {
  return (
    <React.Fragment>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} /> 
        <Route path="/RiderRegistration" element={<RiderRegistration />} /> 
        <Route path="/UserRegistration" element={<Registration />} /> 
      </Routes>
      <Footer />
    </Router>
  </React.Fragment>
  );
}

export default App;
