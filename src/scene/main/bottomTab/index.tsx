import React, { useState } from "react";
import styles from "./bottomTab.module.scss";
import cb from "classnames/bind";
import { home } from "../../../asset/image";
import { HiOutlineHome } from "react-icons/hi";
import { GrMapLocation } from "react-icons/gr";
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
      <BottomCircleButton
        className={cn("bottom-button")}
        onClick={() => {
          setShow(!show);
        }}
      ></BottomCircleButton>
      <div className={cn("wrapper")}>
        <div className={cn("tab-item")}>
          <img src={home}></img>
          {/* <HiOutlineHome size={50} color={"#09417b"} /> */}
        </div>
        <div className={cn("tab-item")}>
          <GrMapLocation size={50} color={"#09417b"} />
        </div>
      </div>
    </div>
  );
};

export default BottomTab;
