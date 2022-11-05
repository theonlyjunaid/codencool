import Navbar from "../../components/home/Navbar"
import {useEffect, useState} from "react"

function viewResume() {
    const [value, setValue] = useState({})
  const  solve = async () => {
    const data = await fetch('/api/getreffarel')
    const dat = await data.json();
    setValue(dat.reffer);
  }
  useEffect(() => {
   solve();
  }, [])
  console.log(value);
  return (
    <div className="bg-gray-200">
        <div className="pt-10">
            <Navbar heading="View Resumes"/>
        </div>
            <section className="text-gray-600 body-font">
                <h1 className="text-5xl text-center mt-10 text-black">Resumes</h1>
        <div className="container px-5 py-8 mx-auto">
            {value && <div className="flex flex-wrap -m-4">
            {Object.keys(value).map((index) => { 
                console.log(index)
                return (
                    <div className="xl:w-1/4 md:w-1/2 p-4 w-fit">
                        <div className="bg-gray-100 p-6 rounded-lg">
                        <img
                            className="h-40 rounded w-full object-cover object-center mb-6"
                            src="/person.png"
                            alt="content"
                        />
                        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                        {value[index].subCategory}          </h3>
                        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                            {value[index].name}
                        </h2>
                        <p className="leading-relaxed text-base">
                        {value[index].email}
                        </p>
                        </div>
                    </div>
                )
                })}
            </div>
        }
        </div>
        </section>
    </div>

  )
}

export default viewResume