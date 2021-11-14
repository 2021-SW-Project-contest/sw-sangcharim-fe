import React, { ReactChild, ReactNode, useEffect, useState } from "react";
import internal from "stream";
import "./categorycard.scss";

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
      className={`categorycard_ ${className}`}
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
