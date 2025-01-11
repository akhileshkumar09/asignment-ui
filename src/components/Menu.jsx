import { useState } from 'react'
import logo from '../assets/logo.png'
import { RxHamburgerMenu } from "react-icons/rx";
import { TbHome2 } from "react-icons/tb";
import { BsStars } from "react-icons/bs";
import { SiBandsintown } from "react-icons/si";
import { TiFlashOutline } from "react-icons/ti";
import { BsGraphUpArrow } from "react-icons/bs";
import { LuReceiptText } from "react-icons/lu";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";

function Menu() {
    const [showMenu, setShowMenu] = useState(false)
  return (
    <div className=''>
{
  !showMenu && 
  (     <div className='relative w-full py-2 bg-[#303947] px-4 text-white flex h-12'> <RxHamburgerMenu onClick={()=>setShowMenu(!showMenu)} className='text-2xl'/>
           <span className='flex cursor-pointer gap-2 absolute left-1/2 -translate-x-1/2'>
             <img src={logo} alt='logo'  className='w-8 h-8'/>
            <h2 className=' text-2xl'>Firstbench</h2>
           </span>
           </div>) 
           }

       { showMenu &&  <div className='relative w-full py-2 bg-[#303947] px-4 text-white flex min-h-screen'>
       <button className='text-4xl absolute top-4 right-6' onClick={()=>setShowMenu(!showMenu)}>X</button>
         <span className='flex cursor-pointer gap-2 absolute left-1/2 -translate-x-1/2'>
          <img src={logo} alt='logo'  className='w-8 h-8'/>
            <h2 className=' text-2xl'>Firstbench</h2>
         </span>

         <div className='flex flex-col text-gray-200 justify-center items-center gap-6 w-full pt-6'>
                  
                  <span className='flex cursor-pointer gap-1 hover:text-[#47b4b2] text-xl '><TbHome2  className='mt-1'/>Dashboard</span>
                  <span className='flex cursor-pointer gap-1 hover:text-[#47b4b2] text-xl '><BsStars  className='mt-1'/>FirstGuru</span>
                  <span className='flex cursor-pointer gap-1 hover:text-[#47b4b2] text-xl '><SiBandsintown  className='mt-1'/>TownHall</span>
                  <span className='flex cursor-pointer gap-1 hover:text-[#47b4b2] text-xl '><TiFlashOutline  className='mt-1'/>AI Evalution</span>
                  <span className='flex cursor-pointer gap-1 hover:text-[#47b4b2] text-xl '><BsGraphUpArrow  className='mt-1'/>Performance</span>
                  <span className='flex cursor-pointer gap-1 hover:text-[#47b4b2] text-xl  text-[#47b4b2]'><LuReceiptText  className='mt-1'/>Mock Test</span>
                  <span className='flex cursor-pointer gap-1 hover:text-[#47b4b2] text-xl   '><IoNotificationsOutline  className='mt-1 text-xl'/></span>
                  <span className='flex cursor-pointer gap-1 bg-[#1d2633] p-1 rounded-lg text-sm'><p className='bg-[#f8c2b3] text-black px-1 font-semibold rounded'>P</p>Profile <FaAngleDown className='mt-1'/></span>
                 </div>
         </div>}
    </div>
  )
};

export default Menu