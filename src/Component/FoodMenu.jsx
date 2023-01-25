import React, { useEffect, useState } from 'react'
import { menuAtom, cartAtom } from '../store'
import { useAtom } from 'jotai'

const FoodMenu = () => {

  const [dataMenu]=useAtom(menuAtom)
  const [getCart, setGetCart]=useAtom(cartAtom)

  const addToCart = (id) => {
    let selectedFood = dataMenu.filter(v=>v.id === id)
    let newData = selectedFood.map((v,i)=>{
        return {...v,qty:1}
    })
    let temp = [...getCart]
    let idx= getCart.findIndex((v)=>v.id === id)
    if(!temp[idx]){
        setGetCart([...getCart,...newData])
    }else{
        let newData = {
            ...temp[idx]
        }
        newData.qty+=1
        temp.splice(idx,1,newData)
        setGetCart(temp)
    }
    

        
  }

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
                        <button className='w-[90%] rounded-lg bg-green-300 text-white py-1' onClick={()=>addToCart(v.id)}>Keranjang</button>
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