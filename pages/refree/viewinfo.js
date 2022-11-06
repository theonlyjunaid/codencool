import { setRevalidateHeaders } from "next/dist/server/send-payload";
import { useState, useEffect } from "react"
import mongoose from "mongoose";
import Referral from '../../model/Referral'
// import Navbar from "../../components/home/Navbar";

const View =({products})=>{
  console.log(products);
    return(
      <>
      {/* <Navbar/> */}
        <div className="text-gray-600 body-font relative">
          <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
            <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
              <img
                width="100%"
                height="100%"
                className="absolute inset-0"
                src="https://jofibo.com/images/templates/designer_resume_template_thumbnail.png"
              />
            </div>

            <div className="w-1/3">
              <div className="bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                  Referral Seeker Preference
                </h2>
                <p className="leading-relaxed mb-5 text-gray-600">
                  Company Name : {products[0].companyName}
                </p>
                <p className="leading-relaxed mb-5 text-gray-600">
                  Role of Interest : {products[0].subCategory}
                </p>
                <p className="leading-relaxed mb-5 text-gray-600">
                  Preferred Location : {products[0].companyLocation}
                </p>
                <h3 className="text-gray-900 text-lg mb-1 font-medium title-font">Socials</h3>
                <p className="leading-relaxed mb-5 text-gray-600">
                  Linkedin : {products[0].linkedin}
                </p>
                <p className="leading-relaxed mb-5 text-gray-600">
                  Github : {products[0].github}
                </p>
              </div>
            
              <div className="bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                  Feedback
                </h2>
                <p className="leading-relaxed mb-5 text-gray-600">
                  Any advice or changes to ### Name of referral seeker ### would be appreciated... 
                </p>
                <div className="relative mb-4">
                  <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    defaultValue={""}
                  />
                </div>
                <div className="flex justify-around">
                  <button className="text-black bg-pink-200 centerbtn border-0 py-3 px-2 w-44 focus:outline-none hover:bg-pink-500 hover:text-white rounded-2xl text-lg">
                    Review
                  </button>
                  <button className="text-white bg-pink-500 centerbtn border-0 py-3 px-2 w-44 focus:outline-none hover:bg-pink-600 rounded-2xl text-lg">
                    Approve
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  * Review :- Ask for some changes
                </p>
                <p className="text-xs text-gray-500 mt-3">  
                  * Approve :- Referral successful
                </p>
              </div>
            </div>

          </div>
        </div>
      </>

    )
}
export default View


export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
      await mongoose.connect(process.env.MONGODB_URI);

  }
  const id = context.query.id
  let products = await Referral.find({_id:id}).lean();

  return {
      props: { products: JSON.parse(JSON.stringify(products)) },
  }
}
