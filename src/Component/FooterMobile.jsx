import React from 'react'
import { AiFillHome } from 'react-icons/ai';
import { BiCategoryAlt } from 'react-icons/bi';
import { RiBillLine } from 'react-icons/ri';
import { FaHeadset } from 'react-icons/fa';


const FooterMobile = () => {
  return (
    <div className=''>
        <div className='bg-gray-100 py-5 lg:hidden'>
            <div className='px-5'>
                <div className='flex justify-between '>
                    <div>
                        <AiFillHome size={20} className='mx-auto fill-gray-500'/>
                        <p className='text-center text-sm text-gray-500 font-thin'>Home</p>
                    </div>
                    <div>
                        <BiCategoryAlt size={20} className='mx-auto fill-gray-500'/>
                        <p className='text-center text-sm text-gray-500 font-thin'>Category</p>
                    </div>
                    <div>
                        <RiBillLine size={20} className='mx-auto fill-gray-500'/>
                        <p className='text-center text-sm text-gray-500 font-thin'>Transaction</p>
                    </div>
                    <div>
                        <FaHeadset size={20} className='mx-auto fill-gray-500'/>
                        <p className='text-center text-sm text-gray-500 font-thin'>Help</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FooterMobile