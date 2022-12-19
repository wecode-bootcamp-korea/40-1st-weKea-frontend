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
import Detail from './components/Detail/Detail';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route element={<Nav />} />
        <Route path="/main" element={<Main />} />
        <Route path="/category" element={<Category />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/detail/:productDetailId" element={<Detail />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/nav" element={<Nav />} />
        <Route path="/products/category/:id" element={<Category />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
