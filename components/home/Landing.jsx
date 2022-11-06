import Link from "next/link"

function landing() {
  return (
    <section id="home" className="top-0 text-black bg-yellow-50 h-[90vh] flex justify-center content-center">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center pt-48">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                <img src="/bg.png" alt="###" />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-8xl mb-4 font-medium text-gray-900">
                ReferVilla:  The world of referrals
            </h1>
            <p className="mb-8 leading-relaxed text-xl">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum aut aliquid voluptatum neque delectus accusantium perspiciatis ipsam natus ad sequi.
            </p>
            <div>
                <Link href="/refree/signup"><button className="w-60 h-14 text-xl bg-green-500 cursor-pointer centerbtn py-3 text-center rounded-xl text-white mx-6"
                >
                Give Referral
                </button></Link>
                <Link href="/seeker/signup"><button className="w-60 h-14 bg-orange-400 text-xl  cursor-pointer centerbtn py-3 text-center rounded-xl text-white "
                >
                Need Referral
                </button></Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default landing