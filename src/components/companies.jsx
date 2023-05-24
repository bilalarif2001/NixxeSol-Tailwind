import React from 'react'
import company1 from '../assets/company-1.png'
import company2 from '../assets/company-2.png'
import company3 from '../assets/company-3.png'
import company4 from '../assets/company-4.png'
import company5 from '../assets/company-5.png'

function Companies() {
  return (
    <div className='bg-black flex p-10 justify-around mb-52'>
        <img src={company1}/>
        <img src={company2}/>
        <img src={company3}/>
        <img src={company4}/>
        <img src={company5}/>
    </div>
  )
}

export default Companies