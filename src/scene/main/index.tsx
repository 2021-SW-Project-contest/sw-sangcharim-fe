import React, { useEffect, useState } from "react";
import styles from "./mainScene.module.scss";
import cb from "classnames/bind";
import BottomTab from "./bottomTab";
import { useHistory } from "react-router-dom";
import MapScene from "./map";
import SelectPop from "./selectPop";

const cn = cb.bind(styles);

const MainScene = () => {
  const history = useHistory();
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className={cn("container")}>
      <div className={cn("wrapper")}>
        <SelectPop className={cn(`${show ? "show" : ""}`)} />
        <MapScene />
        <BottomTab setShow={setShow} show={show} />
      </div>
    </div>
  );
};

export default MainScene;
