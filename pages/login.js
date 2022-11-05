import Navbar from "../components/home/Navbar"
import Footer from "../components/home/Footer"
import Link from "next/link"

function login() {
  return (
    <div className='bg-gray-200 pt-10 min-h-screen'>
      <Navbar heading="Login"/>
      <section className="text-gray-600 body-font relative w-3/6 m-auto mb-10">
        <div className="container px-2 py-24 mx-auto bg-gray-100 rounded-xl mt-10">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-3xl font-medium title-font mb-4 text-gray-900">
              Login
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima ab temporibus dolor qui suscipit eum.
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-white  rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                    Password
                  </label>
                  <input
                    type="password"
                    id="email"
                    name="email"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  <a className="text-pink-500 mt-1">Forgot Password?</a>

                </div>
              </div>
              
              <div className="p-2 w-full">
                <Link href='/refree/viewResume'>
                  <button className="flex mx-auto text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    Login
                  </button>
                </Link>
              </div>
              <div className="p-2 w-full pt-4 mt-2 border-t border-gray-200 text-center flex gap-2 justify-center">
                Don't have an account? <Link href="/signup"><div className="text-pink-500"> Sign Up</div></Link>
                </div>


            </div>
          </div>
        </div>
      </section>
<Footer/>
    </div>
  )
}

export default login