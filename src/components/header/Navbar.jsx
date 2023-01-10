// import { useState } from 'react'
// import Navbar from '../header/Navbar.jsx';
import { Routes, Route } from 'react-router-dom';
import Products from '../body/Products.jsx';
import AddProduct from '../body/AddProduct.jsx';
import Home from '../body/Home.jsx';
// import Carousel from './components/body/small_components/Carousel.jsx';
import LoginForm from '../body/auth/LoginForm.jsx';
import RegisterForm from '../body/auth/RegisterForm.jsx';

function Navbar() {

  return (
    <div>
      {/* <Navbar /> */}
      {/* <Carousel /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/list" element={<Products />} />
        <Route path="/products/list" element={<Products />} />
        <Route path="/products/add" element={<AddProduct />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </div>
  )
}

export default Navbar