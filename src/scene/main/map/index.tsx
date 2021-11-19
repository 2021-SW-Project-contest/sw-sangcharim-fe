import React, { useEffect } from "react";
import styles from "./map.module.scss";
import cb from "classnames/bind";
import { useHistory } from "react-router-dom";
import { CustomOverlayMap, Map, MapMarker } from "react-kakao-maps-sdk";
import { fetch } from "../../../api/map.api";
const cn = cb.bind(styles);

const MapScene = () => {
  const history = useHistory();
  const test = async () => {
    try {
      const response = await fetch();
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    test();
  }, []);
  return (
    <Map center={{ lat: 37.619227, lng: 127.075294 }} className={cn("map")}>
      <CustomOverlayMap
        position={{ lat: 37.619227, lng: 127.075294 }}
      ></CustomOverlayMap>
    </Map>
  );
};

export default MapScene;
