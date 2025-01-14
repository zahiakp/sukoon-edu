import UserLayout from '@/components/Layout/UserLayout'
import Content from '@/app/privacypolicy/Content'
import Hero from '@/app/privacypolicy/Hero'
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
