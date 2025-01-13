import React from 'react'
import LoginForm from './Form'

function page() {
  return (
    <div className='w-screen h-screen flex items-center justify-center relative overflow-hidden'>
      <LoginForm/>
      <img src="/svg/Logo.svg" alt="" className="w-[500px] hidden md:block absolute -bottom-44 -right-20 opacity-10 " />
    </div>
  )
}

export default page
