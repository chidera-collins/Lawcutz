import React from 'react'
import { Link } from 'react-router-dom'
import firstpic from './Homepictures/firstpic.png'
// import CustomButton from '../../ReusableComponent/ButtonFile/CustomButton'

function HomeComponent1() {
  return (
    <div className='h-[800px] md:h-[900px] w-full bg-MainBg homebc flex flex-col lg:grid lg:grid-cols-2 p-[10px] box-border'>
        <div className='md:h-[280px]  lg:h-[550px] text-start h-[300px] '>
            <div className='lg:flex lg:items-center lg:justify-center lg:flex-col lg:h-[450px] lg:mt-[120px] p-[10px]'>
                <h1 className='text-textc font-bold text-3xl md:text-[40px] lg:text-[80px] lg:leading-[70px]'>
                    YOUR <span>BEST LOOK</span>, RIGHT IN OUR CHAIR!
                </h1>
                <p className='text-[20px] font-medium mt-5 text-textc'>
                   Established with a passion for the art of barbering, we take great pride in our craft and strive to create an atmosphere that feels like home
                 </p> 
            </div>
            <div>
                <div className='bg-btncolo cursor-pointer font-bold w-[110px] flex items-center justify-center'>
                    <Link to={'/Booknow'}>BOOK NOW</Link>
                </div>
            </div>
            
        </div>
    
        <div className='lg:h-[490px]  w-full h-[350px] md:h-[620px] md:w-[80%] md:translate-x-[90px] lg:w-full fadepic'>
            <img src={firstpic} alt=""  />

        </div>

        
    </div>
  )
}

export default HomeComponent1