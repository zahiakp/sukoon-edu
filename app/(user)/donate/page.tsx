
import UserLayout from '@/components/Layout/UserLayout';
import { Metadata } from 'next';
import React from 'react'
import Details from './Details';
import Hero from './Hero';
import Plans from './Plans';
import Plans2 from './Plans2';
import StudentsPlans from './StudentsPlans';
import StudentsMeal from './StudentMeal';
import ClassPlans from './ClassPlans';
import ITLabsPlans from './ITLabPlans';
import UniformPlans from './UniformPlans';
import General from './General';

export const metadata: Metadata = {
  title: "Donate - Sukoon Edu Village",
  description: "Sukoon Edu Village is a sanctuary of harmony and learning, we nurture young minds through education and the universal language of love.",
};


function page() {
  return (
    <UserLayout>
      <Hero/>
      <General/>
      <StudentsPlans/>
      <StudentsMeal/>
      <UniformPlans/>
      <Plans/>
      <ClassPlans/>
      <ITLabsPlans/>
      {/* <Plans2/> */}
      <Details/>
    </UserLayout>
  )
}

export default page
