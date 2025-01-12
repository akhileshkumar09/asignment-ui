import React from "react";

const RulerComponent = () => {
  return (
    <div className="max-w-md mx-auto p-4 border rounded-lg shadow-md bg-white">
      <h3 className="text-gray-700 text-lg font-semibold flex items-center mb-4">
        <span className="material-icons mr-2">computer</span> Time Taken
      </h3>
      
      {/* Ruler Section */}
      <div className="space-y-6">
        {/* First Ruler */}
        <div>
          <div className="relative">
            {/* Ruler background */}
            <div className="h-6 bg-gray-100 relative flex items-center border border-gray-300">
              {/* Red Bar */}
              <div className="absolute left-8 w-[60%] bg-red-500 h-4 rounded"></div>
              {/* Green Bar */}
              <div className="absolute left-0 w-[30%] bg-green-500 h-4 rounded"></div>
            </div>
            {/* Slider */}
            <div className="absolute top-0 left-[30%] transform -translate-x-1/2 w-1 h-8 bg-blue-500"></div>
          </div>
          {/* Ruler Scale */}
          <div className="flex justify-between text-xs text-gray-600 mt-2">
            {Array.from({ length: 10 }).map((_, i) => (
              <span key={i}>{i * 10}sec</span>
            ))}
          </div>
          {/* Description */}
          <p className="text-gray-500 text-sm mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum
          </p>
        </div>

        {/* Second Ruler */}
        <div>
          <div className="relative">
            {/* Ruler background */}
            <div className="h-6 bg-gray-100 relative flex items-center border border-gray-300">
              {/* Red Bar */}
              <div className="absolute left-[50%] w-[40%] bg-red-500 h-4 rounded"></div>
              {/* Green Bar */}
              <div className="absolute left-[10%] w-[20%] bg-green-500 h-4 rounded"></div>
            </div>
            {/* Slider */}
            <div className="absolute top-0 left-[10%] transform -translate-x-1/2 w-1 h-8 bg-blue-500"></div>
          </div>
          {/* Ruler Scale */}
          <div className="flex justify-between text-xs text-gray-600 mt-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i}>{i}sec</span>
            ))}
          </div>
          {/* Description */}
          <p className="text-gray-500 text-sm mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum
          </p>
        </div>
      </div>
    </div>
  );
};

export default RulerComponent;
