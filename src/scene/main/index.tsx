import React from "react";
import styles from "./mainScene.module.scss";
import cb from "classnames/bind";
const cn = cb.bind(styles);

const MainScene = () => {
  return (
    <div>
      <p className={cn("test-txt", "lala")}>메인화면입니다.</p>
    </div>
  );
};

export default MainScene;
