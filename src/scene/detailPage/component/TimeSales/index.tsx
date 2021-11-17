import React from "react";
import cb from "classnames/bind";
import "../../../../scss/font.scss";

import ChartDataLabels from "chartjs-plugin-datalabels";
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js";

Chart.register(ChartDataLabels);

const TimeSales = () => {
  const data = {
    labels: ["10", "12", "14", "16", "18", "20", "22", "00", "2"],
    datasets: [
      {
        label: "First dataset",
        data: [33, 53, 85, 41, 44, 65, 65, 65, 65],
        fill: "start",
        backgroundColor: "rgba(9,66,125,0.5)",
        borderColor: "#09427d",
        tension: 0.5,
        pointBackgroundColor: "#09427d",
      },
    ],
  };

  return (
    <Line
      data={data}
      options={{
        // animation: {
        //   easing: "easeInOutBack",
        // },
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 2,
        scales: {
          x: {
            grid: {
              display: false,
            },
            ticks: {
              font: {
                size: 15,
              },
            },
          },
          y: {
            display: false,
            max: 100,
            min: 0,
          },
        },
        plugins: {
          legend: {
            display: false,
          },

          datalabels: {
            display: true,
            color: "#325bad",
            align: "end",
            anchor: "end",
            offset: 5,
            padding: 0,

            font: {
              weight: "bold",
              size: 14,
              // family: "Vitro_core",
            },
          },
        },
      }}
    />
  );
};

export default TimeSales;
