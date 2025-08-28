import React from 'react'


const With_Button = ({ children }) => {
  return (
    <div className='w-2/12 h-8/13 ring-1 ring-gray-500 flex items-center justify-center rounded-xl'>
      <div className='w-11/14 h-10/12 flex item-center justify-center'>{children}</div>
    </div>
  )
}

export default With_Button