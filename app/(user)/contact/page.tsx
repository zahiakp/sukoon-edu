
'use client'
import UserLayout from '@/components/Layout/UserLayout'
import React from 'react'
import Hero from './Hero'
import Content from './Content'
import dynamic from 'next/dynamic'

function page() {
  const ContactForm = dynamic(() => import('./Form'), { ssr: false });
  return (
    <UserLayout>
      <Hero/>
      <Content/>
      <ContactForm/>
    </UserLayout>
  )
}

export default page
