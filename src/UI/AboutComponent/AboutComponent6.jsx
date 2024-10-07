import React from 'react'

function AboutComponent6() {
  return (
    <>
        <marquee behavior="alternate" direction="">

            <div className='min-h-[200px] w-full flex gap-[10px] items-center relative text-6xl font-bold text-textc'>
                <div className='min-h-[100px] flex items-center gap-2 after:w-[60px] after:h-[5px] after:bg-[yellow] relative'>
                    <div>
                    <h1>HAIR </h1>

                    </div>
                    <div>
                        <h1>DYE</h1>
                    </div>
                </div>
                <div className='min-h-[100px] flex items-center after:w-[60px] after:h-[5px]  after:bg-btncolo relative'>
                    <h1>SHAVE</h1>
                </div>
                <div className='min-h-[100px] flex items-center gap-2 after:w-[60px] after:h-[5px]  after:bg-btncolo relative'>
                    <div>
                    <h1>HAIR </h1>

                    </div>
                    <div>
                        <h1>COLOUR</h1>
                    </div>
                </div>
                <div className='min-h-[100px] flex items-center gap-2 after:w-[60px] after:h-[5px]  after:bg-btncolo relative'>
                    <div>
                    <h1>BEARD </h1>
                    </div>
                    <div>
                        <h1>TRIM</h1>
                    </div>
                </div>
                <div className='after:w-[60px] after:h-[5px] after:bg-btncolo relative min-h-[100px] flex items-center'>
                    <h1>FADED</h1>
                </div>
                <div className='after:w-[60px] after:h-[5px]  after:bg-btncolo relative min-h-[100px] flex items-center'>
                    <h1>FACIAL</h1>
                </div>
                <div className='after:w-[60px] after:h-[5px] after:bg-btncolo relative min-h-[100px] flex items-center'>
                    <h1>MASSAGE</h1>
                </div>
                <div className=' gap-2 after:w-[60px] after:h-[5px]  after:bg-btncolo relative min-h-[100px] flex items-center'>
                    <div className=''>
                        <h1>HAIR </h1>

                    </div>
                    <div>
                        <h1>CUT</h1>
                    </div>
                </div>
                <div className='min-h-[100px] flex items-center gap-2 after:w-[60px] after:h-[5px] after:bg-btncolo relative'>
                    <div>
                        <h1>HAIR </h1>

                    </div>
                    <div>
                        <h1>WASH</h1>
                    </div>
                </div>

            </div>
        </marquee>
        
        
    </>
  )
}

export default AboutComponent6