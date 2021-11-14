import React from "react";
import styles from "./seletpageScene.module.scss";
import selectimg from "../../image/main.png";
import arrow from "../../image/arrow.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStore,
  faMapMarkedAlt,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import cb from "classnames/bind";
const sy = cb.bind(styles);

library.add(faStore, faMapMarkedAlt, faAngleDoubleRight);

const SelectScene = () => {
  return (
    <div>
      <div className={sy("top_content")}>
        <div className={sy("header")}>
          <p className={sy("header_text")}>상차림</p>
        </div>
        <div className={sy("description")}>
          <p>
            차려진 상권에
            <br />
            숟가락만 놓으세요
          </p>
        </div>
        <div className={sy("img_wrapper")}>
          <img className={sy("img")} src={selectimg}></img>
        </div>
      </div>
      <div className={sy("bottom_content")}>
        <div className={sy("map-card")}>
          <FontAwesomeIcon icon={faMapMarkedAlt} className={sy("map")} />
          <p className={sy("map-card-text")}>장소검색</p>
        </div>
        <div className={sy("store-card")}>
          <FontAwesomeIcon icon={faStore} className={sy("store")} />
          <p className={sy("store-card-text")}>업종검색</p>
        </div>
      </div>
      <div className={sy("bottom-card")}>
        <p className={sy("bottom-card-text")}>상권 둘러보기</p>
        <img src={arrow} className={sy("arrow")} />
      </div>
    </div>
  );
};

export default SelectScene;

// 추후할일
// - 페이지 링크 추가하기
// - 그림 밑 그림자 px받아서 추가하기
// 컴펌 받을것
// - 업종검색 그림자가 너무 튐
// - 상권 둘러보기 화살표 변경
