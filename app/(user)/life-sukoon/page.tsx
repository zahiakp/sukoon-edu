import UserLayout from '@/components/Layout/UserLayout'
import React from 'react'
import Hero from './Hero'
import SukoonianLife from './SukoonianLife'
import Features from './Features'

function page() {
  return (
    <UserLayout>
      <Hero/>
      <Features/>
      <SukoonianLife/>
    </UserLayout>
  )
}

export default page
