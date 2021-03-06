import React from "react";
import "../../../../scss/font.scss";

import { Bar } from "react-chartjs-2";
import { ISales } from "../../../../interface/IDetail";
import { faBlackberry } from "@fortawesome/free-brands-svg-icons";
interface LocalSalesProps {
  dataSet: ISales;
}
const LocalSales = (props: LocalSalesProps) => {
  const { dataSet } = props;
  const percent_value = [
    dataSet.sales.min,
    dataSet.sales.avg,
    dataSet.sales.max,
  ];
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
              max: 100000000,
              min: 0,
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

              min: 0,
            },
          },
          plugins: {
            legend: {
              display: false,
            },
            datalabels: {
              display: false,
              color: "black",
              align: "end",
              anchor: "start",
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
