import png from '../src/assets/png.png'
import { RiCalendarCheckLine } from "react-icons/ri";
import profile from '../src/assets/download.jpg'
import { BiSolidLogIn } from "react-icons/bi";
import { PiWarningCircleBold } from "react-icons/pi";
import { FaAngleDown } from "react-icons/fa6";
import { MdOutlineAutoGraph } from "react-icons/md";
import { TbClockExclamation } from "react-icons/tb";
import { FaArrowUp } from "react-icons/fa";
import CompareAccuracy from './components/CompareAccuracy';
import Suggestions from './components/Suggestions';
import RulerComponent from './components/RulerComponent';


const data = [
  { percentage: "25", label: "Based on", highlight: "Facts" },
  { percentage: "32", label: "Based on", highlight:  "Analysis" },
  { percentage: "19", label: "Based on", highlight: "Elimination" },
  { percentage: "24", label: "Based on",highlight: "Guess" },
];

const Dashboard = () => {
  return (
    <div className="p-4 sm:p-8 bg-gray-50 min-h-screen">
     
      {/* Main Content Grid */}
      <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
        {/* Left Section */}
        <div className="md:col-span-1 bg-[#f7f6fc] p-4 rounded-lg shadow-md ">
        <div className='flex flex-col items-center '>
        <img src={png} alt="png" className='w-28 h-28'/>
          <h2 className="text-lg font-bold  text-[#7175c5]">Your Result!</h2>
          <p className="text-xs text-gray-500 mb-4">All your insights & details in one place</p>
          </div>
          <div className="bg-white p-2 rounded-md mb-4 border flex flex-col gap-4">

          <div className='flex p-1 bg-[#f7f6fc] gap-2 rounded'>
            <div className='bg-[#dbd8f7] p-1 rounded flex items-center'>
            <RiCalendarCheckLine  className='text-3xl text-gray-600'/>
            </div>
                <span className='flex flex-col'>
                <span className='text-xs bg-[#5a5fbc] rounded-lg w-20  h-4 text-center text-white tracking-tighter'>YOU'VE PASSED</span>
                <p className="text-xs"><span className='text-xl font-bold'>136</span> / 240</p>
                </span>
                <span className='flex gap-1'><hr className='w-.1 h-10 border-r-2 border-gray-600 ml-2'/>
                    <p className="text-[#059794] text-sm tracking-tighter"><span className='bg-[#059794] text-white rounded px-1'>76% </span>Accuracy</p>
                </span>
            </div>
            <div className='flex p-1 bg-[#f7f6fc] gap-2 rounded flex-col'>
                <div className='flex gap-2'>
                    <img src={profile} alt='profile photo' className='border-2 rounded-lg w-10 h-10'/>
                    <span className='flex flex-col'>
                    <span className='text-xs  text-[#5a5fbc] tracking-tighter font-semibold'>Top Score</span>
                    <p className="text-xs"><span className='text-xl font-bold'>230</span> / 240</p>
                    </span>
                </div>
                <hr className='w-full  border-b-2 border-gray-600 rounded-full'/>
                <div className='flex gap-1 items-center'>
                <span className='text-bold tracking-tighter'><span className='text-sm text-gray-400 mr-1'>by</span>Parth Akothkar</span>
                <span className='text-xs bg-[#059794] rounded-lg w-20  h-4 text-center text-white tracking-tighter'>92% ACCURACY</span>
                </div>
               
            </div>
                <div>
                    <p className=' font-semibold'>Improve your Marks</p>
                    <p className='text-xs text-gray-400 tracking-tighter'>Improve your marks by practicing more.</p>
                </div>
            <button className="mt-4 w-full bg-[#5a5fbc] text-white py-2 rounded-md">Practice more</button>
          </div>
          <div className="mt-4 bg-white p-2 rounded-md mb-4 border">
          <p className='font-bold'>Revisit Paper</p>
          <p className='text-sm text-gray-500 mb-6'>Challange your friends by simply sharing a link to this test.</p>
            <button className="mb-6 bg-[#5a5fbc] text-white py-1 rounded-md sm:ml-8 ml-20 px-10"><BiSolidLogIn className='inline -mt-1 mr-1' />Visit</button>
            <p className='text-xs text-gray-400 tracking-tighter'><PiWarningCircleBold  className='inline'/>Instructions for how to upload your handwritten material in given</p>
          </div>
        </div>

        {/* Middle and Right Section */}
        <div className="md:col-span-2 lg:col-span-3 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Compare Accuracy (3 cards) */}
          <div className='grid md:col-span-2 lg:col-span-3  grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full'>
          <div className="bg-white min-h-56 sm:min-h-16 p-4 rounded-lg shadow-md text-gray-400 font-semibold "> <FaAngleDown className=' inline text-sm  border-2 rounded mr-1 mb-1'/>Compare Accuracy</div>
          <div className="bg-white min-h-56 sm:min-h-16 p-4 rounded-lg shadow-md text-gray-400 font-semibold"><FaAngleDown className=' inline text-sm  border-2 rounded mr-1 mb-1'/>Compare Accuracy</div>
          <div className="bg-white min-h-56 sm:min-h-16 p-4 rounded-lg shadow-md text-gray-400 font-semibold"><FaAngleDown className=' inline text-sm  border-2 rounded mr-1 mb-1'/>Compare Accuracy</div>
          </div>

           <div className='col-span-3 row-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6  sm:pr-0'>

            <div className=' grid grid-cols-1 sm:grid-cols-2 gap-6 '>

            
            <div className="bg-white  rounded-lg shadow-md border-red-500 w-full h-full pl-1 pb-4">
            <h3 className="text-sm text-gray-400 font-semibold mb-2 "><MdOutlineAutoGraph  className='inline'/> Improvements</h3>
            <p className='text-sm tracking-tighter font-semibold mb-2'>Subject understanding</p>
            <div className=" text-white">
              <span className="bg-[#059794]   rounded-xl text-xs tracking-tighter px-1 h-4 inline mr-1">Geography</span>
              <span className="bg-yellow-500  rounded-xl text-xs tracking-tighter px-1 h-4 mr-1">Politics</span>
              <span className="bg-[#059794] rounded-xl text-xs tracking-tighter px-1 h-4 inline-block mr-20 sm:mr-1">Economics</span>
              <span className="bg-[#059794] rounded-xl text-xs tracking-tighter px-1 h-4 mr-1">Mathematics</span>
              <span className="bg-red-500  rounded-xl text-xs tracking-tighter px-1 h-4 inline-block mr-1">General Studies</span>
              <span className="bg-gray-400 rounded-xl text-xs tracking-tighter px-1 h-4 mr-1 inline-block">Social Studies</span>
              <span className="bg-red-500   rounded-xl text-xs tracking-tighter px-1 h-4  mr-1">English Literature</span>
              <span className="bg-yellow-500  rounded-xl text-xs tracking-tighter px-1 h-4 mr-1 inline-block">Indial History</span>
              <span className="bg-[#059794]   rounded-xl text-xs tracking-tighter px-1 h-4">Current affairs</span>

            </div>
              </div>

              
             
               {/* Response Time */}
          <div className="bg-white  rounded-lg shadow-md border-red-500 w-full h-full p-1 pb-4">
            <h3 className="text-sm text-gray-400 font-semibold mb-2">  <TbClockExclamation className='inline mr-1'/>Response Time</h3>
            <span className='text-xs font-semibold bg-[#5a5fbc] text-white px-1'>Std Time - 2min</span>
            <div className='w-full border-2 border-dashed rounded-lg bg-[#f7f6fc] px-1'>
              <span className='flex  text-gray-400'><sapn className="text-[#059794] text-2xl font-semibold">60</sapn><span className='mt-2 text-gray-400 mr-1'>%</span><span className='text-sm mt-2'>Ans took</span><FaArrowUp  className='text-red-500 mt-2 text-2xl ml-2'/><span className='text-[#5a5fbc] mt-3 font-semibold'>2min</span></span>
            </div>
            <p className="text-xl font-semibold">You are <span className="text-red-500">slow</span>&nbsp;!</p>
          </div>
             
              <div className=' w-full h-full sm:row-span-2 sm:col-span-2'>
                <CompareAccuracy/>
              </div>
            </div>
            <div className=' grid grid-cols-1 sm:grid-cols-2 gap-6'>
  {/* Approach Data */}
            
     <div className="bg-white p-1 rounded-lg shadow-md w-full">
      {/* Header */}
      
       
         
        <span className='text-sm font-semibold text-gray-400'> <MdOutlineAutoGraph  className='inline'/>Approach Data</span>
     

      {/* Data Boxes */}
      <div className="space-y-1">
        {data.map((item, index) => (
          <div
            key={index}
            className=" border-2 border-indigo-300 rounded-md px-1 py-1"
          >
            <span className="text-indigo-600 font-bold bg-[#e2e0f4] rounded px-1">{item.percentage}<span className='text-sm'>%</span></span>
            <span className="text-gray-700 text-sm inline-block tracking-tighter">&nbsp;{item.label}</span>
            <span className='text-sm text-[#878acc] inline-block tracking-tighter'>&nbsp;{item.highlight}</span>
          </div>
        ))}
      </div>
            </div>
{/* Suggestion */}
              <div className=' w-full h-full'>
                <Suggestions/>
              </div>
              <div className='  w-full h-full sm:row-span-2 sm:col-span-2'>
                <RulerComponent/>
              </div>
            </div>
           </div>
         
         

          {/* Response Time */}
          {/* <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-2">Response Time</h3>
            <p className="text-red-500">You are slow!</p>
          </div> */}

          {/* Approach Data */}
          {/* <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-2">Approach Data</h3>
            <p>Analysis: 32%</p>
          </div> */}

          {/* Suggestions */}
          {/* <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-2">Suggestions</h3>
            <p>40 sec for Easy questions</p>
          </div> */}

          {/* Compare Accuracy Graph */}
          {/* <div className="col-span-1 sm:col-span-2 lg:col-span-1 bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-2">Compare Accuracy Graph</h3>
          </div> */}

          {/* Time Taken */}
          {/* <div className="col-span-1 sm:col-span-2 lg:col-span-1 bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-2">Time Taken</h3>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
