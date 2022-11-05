import React from 'react'
import Center from '../components/home/Center'
import Footer from '../components/home/Footer'
import Navbar from '../components/home/Navbar'
import About from '../components/home/About'


const index = () => {
  return (
    <div className='bg-gray-400 pt-10'>
      <Navbar/>
  
      <Center/>

      <About/>

      <Footer/>
    </div>
  )
}

export default index