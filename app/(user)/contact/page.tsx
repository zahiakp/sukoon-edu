

import UserLayout from '@/components/Layout/UserLayout'
import React from 'react'
import Hero from './Hero'
import Content from './Content'

function page() {
  
  return (
    <UserLayout>
      <Hero/>
      <Content/>
    </UserLayout>
  )
}

export default page
