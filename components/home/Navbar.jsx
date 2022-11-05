import React from 'react'

const Navbar = ({heading}) => {
  return (
    <div  className=''>

      <div className='flex justify-between bg-white w-3/4 m-auto rounded-2xl'>
        <span className='text-3xl p-3 m-auto'>{heading}</span>
        <span className='flex w-3/4 justify-evenly ml-40 my-4'>
          <span className='text-2xl font-light p-3 border-t-4 border-pink-500'>About</span>
          <span className='text-2xl font-light p-3'>Speakers</span>
          <span className='text-2xl font-light p-3'>Partners</span>
          <span className='text-2xl font-light p-3'>FAQs</span>
          <span className='text-2xl font-light p-3'>Venue</span>
          <button className='text-2xl p-3 bg-pink-500 rounded-2xl px-5 text-white'>Apply Now</button>
        </span>
      </div>
    </div>
  )
}

Navbar.defaultProps = {
  heading: 'Referral'
}

export default Navbar