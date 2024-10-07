import React from 'react'
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { ImScissors } from "react-icons/im";


function FooterComponent() {
  return (
    <div className='min-h-[200px] bg-MainBg w-full grid grid-cols-1 items-center justify-center lg:grid-cols-3 p-[10px]'>
        <div>
          <ul className='flex justify-center gap-[20px] lg:justify-s'>
            <li className='text-4xl bg-btncolo text-textc'><a href="https:instagram.com"><FaInstagramSquare /></a></li>
            <li className='text-4xl bg-btncolo text-textc'>
              <a href="https:facebook.com"><FaFacebookF /></a>
            </li>
            <li className='text-4xl bg-btncolo text-textc'>
              <a href="https.twitter.com"><FaTwitter /></a>
            </li>
            <li className='text-4xl text-textc bg-btncolo'>
              <a href="https.linkeldln.com"><FaLinkedin /></a>
            </li>
            <li>
              <a href="https.pinterest.com"></a>
            </li>
          </ul>
        </div>
        <div className='flex items-center  justify-center'>
           <h1 className='flex items-center text-[20px] text-textc font-bold'>Lawn <ImScissors className='text-[70px] md:text-[90px] text-[#f1c40f]'/> CUTz</h1>

        </div>
        <div className='text-center text-2xl lg:text-3xl font-bold text-textc'>
          <h1>Copyright 2024- LawnCutz by DeraCodes❤</h1>
        </div>

    </div>
  )
}

export default FooterComponent