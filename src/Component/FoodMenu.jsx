import React, { useEffect, useState } from 'react'
import { API_URL } from '../helper'
import axios from 'axios'

const FoodMenu = () => {
    const [dataMenu, setDataMenu] = useState([])


    useEffect(()=>{
      axios.get(API_URL+'/menu')
      .then((res)=>{
        let food = res.data.filter(data=> data.category === 'heavy meal')
        setDataMenu(food)
      })
      .catch((err)=>{
        console.log(err)
      })
  
    },[])

    const prinDataFood = () =>{
        return dataMenu.map((v,i)=>{
            return(
                <div key={v.name} className='bg-white shadow-lg w-full h-80 my-10'>
                    <div className='w-full h-[70%] bg-red-300'>
                        <img src={v.img} className='object-cover h-full w-full' />
                    </div>
                    <div className='px-3'>
                        <p className='text-slate-400 leading-1'>{v.name}</p>
                        <p className='text-slate-400 leading-1'>Rp. {v.price.toLocaleString('id')}</p>
                    </div>
                    <div className='flex justify-center mt-3'>
                        <button className='w-[90%] rounded-lg bg-green-300 text-white py-1'>Keranjang</button>

                    </div>

                </div>
            )
        })
    }
  return (
    <div>
        <div>
            {prinDataFood()}
        </div>
    </div>
  )
}

export default FoodMenu