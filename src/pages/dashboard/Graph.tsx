import React from "react";
import { Line } from "react-chartjs-2";

const Graph: React.FC = () => {
  const data = {
    labels: ["Jul", "Aug", "Sept", "Oct", "Nov"],
    datasets: [
      {
        label: "Total Revenue (In Millions)",
        data: [3, 5, 4, 1, 5],
        borderColor: ["rgb(40, 150, 251)"],
        backgroundColor: ["rgb(40,150,251, 0.3)"],
        pointBackgroundColor: "green",
      },
      {
        label: "Expenses (In Millions)",
        data: [1, 4, 1, 3, 2],
        borderColor: ["rgb(237,94,130)"],
        backgroundColor: ["rgb(237,94,130, 0.3)"],
        pointBackgroundColor: "red",
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    resposive: true,
    title: {
      display: true,
      text: "Past 5 Months Sales Revenue",
    },
    tooltips: {
      callbacks: {
        label: function (toolTipItem: any) {
          return `$ ${toolTipItem.value}M`;
        },
        display: true,
      },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 8,
            stepSize: 1,
          },
        },
      ],
    },
  };

  return <Line data={data} options={options} />;
};

export default Graph;
