import React from 'react'
import Center from '../components/home/Center'
import Footer from '../components/home/Footer'
import Navbar from '../components/home/Navbar'
import About from '../components/home/About'

const index = () => {
  return (
    <div className="bg-orange-200 bg-[url('/main.svg')] bg-no-repeat bg-[length:100vw_110vh] bg-top">
      <Navbar/>

      <Center/>

      <About/>

      <Footer/>
    </div>
  )
}

export default index