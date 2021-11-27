import React from "react";

import Overview from "./Overview";
import Graph from "./Graph";
import TrafficSource from "./TrafficSource";
import Audience from "./DeviceType";

const Dashboard: React.FC = () => {
  return (
    <div className="h-full sm:flex sm:w-screen">
      <div className="sm:flex sm:flex-col sm:w-8/12 sm:justify-evenly">
        <Overview />

        <hr className="border-gray-400 w-11/12 mx-auto mt-3 mb-2 sm:hidden" />

        {/* Sales Summary */}

        <div>
          <h3 className="font-bold text-gray-700 px-4 py-2 text-xl">
            Sales Summary
          </h3>
          <div className="bg-white h-72 w-11/12 px-4 my-2 mx-auto shadow-md rounded">
            <Graph />
          </div>
        </div>
      </div>

      <div className="sm:w-4/12 sm:mr-6 sm:flex sm:flex-col sm:justify-evenly">
        <div className="sm:bg-white sm:shadow sm:rounded sm:py-1">
          {/* Traffic Source */}

          <hr className="border-gray-400 w-11/12 mx-auto mt-6 mb-2 sm:hidden" />

          <div>
            <h3 className="font-bold text-gray-700 px-4 py-2 text-xl">
              Traffic Source{" "}
              <span className="font-normal text-base">(in %)</span>
            </h3>

            <div className="bg-white px-1 py-6 sm:py-2 w-11/12 my-2 mx-auto shadow-md rounded sm:shadow-none sm:rounded-none sm:border-t-2">
              <TrafficSource />
            </div>
          </div>
        </div>

        {/* Device Type */}

        <div className="sm:bg-white sm:shadow sm:rounded sm:py-1">
          <hr className="border-gray-400 w-11/12 mx-auto mt-6 mb-2 sm:hidden" />

          <div>
            <h3 className="font-bold text-gray-700 px-4 py-2 text-xl">
              Device Type <span className="font-normal text-base">(in %)</span>
            </h3>
            <div className="bg-white px-1 py-6 sm:py-2 w-11/12 mt-2 mb-4 mx-auto shadow-md rounded sm:shadow-none sm:rounded-none sm:border-t-2">
              <Audience />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
