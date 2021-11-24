import React, { useEffect, useState } from "react";
import styles from "./map.module.scss";
import cb from "classnames/bind";
import { useParams } from "react-router-dom";
import { Map } from "react-kakao-maps-sdk";
import { CustomOverlay, CloseCustomOverlay } from "../../../component";
import { ICloseMap, IFarMap } from "../../../interface/IMap";
import Indicator from "../../../component/Indicator";
import { MapAPI, CloseMapAPI } from "../../../api";
import { useSelector } from "react-redux";
import { RootState } from "../../../modules";
import { IMapParamData } from "../../../interface/IBase";
import { areaCodeParam } from "../../..";
const cn = cb.bind(styles);

const MapScene = () => {
  const [data, setData] = useState<IFarMap>();

  const [closeData, setCloseData] = useState<ICloseMap[]>();
  const [level, setLevel] = useState(6);
  const pick = useSelector((state: RootState) => state.pick.picked);
  const { id } = useParams<areaCodeParam>();

  const getData = async () => {
    console.log(id);

    try {
      let test: IMapParamData = {};

      if (pick.length === 1) {
        test = {
          businessCode1: pick[0].businessCode,
        };
      } else if (pick.length === 2) {
        test = {
          businessCode1: pick[0].businessCode,
          businessCode2: pick[1].businessCode,
        };
      } else if (pick.length === 3) {
        test = {
          businessCode1: pick[0].businessCode,
          businessCode2: pick[1].businessCode,
          businessCode3: pick[2].businessCode,
        };
      }
      if (id) {
        test = { ...test, areaCode: parseInt(id) };
      }
      const response = await MapAPI.fetch(test);
      const result = await CloseMapAPI.fetch(test);

      setData(response);
      setCloseData(result);

      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getData();
  }, [pick.length]);
  return (
    <>
      {data ? (
        <Map
          center={{ lat: data?.focusLat, lng: data?.focusLong }}
          level={level}
          className={cn("map")}
          onZoomChanged={(map) => setLevel(map.getLevel())}
        >
          {/* 업종이 밀집되지않은 곳을 가까이서 보는게 좋을듯 */}
          {level < 4 ? (
            closeData ? (
              <CloseCustomOverlay data={closeData}></CloseCustomOverlay>
            ) : (
              <Indicator
                className={cn("Indicator-map")}
                type={"dots"}
                isCenter={true}
              ></Indicator>
            )
          ) : (
            <CustomOverlay data={data.areaList}></CustomOverlay>
          )}
        </Map>
      ) : (
        <Map
          center={{ lat: 37.617636, lng: 127.075621 }}
          level={level}
          className={cn("map")}
        >
          <Indicator
            className={cn("Indicator-map")}
            type={"dots"}
            isCenter={true}
          ></Indicator>
        </Map>
      )}
    </>
  );
};

export default MapScene;
