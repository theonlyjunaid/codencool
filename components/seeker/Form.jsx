import React,{useState} from 'react'
import { info, field } from '../../seekinfo'


const Form = () => {
   
    const [Category, setCategory] = useState('')
    const [SubCategory, setSubCategory] = useState('')
    const [CompanyName, setCompanyName] = useState('')
    const [CompanyLocation, setCompanyLocation] = useState('Banglore')
    // console.log(field[Category][SubCategory][CompanyName])

    // console.log(field)
    return (
        <div className='w-full h-full  '>
            {/* <h1>Form</h1> */}
            <form className="w-full max-w-lg mx-auto grid">
                <input type="text" name='name' placeholder='ram prasad' className='px-4 py-2 border border-gray-300 rounded-md shadow-sm w-4/5 my-2' />
                <input type="email" name='email' placeholder='ramprasad@gmail.com' className='px-4 py-2 border border-gray-300 rounded-md shadow-sm w-4/5 my-2' />

                <select name="category" id="" className='px-4 py-2 border border-gray-300 rounded-md shadow-sm w-4/5 my-2 ' onChange={(e) => { setCategory(e.target.value); console.log(Category)}}>
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

                {field[Category] && <select name="category" id="" className='px-4 py-2 border border-gray-300 rounded-md shadow-sm w-4/5 my-2 ' onChange={(e) => { setSubCategory(e.target.value); console.log(SubCategory) }}>
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
                {field[Category] && field[Category][SubCategory] && <select name="category" id="" className='px-4 py-2 border border-gray-300 rounded-md shadow-sm w-4/5 my-2 ' onChange={(e) => { setCompanyName(e.target.value); console.log(CompanyName) }}>
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
                {field[Category] && field[Category][SubCategory] && field[Category][SubCategory][CompanyName]&& <select name="category" id="" className='px-4 py-2 border border-gray-300 rounded-md shadow-sm w-4/5 my-2 '>
                    <option value="category" defaultChecked > Select Companies Location </option>
                    {
                        Object.keys(field[Category][SubCategory][CompanyName]).map((category, index) => {
                            return (
                                <option value={category} key={index}>{field[Category][SubCategory][CompanyName][index]}</option>
                            )
                        }
                        )
                    }
                </select>}
                <input type="text" name='linkdin' placeholder='https://linkdin.com/ramprasad' className='px-4 py-2 border border-gray-300 rounded-md shadow-sm w-4/5 my-2' />
                <input type="text" name='Github' placeholder='https://github.com/ramprasad' className='px-4 py-2 border border-gray-300 rounded-md shadow-sm w-4/5 my-2' />
                <input type="text" name='portfolio' placeholder='https://ramprasad.com' className='px-4 py-2 border border-gray-300 rounded-md shadow-sm w-4/5 my-2' />


                <label className='my-2'>Upload Your Resume: </label>
                <input type="file" name="uplad your resume" id="" />
<button className='bg-green-500 w-4/5 py-1 my-2 rounded-lg hover:bg-green-400'>Submit</button>

            </form>
        </div>
    )
}

export default Form