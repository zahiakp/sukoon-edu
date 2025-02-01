'use client'
import { useRouter } from 'next/navigation';
import React from 'react'

function Cancel({prefetch}:{prefetch?:string}) {
        const router = useRouter();
        
  return (
    <button onClick={() => {
        if (prefetch) {
            router.prefetch(prefetch);
        }
        router.back();
    }} className='bg-red-500 text-white rounded-3xl py-3 px-5 h-fit w-32 flex items-center justify-center cursor-pointer'>
      Cancel
    </button>
  )
}

export default Cancel
