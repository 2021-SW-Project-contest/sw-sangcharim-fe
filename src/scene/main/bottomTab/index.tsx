import React, { useState } from "react";
import styles from "./bottomTab.module.scss";
import cb from "classnames/bind";
import { house, map } from "../../../asset/image";
import BottomCircleButton from "./bottomCircleButton";
const cn = cb.bind(styles);
interface IBottomTab {
  setShow: any;
  show: boolean;
}
const BottomTab = (props: IBottomTab) => {
  const { setShow, show } = props;
  return (
    <div className={cn("container")}>
      <div className={cn("bottom-button")}>
        <BottomCircleButton
          className={cn(show ? "open" : "")}
          onClick={() => {
            setShow(!show);
          }}
        ></BottomCircleButton>
      </div>
      <div className={cn("wrapper")}>
        <div className={cn("tab-item")}>
          <img src={house} alt={"tabIcon"} />
        </div>
        <div className={cn("tab-item")}>
          <img src={map} alt={"tabIcon"} />
        </div>
      </div>
    </div>
  );
};

export default BottomTab;
