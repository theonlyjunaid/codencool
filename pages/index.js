import React from 'react'
import Footer from '../components/home/Footer'
import Navbar from '../components/home/Navbar'


const index = () => {
  return (
    <div>
      <Navbar/>
      <div className='text-blue-400'>Footer made by Ashish</div>
      <Footer/>
    </div>
  )
}

export default index