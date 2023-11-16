import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';
import Logout from '../Logout/Logout';
function AppRoutes() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logout" element={<Logout/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
export default AppRoutes;
