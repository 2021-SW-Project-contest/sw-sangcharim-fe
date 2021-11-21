import React from "react";
import styles from "./closeCustimOverlay.module.scss";
import cb from "classnames/bind";
import { CustomOverlayMap } from "react-kakao-maps-sdk";
import { ICloseMap } from "../../interface/IMap";
import { useHistory } from "react-router";
import ToolBox from "./ToolBox";

const cn = cb.bind(styles);
interface ICloseCustomOverlayProps {
  className?: string;
  data: ICloseMap[];
}
const CloseCustomOverlay = (props: ICloseCustomOverlayProps) => {
  const { className, data } = props;
  const history = useHistory();
  return (
    <>
      {data &&
        data.map((item: ICloseMap, key: number) => {
          return (
            <CustomOverlayMap position={{ lat: item.lat, lng: item.long }}>
              <ToolBox> {item.name}</ToolBox>
            </CustomOverlayMap>
          );
        })}
    </>
  );
};

export default CloseCustomOverlay;
