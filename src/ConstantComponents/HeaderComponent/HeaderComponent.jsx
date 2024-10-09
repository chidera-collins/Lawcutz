import React, { useState } from 'react'
import { ImScissors } from "react-icons/im"
import CustomButton from '../../ReusableComponent/ButtonFile/CustomButton'
import { Link } from 'react-router-dom'



function HeaderComponent() {
    let [navheight, Setnavheight] = useState(0)
    function navbar() {
        if (navheight == 0) {
            Setnavheight(400)
            
        } else {
            Setnavheight(0)
            
        }
        
    }
  return (
    <div className='bg-bbb relative '>
        <div className=' h-[80px] w-full bg-bbb flex justify-around items-center lg:hidden p-[10px]'>
          <div className=' w-[50%] p-[10px] font-bold'>
            <h1 className=''><ImScissors className='text-btncolo text-[40px] box-border'/></h1>
          </div>
          <div className='flex justify-end items-center gap-[10px] w-[60%] mr-[40px]'> 
            <div className='bg-btncolo cursor-pointer font-bold w-[110px] flex items-center justify-center'>
                  <Link to={'/Booknow'}>BOOK NOW</Link>
            </div>
            <div>
                <CustomButton
                  height = '30px'
                  width = '30px'
                  backgroundColor = '#ecf0f1'
                  label = 'Ξ'
                  fontWeight = 'bold'
                  fontSize= '20px'
                  color = '#212f3d'
                     onClick ={navbar}
                    // onClick={()=>alert('hello')}
                  />
            </div>    
          </div> 
          
        </div>
        <div onClick={navbar} className=' bg-[#151e26e4] absolute w-full lg:hidden text-textc font-bold text-4xl overflow-hidden  z-30 p-10px] box-border'  style={{height:navheight}}>
          <ul className='border-b-[1px] '>
            <li className='border-b-[1px]'>
              <Link to={'/'}>Home</Link>

            </li>
             <li className='border-b-[1px]'>
                <Link to={'/services'}>Services</Link>
              </li>
              <li className='border-b-[1px]'>
                <Link to={'/About'}>About</Link>
              </li>
              <li className='border-b-[1px]'>
                <Link to={'/Booknow'}>Book Now</Link>
              </li>
              <li className=''>
                <Link to={'/Extras'}>Extra</Link>
              </li>
          </ul>


        </div>


               {/* for large screen  */}
        <div className=' h-[80px] w-full bg-bbb hidden lg:flex lg:items-center lg:justify-around p-[15px]  gap-[20px]'>
          <div className='w-[20%]'>
              <h1 className='flex items-center text-[20px] text-textc font-bold'>Lawn <ImScissors className='text-[95px] md:text-[50px] text-[#f1c40f]'/> CUTz</h1>
          </div>
          <div className='w-[60%]'>
            <ul className='flex items-center justify-evenly text-textc font-bold'>
              <li>
                <Link to={'/'}>Home</Link>
              </li>
              <li>
                <Link to={'/services'}>Services</Link>
              </li>
              <li>
                <Link to={'/About'}>About</Link>
              </li>
              <li>
                <Link to={'/Booknow'}>Book Now</Link>
              </li>
              <li>
                <Link to={'/Extras'}>Extra</Link>
              </li>
            </ul>
          </div>
          <div className='w-[20%]'>
            <div className='bg-btncolo cursor-pointer font-bold w-[110px] flex items-center justify-center'>
                <Link to={'/Booknow'}>Book Now</Link>

            </div>
          </div>

        </div> 

    </div>



  )
}

export default HeaderComponent