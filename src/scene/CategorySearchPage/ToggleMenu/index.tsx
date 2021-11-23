import React, { useState, ReactNode, useEffect } from "react";
import styles from "./ToggleMenu.module.scss";

import cb from "classnames/bind";
import { areafetch } from "../../../api/area.api";
import { IAreaList } from "../../../interface/IMap";
import { IArea, IAreaListItems } from "../../../interface/IArea";
import { useHistory } from "react-router";
import { Business } from "../../../api";
import { IBusiness, IBusinessListProp } from "../../../interface/IBusiness";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../modules";
import { add } from "../../../modules/pick";

const cn = cb.bind(styles);

const ToggleMenu = () => {
  const [index, setIndex] = useState<number>(0);
  const [data, setData] = useState<IBusiness[]>();
  const history = useHistory();
  const pick = useSelector((state: RootState) => state.pick.picked);
  const dispatch = useDispatch();
  const getData = async () => {
    const response = await Business.fetch();
    setData(response);
    console.log(response);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className={cn("container")}>
      <div className={cn("list-wrapper")}>
        {data?.map((item: IBusiness, key: number) => {
          return (
            <button
              className={cn("button", index === key ? "active_button" : "")}
              key={key}
              onClick={() => {
                setIndex(key);
              }}
            >
              {item.businessCategory}
            </button>
          );
        })}
      </div>
      <div className={cn("subList-wrapper")}>
        {data &&
          data[index].businessList.map(
            (item: IBusinessListProp, key: number) => {
              return (
                <p
                  className={cn("subList-button")}
                  key={key}
                  onClick={() => {
                    history.push(`/main`);
                    dispatch(add(item));
                    console.log(item.businessName);
                  }}
                >
                  {item.businessName}
                </p>
              );
            }
          )}
      </div>
    </div>
  );
};

export default ToggleMenu;
