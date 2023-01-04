import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from "react-router-dom"

import Footer from './Components/Footer'
import Navbar from './Components/Navbar'; 
import Profile from './Pages/Profile';
import Products from './Pages/Products';
import About from './Pages/About'
import Cart from './Pages/Cart'
import Contact from './Pages/Contact'
import ErrorPage from './Pages/ErrorPage';
import Home from './Pages/Home';
import SingleProduct from './Pages/SingleProduct';

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path='/profile' element={<Profile/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App