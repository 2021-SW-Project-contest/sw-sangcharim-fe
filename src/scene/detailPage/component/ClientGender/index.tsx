import React from "react";
import styles from "./ClientGender.module.scss";

import cb from "classnames/bind";
const cn = cb.bind(styles);

const womanpercent = 2;
const manpercent = 1;
const isLoggenIn = true;
const ClientGender = () => {
  return (
    <div className={cn("container")}>
      <div className={cn("wrapper")}>
        <div className={cn("gender_img")}>
          {womanpercent > manpercent ? (
            <div className={cn("circle_wrapper")}>
              <div className={cn("man_circle")}>
                <p className={cn("percent")}>{manpercent}%</p>
              </div>
              <div className={cn("woman_circle")}>
                <p className={cn("percent")}>{womanpercent}%</p>
              </div>
            </div>
          ) : (
            <div className={cn("circle_wrapper")}>
              <div className={cn("big_circle")}>
                <p className={cn("percent")}>{manpercent}%</p>
              </div>
              <div className={cn("small_circle")}>
                <p className={cn("percent")}>{womanpercent}%</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClientGender;
