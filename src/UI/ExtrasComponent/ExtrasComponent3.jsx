import React, { useState } from 'react'
import CustomButton from '../../ReusableComponent/ButtonFile/CustomButton'
import ReCAPTCHA from 'react-google-recaptcha'

function ExtrasComponent3() {
  let [Capp, setCapp] = useState(null);
  let handleCaptchaChang = (value) => {
    setCapp(value);
};
function check() {
   
  if (!Capp) {
       alert('Please complete the form and CAPTCHA');
     } else{
      alert('your details has been recieved')
     }
  
}
  return (

    
 <form action="">

       <div className='min-h-[685px] flex items-center p-[30px] box-border relative  extrabgg flex-col'>
              <div className='min-h-[400px] top-[40px] border-[2px] border-btncolo w-[90%]  md:w-[96%] lg:w-[50%] absolute '>
                <div className='absolute flex  justify-center w-full  text-4xl font-bold min-h-[10px] :h-[100px] tracking-[5px] text-textc mt-2'>
                      <h1>MESSAGE US</h1>
                </div>
                  <div className='min-h-[100px] w-full flex justify-center items-center after:w-[10px] after:h-[10px] after:rotate-[40deg] after:bg-btncolo relative after:left-[10px] before:h-[10px] before:w-[10px] before:bg-btncolo before:rotate-[40deg] text-2xl font-bold text-btncolo '>
                    <h1>________________</h1> 
                  </div>
                  <div className='text-center p-[10px] box-border text-2xl font-light text-textc'>
                    <p>if you got any questions please do not hesistate to send us a message</p>

                    <input type="text" placeholder=' Your Name' required className=' h-[45px] w-[300px] md:w-[650px] mt-[10px] lg:w-[600px] outline-none border-btncolo border-[2px] active:scale-x-100 active:bg-btncolo'/>

                    <input type="text" placeholder=' Your Email' required className='h-[45px] w-[300px] md:w-[650px] mt-[20px] lg:w-[600px] outline-none border-btncolo border-[2px] active:scale-x-100 active:bg-btncolo'/>

                    <input type="number" placeholder=' Your Number' required className='h-[45px] w-[300px] md:w-[650px] mt-[20px] lg:w-[600px] outline-none border-btncolo border-[2px] active:scale-x-100 '/>

                    <textarea name="" id="" placeholder=' Your Message' required className='w-[300px] mt-[20px] h-[130px] md:w-[650px] lg:w-[600px]'></textarea>
                   <div className='flex items-center flex-col mt-[10px] gap-2'>
                   <ReCAPTCHA
                            sitekey='6LdUDVMqAAAAALoPREO-PBtew4gE9-nybDbf5ccf'
                            onChange={handleCaptchaChang}
                          
                          />

                    <CustomButton
                          height = '40px'
                          width = '190px'
                          backgroundColor = '#f1c40f'
                          label = 'SEND MESSAGE'
                          onClick={check}
                      
                        />
                   </div>
                        

                  </div>



                    
                </div>
                <div className='min-h-[700px] md:min-h-[650px] lg:min-h-[689px] border-[2px] border-btncolo w-full lg:w-[50%]'>
                  

                </div>
                
          </div>
</form>

  
  

  )
}

export default ExtrasComponent3