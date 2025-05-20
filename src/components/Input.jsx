import React from 'react'

const Input = ({type, placeholder}) => {
  return (
    <div className='w-full h-full flex items-center justify-evenly'>
      <input type={type} placeholder={placeholder} className='w-9/12 h-[3.3em] rounded-lg text-md text-white ring-2 ring-gray-500 pl-10 focus:ring-2 focus:ring-orange-500 outline-none'/>
    </div>
  )
}

export default Input