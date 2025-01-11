

const Dashboard = () => {
  return (
    <div className="p-4 sm:p-8 bg-gray-100 min-h-screen">
     
      {/* Main Content Grid */}
      <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
        {/* Left Section */}
        <div className="md:col-span-1 bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-4">Your Result!</h2>
          <p className="text-sm mb-4">All your insights & details in one place</p>
          <div className="bg-gray-50 p-4 rounded-md mb-4">
            <p className="font-bold text-xl">136 / 240</p>
            <p className="text-green-600 text-sm font-bold">76% Accuracy</p>
            <button className="mt-4 w-full bg-purple-500 text-white py-2 rounded-md">Practice more</button>
          </div>
          <div className="mt-4">
            <button className="w-full bg-blue-500 text-white py-2 rounded-md">Visit</button>
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
