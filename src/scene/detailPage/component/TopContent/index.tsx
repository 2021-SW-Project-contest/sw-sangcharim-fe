import React, { useState, useEffect } from "react";
import styles from "./TopContent.module.scss";
import { useHistory } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

import cb from "classnames/bind";
import { useParams } from "react-router-dom";
import {
  GetDetailParmas,
  IDetail,
  IFuture,
} from "../../../../interface/IDetail";
import { IArea } from "../../../../interface/IArea";
import { detailfetch, futurefetch } from "../../../../api/detail.api";
import { Area } from "../../../../api";
import { areaIdParam } from "../../../..";
import { useSelector } from "react-redux";
import { RootState } from "../../../../modules";
import Indicator from "../../../../component/Indicator";
const cn = cb.bind(styles);
library.add(faMapMarkerAlt, faChevronLeft);

const TopContent = () => {
  const history = useHistory();
  const [data, setData] = useState<IFuture>();
  const { id } = useParams<areaIdParam>();
  const pick = useSelector((state: RootState) => state.pick.picked);

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

      setData(response);

      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={cn("container")}>
      <div className={cn("wrapper")}>
        <button className={cn("back")} onClick={() => history.goBack()}>
          <FontAwesomeIcon icon={faChevronLeft} className={cn("back_icon")} />
        </button>
        {data ? (
          <>
            <div className={cn("circle_wrapper")}>
              <div className={cn("circle_1")}>
                <p>평균 폐업률</p>
                <p className={cn("percent")}>
                  {Number(data.areaClosure).toFixed(2)}%
                </p>
              </div>
              <div className={cn("circle_2")} />
              <div className={cn("circle_3")}>
                <p>상권 상황</p>
                <p className={cn("percent")}>{data.areaSituation}</p>
              </div>
            </div>
            <div className={cn("address")}>
              <div className={cn("address_top")}>
                <FontAwesomeIcon icon={faMapMarkerAlt} className={cn("ping")} />
                <p className={cn("top_address")}>서울특별시 노원구</p>
              </div>
              <div className={cn("address_bottom")}>{data.area.areaName}</div>
            </div>
          </>
        ) : (
          <Indicator isCenter={true}></Indicator>
        )}
      </div>
    </div>
  );
};

export default TopContent;
