import React from 'react'
import staff1 from '../BookNowComponent/BooknowPictures/staff1.jpg'
import staff2 from '../BookNowComponent/BooknowPictures/staff2.jpg'
import staff3 from '../BookNowComponent/BooknowPictures/staff3.jpg'
import staff4 from '../BookNowComponent/BooknowPictures/staff4.jpg'

function AboutComponent5() {
    const dev= [
        {
            name:'STEVEN PORRECA',
            img:staff1
            // a:'https/'
            
        },
        {
            img:staff2,
            name: 'HUEY APICELLAA'
        },
        {
            img:staff3,
            name:'HARRY RIECKE'
        },
        {
            name:'MERILYN AXE',
            img:staff4
        }
    ];
  return (
    <div  className='min-h-[200px] w-full bg-MainBg gap-[30px] p-[30px] box-border grid grid-cols-1 lg:grid-cols-4 relative items-center '>
        {dev.map((dev,index)=>(
            <div key={index} className='  relative min-h-[200px] text-center  before:h-[250px] before:w-[200px] before:border-[2px] before:border-solid before:border-btncolo before:absolute before:left-0 before:bottom-[40px] after:h-[250px] after:w-[200px] after:border-[2px] after:border-solid after:border-btncolo after:absolute after:top-0 after:right-0 md:hidden lg:block '> 
                <img className=' w-full' src={dev.img} alt={dev.name} />
                <p className='text-textc text-3xl font-bold tracking-[2px]'>{dev.name}</p>
                {/* <a href="www.instagram.com">ig</a> */}

                
            </div>
        ))}
                    {/* for medium screen  */}
           {dev.map((dev,index)=>(
            <div key={index} className='  relative min-h-[200px] text-center  before:h-[500px] before:w-[400px] before:border-[2px] before:border-solid before:border-btncolo before:absolute before:left-[2px] before:bottom-[30px] after:h-[500px] after:w-[400px] after:border-[2px] after:border-solid after:border-btncolo after:absolute after:top-0 after:right-0 md:block lg:hidden hidden'> 
                <img className=' w-full z-[10px]' src={dev.img} alt={dev.name} />
                <p className='text-textc text-3xl font-bold tracking-[2px]'>{dev.name}</p>
                {/* <a href="www.instagram.com">ig</a> */}
                
            </div>
        ))}
       
      
    </div>
  );
}
export default AboutComponent5;