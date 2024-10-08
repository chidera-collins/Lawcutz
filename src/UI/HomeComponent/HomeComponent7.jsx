import React from 'react'
import secondpic from './Homepictures/secondpic.png'
// import { Link } from 'react-router-dom'
import { Link } from 'react-router-dom'


function HomeComponent7() {
  return (
    <div className='middlebc h-[820px] w-full bg-MainBg grid grid-rows-2 md:h-[1000px] lg:h-[820px]  lg:grid lg:grid-cols-2  lg:justify-center p-[10px] box-border'>
        <div className=' w-[80%] translate-x-7 md:-translate-x-27 lg:w-full picsfade'>
            <img src={secondpic} height='100%' width='100%' alt="" />

        </div>
        <div className=' md:mt-[140px]'>
          <div>
                <h1 className='text-textc font-bold text-[40px] md:text-[50px] lg:text-[60px] fadetext2'>
                    We'll Crafting <span>CONFIDENCE</span> Through Sharp Style
                </h1>
                <p className='text-textc font-light text-start text-[16px] md:text-[18px] lg:leading-7 fadetext3'>
                    We take pride in providing top-notch grooming services that blend classic techniques with modern trends. 
                    Step into our warm and inviting space, where you'll find a team of skilled barbers dedicated to enhancing your style and confidence
                    
                </p>
          </div>
            <div>
                <div className='bg-btncolo cursor-pointer font-bold w-[110px] flex items-center justify-center mt-[10px] fadetext3'>
                    <Link to={'/Booknow'}>BOOK NOW</Link>
                </div>

            </div>
        </div>

    </div>
  )
}

export default HomeComponent7