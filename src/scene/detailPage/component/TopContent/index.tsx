import React, { useState } from "react";
import styles from "./TopContent.module.scss";
import { useHistory } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import cb from "classnames/bind";

const cn = cb.bind(styles);
library.add(faMapMarkerAlt, faChevronLeft);
const TopContent = () => {
  const history = useHistory();

  return (
    <div className={cn("container")}>
      <div className={cn("wrapper")}>
        <button className={cn("back")} onClick={() => history.goBack()}>
          <FontAwesomeIcon icon={faChevronLeft} className={cn("back_icon")} />
        </button>
        <div className={cn("circle_wrapper")}>
          <div className={cn("circle_1")}>
            <p>평균 폐업률</p>
            <p className={cn("percent")}>20%</p>
          </div>
          <div className={cn("circle_2")} />
          <div className={cn("circle_3")}>
            <p>상권 상황</p>
            <p className={cn("percent")}>다이나믹</p>
          </div>
        </div>
        <div className={cn("address")}>
          <div className={cn("address_top")}>
            <FontAwesomeIcon icon={faMapMarkerAlt} className={cn("ping")} />
            <p className={cn("top_address")}>서울특별시 노원구 공릉동</p>
          </div>
          <div className={cn("address_bottom")}>동일로 173가길</div>
        </div>
      </div>
    </div>
  );
};

export default TopContent;
