import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Homepage from '../Pages/Homepage'

const Routing = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Homepage/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default Routing