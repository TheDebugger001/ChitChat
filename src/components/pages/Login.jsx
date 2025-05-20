import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Input from '../Input'
import Button from '../Button'
import With_Button from '../With_Button'

const Login = () => {

   const navigate = useNavigate();

   const handleSignUp = () => {
      navigate('/home')
   }


  return (
    <div className='w-full h-screen bg-gray-900 flex items-center justify-center'>
      <div className='w-10/11 h-10/11 bg-gray-900 ring-1 ring-white/30 rounded-xl flex items-center justify-between overflow-hidden'>
         {/* Image impletion for the users */}
         <div className='w-7/12 h-full bg-gray-700'>
            
         </div>

         {/* User login and Sign in form. */}
         <div className='w-4/10 h-full flex flex-col items-center justify-evenly'>
            <div className='w-full h-2/20 bg-indigo-700'>

            </div>

            <div className='w-full h-1/12 flex items-center justify-center'>
               <p className='text-4xl font-semibold text-orange-500'>Create an account</p>
            </div>

            {/* The inputs */}
            <div className='w-full h-6/14 flex flex-col'>
               <Input type='text' placeholder='Full names' />
               <Input type="text" placeholder='Username' />
               <Input type="text" placeholder='Email' />
               <Input type="text" placeholder='Password' />
               <Input type="text" placeholder='Confirm Password' />

            </div>

            {/* The submitting button */}
            <div className='w-full h-2/18'>
            <Button onClick={handleSignUp}>Sign Up</Button>
            </div>

            {/* Sign In with the other things like Google and Apple */}
            <div className='w-9/12 h-2/14 flex flex-col items-center justify-evenly'>
               <div className='w-full h-1/10 flex items-center justify-center'>
                  <p className='text-gray-400 flex items-center'>-------- <span className='text-gray-200 text-sm'>-  Or Sign In with - </span> -------</p>
               </div>

               <div className='w-full h-9/10 flex items-center justify-evenly'>
                  <With_Button>
                  <img src="/images_with/google.png" alt="" className='w-10/12 h-11/12'/>
                  </With_Button>

                  <With_Button>
                  <img src="/images_with/apple.png" alt="" className='w-10/12 h-11/12'/>
                  </With_Button>

                  <With_Button>
                  <img src="/images_with/facebook.png" alt="" className='w-10/12 h-11/12'/>
                  </With_Button>
               </div>
            </div>

            {/* Already have an account. */}
            <div className='w-full h-1/20 flex items-center justify-center relative -top-[.8em]'>
               <p className='font-sm text-gray-400'>Already have an account? <Link to="/login"     className='text-orange-500 font-medium hover:underline'>Login</Link>
               </p>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Login