import React, { useState } from "react";
import styles from "./DetailScene.module.scss";

import TopContent from "./component/TopContent";
import DetailCard from "./component/DetailCard";
import ClientGender from "./component/ClientGender";
import ClientAge from "./component/ClientAge";
import TimeSales from "./component/TimeSales";
import Density from "./component/Density";
import LocalSales from "./component/Local sales";
import DailySales from "./component/DailySales";

import cb from "classnames/bind";

const cn = cb.bind(styles);

const DetailScene = () => {
  return (
    <div>
      <TopContent></TopContent>
      <div className={cn("graph")}>
        <DetailCard className={cn("card")} text={"고객층 성비"}>
          <ClientGender />
        </DetailCard>
        <DetailCard className={cn("card")} text={"고객층 나이"}>
          <div className={cn("clientage")}>
            <ClientAge />
          </div>
        </DetailCard>
        <DetailCard className={cn("card")} text={"가게 밀집도"}>
          <div className={cn("density")}>
            <Density />
          </div>
        </DetailCard>
        <DetailCard className={cn("card")} text={"지역 매출"}>
          <div className={cn("localsales")}>
            <LocalSales />
          </div>
        </DetailCard>
        <DetailCard className={cn("card")} text={"요일 매출"}>
          <div className={cn("dailysales")}>
            <DailySales />
          </div>
        </DetailCard>
        <DetailCard className={cn("card")} text={"시간 매출"}>
          <div className={cn("timesales")}>
            <TimeSales />
          </div>
        </DetailCard>
      </div>
    </div>
  );
};

export default DetailScene;
