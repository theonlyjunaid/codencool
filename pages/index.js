import React from 'react'
import Center from '../components/home/Center'
import Footer from '../components/home/Footer'
import Navbar from '../components/home/Navbar'
import About from '../components/home/About'
import Partners from '../components/home/partner'


const index = () => {
  return (
    <div className="bg-cyan-400 bg-[url(https://img.freepik.com/free-vector/pink-torn-paper-effect-banner-design_1017-32514.jpg?w=1800&t=st=1667689454~exp=1667690054~hmac=0bc1921e06f23763cd7b16189a5fe70bf84951d66799b7d686a29084d3b41df8)] bg-no-repeat bg-[length:100vw_110vh] bg-top">
      <Navbar/>

      <Center/>

      <About/>

      <Partners/>
      
      <Footer/>
    </div>
  )
}

export default index