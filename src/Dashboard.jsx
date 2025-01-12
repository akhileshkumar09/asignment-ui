import png from '../src/assets/png.png'
import { RiCalendarCheckLine } from "react-icons/ri";
import profile from '../src/assets/download.jpg'
import { BiSolidLogIn } from "react-icons/bi";
import { PiWarningCircleBold } from "react-icons/pi";

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
            <button className="mb-6 bg-[#5a5fbc] text-white py-1 rounded-md ml-8 px-10"><BiSolidLogIn className='inline -mt-1 mr-1' />Visit</button>
            <p className='text-xs text-gray-400 tracking-tighter'><PiWarningCircleBold  className='inline'/>Instructions for how to upload your handwritten material in given</p>
          </div>
        </div>

        {/* Middle and Right Section */}
        <div className="md:col-span-2 lg:col-span-3 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Compare Accuracy (3 cards) */}
          <div className="bg-white p-4 rounded-lg shadow-md">Compare Accuracy</div>
          <div className="bg-white p-4 rounded-lg shadow-md">Compare Accuracy</div>
          <div className="bg-white p-4 rounded-lg shadow-md">Compare Accuracy</div>

          {/* Improvements */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-2">Improvements</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-yellow-200 px-2 py-1 rounded">Geography</span>
              <span className="bg-red-200 px-2 py-1 rounded">Politics</span>
              <span className="bg-green-200 px-2 py-1 rounded">Mathematics</span>
            </div>
          </div>

          {/* Response Time */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-2">Response Time</h3>
            <p className="text-red-500">You are slow!</p>
          </div>

          {/* Approach Data */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-2">Approach Data</h3>
            <p>Analysis: 32%</p>
          </div>

          {/* Suggestions */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-2">Suggestions</h3>
            <p>40 sec for Easy questions</p>
          </div>

          {/* Compare Accuracy Graph */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1 bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-2">Compare Accuracy Graph</h3>
          </div>

          {/* Time Taken */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1 bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-2">Time Taken</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
