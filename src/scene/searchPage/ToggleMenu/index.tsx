import React, { useState, ReactNode, useEffect } from "react";
import styles from "./ToggleMenu.module.scss";

import cb from "classnames/bind";
import { areafetch } from "../../../api/area.api";
import { IAreaList } from "../../../interface/IMap";
import { IArea, IAreaListItems } from "../../../interface/IArea";
import { useHistory } from "react-router";
const cn = cb.bind(styles);

const ToggleMenu = () => {
  const [index, setIndex] = useState<number>(0);
  const [data, setData] = useState<IArea[]>();
  const history = useHistory();
  const getData = async () => {
    const response = await areafetch();
    setData(response);
    console.log(response);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className={cn("container")}>
      <div className={cn("list-wrapper")}>
        {data?.map((item: IArea, key: number) => {
          return (
            <button
              className={cn("button", index === key ? "active_button" : "")}
              key={key}
              onClick={() => {
                setIndex(key);
              }}
            >
              {item.areaCategory}
            </button>
          );
        })}
      </div>
      <div className={cn("subList-wrapper")}>
        {data &&
          data[index].areaList.map((item: IAreaListItems, key: number) => {
            return (
              <p
                className={cn("subList-button")}
                key={key}
                onClick={() => {
                  history.push(`/main/${item.areaCode}`);
                  console.log(item.areaCode);
                }}
              >
                {item.areaName}
              </p>
            );
          })}
      </div>
    </div>
  );
};

export default ToggleMenu;
