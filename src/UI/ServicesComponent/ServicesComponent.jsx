import React from 'react'
import ServicesComponent1 from './ServicesComponent1'
import ServicesComponent2 from './ServicesComponent2'
import ServicesComponent3 from './ServicesComponent3'
import ServicesComponent4 from './ServicesComponent4'
import ServicesComponent5 from './ServicesComponent5'

function ServicesComponent() {
  return (
    <div className='min-h-[100px] bg-MainBg'>
      <ServicesComponent1/>
      <ServicesComponent2/>
      <ServicesComponent3/>
      <ServicesComponent4/>
      <ServicesComponent5/>
    </div>
  )
}

export default ServicesComponent