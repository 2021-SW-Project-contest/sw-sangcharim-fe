import React from "react";
import styles from "./bottomTab.module.scss";
import cb from "classnames/bind";
import { arrow } from "../../../asset/image";
import { HiOutlineHome } from "react-icons/hi";
import { GrMapLocation } from "react-icons/gr";

const cn = cb.bind(styles);

const BottomTab = () => {
  return (
    <div className={cn("container")}>
      <div className={cn("wrapper")}>
        <div className={cn("tab-item")}>
          <HiOutlineHome size={50} color={"#09417b"} />
        </div>
        <div className={cn("tab-item")}>
          <GrMapLocation size={50} color={"#09417b"} />
        </div>
      </div>
    </div>
  );
};

export default BottomTab;
