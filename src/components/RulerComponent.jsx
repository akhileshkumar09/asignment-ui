import { GiSandsOfTime } from "react-icons/gi";

const RulerComponent = () => {
  return (
    <div className="max-w-md mx-auto p-2  rounded-lg shadow-md bg-white relative">
      
        <span className="text-gray-400 mb-4 font-semibold"><GiSandsOfTime className="inline mr-1"/> Time Taken</span>
      {/* first ruler */}
      <div className="w-full px-4 mt-4">
         <div className="relative w-full h-20 bg-[#f1f0fa] rounded ">
<div>
            <span className="absolute text-xs">
                <hr className="h-4 border-r-2 border-[#8f92d2] w-1 border-t-0 rounded"/> 10sec
            </span>
            <div className=" absolute w-10 h-4  left-1 flex  gap-1 ">
                <hr className="h-2 w-1 border-r-2 border-t-0 border-[#8f92d2]"/>
                <hr className="h-2 w-1 border-r-2 border-t-0 border-[#8f92d2]"/>
                <hr className="h-2 w-1 border-r-2 border-t-0 border-[#8f92d2]"/>
                <hr className="h-2 w-1 border-r-2 border-t-0 border-[#8f92d2]"/>
            </div>
            <span className="absolute text-xs left-8">
                <hr className="h-4 border-r-2 border-[#8f92d2] w-1 border-t-0 rounded ml-1"/> 20
            </span>
            <div className=" absolute w-10 h-4 left-10 flex   gap-1">
                <hr className="h-2 w-1 border-r-2 border-t-0 border-[#8f92d2]"/>
                <hr className="h-2 w-1 border-r-2 border-t-0 border-[#8f92d2]"/>
                <hr className="h-2 w-1 border-r-2 border-t-0 border-[#8f92d2]"/>
                <hr className="h-2 w-1 border-r-2 border-t-0 border-[#8f92d2]"/>
            </div>
            <span className="absolute text-xs left-16 ">
                <hr className="h-4 border-r-2 border-[#8f92d2] w-1 border-t-0 rounded ml-2"/> 30
            </span>
            <div className=" absolute w-10 h-4  left-20 flex   gap-1 ">
                <hr className="h-2 w-1 border-r-2 border-t-0 border-[#8f92d2]"/>
                <hr className="h-2 w-1 border-r-2 border-t-0 border-[#8f92d2]"/>
                <hr className="h-2 w-1 border-r-2 border-t-0 border-[#8f92d2]"/>
                <hr className="h-2 w-1 border-r-2 border-t-0 border-[#8f92d2]"/>
            </div>
            </div>
         </div>
         </div>
          {/* Description */}
          <p className="text-gray-500 text-sm mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum
          </p>
        

        {/* Second Ruler */}
        
          {/* Description */}
          <p className="text-gray-500 text-sm mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum
          </p>
       
     
    </div>
  );
};

export default RulerComponent;
