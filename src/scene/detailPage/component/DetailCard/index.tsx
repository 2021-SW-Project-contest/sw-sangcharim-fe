import React, { ReactNode } from "react";
import styles from "./DetailCard.module.scss";
import cb from "classnames/bind";

const cn = cb.bind(styles);

interface GraphProps {
  className?: string;
  text: string;
  children?: ReactNode;
}

const DetailCard = (prop: GraphProps) => {
  const { className, children, text } = prop;
  return (
    <div className={cn("detailcard_", `${className}`)}>
      <div className={cn("card_title")}>
        <div className={cn("vertical_line")}>
          <p>{text}</p>
        </div>
      </div>
      <div className={cn("main_content")}>{children}</div>
    </div>
  );
};

export default DetailCard;
