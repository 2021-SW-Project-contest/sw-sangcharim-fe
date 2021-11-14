import React, { useEffect } from "react";
import styles from "./map.module.scss";
import cb from "classnames/bind";
import { useHistory } from "react-router-dom";
const cn = cb.bind(styles);

const MapScene = () => {
  const history = useHistory();
  useEffect(() => {
    let map: any = null;
    const initMap = () => {
      const map = new naver.maps.Map("map", {
        center: new naver.maps.LatLng(37.619227, 127.075294),
        zoom: 13,
      });
      //   const map = new naver.maps.Map("map", {
      //     center: new naver.maps.LatLng(37.511337, 127.012084),
      //     zoom: 13,
      //   });
      var circle = new naver.maps.Circle({
        strokeColor: "#83c0d5",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#94e4ff",
        fillOpacity: 0.35,
        center: new naver.maps.LatLng(37.609984, 127.076517),
        radius: 500,
        zIndex: 100,
        clickable: true,
        map: map,
      });
      var circle2 = new naver.maps.Circle({
        strokeColor: "#83c0d5",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#94e4ff",
        fillOpacity: 0.35,
        center: new naver.maps.LatLng(37.614506, 127.06523),
        radius: 500,
        zIndex: 100,
        clickable: true,
        map: map,
      });

      naver.maps.Event.addListener(circle, "click", function (e) {
        console.log("get");
        history.push("/detail");
      });
      naver.maps.Event.addListener(circle2, "click", function (e) {
        console.log("get2");
        history.push("/detail");
      });
    };
    initMap();
  }, []);
  return <div id="map" className={cn("map")}></div>;
};

export default MapScene;
