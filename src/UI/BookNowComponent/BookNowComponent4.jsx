import React, { useRef, useState } from 'react'
import staff1 from './BooknowPictures/staff1.jpg'
import staff2 from './BooknowPictures/staff2.jpg'
import staff3 from './BooknowPictures/staff3.jpg'
import staff4 from './BooknowPictures/staff4.jpg'
import CustomButton from '../../ReusableComponent/ButtonFile/CustomButton'
import ReCAPTCHA from 'react-google-recaptcha'


//6LdUDVMqAAAAALoPREO-PBtew4gE9-nybDbf5ccf

function BookNowComponent4() {
    let [opal ,setOpal] = useState(0.5)
    let [transit, setTransit] =useState('')
    let[opal2, setOpal2] =useState(0.5)
    let[opal3, setOpal3] =useState(0.5)
    let[opal4, setOpal4] =useState(0.5)
    function hoverr() {
        if (opal === 0.5) {
            setOpal(1)
            setTransit(5)
            setOpal2(0.5)
            setOpal3(0.5)
            setOpal4(0.5)
            
        } else {
            setOpal(1) 
            setTransit('')

        }   
    }
    function hoverr2() {
        if (opal2 === 0.5) {
            setOpal2(1)
            setOpal(0.5)
            setOpal3(0.5)
            setOpal4(0.5)
            
        } else {
            setOpal2(1)       
        }   
    }
    function hoverr3() {
        if (opal3 === 0.5) {
            setOpal3(1)
            setOpal(0.5)
            setOpal2(0.5)
            setOpal4(0.5)
            
        } else {
            setOpal3(0.5)
        }   
    }
    function hoverr4() {
        if (opal4 === 0.5) {
            setOpal4(1)
            setOpal(0.5)
            setOpal3(0.5)
            setOpal2(0.5)
            
        } else {
            setOpal4(0.5)
               
        }   
        
    }
    // refrence for email 
    // let date = useRef('')
    // let mail = useRef('')
    // let name = useRef('')
    // let phone = useRef('')

    function check() {
     
        if (!capval) {
             alert('Please complete the form and CAPTCHA');
           } else{
            alert('your details has been recieved')
           }
        
    }
    const [capval, setCapval] = useState(null)
        const handleCaptchaChange = (value) => {
            setCapval(value);
        };
  return (
    <form onSubmit={(e)=> e.preventDefault()} action="">
         <div className='min-h-[200px] w-full bg-MainBg grid grid-cols-1 lg:grid-cols-2'>
            <div className='min-h-[200px] bg-MainBg p-[10px] box-border'>
                <div className='min-h-[40px] w-[80%]  text-[20px] flex items-center translate-x-9 md:translate-x-[90px] font-bold md:text-3xl text-textc tracking-[5px]'>
                    <h1 className='booking'>
                        CHOOSE STAFF
                    </h1>
                </div>
                <div className='min-h-[160px] md:min-h-[300px] w-[80%]  translate-x-9 md:translate-x-[93px] bg-MainBg grid grid-cols-4 gap-[10px] mt-[10px]'>
                    <div className='min-h-[10px] '>
                        <div className='min-h-[10px]'>
                            <img src={staff1} height='100%' width='100%' alt=""onClick={hoverr} style={{opacity:opal, transition:transit}} />
                        </div>
                        <div className='min-h-[10px] text-center font-bold text-textc text-xl md:text-4xl'>
                            <h1>
                                Huey
                            </h1>

                        </div>

                    </div>
                    <div className='min-h-[10px] '>
                        <div className='min-h-[10px]'>
                            <img src={staff2} height='100%' width='100%' onClick={hoverr2} style={{opacity:opal2}} alt="" />
                        </div>
                        <div className='min-h-[10px] text-center font-bold text-textc text-xl md:text-4xl'>
                            <h1>
                                Steven
                            </h1>

                        </div>

                    </div>
                    <div className='min-h-[10px]'>
                        <div className='min-h-[10px]'>
                            <img src={staff3} height='100%'onClick={hoverr3} style={{opacity:opal3}} width='100%' alt="" />
                        </div>
                        <div className='min-h-[10px] text-center font-bold text-textc text-xl md:text-4xl'>
                            <h1>
                                Harry
                            </h1>

                        </div>

                    </div>
                    <div className='min-h-[10px]'>
                        <div className='min-h-[10px]'>
                            <img src={staff4} height='100%' width='100%' onClick={hoverr4} style={{opacity:opal4}} alt="" />
                        </div>
                        <div className='min-h-[10px] text-center font-bold text-textc text-xl md:text-4xl'>
                            <h1>
                                Axe
                            </h1>

                        </div>

                    </div>      

                </div>
            </div>
            <div className='min-h-[200px] bg-MainBg  p-[10px] box-border'>
                <div className='min-h-[40px] w-[80%]  text-[20px] flex items-center translate-x-9 md:translate-x-[90px] lg:translate-x-0 font-bold md:text-3xl text-textc tracking-[5px]'>
                    <h1 className='booking'>
                            SELECT DATE
                    </h1>
                </div>
                <div className='min-h-[40px] bg-[pink] w-[80%] translate-x-9 md:translate-x-[93px] lg:translate-x-0 mt-[15px]'>
                    <input type="date" className='min-h-[40px] w-[100%] border-[2px] outline-none border-btncolo' required/>
                </div>
                <div className='min-h-[40px] w-[80%]  text-[20px] flex items-center translate-x-9 md:translate-x-[90px] lg:translate-x-0 font-bold md:text-3xl text-textc tracking-[5px] mt-[20px]'>
                    <h1 className='booking'>
                            SELECT TIME
                    </h1>
                </div>
                <div className='grid grid-cols-4 md:grid-cols-7 w-[85%] translate-x-9 md:translate-x-[95px] lg:translate-x-0 md:w-[80%] gap-[10px] cursor-pointer mt-[20px]'>
                    <div className='bg-MainBg text-center font-bold text-textc hover:bg-btncolo hover:scale-x-110'>
                        <h1>8:00AM</h1>
                    </div>
                    <div className='bg-MainBg text-center font-bold text-textc hover:bg-btncolo hover:scale-x-110'>
                        <h1>9:00AM</h1>
                    </div>
                    <div className='bg-MainBg text-center font-bold text-textc hover:bg-btncolo hover:scale-x-110'>
                        <h1>10:00AM</h1>
                    </div>
                    <div className='bg-MainBg text-center font-bold text-textc hover:bg-btncolo hover:scale-x-110'>
                        <h1>11:00AM</h1>
                    </div>
                    <div className='bg-MainBg text-center font-bold text-textc hover:bg-btncolo hover:scale-x-110'>
                        <h1>12:00PM</h1>
                    </div>
                    <div className='bg-MainBg text-center font-bold text-textc hover:bg-btncolo hover:scale-x-110'>
                        <h1>1:00PM</h1>
                    </div>
                    <div className='bg-MainBg text-center font-bold text-textc hover:bg-btncolo hover:scale-x-110'>
                        <h1>2:00PM</h1>
                    </div>
                    <div className='bg-MainBg text-center font-bold text-textc hover:bg-btncolo hover:scale-x-110'>
                        <h1>3:00PM</h1>
                    </div>
                    <div className='bg-MainBg text-center font-bold text-textc hover:bg-btncolo hover:scale-x-120'>
                        <h1>4:00PM</h1>
                    </div>
                    <div className='bg-MainBg text-center font-bold text-textc hover:bg-btncolo hover:scale-x-110'>
                        <h1>5:00PM</h1>
                    </div>
                    <div className='bg-MainBg text-center font-bold text-textc hover:bg-btncolo hover:scale-x-110'>
                        <h1>6:00PM</h1>
                    </div>
                    <div className='bg-MainBg text-center font-bold text-textc hover:bg-btncolo hover:scale-x-110'>
                        <h1>7:00PM</h1>
                    </div>
                    <div className='bg-MainBg text-center font-bold text-textc hover:bg-btncolo hover:scale-x-110'>
                        <h1>8:00PM</h1>
                    </div>
                    <div className='bg-MainBg text-center font-bold text-textc hover:bg-btncolo hover:scale-x-110'>
                        <h1>9:00PM</h1>
                    </div>

                </div>
                
            </div>
            <div className='min-h-[140px] bg-MainBg'>
                <div className='min-h-[40px] w-[80%]  text-[20px] flex items-center translate-x-9 md:translate-x-[90px] font-bold md:text-3xl text-textc tracking-[5px]'>
                    <h1 className='booking'>
                            YOUR DETAILS
                    </h1>
                </div>
                <div className='min-h-[140px] w-[80%] flex flex-col gap-5 translate-x-9 md:translate-x-[95px] mt-[10px] lg:mt-[15px]'>
                    <input type="text" placeholder='name' className='min-h-[30px] lg:min-h-[40px] w-[100%]' required />
                    <input type="email" placeholder='  Your Email ' className='min-h-[30px] lg:min-h-[40px] ' required/>
                    <input type="text" placeholder='  Your Phone ' className='min-h-[30px] lg:min-h-[40px] ' required/>
                </div>
            </div>
            <div className='min-h-[250px]'>
                <textarea name="" id="" placeholder='  Enter Your Message'  className='min-h-[200px] w-[85%] md:w-[80%] lg:w-[85%] mt-[10px]  translate-x-6 md:translate-x-[95px] lg:translate-x-0 lg:mt-[30px]'></textarea>
            </div>
        </div>
        <div className=' col-span-2 min-h-[50px] bg-MainBg flex items-center justify-center flex-col gap-[10px]'>
            <ReCAPTCHA
             sitekey='6LdUDVMqAAAAALoPREO-PBtew4gE9-nybDbf5ccf'
             onChange={handleCaptchaChange}
            
            />
            {}
            <CustomButton
                height = '40px'
                width = '90px'
                backgroundColor = '#f1c40f'
                label = 'SUBMIT'
                onClick={check}
            
            />

        </div>
    </form>
  )
}

export default BookNowComponent4