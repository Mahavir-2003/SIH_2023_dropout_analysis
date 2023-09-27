import React from 'react'
import Wand from '../assets/Wand.svg';

const Navbar = () => {
  return (
    <div className='w-screen fixed z-50 flex justify-between items-center px-10 py-6'>
        <div className=' font-header tracking-wider font-medium  text-3xl'>DROPOUT</div>
        <div className='py-2 px-6 rounded-lg flex justify-center items-center border-2 border-[#b8b8ff] text-white hover:bg-[#9381ff] tracking-wide font-sub-header hover:cursor-pointer transition-all duration-200 ease-in'>
            <img src={Wand} alt="icon" className='w-8 mr-4'/>
            <div className=' text-lg font-medium tracking-wider'>PREDICT</div>
        </div>
    </div>  
  )
}

export default Navbar