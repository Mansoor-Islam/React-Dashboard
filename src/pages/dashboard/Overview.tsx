import React from "react";

import { BsFillHandbagFill } from "react-icons/bs";
import { FaShoppingCart, FaUsers } from "react-icons/fa";
import { RiPieChart2Fill } from "react-icons/ri";

const Overview: React.FC = () => {
  return (
    <>
      {/* Overview Container */}
      <div className="sm:flex sm:flex-col">
        <h3 className="font-bold text-gray-700 px-4 py-2 text-xl">Overview</h3>

        {/* Statistics Container */}
        <div className="w-screen sm:w-full flex flex-col sm:flex-row justify-center sm:justify-evenly items-center sm:flex-wrap">
          {/* Box - 1 */}

          <div className="bg-white w-56 sm:w-48 my-2 py-2 px-6 shadow-md rounded">
            <div className="flex justify-between items-center py-1">
              <BsFillHandbagFill className="text-yellow-500 text-xl" />
              <span className="text-lg font-bold text-green-600">+24%</span>
            </div>
            <h4 className="text-xl font-bold text-gray-700 py-1">$27, 340</h4>
            <h4 className="text-sm text-gray-500">Total Sales</h4>
          </div>

          {/* Box - 2 */}

          <div className="bg-white w-56 sm:w-48 my-2 py-2 px-6 shadow-md rounded">
            <div className="flex justify-between items-center py-1">
              <RiPieChart2Fill className="text-purple-500 text-xl" />
              <span className="text-lg font-bold text-red-500">-34%</span>
            </div>
            <h4 className="text-xl font-bold text-gray-700 py-1">$17, 340</h4>
            <h4 className="text-sm text-gray-500">Total Expenses</h4>
          </div>

          {/* Box - 3 */}
          <div className="bg-white w-56 sm:w-48 my-2 py-2 px-6 shadow-md rounded">
            <div className="flex justify-between items-center py-1">
              <FaUsers className="text-green-500 text-xl" />
              <span className="text-lg font-bold text-green-600">+48%</span>
            </div>
            <h4 className="text-xl font-bold text-gray-700 py-1">18, 260</h4>
            <h4 className="text-sm text-gray-500">Total Visitors</h4>
          </div>

          {/* Box - 4 */}
          <div className="bg-white w-56 sm:w-48 my-2 py-2 px-6 shadow-md rounded">
            <div className="flex justify-between items-center py-1">
              <FaShoppingCart className="text-red-500 text-xl" />
              <span className="text-lg font-bold text-green-600">+24%</span>
            </div>
            <h4 className="text-xl font-bold text-gray-700 py-1">11, 340</h4>
            <h4 className="text-sm text-gray-500">Total Orders</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
