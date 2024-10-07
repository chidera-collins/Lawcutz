import React from 'react'

function BookNowComponent3() {
  return (
    <div className='min-h-[250px] w-full bg-MainBg grid grid-cols-1 lg:grid-cols-4 justify-center p-[10px] gap-[10px] lg:gap-[20px] '>
        <div className='w-[80%] translate-x-9 md:translate-x-[90px]  lg:w-[80%] lg:translate-x-[80px]'>
            <div className='min-h-[20px] bg-btncolo  text-MainBg flex items-center font-bold text-3xl'>
                <h1>HAIRCUTS</h1>
            </div>
            <div>
                <ul className='text-[23px] text-textc font-light leading-[35px]'> 
                    <li>
                        <input type="checkbox" /> Regular Haircut
                    </li>
                    <li>
                        <input type="checkbox" /> Scissors Haircut
                    </li>
                    <li>
                     <input type="checkbox" /> Kids Haircut

                    </li>
                </ul>
            </div>

        </div>
        <div className='w-[80%] translate-x-9 md:translate-x-[90px] lg:w-[80%] lg:translate-x-10'>
            <div className='min-h-[20px] bg-btncolo  text-MainBg flex items-center font-bold text-3xl'>
                <h1>SHAVE</h1>
            </div>
            <div>
                <ul className='text-[23px] font-light text-textc leading-[35px]'> 
                    <li>
                        <input type="checkbox" /> Head Shave
                    </li>
                    <li>
                        <input type="checkbox" /> Royal Shave
                    </li>
                    <li>
                     <input type="checkbox" /> Royal Head Shave
                    </li>
                    <li>
                     <input type="checkbox" /> Beard Trim No Shave
                    </li>
                    <li>
                     <input type="checkbox" /> Beard Trim Shave
                    </li>
                    <li>
                     <input type="checkbox" /> Beard Shave Up
                    </li>
                </ul>
            </div>

        </div>
        <div className='w-[80%] translate-x-9 md:translate-x-[90px] lg:translate-x-0 lg:w-[80%]'>
            <div className='min-h-[20px] bg-btncolo text-MainBg flex items-center font-bold text-3xl'>
                <h1>FACIAL</h1>
            </div>
            <div>
                <ul className='text-[23px] font-light text-textc leading-[35px]'> 
                    <li>
                        <input type="checkbox" /> Deep Pore Cleansing
                    </li>
                    <li>
                        <input type="checkbox" /> Aromatherapy Facial
                    </li>
                    <li>
                     <input type="checkbox" /> Acne Problem Facial
                    </li>
                    <li>
                     <input type="checkbox" /> European Facia
                    </li>
                    <li>
                     <input type="checkbox" /> Glycolic Peel Facial
                    </li>
                   
                </ul>
            </div>

        </div>
        <div className='w-[80%] translate-x-9 md:translate-x-[90px] lg:translate-x-[-50px] lg:w-[80%]'>
            <div className='min-h-[20px] bg-btncolo text-MainBg flex items-center font-bold text-3xl'>
                <h1>PACKAGE</h1>
            </div>
            <div>
                <ul className='text-[23px] font-light leading-[35px] text-textc'> 
                    <li>
                        <input type="checkbox" /> Haircut + Shave
                    </li>
                    <li>
                        <input type="checkbox" /> Haircut + Beard Trim
                    </li>
                    <li>
                     <input type="checkbox" />  Haircut + Beard Trim Shave
                    </li>
                    <li>
                     <input type="checkbox" /> Haircut + Beard Shape Up
                    </li>
                 
                   
                </ul>
            </div>

        </div>
        

    </div>
  )
}

export default BookNowComponent3