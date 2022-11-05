import React from 'react'
import Center from '../components/home/Center'
import Footer from '../components/home/Footer'
import Navbar from '../components/home/Navbar'


const index = () => {
  return (
    <div className="bg-orange-200 bg-[url('/main.svg')] bg-no-repeat bg-cover">
      <Navbar/>

      <Center/>

      <Footer/>
    </div>
  )
}

export default index