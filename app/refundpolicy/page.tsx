import UserLayout from '@/components/Layout/UserLayout'
import Content from '@/app/refundpolicy/Content'
import Hero from '@/app/refundpolicy/Hero'
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
