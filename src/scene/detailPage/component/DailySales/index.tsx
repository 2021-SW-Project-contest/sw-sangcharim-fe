import React from "react";
import "../../../../scss/font.scss";

import { Bar } from "react-chartjs-2";
import { ISales } from "../../../../interface/IDetail";
interface DailySalesProps {
  dataSet: ISales;
}
const DailySales = (props: DailySalesProps) => {
  const { dataSet } = props;
  const percent_value = [
    dataSet.day.mon,
    dataSet.day.tue,
    dataSet.day.wed,
    dataSet.day.thu,
    dataSet.day.fri,
    dataSet.day.sat,
    dataSet.day.sun,
  ];
  const data = {
    labels: ["월", "화", "수", "목", "금", "토", "일"],
    labelsFontFamily: "Vitro_core",
    LabelFontColor: ["#009fe6", "#325bad", "#122256"],
    borderRadius: 14,
    datasets: [
      {
        data: percent_value,
        backgroundColor: ["#466bb5"],
        borderRadius: 15,
        scaleShowGridLines: false,
        barShowStroke: false,
        // borderSkipped: false,
      },
    ],
  };

  return (
    <div>
      {/* <CanvasJSChart options={options} /> */}
      <Bar
        data={data}
        options={{
          responsive: true,
          maintainAspectRatio: true,
          aspectRatio: 2,

          scales: {
            x: {
              display: true,

              grid: {
                display: false,
              },

              ticks: {
                font: {
                  size: 15,
                },
              },
              stacked: false,
            },
            y: {
              stacked: true,
              display: false,
              grid: {
                display: false,
              },

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
              color: "black",
              align: "end",
              anchor: "end",
              font: {
                size: 15,
                family: "Vitro_pride",
                weight: "bold",
              },
              offset: -2,
              padding: 0,
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

export default DailySales;
