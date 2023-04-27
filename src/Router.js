import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import Signup from './pages/Signup/Signup';
import Nav from './components/Nav/Nav';
import Cart from './pages/Cart/Cart';
import Detail from './components/Detail/Detail';
import Category from './pages/Category/Category';
import Footer from './components/Footer/Footer';
const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/detail/:productDetailId" element={<Detail />} />
        <Route path="/products/category/:id" element={<Category />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
