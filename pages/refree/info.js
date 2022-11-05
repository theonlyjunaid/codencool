import Navbar from "../../components/home/Navbar"

function info() {
  return (
    <div>
        <Navbar/>
        <div className="max-w-s w-8/12 m-auto pt-12">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
                    placeholder="Name"
                />
                </div>
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
                    placeholder="LinkedIN"
                />
                </div>
                <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="work"
                >
                    Organisation Name
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="work"
                    type="text"
                    placeholder="Organisation Name"
                />
                </div>
                <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="designation"
                >
                    Designation
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="designation"
                    type="text"
                    placeholder="Designation"
                />
                </div>
                
                <div className="flex items-center justify-between">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                >
                    Save Details
                </button>
                <a
                    className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                    href="#"
                >
                    Cancel
                </a>
                </div>
            </form>
            <p className="text-center text-gray-500 text-xs">
                ©2022 Refree referal . All rights reserved.
            </p>
        </div>
    </div>
  )
}

export default info