// import Navbar from "../../components/home/Navbar"
import { field } from '../../seekinfo'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react'
import Link from "next/link";
function Signup() {


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [Category, setCategory] = useState('')
    const [SubCategory, setSubCategory] = useState('')
    const [CompanyName, setCompanyName] = useState('')
    const [CompanyLocation, setCompanyLocation] = useState('')
    const [role, setRole] = useState('')
    const [Linkedin, setLinkedin] = useState('')


    const handleChange = async (e) => {
        const { name, value } = e.target
        if (name === "name") {
            setName(value)
        }
        if (name === "email") {
            setEmail(value)
        }
        if (name === "password") {
            setPassword(value)
        }
        if (name === "linkedin") {
            setLinkedin(value)

        }
    }

    const handleSubmit = async (e) => {

        e.preventDefault()
        const data = {
            name,
            email,
            password,
            Category,
            SubCategory,
            role,
            CompanyName,
            CompanyLocation,
            Linkedin
        }
        const res = await fetch(`/api/createuser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const json = await res.json()

        console.log(json)
        // console.log(data)

        if (json.success) {
            setEmail('')
            setName('')
            setCategory('')
            setSubCategory('')
            setCompanyName('')
            setCompanyLocation('')
            // setGithub('')
            setLinkedin('')
            toast.success(json.message, {
                position: "top-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

        }
        else {
            toast.error(json.message, {
                position: "top-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }

  return (
    <div className="bg-gray-200 pt-10 h-screen">
        {/* <Navbar heading='Edit Details'/> */}
          <ToastContainer
              position="bottom-left"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
          />
        <div className="max-w-s w-8/12 m-auto pt-12">
            <form className="bg-white shadow-md rounded-2xl formshadow px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="name"
                >
                    Name
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    placeholder="Name"
                />
                </div>
                <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="email"
                >
                    Email
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    placeholder="email@gmail.com"
                />
                </div>
                <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="password"
                >
                    Password
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    name="password"
                          value={password}
                    onChange={handleChange}
                    placeholder="email@gmail.com"
                />
                </div>
                  <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="name"
                  >
                      Select Your Designation Details
                  </label>
                  <select name="category" id="lol" className='shadow  border bg-white rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4' onChange={(e) => { setCategory(e.target.value); console.log(Category);  }}>
                      <option value="Select Your Field of Interest" defaultChecked>Select Your Field of Interest</option>
                      {
                          Object.keys(field).map((category, index) => {
                              return (

                                  <option value={category} key={index}  >{category}</option>

                              )
                          }
                          )
                      }
                  </select>

                  {field[Category] && <select name="category" id="" className='shadow  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4 ' onChange={(e) => { setSubCategory(e.target.value); console.log(SubCategory); }}>
                      <option value="category" defaultChecked > Select Your Role of interest</option>
                      {
                          Object.keys(field[Category]).map((category, index) => {
                              return (
                                  <option value={category} key={index}>{category}</option>
                              )
                          }
                          )
                      }
                  </select>}
                  {field[Category] && field[Category][SubCategory] && <select name="category" id="" className='shadow  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4 ' onChange={(e) => { setCompanyName(e.target.value); console.log(CompanyName); setRole(e.target.value) }}>
                      <option value="category" defaultChecked > Select Company of Interest</option>
                      {
                          Object.keys(field[Category][SubCategory]).map((category, index) => {
                              return (
                                  <option value={category} key={index}>{category}</option>
                              )
                          }
                          )
                      }
                  </select>}
                  {field[Category] && field[Category][SubCategory] && field[Category][SubCategory][CompanyName] && <select name="category" id="" className='shadow  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4 ' onChange={(e) => { setCompanyLocation(e.target.value); console.log(CompanyLocation) }}>
                      <option value="category" defaultChecked > Select Companies Location </option>
                      {
                          Object.keys(field[Category][SubCategory][CompanyName]).map((category, index) => {
                              return (
                                  <option value={field[Category][SubCategory][CompanyName][index]} key={index}>{field[Category][SubCategory][CompanyName][index]}</option>
                              )
                          }
                          )
                      }
                  </select>}
                <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="linkedin"
                >
                    LinkedIN
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="linkedin"
                    type="text"
                    name="linkedin"
                    value={Linkedin}
                    onChange={handleChange}
                    placeholder="LinkedIN"
                />
                </div>

                <div className="flex items-center justify-between">
                <button
                    className="bg-pink-500 hover:bg-blue-700 rounded-xl text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
                    type="submit"
                >
Sign Up
                </button>
                <a
                    className="inline-block align-baseline font-bold text-sm text-pink-500 hover:text-blue-800"
                    href="#"
                >
                    Cancel
                </a>
                </div>
                <div>
                <p className="text-center text-gray-500 text-lg">
Allready have an account?{' '}
                    <Link
                    className="text-pink-500 hover:text-pink-800"
                    href="#"
                    >
                    Sign In
                    </Link>
                </p>
                </div>
            </form>



            <p className="text-center text-gray-500 text-xs">
                ??2022 Refree referal . All rights reserved.
            </p>
        </div>
    </div>
  )
}

export default Signup
