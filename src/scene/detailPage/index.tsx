import React from "react";
import styles from "./DetailScene.module.scss";

import TopContent from "./component/TopContent";
import DetailCard from "./component/DetailCard";
import ClientGender from "./component/ClientGender";

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
        <DetailCard className={cn("card")} text={"고객층 나이"}></DetailCard>
        <DetailCard className={cn("card")} text={"가게 밀집도"}></DetailCard>
        <DetailCard className={cn("card")} text={"지역 매출"}></DetailCard>
        <DetailCard className={cn("card")} text={"요일 매출"}></DetailCard>
        <DetailCard className={cn("card")} text={"시간 매출"}></DetailCard>
      </div>
    </div>
  );
};

export default DetailScene;
