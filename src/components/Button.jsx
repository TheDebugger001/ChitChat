import React from 'react'


const Button = ({ onClick, children }) => {
  return (
    <div className='w-full h-full flex items-center justify-center'>
      <button 
        onClick={onClick} 
        className='w-9/12 h-9/12 bg-orange-500 text-lg font-medium rounded-xl hover:bg-orange-500/90 active:transform active:scale-95 active:transition active:duration-95'
      >
        {children}
      </button>
    </div>
  )
}

export default Button
