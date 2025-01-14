import Content from '@/app/contact/Content'
import ContactForm from '@/app/contact/Form'
import Hero from '@/app/contact/Hero'
import UserLayout from '@/components/Layout/UserLayout'
import React from 'react'

function page() {
  return (
    <UserLayout>
      <Hero/>
      <Content/>
      <ContactForm/>
    </UserLayout>
  )
}

export default page
