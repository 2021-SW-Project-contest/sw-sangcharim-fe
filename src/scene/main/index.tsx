import React, { useEffect } from "react";
import styles from "./mainScene.module.scss";
import cb from "classnames/bind";
import BottomTab from "./bottomTab";
import { useHistory } from "react-router-dom";
import MapScene from "./map";

const cn = cb.bind(styles);

const MainScene = () => {
  const history = useHistory();

  return (
    <div className={cn("container")}>
      <div className={cn("wrapper")}>
        <MapScene></MapScene>
        <BottomTab></BottomTab>
      </div>
    </div>
  );
};

export default MainScene;
