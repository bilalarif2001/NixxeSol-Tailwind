import React from 'react'
import flask from '../Svgs/flask.svg'

function Card() {
  return (
    <div className='bg-white p-4 border w-[277px] shadow-lg shadow-gray-100'>
    <img src={flask} className='mx-auto mb-6'/>
    <h4 className='text-center font-Proxima font-semibold mb-2'>Branding Design</h4>
    <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto pariatur corrupti aut quasi ea expedita eum magni, doloribus</p>
    </div>
  )
}

export default Card