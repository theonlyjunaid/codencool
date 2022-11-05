import React from 'react'

const Center = () => {
  return (
    <div className='w-full   flex justify-center items-center relative h-screen '>
        <div className='flex  gap-10 '>
              <div className="w-60 h-14 text-xl bg-green-500 cursor-pointer centerbtn py-3 text-center rounded-xl text-white "
              >

    Give Referral
            </div>
              <div className="w-60 h-14 bg-orange-400 text-xl  cursor-pointer centerbtn py-3 text-center rounded-xl text-white "
              >

    Need Referral
            </div>
        </div>
    </div>
  )
}

export default Center