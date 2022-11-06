import React from 'react'

const Seekertop = () => {
  return (
      <div className='w-screen flex'>
          <div className='w-1/2 grid grid-cols-2 mt-10'>
              <div className=' grid'>

                  <img src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt="" className='w-3/5 mx-auto border border-black rounded-full' />
                  <div className='w-full text-center text-3xl font-semibold'>Babu rao</div>
              </div>
              <div className=' items-center py-10'>
                <div className='flex gap-2 '>

                  <h2 className=' '>Applied referel :</h2>
                  <h3 className=''>4</h3>
                </div>
                <div className='flex gap-2'>

                  <h2 className=''>View Status</h2>
                  <h3 > 2 pending </h3>
                </div>
                <div className='flex gap-2'>

                  <h2 className=''>Aproved Status</h2>
                  <h3 >1 aproved</h3>
                </div>
                <div className='flex gap-2'>

                  <h2 className=''>Need to upSkill : </h2>
                  <h3 >1 need to upskill</h3>
                </div>

              </div>
          </div>
          <div className='w-1/2 mt-10 grid grid-cols-2'>
              <div>

              </div>
              <div className='flex items-center'>
                  <div>
                      Streaks: 1 day
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Seekertop