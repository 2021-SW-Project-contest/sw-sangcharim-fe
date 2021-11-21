import React, { useEffect, useState } from "react";
import styles from "./map.module.scss";
import cb from "classnames/bind";
import { useHistory } from "react-router-dom";
import { Map, MapMarker, MarkerClusterer } from "react-kakao-maps-sdk";
import { fetch } from "../../../api/map.api";
import { CustomOverlay, CloseCustomOverlay } from "../../../component";
import { ICloseMap, IFarMap } from "../../../interface/IMap";
import Indicator from "../../../component/Indicator";
import { MapAPI, CloseMapAPI } from "../../../api";
const cn = cb.bind(styles);

const MapScene = () => {
  const [data, setData] = useState<IFarMap>();
  const [closeData, setCloseData] = useState<ICloseMap[]>();
  const [level, setLevel] = useState(6);
  const history = useHistory();
  const getData = async () => {
    try {
      // var level = map.getLevel();
      const response = await MapAPI.fetch();
      const result = await CloseMapAPI.fetch();

      setData(response);
      setCloseData(result);

      console.log(result);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getData();
  }, []);
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
          {level < 3 ? (
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
