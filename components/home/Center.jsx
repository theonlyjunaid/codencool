import React from 'react'
import Link from 'next/link'

const Center = () => {
  return (
    <div className='w-full   flex justify-center items-center relative h-screen '>
      
        <div className='flex  gap-10 '>
        <Link href="/refree/info"><div className="w-60 h-14 text-xl bg-black cursor-pointer centerbtn py-3 text-center rounded-xl text-white ">Give Refrale</div></Link>
        <Link href="/seeker/info"><div className="w-60 h-14 bg-black text-xl  cursor-pointer centerbtn py-3 text-center rounded-xl text-white ">
need Refrale
        </div></Link>
        </div>
    </div>
  )
}

export default Center