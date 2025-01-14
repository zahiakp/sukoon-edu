import Hero from '@/app/about/Hero';
import Mission from '@/app/about/Mission';
import Story from '@/app/about/Story';
import Vision from '@/app/about/Vision';
import UserLayout from '@/components/Layout/UserLayout';
import { Metadata } from 'next';
import React from 'react'


export const metadata: Metadata = {
    title: "About Us - Sukoon Edu Village",
    description: "Sukoon Edu Village is a sanctuary of harmony and learning, we nurture young minds through education and the universal language of love.",
  };

function page() {
  return (
    <UserLayout>
      <Hero/>
      <Story/>
      <Vision/>
      <Mission/>
    </UserLayout>
  )
}

export default page
