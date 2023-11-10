import React from 'react'
import { useSelector } from 'react-redux'
import Slider from '../../components/Slider'
import Products from '../../components/Products'
import Footer from '../../components/Footer'

const Home = () => {

  return (
    <div>
      <Slider/>
      <Products/>
      <Footer/>
    </div>
  )
}

export default Home