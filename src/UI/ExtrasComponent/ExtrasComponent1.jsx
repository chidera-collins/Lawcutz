import React from 'react'

function ExtrasComponent1() {
  return (
    <div className='min-h-[400px] w-full flex flex-col items-center  justify-center relative extrabc'>
        <div className='absolute flex   text-4xl font-bold min-h-[10px] before:h-[100px] tracking-[5px] text-textc'>
            <h1>CONTACT US</h1>
        </div>
        
        <div className='min-h-[100px] w-full flex justify-center items-center after:w-[10px] after:h-[10px] after:rotate-[40deg] after:bg-btncolo relative after:left-[10px] before:h-[10px] before:w-[10px] before:bg-btncolo before:rotate-[40deg] text-2xl font-bold text-btncolo '>
                    <h1>________________</h1> 
        </div>
       

    </div>
  )
}

export default ExtrasComponent1