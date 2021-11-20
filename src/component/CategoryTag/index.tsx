import React, { HtmlHTMLAttributes } from "react";
import styles from "./categoryTag.module.scss";
import cb from "classnames/bind";
import { MdCancel } from "react-icons/md";
const cn = cb.bind(styles);
interface ICategoryTagProps {
  onClick?: Function;
  children: React.ReactNode;
  className?: string;
}

const CategoryTag = (props: ICategoryTagProps) => {
  const { children, className = "_fill" } = props;
  return (
    <div className={cn("container")}>
      <div className={cn("wrapper", className)}>
        <p>{children}</p>
        {className !== "_outline" ? <MdCancel color={"#ffffff"} /> : <></>}
      </div>
    </div>
  );
};

export default CategoryTag;
