import UserLayout from '@/components/Layout/UserLayout';
import { Metadata } from 'next';
import React from 'react'
import Hero from './Hero';
import AdmissionDiv from './AdmissionDiv';


export const metadata: Metadata = {
    title: "Admission - Sukoon Edu Village",
    description: "Sukoon Edu Village is a sanctuary of harmony and learning, we nurture young minds through education and the universal language of love.",
  };

function page() {
  return (
    <UserLayout>
      <Hero/>
      <AdmissionDiv/>
    </UserLayout>
  )
}

export default page
