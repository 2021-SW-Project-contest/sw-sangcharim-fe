import React, { HtmlHTMLAttributes } from "react";
import styles from "./categoryTag.module.scss";
import cb from "classnames/bind";
import { MdCancel } from "react-icons/md";
const cn = cb.bind(styles);
interface ICategoryTagProps {
  onClick?: Function;
  children: React.ReactNode;
}
const CategoryTag = (props: ICategoryTagProps) => {
  const { children } = props;
  return (
    <div className={cn("container")}>
      <div className={cn("wrapper")}>
        <p>{children}</p>
        <MdCancel color={"#ffffff"}></MdCancel>
      </div>
    </div>
  );
};

export default CategoryTag;
