import Image from 'next/image'
import React from 'react'

function Empty() {
  return (
    <section className="h-72 flex items-center justify-center bg-lime-50/85 border border-lime-400 rounded-xl flex-col">
                        <Image width={200} height={200} src="/image/no-data.png" alt="" className="h-52"/> No Items Found
                    </section>
  )
}

export default Empty
