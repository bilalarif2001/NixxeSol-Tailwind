import React from 'react'
import company6 from '../assets/company-6.png'
import company7 from '../assets/company-7.png'
import company8 from '../assets/company-8.png'
import company9 from '../assets/company-9.png'
import company10 from '../assets/company-10.png'

function Companies2() {
  return (
    <div className="py-60 container mx-auto flex justify-between space-x-2">
    <div className='p-6 shadow-lg rounded-xl'>
    <img src={company6}/>
    </div>
    <div className='p-6 shadow-lg rounded-xl'>
    <img src={company7}/>
    </div>
    <div className='p-6 shadow-lg rounded-xl'>
    <img src={company8}/>
    </div>
    <div className='p-6 shadow-lg rounded-xl'>
    <img src={company9}/>
    </div>
    <div className='p-6 shadow-lg rounded-xl'>
    <img src={company10}/>
    </div>
        </div>
  )
}

export default Companies2