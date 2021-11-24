import React from "react";
import styles from "./ClientAge.module.scss";
import cb from "classnames/bind";
import "../../../../scss/font.scss";

import ChartDataLabels from "chartjs-plugin-datalabels";
import { Bar } from "react-chartjs-2";
import { Chart } from "chart.js";
import { AgeList } from "../../../../interface/IDetail";

Chart.register(ChartDataLabels);
const cn = cb.bind(styles);
interface ClientAgeProps {
  dataSet: AgeList;
}
const ClientAge = (props: ClientAgeProps) => {
  const { dataSet } = props;
  const data = {
    labels: ["10대", "20대", "30대", "40대", "50대", "60대"],
    labelsFontFamily: "Vitro_pride",
    LabelFontColor: "Red",
    datasets: [
      {
        data: [
          Number(dataSet.age10).toFixed(2),
          Number(dataSet.age20).toFixed(2),
          Number(dataSet.age30).toFixed(2),
          Number(dataSet.age40).toFixed(2),
          Number(dataSet.age50).toFixed(2),
          Number(dataSet.age60).toFixed(2),
        ],
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
              max: 60,
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
