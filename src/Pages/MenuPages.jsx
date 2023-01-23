import axios from 'axios';
import React from 'react'
import { IoMdNotificationsOutline, IoMdSearch } from 'react-icons/io';
import { API_URL } from '../helper';
import { useEffect } from 'react';
import { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper";
import FooterMobile from '../Component/FooterMobile';
import { useNavigate } from 'react-router-dom';





const MenuPages = () => {

  const navigate = useNavigate()
  const [dataMenu, setDataMenu] = useState([])


  useEffect(()=>{
    axios.get(API_URL+'/menu')
    .then((res)=>{
      setDataMenu(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })

  },[])
  return (
    <div>
      <div className='px-4 w-full h-96 bg-gradient-to-tr from-green-300 to-green-400'>
        <div className='pt-10 flex justify-between'>
          <p className='text-white text-2xl font-semibold'>Recipes Food</p>
          <IoMdNotificationsOutline size={25} className='mt-1 fill-white'/>
        </div>
        <div className='relative'>
          <input className='mt-4 w-full py-1 rounded-md px-10 focus:outline-none' placeholder='Search recipes food'/>
          <IoMdSearch size={25} className='absolute top-5 left-3 fill-green-500'/>
        </div>
        <div className='flex justify-between text-xs text-white mt-5'>
          <p>Popular Recipes</p>
          <button>See all</button>
        </div>
        <div className='mt-5 w-ful h-72'>
          <Swiper 
          spaceBetween={30}
          centeredSlides={true}
          navigation={true}
          autoplay={{
            delay:2500,
            disableOnInteraction:false

          }}
          pagination={{
            clickable:true
          }} 
          modules={[Navigation, Autoplay, Pagination]}
          >
            {
              dataMenu.map(data=>(
                <SwiperSlide
                key={data.name}
                >
                    <img src={data.img} className='w-full grayscale-[20%] object-cover h-72'/>
                    <div className='flex justify-center'>
                      <p className='absolute bottom-10 text-white font-semibold text-2xl'>{data.name}</p>
                    </div>
                </SwiperSlide>
              ))
            }
          </Swiper>
          <div className='flex justify-between mt-20'>
            <p className='text-xs font-semibold'>Category</p>
            <button className='text-green-400 text-xs font-bold' onClick={()=>navigate('/categories/Food')}>See all</button>
          </div>
          <div className='mt-5 flex justify-between'>
            <div onClick={()=>navigate('/categories/Noodle')}>
              <div className='h-12 bg-green-500 w-12 rounded-full hover:bg-green-600'></div>
              <p className='text-center text-xs mt-2' >Noodle</p>
            </div>
            <div>
              <div className='h-12 bg-green-500 w-12 rounded-full hover:bg-green-600'></div>
              <p className='text-center text-xs mt-2'>Bread</p>
            </div>
            <div>
              <div className='h-12 bg-green-500 w-12 rounded-full hover:bg-green-600'></div>
              <p className='text-center text-xs mt-2'>Noodles</p>
            </div>
            <div>
              <div className='h-12 bg-green-500 w-12 rounded-full hover:bg-green-600'></div>
              <p className='text-center text-xs mt-2'>Seefood</p>
            </div>
            <div>
              <div className='h-12 bg-green-500 w-12 rounded-full hover:bg-green-600'></div>
              <p className='text-center text-xs mt-2'>Drink</p>
            </div>
          </div>
        </div>
      </div>
          <div className='mt-10 absolute bottom-1 w-full'>
            <FooterMobile/>
          </div>
    </div>
  )
}

export default MenuPages