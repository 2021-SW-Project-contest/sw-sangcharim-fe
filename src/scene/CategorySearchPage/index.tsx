import React from "react";
import styles from "./SearchScene.module.scss";
import { useHistory } from "react-router-dom";

import ToggleMenu from "./ToggleMenu";

import cb from "classnames/bind";
const cn = cb.bind(styles);

const CategorySearchScene = () => {
  const history = useHistory();

  return (
    <div className={cn("container")}>
      <div className={cn("top_content")}>
        <div className={cn("nav")}>
          <p className={cn("title")}>상차림</p>
          <button className={cn("back")} onClick={() => history.goBack()}>
            닫기
          </button>
        </div>
        <p className={cn("search")}>업종으로 검색하기</p>
        <p className={cn("sub")}>한가지 업종을 선택하여주십시오</p>
      </div>
      <div className={cn("bottom_content")}>
        <ToggleMenu />
      </div>
    </div>
  );
};

export default CategorySearchScene;
