import { FaCodeCompare } from "react-icons/fa6";
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const CompareAccuracy = () => {
  // Chart data
  const data = {
    labels: ['1', '2', '3', '4', '5', '6', '7'],
    datasets: [
      {
        label: 'Accuracy',
        data: [90, 45, 35, 60, 55, 45, 65],
        backgroundColor: 'rgba(131, 133, 214, 255)', // Purple color
        borderRadius: 10, // Rounded corners on top
        barThickness: 16, // Fixed bar thickness
        hoverBackgroundColor: 'rgba(99, 102, 241, 1)', // Darker purple on hover
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Remove vertical grid lines
        },
      },
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 25, // Show ticks at intervals of 25
          callback: (value) => `${value}%`, // Add % to y-axis labels
        },
        grid: {
          drawBorder: false, // Remove left vertical line (y-axis border)
          color: 'rgba(0, 0, 0, 0.1)', // Light horizontal grid lines
        },
      },
    },
  };


  


  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-full h-full">
      {/* Header */}
      <h3 className="text-gray-400 mb-4 font-semibold"> <FaCodeCompare  className="inline mr-1"/>Compare Accuracy</h3>

      {/* Time Slots */}
      <div className="flex justify-between mb-4 px-10 relative">
      <p className='text-xs absolute -rotate-90 top-28 -left-6'>Accuracy</p>
      <hr className='w-full h-1 rounded top-3 -left-20 absolute bg-teal-300 mx-20 z-0'/>
        <div className="text-xs text-gray-500 bg-gray-300 rounded px-2 py-1 z-10">10MIN</div>
        <div className="bg-teal-500 text-white px-2 py-1 rounded text-xs z-10">15MIN</div>
        <div className="text-xs text-gray-500 bg-gray-300 rounded px-2 py-1 z-10">30MIN</div>
        <div className="text-xs text-gray-500 bg-gray-300 rounded px-2 py-1 z-10">45MIN</div>
      </div>

      {/* Bar Chart */}
      <div className="h-48">
        <Bar data={data} options={options} />
      </div>

      {/* X-Axis Label */}
      <div className=" text-sm  relative">
        <span className='absolute -top-2 left-40'>Slots</span>
      </div>
    </div>
  );
};

export default CompareAccuracy;
