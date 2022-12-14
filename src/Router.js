import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import Signup from './pages/Signup/Signup';
import Nav from './components/Nav/Nav';
import Cart from './pages/Cart/Cart';
import Category from './pages/Category/Category';
import Footer from './components/Footer/Footer';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/nav" element={<Nav />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/category" element={<Category />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
