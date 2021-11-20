import React from "react";
import styles from "./customOverlay.module.scss";
import cb from "classnames/bind";
import { CustomOverlayMap } from "react-kakao-maps-sdk";
import { IAreaList, IFarMap } from "../../interface/IMap";
import { useHistory } from "react-router";

const cn = cb.bind(styles);
interface ICustomOverlayProps {
  className?: string;
  data: IAreaList[];
}
const CustomOverlay = (props: ICustomOverlayProps) => {
  const { className = "__good", data } = props;
  const history = useHistory();
  return (
    <>
      {data.map((item: IAreaList, key: number) => {
        return (
          <CustomOverlayMap position={{ lat: item.lat, lng: item.long }}>
            <div
              className={cn(
                "container",
                item.businessCount < 30
                  ? "__good"
                  : item.businessCount < 60
                  ? "__warning"
                  : "__danger"
              )}
              onClick={() => history.push("/detail")}
            >
              <p>{item.businessCount}</p>
            </div>
          </CustomOverlayMap>
        );
      })}
    </>
  );
};

export default CustomOverlay;
