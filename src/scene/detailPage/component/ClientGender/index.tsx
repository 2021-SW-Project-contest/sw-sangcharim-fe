import React, { useState, useEffect } from "react";
import styles from "./ClientGender.module.scss";
import { GenderList, ICustomer } from "../../../../interface/IDetail";
import { customerfetch } from "../../../../api/detail.api";
import { useRouteMatch } from "react-router-dom";
import cb from "classnames/bind";
import { useParams } from "react-router";
const cn = cb.bind(styles);

interface ICustomerParams {
  areaCode: number;
}

interface ICustomerList {
  data?: GenderList;
}

const womanpercent = 2;
const manpercent = 1;

const ClientGender = (prop: ICustomerList) => {
  const { data } = prop;
  const matches = useRouteMatch();

  return (
    <>
      {data ? (
        <div className={cn("container")}>
          <div className={cn("wrapper")}>
            <div className={cn("gender_img")}>
              {/* 여성의 비율이 높을 때 */}
              {data.female > data.male ? (
                <div className={cn("circle_wrapper")}>
                  <div className={cn("man_circle")}>
                    <p className={cn("percent")}>{data.male}%</p>
                  </div>
                  <div className={cn("woman_circle")}>
                    <p className={cn("percent")}>{data.female}%</p>
                  </div>
                </div>
              ) : (
                // 남성의 비율이 높을 때
                <div className={cn("circle_wrapper")}>
                  <div className={cn("big_circle")}>
                    <p className={cn("percent")}>{data.male}%</p>
                  </div>
                  <div className={cn("small_circle")}>
                    <p className={cn("percent")}>{data.female}%</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default ClientGender;
