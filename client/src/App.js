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
import Admin from './Pages/Admin';
import EditProduct from './Pages/EditProduct';
import AdminOrder from './Pages/AdminOrder';
import AdminLoginpage from './Pages/AdminLoginpage';
import AdminHome from './Pages/AdminHome';
import AdminNavbar from './Components/AdminNavbar';
import OrdersPage from './Pages/OrdersPage';
import UserOrders from './Pages/UserOrders';

const App = () => {
  return (
    <>  
    <Navbar/>
    {/* <AdminNavbar/> */}
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
          <Route path="/editproduct/:id" element={<EditProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/userorders" element={<UserOrders/>} />

          <Route path="*" element={<ErrorPage />} />
          <Route path='/profile' element={<Profile/>}/>
          <Route path="/addPro" element={<Admin />} />
          <Route path="/addOrd" element={<OrdersPage/>} />
          {/* <Route path="/addOrd" element={<AdminOrder/>} /> */}

          <Route path="/adminLoginPage" element={<AdminLoginpage/>} />
          <Route path='/admhome' element={<AdminHome/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App