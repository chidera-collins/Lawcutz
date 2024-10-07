import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HeaderComponent from './ConstantComponents/HeaderComponent/HeaderComponent'
import HomeComponent from './UI/HomeComponent/HomeComponent'
import ServicesComponent from './UI/ServicesComponent/ServicesComponent'
import AboutComponent from './UI/AboutComponent/AboutComponent'
import BookNowComponent from './UI/BookNowComponent/BookNowComponent'
import ExtrasComponent from './UI/ExtrasComponent/ExtrasComponent'
import FooterComponent from './ConstantComponents/FooterComponent/FooterComponent.Jsx'

function Lawn() {
  return (
    <div className=' bg-MainBg'>
        <BrowserRouter>
            <HeaderComponent/>
            <Routes>
                <Route path='/' element={<HomeComponent/>}/>
                <Route path='/services' element={<ServicesComponent/>}/>
                <Route path='/About' element={<AboutComponent/>}/>
                <Route path='/Booknow' element={<BookNowComponent/>}/>
                <Route path='/Extras' element={<ExtrasComponent/>}/>

            </Routes>
            <FooterComponent/>
        
        </BrowserRouter>

        
    </div>
  )
}

export default Lawn