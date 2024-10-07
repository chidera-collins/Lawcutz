import React from 'react'

function HomeComponet11() {
  return (
    <div className=' bottombc min-h-[300px] w-full bg-[yellow]  grid grid-cols-1 lg:grid-cols-2 p-[20px] box-border gap-[20px]'> 
        <div className='min-h-[600px] w-full relative p-[10px]'>
            <div className='min-h-[480px] w-full absolute border-[2px] border-btncolo right-[5px] top-[20px]'>
                <div className='max-h-[200px] w-full flex items-center justify-center flex-col mt-[10px]'>
                    <h1 className='text-3xl font-bold text-textc'>WE'RE OPEN</h1>
                    <h1 className='text-2xl font-bold text-btncolo'>__ ____ __</h1>
                </div>
                <div className='mt-[20px]'>
                    <ul className='flex flex-col items-center'>
                        <li className='font-bold text-textc'>Mon-Thurs</li>
                        <li className='text-3xl font-bold text-btncolo mt-[10px]'>7:30AM - 6:30PM</li>
                        <h1 className='md:hidden text-btncolo'>________________________________________________</h1>
                        <h1 className='hidden text-btncolo md:block'>__________________________________________________________________________________________________</h1>
                        <li className='font-bold text-textc mt-[10px]'>Friday</li>
                        <li className='text-3xl font-bold text-btncolo mt-[10px]'>8:30AM - 8:30PM</li>
                        <h1 className='md:hidden text-btncolo text-1xl font-bold'>__________________________________________________</h1>
                        <h1 className='hidden text-btncolo md:block'>__________________________________________________________________________________________________</h1>              
                        <li className='font-bold text-textc mt-[10px]'>Sat-Sun</li>
                        <li className='text-3xl font-bold text-btncolo mt-[10px]'>9:30AM - 5:30PM</li>
                        <h1 className='md:hidden text-btncolo text-1xl font-bold'>_________________________________________________</h1>
                        <h1 className='hidden text-btncolo md:block'>__________________________________________________________________________________________________</h1>


                    </ul>
                </div>

            </div>
            <div className='min-h-[480px] w-full  absolute right-0 border-[2px] border-btncolo top-[10px]'>

            </div>
            

        </div>
        <div className='min-h-[600px] w-full relative p-[10px] lg:mt-[20px]'>
            <div className='min-h-[480px] w-full absolute border-[2px] border-btncolo right-[5px] top-[20px]'>
                <div className='max-h-[200px] w-full flex items-center justify-center flex-col mt-[10px]'>
                    <h1 className='text-3xl font-bold text-textc'>LOCATION</h1>
                    <h1 className='text-2xl font-bold text-btncolo'>__ ____ __</h1>
                </div>
                <div className='mt-[20px]'>
                    <ul className='flex flex-col items-center'>
                        <li className='font-bold text-textc'>ADDRESS</li>
                        <li className='text-3xl font-bold text-btncolo mt-[10px] text-center'>100 MAINSTREET CENTER,NY</li>
                        <h1 className='md:hidden text-btncolo'>________________________________________________</h1>
                        <h1 className='hidden text-btncolo md:block'>__________________________________________________________________________________________________</h1>
                        <li className='font-bold text-textc mt-[10px]'>PHONE</li>
                        <li className='text-3xl font-bold text-btncolo mt-[10px] tracking-wider'>+234 90 80445787</li>
                        <h1 className='md:hidden text-btncolo text-1xl font-bold'>__________________________________________________</h1>
                        <h1 className='hidden text-btncolo md:block'>__________________________________________________________________________________________________</h1>              
                        <li className='font-bold text-textc mt-[10px]'>EMAIL</li>
                        <li className='text-2xl md:text-3xl font-bold text-btncolo mt-[10px]'>CONTACT@LAWN.COM</li>
                        <h1 className='md:hidden text-btncolo text-1xl font-bold'>_________________________________________________</h1>
                        <h1 className='hidden text-btncolo md:block'>__________________________________________________________________________________________________</h1>


                    </ul>
                </div>

            </div>
            <div className='min-h-[480px] w-full  absolute right-0 border-[2px] border-btncolo top-[10px]'>

            </div>
            

        </div>

    </div>
  )
}

export default HomeComponet11