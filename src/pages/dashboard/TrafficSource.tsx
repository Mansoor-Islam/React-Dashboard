import React from "react";
import { Doughnut } from "react-chartjs-2";

const TrafficSource: React.FC = () => {
  const data = {
    labels: ["Organic", "Paid Advertising", "Social", "Other"],
    datasets: [
      {
        label: "Traffic Sources",
        data: [40, 30, 20, 15],
        backgroundColor: [
          "#63C88C",
          "#7E6FFB",
          "#4DBFD9",
          "#FEE739",
          "#EF6032",
        ],
      },
    ],
  };

  const options = {
    resposive: true,
    legend: {
      display: true,
      position: "bottom",
    },
  };

  return <Doughnut data={data} options={options} />;
};

export default TrafficSource;
