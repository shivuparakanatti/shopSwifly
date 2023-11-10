import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from '../src/pages/home/Home'
import Contact from './pages/contact/Contact'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Reset from './pages/auth/Reset'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductDetails from './pages/productDetails/ProductDetails'
import Cart from './pages/cart/Cart'
import Admin from './pages/admin/Admin'
import Checkout from './pages/checkout/Checkout'
import MyOrder from './pages/orderDetails/MyOrder'
import NameCard from './components/NameCard'


function App() {

  return (
   <div className=''>
    <ToastContainer/>

    <Header/>
    

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route  path='/contact' element={<Contact/>}/>
      <Route  path='/login' element={<Login/>}/>
      <Route  path='/register' element={<Register/>}/>
      <Route  path='/reset' element={<Reset/>}/>
      <Route  path='/cart' element={<Cart/>}/>
      <Route  path='/admin' element={<Admin/>}/>
      <Route  path='/checkout' element={<Checkout/>}/>
      <Route  path='/orders' element={<MyOrder/>}/>
      <Route  path='/:id' element={<ProductDetails/>}/>
    </Routes>
    
    
   </div>
  )
}

export default App
