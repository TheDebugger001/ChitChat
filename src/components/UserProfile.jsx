import React from 'react'
import Gojo from '../../public/profiles/Gojo.jpeg'
import Yoshita from '../../public/profiles/face1.jfif'

const UserProfile = () => {
  return (
    <div className='w-full h-full rounded-full'>
      <img src={Gojo} alt="" className='w-full h-full rounded-full object-cover'/>
    </div>
  )
}

export default UserProfile