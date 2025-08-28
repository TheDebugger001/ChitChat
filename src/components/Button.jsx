import React from 'react'


const Button = ({ onClick, children }) => {
  return (
    <div className='w-full h-full flex items-center justify-center'>
      <button 
        onClick={onClick} 
        className='w-9/12 h-9/12 bg-orange-500 text-lg font-medium rounded-xl active:transform active:scale-95 active:transition active:duration-95 hover:ring-1 hover:bg-transparent hover:ring-orange-500 hover:text-orange-500 transition duration-150 '
      >
        {children}
      </button>
    </div>
  )
}

export default Button
