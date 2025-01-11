import Hero from '@/components/donate/Hero'
import Plans from '@/components/donate/Plans'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Donate - Sukoon Edu Village",
  description: "Sukoon Edu Village is a sanctuary of harmony and learning, we nurture young minds through education and the universal language of love.",
};


function page() {
  return (
    <div>
      <Hero/>
      <Plans/>
    </div>
  )
}

export default page
