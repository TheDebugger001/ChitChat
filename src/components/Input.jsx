import React from 'react'

const Input = ({type, placeholder}) => {
  return (
    <div className='w-full h-full flex items-center justify-evenly'>
      <input type={type} placeholder={placeholder} className='w-8/12 h-[2.7em] rounded-full text-md font-light text-white ring-1 ring-gray-500 pl-10 focus:ring-2 placeholder:font-light focus:ring-orange-500 outline-none'/>
    </div>
  )
}

export default Input