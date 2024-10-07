import React from 'react'
import haircut from '../HomeComponent/Homepictures/haircut.jpg'
import beard from '../HomeComponent/Homepictures/beard.jpg'
import shaving from '../HomeComponent/Homepictures/shaving.jpg'
import razor from '../HomeComponent/Homepictures/razor.jpg'

function ServicesComponent4() {
  return (
    <div className='h-[1900px] md:h-[2500px] mt-[20px] lg:h-[700px] lg:items-center w-full bg-MainBg grid grid-cols-1 lg:grid-cols-4 p-[20px] box-border gap-[10px]'>
    <div className='h-[450px] md:h-[600px] bg-MainBg md:w-[80%] md:translate-x-[80px] lg:translate-x-0 lg:w-full relative flex items-end lg:h-[420px]'>
        <div className='h-[120px] w-[40%] bottom-[70px] absolute md:bottom-[50px] lg:bottom-[50px] border-[1px] border-btncolo'>
            
        </div>
        <div className='h-[290px] md:h-[400px] absolute w-[80%] top-[40px] left-[30px] lg:absolute md:absolute lg:bottom-[80px] lg:left[30px] lg:h-[250px] md:top-[30px]'>
            <img src={haircut} height='100%' width='100%'  alt="" />

        </div>
        <div className='h-[120px]  w-[40%] top-[1px] right-0 absolute border-[1px] border-btncolo'>
        
        </div>
        <div className='h-[50px] w-full flex items-center justify-center font-bold text-textc'>
            <h1>HAIRCUTS</h1>
        </div>

    </div>
    <div className='h-[450px] md:h-[600px] bg-MainBg md:w-[80%] md:translate-x-[80px] lg:translate-x-0 lg:w-full relative flex items-end lg:h-[420px]'>
        <div className='h-[120px] w-[40%] bottom-[70px] absolute md:bottom-[50px] lg:bottom-[50px] border-[1px] border-btncolo'>
            
        </div>
        <div className='h-[290px] md:h-[400px] absolute w-[80%] top-[40px] left-[30px] lg:absolute md:absolute lg:bottom-[80px] lg:left[30px] lg:h-[250px] md:top-[30px]'>
            <img src={beard} height='100%' width='100%'  alt="" />

        </div>
        <div className='h-[120px]  w-[40%] top-[1px] right-0 absolute border-[1px] border-btncolo'>
        
        </div>
        <div className='h-[50px] w-full flex items-center justify-center font-bold text-textc'>
            <h1>BEARDS</h1>
        </div>

    </div>
    <div className='h-[450px] md:h-[600px] bg-MainBg md:w-[80%] md:translate-x-[80px] lg:translate-x-0 lg:w-full relative flex items-end lg:h-[420px]'>
        <div className='h-[120px] w-[40%] bottom-[70px] absolute md:bottom-[50px] lg:bottom-[50px] border-[1px] border-btncolo'>
            
        </div>
        <div className='h-[290px] md:h-[400px] absolute w-[80%] top-[40px] left-[30px] lg:absolute md:absolute lg:bottom-[80px] lg:left[30px] lg:h-[250px] md:top-[30px]'>
            <img src={shaving} height='100%' width='100%'  alt="" />

        </div>
        <div className='h-[120px]  w-[40%] top-[1px] right-0 absolute border-[1px] border-btncolo'>
        
        </div>
        <div className='h-[50px] w-full flex items-center justify-center font-bold text-textc'>
            <h1>SHAVING</h1>
        </div>

    </div>

    <div className='h-[450px] md:h-[600px] bg-MainBg md:w-[80%] md:translate-x-[80px] lg:translate-x-0 lg:w-full relative flex items-end lg:h-[420px]'>
        <div className='h-[120px] w-[40%] bottom-[70px] absolute md:bottom-[50px] lg:bottom-[50px] border-[1px] border-btncolo'>
            
        </div>
        <div className='h-[290px] md:h-[400px] absolute w-[80%] top-[40px] left-[30px] lg:absolute md:absolute lg:bottom-[80px] lg:left[30px] lg:h-[250px] md:top-[30px]'>
            <img src={razor} height='100%' width='100%'  alt="" />

        </div>
        <div className='h-[120px]  w-[40%] top-[1px] right-0 absolute border-[1px] border-btncolo'>
        
        
        </div>
        <div className='h-[50px] w-full flex items-center justify-center font-bold text-textc'>
            <h1>RAZOR BLADE</h1>
        </div>

    </div>
   


</div>
  )
}

export default ServicesComponent4