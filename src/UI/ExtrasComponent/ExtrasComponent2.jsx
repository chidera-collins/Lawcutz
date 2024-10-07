import React from 'react'
import { MdLocationPin } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";


function ExtrasComponent2() {
  return (
    <div className='min-h-[200px] bg-MainBg grid grid-cols-1 lg:grid-cols-3 p-[10px] box-border gap-[30px] border-b-2'>
        <div className='min-h-8  flex flex-col items-center'>
            <div>
                <h1 className='text-7xl bg-btncolo text-textc'><MdLocationPin /></h1>

            </div>
            <div className='text-center'>
                <h1 className='text-2xl font-light text-textc'>Our Address</h1>
                <h1 className='text-3xl font-bold text-textc'>100 Mainstreet Center, NY</h1>
            </div>

        </div>
        <div className='min-h-8  flex flex-col items-center'>
            <div>
                <h1 className='text-7xl bg-btncolo text-textc'><FaPhone /></h1>

            </div>
            <div className='text-center'>
                <h1 className='text-2xl font-light text-textc'>Phone Number</h1>
                <h1 className='text-3xl font-bold text-textc'>+234 333 9296</h1>
            </div>
        </div>
        <div className='min-h-8 flex flex-col items-center'>
            <div>
                <h1 className='text-7xl bg-btncolo text-textc'><MdOutlineMail /></h1>

            </div>
            <div className='text-center'>
                <h1 className='text-2xl font-light text-textc'>Email Address</h1>
                <h1 className='text-3xl font-bold text-textc'>contact@support.com</h1>
            </div>

        </div>
    </div>
  )
}

export default ExtrasComponent2