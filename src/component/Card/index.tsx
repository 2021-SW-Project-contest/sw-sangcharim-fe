import React, { ReactChild, ReactNode, useEffect, useState } from "react";
import internal from "stream";
import styles from "./categoryCard.module.scss";
import cb from "classnames/bind";

const cn = cb.bind(styles);

interface CardProps {
  className?: string;
  onClick?: Function;
  //url 사용할경우
  //img?: string;
  img?: typeof Image;
  children?: ReactNode;
}

const CategoryCard = (prop: CardProps) => {
  const { className, onClick, img, children } = prop;
  return (
    <div
      className={cn("categorycard", `${className}`)}
      onClick={() => {
        if (onClick !== null && onClick !== undefined) {
          onClick();
        }
      }}
    >
      {img}
      {children}
    </div>
  );
};

export default CategoryCard;
