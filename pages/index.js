import React from 'react'
import Center from '../components/home/Center'
import Footer from '../components/home/Footer'
import Navbar from '../components/home/Navbar'


const index = () => {
  return (
    <div className='bg-gray-400 pt-10'>
      <Navbar/>
  
      <Center/>

      <Footer/>
    </div>
  )
}

export default index