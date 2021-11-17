import React from "react";
import styles from "./ClientGender.module.scss";

import cb from "classnames/bind";
const cn = cb.bind(styles);

const ClientGender = () => {
  return (
    <div className={cn("container")}>
      <div className={cn("wrapper")}>
        <div className={cn("gender_img")}>
          <div className={cn("circle_wrapper")}></div>
        </div>
      </div>
    </div>
  );
};

export default ClientGender;
