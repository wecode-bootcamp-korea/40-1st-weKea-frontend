import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/login';
import Main from './pages/Main/main';
import Nav from './pages/Nav/nav';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/nav" element={<Nav />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
