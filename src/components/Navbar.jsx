
import logo from '../assets/logo.png'
import { TbHome2 } from "react-icons/tb";
import { BsStars } from "react-icons/bs";
import { SiBandsintown } from "react-icons/si";
import { TiFlashOutline } from "react-icons/ti";
import { BsGraphUpArrow } from "react-icons/bs";
import { LuReceiptText } from "react-icons/lu";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";

function Navbar() {
  return (
    <div className='w-full py-2 bg-[#303947] px-20'>
        <div className='flex text-gray-200 justify-between items-center'>
         <span className='flex cursor-pointer gap-2'>
            <img src={logo} alt='logo image' className='w-8 h-8'/>
            <h2 className='text-white text-2xl'>Firstbench</h2>
         </span>
         <span className='flex cursor-pointer gap-1 hover:text-[#47b4b2] text-sm'><TbHome2  className='mt-1'/>Dashboard</span>
         <span className='flex cursor-pointer gap-1 hover:text-[#47b4b2] text-sm'><BsStars  className='mt-1'/>FirstGuru</span>
         <span className='flex cursor-pointer gap-1 hover:text-[#47b4b2] text-sm'><SiBandsintown  className='mt-1'/>TownHall</span>
         <span className='flex cursor-pointer gap-1 hover:text-[#47b4b2] text-sm'><TiFlashOutline  className='mt-1'/>AI Evalution</span>
         <span className='flex cursor-pointer gap-1 hover:text-[#47b4b2] text-sm'><BsGraphUpArrow  className='mt-1'/>Performance</span>
         <span className='flex cursor-pointer gap-1 hover:text-[#47b4b2] text-sm text-[#47b4b2]'><LuReceiptText  className='mt-1'/>Mock Test</span>
         <span className='flex cursor-pointer gap-1 hover:text-[#47b4b2] text-sm  '><IoNotificationsOutline  className='mt-1 text-xl'/></span>
         <span className='flex cursor-pointer gap-1 bg-[#1d2633] p-1 rounded-lg text-sm'><p className='bg-[#f8c2b3] text-black px-1 font-semibold rounded'>P</p>Profile <FaAngleDown className='mt-1'/></span>
        </div>
    </div>
  )
}

export default Navbar