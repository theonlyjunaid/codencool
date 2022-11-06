import Navbar from "../../components/home/Navbar"
import { field } from '../../seekinfo'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react'
import Link from "next/link";
import { useRouter } from "next/router";

function signup() {
    let router = useRouter();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
   const role = 'seeker'
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
    
    }

    const handleSubmit = async (e) => {

        e.preventDefault()
        const data = {
            name,
            email,
            password,

            role,
          
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
            setPassword('')
            setName('')
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
            setTimeout(() => {
                router.push('/login')
            }, 1500);
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
            {/* <Navbar heading='Edit Details' /> */}
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
            <div className="max-w-s w-2/5 m-auto pt-12">
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
                    ©2022 Refree referal . All rights reserved.
                </p>
            </div>
        </div>
    )
}

export default signup
