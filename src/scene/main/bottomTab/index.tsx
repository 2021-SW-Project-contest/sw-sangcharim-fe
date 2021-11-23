import React, { useState } from "react";
import styles from "./bottomTab.module.scss";
import cb from "classnames/bind";
import { house, map } from "../../../asset/image";
import BottomCircleButton from "./bottomCircleButton";
import { useHistory } from "react-router";
const cn = cb.bind(styles);
interface IBottomTab {
  setShow: any;
  show: boolean;
}
const BottomTab = (props: IBottomTab) => {
  const { setShow, show } = props;
  const history = useHistory();
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
        {/* TODO: 홈 이동시 선택된 업종 초기화 하기 */}
        <div className={cn("tab-item")} onClick={() => history.push("/")}>
          <img src={house} alt={"tabIcon"} />
        </div>
        <div className={cn("tab-item")} onClick={() => history.push("/main")}>
          <img src={map} alt={"tabIcon"} />
        </div>
      </div>
    </div>
  );
};

export default BottomTab;
