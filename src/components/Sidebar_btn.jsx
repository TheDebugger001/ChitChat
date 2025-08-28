import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Sidebar_btn = ({ icon, label, onClick, active, page }) => {

  return (
      <Link to={page} className='w-full h-1/7 flex items-center justify-center'><div onClick={onClick} className={`w-11/12 h-full rounded-md flex items-center gap-10 hover:bg-gray-600/10 hover:cursor-pointer ${active ? 'bg-gray-600/10' : ''}`}
      >
         {icon && <div className={`ml-5 text-xl text-gray-300 font-light ${active ? 'text-orange-500' : ''}`}>{icon}</div>}
         {label && <div className={`text-xl font-small text-gray-300 ${active ? 'text-orange-500' : ''}`}>{label}</div>}
      </div>
      </Link>
  )
}

export default Sidebar_btn