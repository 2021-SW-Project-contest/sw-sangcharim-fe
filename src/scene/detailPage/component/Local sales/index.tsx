import React from "react";
import "../../../../scss/font.scss";

import { Bar } from "react-chartjs-2";

const LocalSales = () => {
  const percent_value = [300000, 503000, 330000];
  const data = {
    labels: ["최소 매출", "평균 매출", "최대 매출"],
    labelsFontFamily: "Vitro_core",
    LabelFontColor: ["#009fe6", "#325bad", "#122256"],
    borderRadius: 14,
    datasets: [
      {
        data: percent_value,
        backgroundColor: ["#009fe6", "#325bad", "#122256"],
        borderRadius: 15,
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
          indexAxis: "y",
          responsive: true,
          maintainAspectRatio: true,
          aspectRatio: 2,

          scales: {
            x: {
              display: false,
              max: 1000000,
              grid: {
                display: false,
              },
              stacked: true,
            },
            y: {
              stacked: true,
              display: true,
              grid: {
                display: false,
              },
              ticks: {
                font: {
                  size: 15,
                  family: "Vitro_core",
                },
              },
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
              color: "black",
              align: "end",
              anchor: "end",
              font: {
                size: 15,
                family: "Vitro_pride",
                weight: "bold",
              },
              offset: 3,
              padding: 0,
            },
          },
        }}
      />
    </div>
  );
};

export default LocalSales;
