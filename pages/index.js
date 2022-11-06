import React from 'react'
import Center from '../components/home/Center'
import Footer from '../components/home/Footer'
import Navbar from '../components/home/Navbar'
import About from '../components/home/About'
import Landing from '../components/home/Landing'
import Faq from '../components/home/Faq'
import Second from '../components/home/Second'

const index = () => {
  return (
    <div className="">
      <Navbar/>
      <Landing/>
      <About/>
      <Second />
      <Faq/>
      <Footer/>
    </div>
  )
}

export default index