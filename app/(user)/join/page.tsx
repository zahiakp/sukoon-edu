import UserLayout from '@/components/Layout/UserLayout'
import React from 'react'
import Hero from './Hero'
import Forms from './Forms'

function page() {
  return (
    <UserLayout>
      <Hero/>
      <Forms/>
    </UserLayout>
  )
}

export default page
