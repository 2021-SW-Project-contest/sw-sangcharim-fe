import React, { HtmlHTMLAttributes } from "react";
import styles from "./categoryTag.module.scss";
import cb from "classnames/bind";
import { MdCancel } from "react-icons/md";
import { IBusinessListProp } from "../../interface/IBusiness";
const cn = cb.bind(styles);
interface ICategoryTagProps {
  onClick: any;
  children: React.ReactNode;
  className?: string;
  data: IBusinessListProp;
}

const CategoryTag = (props: ICategoryTagProps) => {
  const { children, className = "_fill", onClick, data } = props;
  return (
    <div className={cn("container")} onClick={() => onClick(data)}>
      <div className={cn("wrapper", className)}>
        <p>{children}</p>
        {className !== "_outline" ? <MdCancel color={"#ffffff"} /> : <></>}
      </div>
    </div>
  );
};

export default CategoryTag;
