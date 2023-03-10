import React from 'react'
import { IoMdNotificationsOutline} from 'react-icons/io';
import { AiOutlineArrowLeft} from 'react-icons/ai';
import FoodMenu from '../Component/FoodMenu';
import { useNavigate } from 'react-router-dom';
import { cartAtom, userAtom } from '../store';
import { useAtom } from 'jotai';



const Categories = () => {
    const navigate = useNavigate()
    const search = window.location.pathname.split('/')[2]
    const [dataUser]=useAtom(userAtom)
    const[dataCart]=useAtom(cartAtom)
    console.log(dataCart.length)


    let dataCategories = [
        {
            id:1,
            name:'Food'
        },
        {
            id:2,
            name:'Snack'
        },
        {
            id:3,
            name:'Noodle'
        },
        {
            id:4,
            name:'Spicy'
        },
        {
            id:5,
            name:'Alcohol'
        },
        {
            id:6,
            name:'Tea'
        },
        {
            id:7,
            name:'Coffe'
        },
    ]
  return (
    <div className='px-4'>
        <div className='pt-5'>
            <div className='flex justify-between'>
                <AiOutlineArrowLeft onClick={()=>navigate('/menu')} size={25} className='mt-1'/>
                <div>All Categories</div>
                <div className='relative'>
                    <IoMdNotificationsOutline size={25} className='mt-1' onClick={()=>navigate('/cart')}/>
                    {
                        dataCart.length>0 &&
                    <p className='text-xs bg-red-600 rounded-full text-center w-4 absolute top-1 left-3'>{dataCart.length}</p>
                    }
                </div>
            </div>
            <div className='flex gap-2 overflow-x-auto mt-7'>
                {
                    dataCategories.map(data => (
                        <div  key={data.id} className={`${search === data.name ?'bg-green-300 text-white' :'bg-slate-300'} mb-4 rounded-full hover:bg-green-300`}
                        onClick={()=>navigate(`/categories/${data.name}`)}
                        >
                            <button className='text-sm py-1 px-2'>{data.name}</button>
                        </div>
                    ))
                }
            </div>
            <div className={` ${search != 'Food' ? 'hidden':'block' } mt-5`}>
                <FoodMenu/>
            </div>
            <div className={` ${search != 'Noodle' ? 'hidden':'block' } mt-5`}>
                Noodle
            </div>

            <div >

            </div>
        </div>
    </div>
  )
}

export default Categories