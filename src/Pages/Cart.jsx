import { useAtom } from 'jotai'
import React from 'react'
import { AiOutlineArrowLeft, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { cartAtom, incAtom } from '../store'

const Cart = () => {
    const navigate = useNavigate()
    const [dataCart, setDataCart]=useAtom(cartAtom)
    const [count, incerment]=useAtom(incAtom)
    console.log(dataCart)

    const onInc = (id) => {
        let temp = dataCart
        let idx = dataCart.findIndex(v=>v.id === id)
        let selectedData = {
            ...temp[idx]
        } 
        selectedData.qty+=1 
        temp.splice(idx,1,selectedData)
        console.log(temp)
        // setDataCart(temp)
    }
    

    const printDataCart = () => {
        return dataCart.map((v,i)=>{
            return(
                <div className='w-full mt-10' key={v.id}>
                    <div className='grid grid-cols-3 border-b-2 pb-2'>
                        <div className='w-[86px] h-[86px] bg-teal-400'>
                            <img src={v.img} className='h-full object-cover'/>
                        </div>
                        <div className='mt-5'>
                            <p className='text-sm'>{v.name}</p>
                            <div className='flex justify-between rounded-lg bg-slate-300 mt-3 px-2 w-24 h-7'>
                                <AiOutlineMinus className='my-[6px]'/>
                                <div>{v.qty}</div>
                                <AiOutlinePlus className='my-[6px]' onClick={incerment}/>
                            </div>
                        </div>
                        <div className='mt-5 text-end'>
                            <p className='font-bold'>RP. {(v.price * v.qty).toLocaleString('id')}</p>
                        </div>
                    </div>
                    
                </div>
            )
        })
    }

    const totalPay = () =>{
        let total = 0
        dataCart.forEach((v,i)=>{
            total += v.qty * v.price
        })
        return total
    }

  return (
    <div className=''>
        <div className='px-4'>
            <div className='pt-5'>
            <div className='flex justify-between'>
                    <AiOutlineArrowLeft onClick={()=>navigate('/categories/Food')} size={25} className='mt-1'/>
                    <div>My Cart</div>
                    <div></div>
                </div>
            </div>
            <div className='mt-4'>
                {printDataCart()}
            </div>
        </div>
        <div className='w-full h-24 bg-slate-300 absolute bottom-0'>
            <div className='px-4 py-4 flex justify-between'>
                <div>
                    <p className='text-xl'>Total</p>
                    <p>RP. {totalPay().toLocaleString('id')}</p>
                </div>
                <div className='mt-2'>
                    <button className='bg-green-300 px-10 py-2 rounded-lg text-white'>Bayar</button>
                </div>
            </div>


        </div>


    </div>
  )
}

export default Cart