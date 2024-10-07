import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from './Homepictures/slider1.jpg'
import slider2 from './Homepictures/slider2.jpg'
import slider3 from './Homepictures/slider3.jpg'
import slider4 from './Homepictures/slider4.jpg'
import slider5 from './Homepictures/slider5.jpg'
import slider6 from './Homepictures/slider6.jpg'

function HomeComponent5() {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "10px",
        slidesToShow: 3,
        speed: 500
      };
  return (
    <div className='w-full hidden md:block lg:hidden slider-container bg-MainBg md:h-[400px] p-[20px] box-border'>
             <Slider {...settings}>
            <div className='h-[300px] relative'>
                <div className='h-[200px] relative'>
                    <h3><img src={slider1} width='100%' height='100%' alt="" /></h3>

                </div>
                <div className=' h-[30px] w-full absolute bottom-[60px] flex items-center justify-center text-btncolo font-bold text-5xl'>
                    <h1># 1</h1>
                </div>
                 <div className='  absolute bottom-[58px] flex items-center justify-center text-textc w-full font-bold text-2xl  opacity-3'>
                     <h1>SLICK BLACK</h1>
                 </div>
            </div>
            <div className='h-[300px] relative'>
                <div className='h-[200px] relative'>
                    <h3><img src={slider2} width='100%' height='100%' alt="" /></h3>

                </div>
                <div className=' h-[30px] w-full absolute bottom-[60px] flex items-center justify-center text-btncolo font-bold text-5xl'>
                    <h1># 2</h1>
                </div>
                 <div className='  absolute bottom-[58px] flex items-center justify-center text-textc w-full font-bold text-2xl  opacity-3'>
                     <h1>CLASSIC QUIFF</h1>
                 </div>
            
            </div>
            <div className='h-[300px]  relative'>
                <div className='h-[200px] relative'>
                    <h3><img src={slider3} width='100%' height='100%' alt="" /></h3>

                </div>
                <div className=' h-[30px] w-full absolute bottom-[60px] flex items-center justify-center text-btncolo font-bold text-5xl'>
                    <h1># 3</h1>
                </div>
                 <div className='  absolute bottom-[58px] flex items-center justify-center text-textc w-full font-bold text-2xl  opacity-3'>
                     <h1>POMPADOUR</h1>
                 </div>
            
            </div>
            <div className='h-[300px]  relative'>
                <div className='h-[200px] relative'>
                    <h3><img src={slider4} width='100%' height='100%' alt="" /></h3>
                </div>
                <div className=' h-[30px] w-full absolute bottom-[60px] flex items-center justify-center text-btncolo font-bold text-5xl'>
                    <h1># 4</h1>
                </div>
                 <div className='  absolute bottom-[58px] flex items-center justify-center text-textc w-full font-bold text-2xl  opacity-3'>
                     <h1>FRINGE</h1>
                 </div>
            
            </div>
            <div className='h-[300px]  relative'>
                <div className='h-[200px] relative'>
                    <h3><img src={slider5} width='100%' height='100%' alt="" /></h3>
                </div>
                <div className=' h-[30px] w-full absolute bottom-[60px] flex items-center justify-center text-btncolo font-bold text-5xl'>
                    <h1># 5</h1>
                </div>
                 <div className='  absolute bottom-[58px] flex items-center justify-center text-textc w-full font-bold text-2xl  opacity-3'>
                     <h1>CURLY FADE</h1>
                 </div>
            
            </div>
            <div className='h-[300px]  relative'>
                <div className='h-[200px] relative'>
                    <h3><img src={slider6} width='100%' height='100%' alt="" /></h3>
                </div>
                <div className=' h-[30px] w-full absolute bottom-[60px] flex items-center justify-center text-btncolo font-bold text-5xl'>
                    <h1># 6</h1>
                </div>
                 <div className='  absolute bottom-[58px] flex items-center justify-center text-textc w-full font-bold text-2xl  opacity-3'>
                     <h1>UNDERCUT</h1>
                 </div>
            </div>
      </Slider>
    </div>
  )
}

export default HomeComponent5