import React, { useEffect, useState } from "react";
import styles from "./map.module.scss";
import cb from "classnames/bind";
import { useHistory } from "react-router-dom";
import { CustomOverlayMap, Map, MapMarker } from "react-kakao-maps-sdk";
import { fetch } from "../../../api/map.api";
import CustomOverlay from "../../../component/CustomOverlay";
import { IAreaList, IFarMap } from "../../../interface/IMap";
import Indicator from "../../../component/Indicator";
const cn = cb.bind(styles);

const MapScene = () => {
  const [data, setData] = useState<IFarMap>();
  const history = useHistory();
  const getData = async () => {
    try {
      const response = await fetch();
      setData(response);
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
          className={cn("map")}
        >
          <CustomOverlay data={data.areaList}></CustomOverlay>
        </Map>
      ) : (
        <Indicator isCenter={true}></Indicator>
      )}
    </>
  );
};

export default MapScene;
