import UserLayout from '@/components/Layout/UserLayout'
import React from 'react'
import Hero from './Hero'
import Projects from './Projects'

function page() {
  return (
    <UserLayout>
    <Hero/>
    <Projects/>
  </UserLayout>
  )
}

export default page
