import React,{useEffect,useRouter} from 'react'
import Footer from '../components/home/Footer'
import About from '../components/home/About'
import Partners from '../components/home/Partners'
import Landing from '../components/home/Landing'
import Faq from '../components/home/Faq'

import Second from '../components/home/Second'

import Router from "next/router";


const index = ({user}) => {
  const router = Router;





  return (

    <div className="">
      <Landing/>
      <About/>
      
      <Second />
       <Partners/>

      <Faq/>

      <Footer/>
    </div>
  )
}

export default index