import Navbar from "../../components/home/Navbar"
import {useEffect, useState} from "react"
import Link from 'next/link'
import mongoose from "mongoose";
import Referral from '../../model/Referral'
// import { useRouter } from 'next/router'


function viewResume({products,user}) {

    const items = products.filter(item => item.companyName.indexOf(user.role) !== -1);
  return (
    <div className="bg-gray-200">
        <div className="pt-10">
            <Navbar heading="View Resumes"/>
        </div>
            <section className="text-gray-600 body-font">
                <h1 className="text-5xl text-center mt-10 text-black">Resumes</h1>
        <div className="container px-5 py-8 mx-auto">
                  {items && <div className="flex flex-wrap -m-4">
                      {Object.keys(items).map((index) => { 
                return (
                    <div className="xl:w-1/4 md:w-1/2 p-4 w-fit"><Link href={`/refree/viewinfo?id=${items[index]._id}`}>
                        <div className="bg-gray-100 p-6 rounded-lg">
                        <img
                            className="h-40 rounded w-full object-cover object-center mb-6"
                            src="/person.png"
                            alt="content"
                        />
                        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                                {items[index].subCategory}          </h3>
                        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                                {items[index].name}
                        </h2>
                        <p className="leading-relaxed text-base">
                                {items[index].email}
                        </p>
                        </div></Link>
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

export async function getServerSideProps(context) {
    if (!mongoose.connections[0].readyState) {
        await mongoose.connect(process.env.MONGODB_URI);

    }
let products = await Referral.find({}).lean();


    return {
        props: { products: JSON.parse(JSON.stringify(products)),"myuser":myuser  },
    }
}

