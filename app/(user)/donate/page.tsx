
import UserLayout from '@/components/Layout/UserLayout';
import { Metadata } from 'next';
import React from 'react'
import Details from './Details';
import Hero from './Hero';
import Plans from './Plans';
import Plans2 from './Plans2';

export const metadata: Metadata = {
  title: "Donate - Sukoon Edu Village",
  description: "Sukoon Edu Village is a sanctuary of harmony and learning, we nurture young minds through education and the universal language of love.",
};


function page() {
  return (
    <UserLayout>
      <Hero/>
      <Plans/>
      <Plans2/>
      <Details/>
    </UserLayout>
  )
}

export default page
