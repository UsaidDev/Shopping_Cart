import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';
import Logout from '../Logout/Logout';
import Productdetails from '../ProductDetails/Productdetails';
function AppRoutes() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logout" element={<Logout />} />
          <Route path='/product/:id' element={<Productdetails />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
export default AppRoutes;