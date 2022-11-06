
import globals from '../styles/globals.css'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'



function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState({ value: null })
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
    if (myuser) {
      setUser({  email: myuser.email ,role:myuser.role })

      // console.log(user)
    }

  }, [router.query])

  return <Component {...pageProps} user={user} />
}

export default MyApp
