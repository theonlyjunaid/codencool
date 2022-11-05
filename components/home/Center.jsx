import React from 'react'
import Link from 'next/link'

const Center = () => {
  return (
    <div className='w-full flex justify-center items-center relative h-screen '>
      
        <div className='flex gap-16 mt-48'>
              <Link href="/refree/info"><div className="w-60 text-3xl bg-green-500 text-shadow cursor-pointer centerbtn p-4 text-center rounded-xl text-white "
              >
    Give Referral
            </div></Link>
              <Link href="/seeker/info"><div className="w-60 bg-orange-400 text-3xl text-shadow cursor-pointer centerbtn py-4 text-center rounded-xl text-white "
              >
    Need Referral
            </div></Link>

        </div>
    </div>
  )
}

export default Center