import React, { ReactNode, useState } from "react";
import styles from "./selectPopHeader.module.scss";
import cb from "classnames/bind";
import { CategoryCard, CategoryTag } from "../../component";

const cn = cb.bind(styles);
interface ISelectPop {
  className?: string;
  children?: ReactNode;
}
interface IPickList {
  text: string;
  key: number;
}
const SelectPopHeader = (props: ISelectPop) => {
  const { className, children } = props;
  const [pick, setPick] = useState<IPickList[]>([
    { text: "test1", key: 0 },
    { text: "test2", key: 1 },
    { text: "test2", key: 1 },
    { text: "test2", key: 1 },
    { text: "test2", key: 1 },
    { text: "test2", key: 1 },
  ]);

  return (
    <div className={cn("container", `${className}`)}>
      <div className={cn("wrapper")}>
        <div className={cn("tag")}>
          {pick.map((item: IPickList, key: number) => {
            return <CategoryTag>{item.text}</CategoryTag>;
          })}
        </div>
        {children}
      </div>
    </div>
  );
};

export default SelectPopHeader;
