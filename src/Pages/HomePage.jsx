import React from 'react'
import img from '../Asset/HMONG-Potluck-Chopped-Salad-removebg-preview.png'
import { useNavigate } from 'react-router-dom'


const HomePage = () => {
    const navigate = useNavigate()
  return (
    <div>
        <div className='flex justify-end'>
            <img 
            src={img}
            className='w-96 relative -top-4 left-28 rotate-180'
            />
        </div>
        <div className='px-10'>
            <p className='font-semibold text-3xl'>Login</p>
            <p className='text-xs mt-3'>Selamat Datang di rumah makan mang dadang</p>
            <p className='text-xs'>masukan email anda untuk melanjutkan</p>
            <div className='mt-10'>
                <label>Email</label>
                <input className='w-full mt-4 border-b-2 focus:outline-none '/>
            </div>
            <div className='mt-4'>
                <label>No Table</label>
                <input className='w-full mt-4 border-b-2 focus:outline-none' type='number'/>
            </div>
            <button className='w-full bg-gradient-to-r from-green-300 to-green-400 py-2 rounded-md mt-5' onClick={()=>navigate('/menu')}>Confirm</button>
        </div>
    </div>
  )
}

export default HomePage