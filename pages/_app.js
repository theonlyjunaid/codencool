
import globals from '../styles/globals.css'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Navbar from '../components/home/Navbar'



function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null)
  const router = useRouter()

  useEffect(() => {
    // router.events.on('routeChangeStart', () => {
    //   setProgress(30)
    // })
    // router.events.on('routeChangeComplete', () => {
    //   setProgress(100)
    // })
    // try {
    //   if (localStorage.getItem('cart')) {
    //     setCart(JSON.parse(localStorage.getItem('cart')))
    //     saveCart(JSON.parse(localStorage.getItem('cart')))
    //   }
    //   // console.log(cart)
    // }
    // catch (error) {
    //   console.log(error)
    //   localStorage.clear()
    // }

    const myuser = JSON.parse(localStorage.getItem('myuser'))
    console.log(myuser)
    if (myuser) {
      setUser({  email: myuser.email ,role:myuser.role })
    }
    
  }, [router.query])
  console.log(user)
  const logout = () => {
    localStorage.removeItem('myuser')
    setUser(null)
    router.push("/")
  }

  return <div>

    <Navbar user={user} logout={logout} />
    <Component {...pageProps} user={user}  logout={logout}/>
  </div>
}

export default MyApp
