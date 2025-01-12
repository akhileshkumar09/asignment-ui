import { BsStars } from "react-icons/bs";

const Suggestions = () => {
    const data = [
      { label: "Q. 1-12", time: "40sec", difficulty: "Easy", color: "text-teal-500" },
      { label: "Q. 12-32", time: "1.5min", difficulty: "Medium", color: "text-yellow-500" },
      { label: "Q. 32-40", time: "3min", difficulty: "Hard", color: "text-red-500" },
    ];
  
    return (
      <div className="bg-white p-1 rounded-lg shadow-md w-full h-full">
       
          <span className="text-gray-400 mb-4 font-semibold"><BsStars  className='mt-1 inline'/>Suggestions</span>
    
  
        {/* Data Rows */}
        <div className="grid grid-cols-3 gap-4">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center  p-2"
            >
              {/* Question Range */}
              <span className="bg-indigo-600 text-white text-xs pl-1 py-1 rounded mb-2 h-6 w-12  tracking-tighter">
                {item.label}
              </span>
  
              {/* Time */}
              <span className="text-gray-800  border-2 p-1 font-semibold border-dashed border-indigo-300 rounded-md">{item.time}</span>
  
              {/* Difficulty */}
              <span className={`mt-2 ${item.color} text-sm font-medium`}>
                {item.difficulty}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Suggestions;
  