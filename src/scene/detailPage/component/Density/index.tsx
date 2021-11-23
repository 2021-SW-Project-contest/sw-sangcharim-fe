import React, { ReactNode } from "react";
import styles from "./Density.module.scss";
import cb from "classnames/bind";
import { Doughnut } from "react-chartjs-2";
import { Chart } from "chart.js";
import { DetailBusinessList } from "../../../../interface/IDetail";

const cn = cb.bind(styles);
interface DensityProps {
  dataSet: DetailBusinessList;
}
const Density = (props: DensityProps) => {
  const { dataSet } = props;
  // const percent_value = 1;
  const data = {
    maintainAspectRatio: false,
    responsive: false,
    labels: ["a"],
    datasets: [
      {
        data: [dataSet.businessClosure, 100 - dataSet.businessClosure],
        backgroundColor: ["black", "#ededed"],
      },
    ],
  };
  return (
    <div>
      <Doughnut
        data={data}
        options={{
          //size변경 가능할수있는 옵션
          // maintainAspectRatio: false,
          cutout: 55,
          rotation: 250,
          scales: {
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
              display: false,
            },
          },
          elements: {
            arc: {
              borderWidth: 1,
            },
          },
        }}
      />
      <div className={cn("text_wrapper")}>
        <p className={cn("text")}>{dataSet.businessName}폐업률</p>
        <p className={cn("percent")}>{dataSet.businessClosure}%</p>
      </div>
    </div>
  );
};

export default Density;
