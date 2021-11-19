import React from "react";
import styles from "./SearchScene.module.scss";
import { useHistory } from "react-router-dom";

import ToggleMenu from "./ToggleMenu";

import cb from "classnames/bind";
const cn = cb.bind(styles);

const SearchScene = () => {
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
        <p className={cn("search")}>장소로 검색하기</p>
      </div>
      <div className={cn("bottom_content")}>
        <div className={cn("first_address")}>
          <ToggleMenu text={"노원구"} />
          <p className={cn("address_title")}></p>
        </div>
        <div className={cn("last_address")}></div>
      </div>
    </div>
  );
};

export default SearchScene;
