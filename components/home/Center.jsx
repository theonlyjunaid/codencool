import React from 'react'
import Link from 'next/link'

const Center = () => {
  return (
    <div className='w-full flex justify-center items-center relative h-screen '>
      

        <div className='flex  gap-10 '>
              <Link href="/refree/signup"><div className="w-60 h-14 text-xl bg-green-500 cursor-pointer centerbtn py-3 text-center rounded-xl text-white "
              >
    Give Referral
            </div></Link>
              <Link href="/seeker/signup"><div className="w-60 h-14 bg-orange-400 text-xl  cursor-pointer centerbtn py-3 text-center rounded-xl text-white "

              >
    Need Referral
            </div></Link>

        </div>
    </div>
  )
}

export default Center