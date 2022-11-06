import React,{useState} from 'react'
import Seekertop from '../../components/Seekertop'
import Info from './Info'

const index = () => {
    const [show, setShow] = useState('Info')
  return (
    <div>
        <Seekertop/>
          <div>
              <ul className='flex gap-10 w-full justify-center text-xl'>
                  <li onClick={() => setShow('Info')}>Apply for referel</li>
                  {/* <li onClick={() => setShow('aplied')}>View Aplied</li> */}
              </ul>
          </div>
         {show=='Info' && <Info/>}
    </div>
  )
}

export default index
