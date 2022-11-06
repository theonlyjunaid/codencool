import Navbar from "./Navbar"

function about() {
  return (
    <div>
        <section id="about" className="text-gray-600 bg-white body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                <h1 className="text-7xl text-lime-500 pl-20 pb-20 leading-12 ">Simple steps to <br /> get Referral</h1> 
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-20 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                <p className="mb-8 leading-relaxed">
                  <ol className="list-disc pl-40 text-4xl leading-relaxed text-indigo-400">
                    <li>Upload your resume</li>
                    <li>Sector or Industry to work in...</li>
                    <li>Role you would like to serve</li>
                    <li>Your organisation preference</li>
                    <li>Location prefered.</li>
                  </ol>
                </p>
                </div>
            </div>
          </section>
    </div>
  )
}

export default about