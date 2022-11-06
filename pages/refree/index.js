import React,{useState} from 'react'
import Refreetop from '../../components/Refreetop'
import Viewresume from './Viewresume'
import mongoose from "mongoose";
import Referral from '../../model/Referral'
import Signup from './Signup';


const index = ({ products, user }) => {
    const [show, setShow] = useState('viewprofile')
  return (
    <div>
        <Refreetop/>
        <div>
            <ul className='flex gap-10 w-full justify-center text-xl'>
                <li onClick={()=>setShow('viewprofile')}>View details</li>
                <li onClick={()=>setShow('viewrefrels')}>View Refrrele request</li>
            </ul>
        </div>
          {show === 'viewrefrels' && <Viewresume products={products} user={user} />}
          {show ==='viewprofile'&&<Signup/>}
          

    </div>
  )
}

export default index

export async function getServerSideProps(context) {
    if (!mongoose.connections[0].readyState) {
        await mongoose.connect(process.env.MONGODB_URI);

    }
    let products = await Referral.find({}).lean();


    return {
        props: { products: JSON.parse(JSON.stringify(products)) },
    }
}
