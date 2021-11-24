import React from "react";
import cb from "classnames/bind";
import "../../../../scss/font.scss";

import ChartDataLabels from "chartjs-plugin-datalabels";
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js";
import { ISales } from "../../../../interface/IDetail";

Chart.register(ChartDataLabels);
interface TimeSalesProps {
  dataSet: ISales;
}
const TimeSales = (props: TimeSalesProps) => {
  const { dataSet } = props;
  const data = {
    labels: ["0-6", "6-11", "11-14", "14-17", "17-21", "21-24"],
    datasets: [
      {
        label: "First dataset",
        data: [
          dataSet.time.time0006,
          dataSet.time.time0611,
          dataSet.time.time1114,
          dataSet.time.time1417,
          dataSet.time.time1721,
          dataSet.time.time2124,
        ],
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
            max: 70,
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
            formatter: function (value) {
              return value + "%";
            },
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
