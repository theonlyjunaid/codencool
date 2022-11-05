import React from 'react'
import Link from 'next/link'

const Navbar = ({heading}) => {
  return (
    <div  className=''>

      <div className='flex justify-between bg-white w-3/4 m-auto rounded-2xl'>
        <div className='flex justify-center items-center'><Link href="/"><span className='text-3xl ml-8'>hola</span></Link></div>
        <span className='flex w-3/4 justify-evenly ml-40 my-4'>
          {/* border-t-4 border-pink-500 */}
          <Link href="#about"><span className='text-2xl font-light p-3 '>About</span></Link>
          <Link href="#"><span className='text-2xl font-light p-3'>Resources</span></Link>
          <Link href="#"><span className='text-2xl font-light p-3'>Partners</span></Link>
          <Link href="#"><span className='text-2xl font-light p-3'>FAQs</span></Link>

          <Link href="/login"><button className='text-2xl p-3 bg-pink-500 rounded-2xl px-5 text-white'>Login</button></Link>   
        </span>
      </div>
    </div>
  )
}

Navbar.defaultProps = {
  heading: 'Referral'
}

export default Navbar
