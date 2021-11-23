import React, { useEffect, useState } from "react";
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
import { useParams } from "react-router";
import { areaIdParam } from "../../";
import { useSelector } from "react-redux";
import { RootState } from "../../modules";
import {
  GetDetailParmas,
  ICustomer,
  IFuture,
  ISales,
} from "../../interface/IDetail";
import { customerfetch, futurefetch, salesfetch } from "../../api/detail.api";
const cn = cb.bind(styles);

const DetailScene = () => {
  const { id } = useParams<areaIdParam>();
  const pick = useSelector((state: RootState) => state.pick.picked);

  const [future, setFuture] = useState<IFuture>();
  const [customer, setCustomer] = useState<ICustomer>();
  const [sales, setSales] = useState<ISales>();
  const getData = async () => {
    try {
      let paramData: GetDetailParmas = { areaCode: parseInt(id) };

      if (pick.length === 1) {
        paramData = {
          ...paramData,
          businessCode1: pick[0].businessCode,
        };
      } else if (pick.length === 2) {
        paramData = {
          ...paramData,

          businessCode1: pick[0].businessCode,
          businessCode2: pick[1].businessCode,
        };
      } else if (pick.length === 3) {
        paramData = {
          ...paramData,

          businessCode1: pick[0].businessCode,
          businessCode2: pick[1].businessCode,
          businessCode3: pick[2].businessCode,
        };
      }
      console.log(id);

      console.log(paramData.areaCode);
      const response = await futurefetch(paramData);
      setFuture(response);

      const responseCus = await customerfetch(paramData);
      setCustomer(responseCus);

      const responseSales = await salesfetch(paramData);
      setSales(responseSales);

      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <TopContent></TopContent>
      <div className={cn("graph")}>
        <DetailCard className={cn("card")} text={"고객층 성비"}>
          <ClientGender data={customer?.genderRatio} />
        </DetailCard>
        <DetailCard className={cn("card")} text={"고객층 나이"}>
          <div className={cn("clientage")}>
            {customer ? (
              <ClientAge dataSet={customer.ageRatio} />
            ) : (
              <p>데이터가 존재하지 않습니다</p>
            )}
          </div>
        </DetailCard>
        {future && future.business !== undefined ? (
          <DetailCard className={cn("card")} text={"업종별 폐업률"}>
            {future.business.map((item, key) => {
              return (
                <div className={cn("density")}>
                  <Density dataSet={item} key={key} />
                </div>
              );
            })}
          </DetailCard>
        ) : (
          <></>
        )}

        <DetailCard className={cn("card")} text={"지역 매출"}>
          <div className={cn("localsales")}>
            {sales ? (
              <LocalSales dataSet={sales} />
            ) : (
              <p>데이터가 존재하지 않습니다</p>
            )}
          </div>
        </DetailCard>
        <DetailCard className={cn("card")} text={"요일 매출"}>
          <div className={cn("dailysales")}>
            {sales ? (
              <DailySales dataSet={sales} />
            ) : (
              <p>데이터가 존재하지 않습니다</p>
            )}
          </div>
        </DetailCard>
        <DetailCard className={cn("card")} text={"시간 매출"}>
          <div className={cn("timesales")}>
            {sales ? (
              <TimeSales dataSet={sales} />
            ) : (
              <p>데이터가 존재하지 않습니다</p>
            )}
          </div>
        </DetailCard>
      </div>
    </div>
  );
};

export default DetailScene;
