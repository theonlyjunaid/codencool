import React from 'react'
import Link from 'next/link'

const Center = () => {
  return (
    <div className='w-full flex justify-center items-center relative  h-screen '>
      
        <div className='flex gap-16 mt-8'>
              <Link href="/refree/info"><div className="w-60 text-3xl bg-orange-500 cursor-pointer centerbtn p-4 text-center rounded-xl text-white "
              >
    Give Referral
            </div></Link>
              <Link href="/seeker/info"><div className="w-60 bg-cyan-500 text-3xl cursor-pointer centerbtn py-4 text-center rounded-xl text-white "
              >
    Need Referral
            </div></Link>

        </div>
    </div>
  )
}

export default Center