import Image from 'next/image'
import React from 'react'

function Empty() {
  return (
    <section className="h-64 flex items-center justify-center bg-gray-100 border border-zinc-300 rounded-xl flex-col">
                        <Image width={200} height={200} src="/notitem.png" alt="" className="h-40 mb-2"/> No Items Found
                    </section>
  )
}

export default Empty
