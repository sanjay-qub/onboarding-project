import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
function Demo() {
  const [toggle,setToggle]=useState(false)
  return (
    <>
    <div className='bg-[#2699fb] p-4' >
    <div className='max-w-[1240px] py-[20px] items-center mx-auto flex justify-between '>
    <div>
        Sanjay
    </div>
    <AiOutlineMenu className='text-white text-2xl md:hidden block'/>
 
    <ul className='hidden md:flex text-white gap-5'>
        <li className='bg'>Home</li>
        <li>about</li>
        <li>contact us</li>
        <li>support</li>
    </ul>
    <ul className=' md:hidden w-full h-screen text-white fixed bg-black left-0 top-[96px]'>
        <li className='p-5'>Home</li>
        <li className='p-5'>about</li>
        <li className='p-5'>contact us</li>
        <li className='p-5'>support</li>
    </ul>

    </div>
    </div>
  
    </>
  )
}

export default Demo