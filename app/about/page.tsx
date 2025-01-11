import Hero from '@/components/about/Hero';
import Mission from '@/components/about/Mission';
import Vision from '@/components/about/Vision';
import { Metadata } from 'next';
import React from 'react'


export const metadata: Metadata = {
    title: "About Us - Sukoon Edu Village",
    description: "Sukoon Edu Village is a sanctuary of harmony and learning, we nurture young minds through education and the universal language of love.",
  };

function page() {
  return (
    <div>
      <Hero/>
      <Vision/>
      <Mission/>
    </div>
  )
}

export default page
