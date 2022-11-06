import React,{useEffect,useRouter} from 'react'
import Footer from '../components/home/Footer'
import About from '../components/home/About'
import Partners from '../components/home/Partners'
import Landing from '../components/home/Landing'
import Faq from '../components/home/Faq'
import Router from "next/router";


const index = ({user}) => {
  const router = Router;




  return (

    <div className="bg-orange-200 bg-[url('/main.svg')] bg-no-repeat bg-[length:100vw_110vh] bg-top">


  
      <Landing/>
      <About/>



      <Partners/>
      

      <Faq/>

      <Footer/>
    </div>
  )
}

export default index