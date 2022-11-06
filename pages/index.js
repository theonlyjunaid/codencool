import React from 'react'
import Center from '../components/home/Center'
import Footer from '../components/home/Footer'
import Navbar from '../components/home/Navbar'
import About from '../components/home/About'
import Partners from '../components/home/Partners'
import Landing from '../components/home/Landing'
import Faq from '../components/home/Faq'

const index = () => {
  return (
    <div className="">

      <Navbar/>
      <Landing/>
      <About/>


      <Partners/>
      

      <Faq/>

      <Footer/>
    </div>
  )
}

export default index