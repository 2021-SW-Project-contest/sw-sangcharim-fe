import React from "react";
import styles from "./selectScene.module.scss";
import { useHistory } from "react-router-dom";

import { selectimg, arrow } from "../../asset/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStore,
  faMapMarkedAlt,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import cb from "classnames/bind";
const cn = cb.bind(styles);

library.add(faStore, faMapMarkedAlt, faAngleDoubleRight);

const SelectScene = () => {
  const history = useHistory();
  return (
    <div>
      <div className={cn("top_content")}>
        <div className={cn("header")}>
          <p className={cn("header_text")}>상차림</p>
        </div>
        <div className={cn("description")}>
          <p>
            차려진 상권에
            <br />
            숟가락만 놓으세요
          </p>
        </div>
        <div className={cn("img_wrapper")}>
          <img className={cn("img")} src={selectimg}></img>
        </div>
      </div>
      <div className={cn("bottom_content")}>
        <div className={cn("map-card")}>
          <FontAwesomeIcon icon={faMapMarkedAlt} className={cn("map")} />
          <p className={cn("map-card-text")}>장소검색</p>
        </div>
        <div className={cn("store-card")}>
          <FontAwesomeIcon icon={faStore} className={cn("store")} />
          <p className={cn("store-card-text")}>업종검색</p>
        </div>
      </div>
      <div className={cn("bottom-card")} onClick={() => history.push("/main")}>
        <p className={cn("bottom-card-text")}>상권 둘러보기</p>
        <img src={arrow} className={cn("arrow")} />
      </div>
    </div>
  );
};

export default SelectScene;

// 추후할일
// - 페이지 링크 추가하기
