import React, { useState, ReactNode, useEffect } from "react";
import styles from "./ToggleMenu.module.scss";

import First from "./firstmenu";
import Second from "./secondmenu";
import cb from "classnames/bind";
const cn = cb.bind(styles);

const ToggleMenu = () => {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const firstMenu = () => {
    setFirst(!first);
  };
  const secondMenu = () => {
    setSecond(!second);
  };

  return (
    <div className={cn("container")}>
      <div className={cn("first_address")}>
        {first ? (
          <button className={cn("active_button")} onClick={firstMenu}>
            공릉동
          </button>
        ) : (
          <button className={cn("button")} onClick={firstMenu}>
            공릉동
          </button>
        )}
        {second ? (
          <button className={cn("active_button")} onClick={secondMenu}>
            상계동
          </button>
        ) : (
          <button className={cn("button")} onClick={secondMenu}>
            상계동
          </button>
        )}
      </div>
      {first ? (
        <div className={cn("last_name")}>
          <p className={cn("text")}>
            <First />
          </p>
        </div>
      ) : null}
      {second ? (
        <div className={cn("last_name")}>
          <p className={cn("text")}>
            <Second />
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default ToggleMenu;
