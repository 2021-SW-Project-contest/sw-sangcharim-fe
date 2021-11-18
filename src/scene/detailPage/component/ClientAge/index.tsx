import React from "react";
import styles from "./ClientAge.module.scss";
import cb from "classnames/bind";
import "../../../../scss/font.scss";

import ChartDataLabels from "chartjs-plugin-datalabels";
import { Bar } from "react-chartjs-2";
import { Chart } from "chart.js";

Chart.register(ChartDataLabels);
const cn = cb.bind(styles);

const ClientAge = () => {
  const data = {
    labels: ["10대", "20대", "30대", "40대", "50대"],
    labelsFontFamily: "Vitro_pride",
    LabelFontColor: "Red",
    datasets: [
      {
        data: [30, 50, 30, 30, 40],
        backgroundColor: [
          "#6f8cc5",
          "#466bb5",
          "#6f8cc5",
          "#466bb5",
          "#6f8cc5",
        ],
      },
    ],
  };

  return (
    <div className={cn("hi")}>
      {/* <CanvasJSChart options={options} /> */}
      <Bar
        data={data}
        options={{
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
                  size: 17,

                  weight: "bold",
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
              offset: 3,
              padding: 0,

              font: {
                weight: "bold",

                family: "Vitro_pride",
              },
              formatter: function (value) {
                return value + "%";
              },
            },
          },
        }}
      />
    </div>
  );
};

export default ClientAge;
