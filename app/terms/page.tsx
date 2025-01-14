import UserLayout from '@/components/Layout/UserLayout'
import Content from '@/app/terms/Content'
import Hero from '@/app/terms/Hero'
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
