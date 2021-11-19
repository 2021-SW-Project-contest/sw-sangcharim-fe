import React, { ReactChild, ReactNode, useEffect, useState } from "react";
import internal from "stream";
import styles from "./categoryCard.module.scss";
import cb from "classnames/bind";

const cn = cb.bind(styles);

interface CardProps {
  className?: string;
  wrapperClassName?: string;
  onClick?: Function;
  data: {
    img: string;
    title: string;
    desc: string;
  };
  // img?: typeof Image;
}

const CategoryCard = (prop: CardProps) => {
  const { className, onClick, data, wrapperClassName } = prop;
  return (
    <div
      className={cn("container", className)}
      onClick={() => {
        if (onClick !== null && onClick !== undefined) {
          onClick();
        }
      }}
    >
      <img src={data.img} alt={"category-img"} />
      <div className={cn("text-wrapper", wrapperClassName)}>
        <p>{data.title}</p>
        <p>{data.desc}</p>
      </div>
    </div>
  );
};

export default CategoryCard;
