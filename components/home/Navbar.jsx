import React from 'react'
import Link from 'next/link'

const Navbar = ({heading}) => {
  return (
    <div  className='sticky top-2 z-20 opacity-90'>
      <div className='flex justify-between navbarshadow bg-cyan-50 w-5/6 m-auto rounded-2xl'>
        <div className='flex justify-center items-center'><Link href="/"><span className='text-3xl ml-8'>ReferVilla</span></Link></div>
        <span className='flex w-3/4 justify-evenly ml-40 my-4'>
          {/* border-t-4 border-pink-500 */}
          <Link href="#about" className='p-3'><span className='text-2xl font-light'>About</span></Link>
          <Link href="#" className='p-3'><span className='text-2xl font-light'>Resources</span></Link>
          <Link href="#" className='p-3'><span className='text-2xl font-light'>Partners</span></Link>
          <Link href="#" className='p-3'><span className='text-2xl font-light'>FAQs</span></Link>

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
