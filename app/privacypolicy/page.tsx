import UserLayout from '@/components/Layout/UserLayout'
import Content from '@/components/privacypolicy/Content'
import Hero from '@/components/privacypolicy/Hero'
import React from 'react'

function page() {
  return (
    <UserLayout >
      <Hero/>
      <Content/>
    </UserLayout>
  )
}

export default page
