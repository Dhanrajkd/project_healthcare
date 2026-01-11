import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import logo from './images/Logo.png'
import Navbar from './pages/Navbar'
import Navlink from './pages/Navlink'
import Home from './pages/Home'
import Context from './Context/Context'
import Footer from './pages/Footer'
import Product_detail from '../src/pages/Product_details'
import Readmore from './pages/Readmore'
import Allproducts from './pages/Allproducts'
import Career from './pages/Career'
import Contactus from './pages/Contactus'
import Aboutus from './pages/Aboutus'
function App() {

  return (
   <div>
      <Navlink/>
      <Context>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='/productdetails/:category' element={<Product_detail/>} />
          <Route path='/readmore/:category/:id' element={<Readmore/>} />
          <Route path='/allproducts' element={<Allproducts/>} />
          <Route path='/career' element={<Career/>} />
          <Route path='/contactus' element={<Contactus />} />
          <Route path='/aboutus' element={<Aboutus/>}/>
        </Routes>
      </Context>
      <Footer/>
   </div>
  )
}
export default App
