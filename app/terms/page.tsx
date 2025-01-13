import UserLayout from '@/components/Layout/UserLayout'
import Content from '@/components/terms/Content'
import Hero from '@/components/terms/Hero'
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
