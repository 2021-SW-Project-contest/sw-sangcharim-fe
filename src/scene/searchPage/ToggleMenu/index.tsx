import React, { useState, ReactNode } from "react";
import styles from "./ToggleMenu.module.scss";

import cb from "classnames/bind";
const cn = cb.bind(styles);

interface CardProps {
  className?: string;
  text?: string;
  children?: ReactNode;
}

const ToggleMenu = (prop: CardProps) => {
  const { children, text } = prop;
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <div className={cn("container")}>
      <button className={cn("button")} onClick={toggleMenu}>
        {text}
      </button>

      {openMenu ? (
        <div className={cn("last_name")}>
          <p className={cn("text")}>상계동</p>
        </div>
      ) : (
        <p> 지역을 선택하세요</p>
      )}
    </div>
  );
};

export default ToggleMenu;
