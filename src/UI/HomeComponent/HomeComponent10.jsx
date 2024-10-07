import React from 'react'
import { Link } from 'react-router-dom'

function HomeComponent10() {
  return (
    <div className='h-[50px] w-full flex justify-center bg-MainBg'>
        <div className='bg-btncolo cursor-pointer font-bold w-[300px] flex items-center justify-center mt-[10px] fadetext3'>
                     <Link to={'/services'}>ALL SERVICES AND PRICES</Link>
        </div>
        
    </div>
  )
}

export default HomeComponent10