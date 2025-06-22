import React from 'react'

const Sort_btn = ({children}) => {
  return (
    <div className='will-change-auto-auto h-3/5 w-20 bg-gray-700/30 flex items-center justify-center rounded-full text-gray-300/80 hover:cursor-pointer font-semibold'>
      {children}
    </div>
  )
}

export default Sort_btn