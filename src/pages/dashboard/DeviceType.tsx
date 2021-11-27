import React from "react";

import { Pie } from "react-chartjs-2";

const DeviceType: React.FC = () => {
  const data = {
    labels: ["Desktop", "Mobile", "Tablet"],
    datasets: [
      {
        label: "Devices Used",
        data: [40, 40, 20],
        backgroundColor: ["#2896FB", "#4EAFA3", "#FECF38"],
      },
    ],
  };

  const options = {
    resposive: true,
  };

  return <Pie data={data} options={options} />;
};

export default DeviceType;
