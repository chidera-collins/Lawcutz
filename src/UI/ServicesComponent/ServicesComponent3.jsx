import React from 'react'

function ServicesComponent3() {
  return (
    <div className='bg-MainBg min-h-[300px] mt-[30px]'>
        <div className='min-h-[300px] bg-MainBg grid grid-cols-1 lg:grid-cols-2 p-[10px] md:hidden'>
            <div>
                <div>
                    <h1 className='text-3xl font-bold tracking-[5px] text-textc'>HAIRCUT</h1>
                </div>
                <div className='p-[10px]'>
                    <ul>
                        <li className='text-2xl font-light text-textc'>
                                Regular Haircut........................... <span>$37</span> 
                        </li>
                        <li className='text-2xl font-light text-textc'>
                            Scissors Haircut........................... <span>$40</span>
                        </li>
                        <li className='text-2xl font-light text-textc'>
                              Kids Haircut.................................. <span>$30</span>
                        </li>
                    </ul>
                </div>
           
            </div>
            <div className='mt-[10px]'>
                 <div>
                    <h1 className='text-3xl font-bold tracking-[5px] text-textc'>SHAVE</h1>
                </div>
                <div className='p-[10px]'>
                    <ul>
                        <li className='text-2xl font-light text-textc'>
                                Head Shave................................. <span>$27</span> 
                        </li>
                        <li className='text-2xl font-light text-textc'>
                            Royal Shave................................. <span>$33</span>
                        </li>
                        <li className='text-2xl font-light text-textc'>
                              Royal Head Shave...................... <span>$33</span>
                        </li>
                        <li className='text-2xl font-light text-textc'>
                              Beard Trim No Shave................. <span>$35</span>
                        </li>
                        <li className='text-2xl font-light text-textc'>
                              Beard Trim Shave........................ <span>$35</span>
                        </li>
                        <li className='text-2xl font-light text-textc'>
                              Beard Shave Up.......................... <span>$30</span>
                        </li>
                    </ul>
                </div>

            </div>
            <div className='mt-[10px]'>
                 <div>
                    <h1 className='text-3xl font-bold tracking-[5px] text-textc'>FACIAL</h1>
                </div>
                <div className='p-[10px]'>
                    <ul>
                        <li className='text-2xl font-light text-textc'>
                                Deep Pore Cleansing................. <span>$50</span> 
                        </li>
                        <li className='text-2xl font-light text-textc'>
                             Aromatherapy Facial.................. <span>$45</span>
                        </li>
                        <li className='text-2xl font-light text-textc'>
                            Acne Problem Facial.................. <span>$60</span>
                        </li>
                        <li className='text-2xl font-light text-textc'>
                            European Facial........................... <span>$59</span>
                        </li>
                        <li className='text-2xl font-light text-textc'>
                            Glycolic Peel Facial...................... <span>$35</span>
                        </li>
                       
                    </ul>
                </div>
            </div>
            <div className='mt-[10px]'>
                <div>
                    <h1 className='text-3xl font-bold tracking-[5px] text-textc'>PACKAGE</h1>
                </div>
                <div className='p-[10px]'>
                    <ul>
                        <li className='text-2xl font-light text-textc'>
                             Haircut + Shave.......................... <span>$27</span> 
                        </li>
                        <li className='text-2xl font-light text-textc'>
                            Haircut + Beard Trim.................. <span>$33</span>
                        </li>
                        <li className='text-2xl font-light text-textc'>
                             Haircut + Beard Trim Shave..... <span>$33</span>
                        </li>
                        <li className='text-2xl font-light text-textc'>
                             Haircut + Beard Shape Up....... <span>$35</span>
                        </li>
                       
                       
                    </ul>
                </div>
            </div>
        </div>

                    {/* //FOR LARGE AND MEDIUM SCREEN */}

        <div className='min-h-[300px] hidden bg-MainBg md:w-[96%] md:translate-x-4  grid-cols-1 lg:grid-cols-2 p-[10px] md:grid lg:gap-[4px]'>
            <div>
                <div>
                    <h1 className='text-4xl font-bold tracking-[5px] text-textc'>HAIRCUT</h1>
                </div>
                <div className='p-[10px]'>
                    <ul>
                        <li className='text-2xl font-light text-textc'>
                                Regular Haircut.................................................................................. <span>$37</span> 
                        </li>
                        <li className='text-2xl font-light text-textc'>
                            Scissors Haircut................................................................................. <span>$40</span>
                        </li>
                        <li className='text-2xl font-light text-textc'>
                              Kids Haircut........................................................................................ <span>$30</span>
                        </li>
                    </ul>
                </div>
           
            </div>
            <div className='mt-[10px] lg:mt-[50px]'>
                 <div>
                    <h1 className='text-3xl font-bold tracking-[5px] text-textc'>SHAVE</h1>
                </div>
                <div className='p-[10px]'>
                    <ul>
                        <li className='text-2xl font-light text-textc'>
                                Head Shave....................................................................................... <span>$27</span> 
                        </li>
                        <li className='text-2xl font-light text-textc'>
                            Royal Shave....................................................................................... <span>$33</span>
                        </li>
                        <li className='text-2xl font-light text-textc'>
                              Royal Head Shave............................................................................ <span>$33</span>
                        </li>
                        <li className='text-2xl font-light text-textc'>
                              Beard Trim No Shave....................................................................... <span>$35</span>
                        </li>
                        <li className='text-2xl font-light text-textc'>
                              Beard Trim Shave.............................................................................. <span>$35</span>
                        </li>
                        <li className='text-2xl font-light text-textc'>
                              Beard Shave Up................................................................................ <span>$30</span>
                        </li>
                    </ul>
                </div>

            </div>
            <div className='mt-[10px]'>
                 <div>
                    <h1 className='text-3xl font-bold tracking-[5px] text-textc'>FACIAL</h1>
                </div>
                <div className='p-[10px]'>
                    <ul>
                        <li className='text-2xl font-light text-textc'>
                                Deep Pore Cleansing...................................................................... <span>$50</span> 
                        </li>
                        <li className='text-2xl font-light text-textc'>
                             Aromatherapy Facial....................................................................... <span>$45</span>
                        </li>
                        <li className='text-2xl font-light text-textc'>
                            Acne Problem Facial....................................................................... <span>$60</span>
                        </li>
                        <li className='text-2xl font-light text-textc'>
                            European Facial............................................................................... <span>$59</span>
                        </li>
                        <li className='text-2xl font-light text-textc'>
                            Glycolic Peel Facial.......................................................................... <span>$35</span>
                        </li>
                       
                    </ul>
                </div>
            </div>
            <div className='lg:mt-[120px] mt-[10px]'>
                <div>
                    <h1 className='text-3xl font-bold tracking-[5px] text-textc'>PACKAGE</h1>
                </div>
                <div className='p-[10px]'>
                    <ul>
                        <li className='text-2xl font-light text-textc'>
                             Haircut + Shave............................................................................... <span>$27</span> 
                        </li>
                        <li className='text-2xl font-light text-textc'>
                            Haircut + Beard Trim...................................................................... <span>$33</span>
                        </li>
                        <li className='text-2xl font-light text-textc'>
                             Haircut + Beard Trim Shave.......................................................... <span>$33</span>
                        </li>
                        <li className='text-2xl font-light text-textc'>
                             Haircut + Beard Shape Up............................................................ <span>$35</span>
                        </li>
                       
                       
                    </ul>
                </div>
            </div>
        </div>
    </div>
  
  )
}

export default ServicesComponent3