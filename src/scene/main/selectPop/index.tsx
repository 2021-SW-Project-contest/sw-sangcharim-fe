import React, { useState } from "react";
import styles from "./selectPop.module.scss";
import cb from "classnames/bind";
import { CategoryCard, CategoryTag } from "../../../component";
const cn = cb.bind(styles);
interface ISelectPop {
  className?: string;
}
interface IPickList {
  text: string;
  key: number;
}
const SelectPop = (props: ISelectPop) => {
  const { className } = props;
  const [pick, setPick] = useState<IPickList[]>([
    { text: "test1", key: 0 },
    { text: "test2", key: 1 },
    { text: "test2", key: 1 },
    { text: "test2", key: 1 },
    { text: "test2", key: 1 },
    { text: "test2", key: 1 },
  ]);

  //   const [category, setCategory] = useState([{name: "name",}]);
  return (
    <div className={cn("container", `${className}`)}>
      <div className={cn("wrapper")}>
        <div className={cn("wrapper", "tag")}>
          {pick.map((item: IPickList, key: number) => {
            return <CategoryTag>{item.text}</CategoryTag>;
          })}
        </div>
        <div className={cn("wrapper", "card")}>
          <CategoryCard></CategoryCard>
        </div>
      </div>
    </div>
  );
};

export default SelectPop;
