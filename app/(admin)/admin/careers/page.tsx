'use client'
import AdminLayout from '@/components/Layout/AdminLayout'
import React from 'react'
import dynamic from 'next/dynamic'

function page() {
  const Content = dynamic(() => import('./Content'), { ssr: false });
  return (
    <AdminLayout>
      <Content/>
    </AdminLayout>
  )
}

export default page
