import React, { ReactNode, useState } from "react";
import styles from "./selectPopHeader.module.scss";
import cb from "classnames/bind";
import { CategoryCard, CategoryTag } from "../../component";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../modules";
import { add, remove } from "../../modules/pick";
import { IBusinessListProp } from "../../interface/IBusiness";
const cn = cb.bind(styles);
interface ISelectPop {
  className?: string;
  children?: ReactNode;
}

const SelectPopHeader = (props: ISelectPop) => {
  const { className, children } = props;
  const pick = useSelector((state: RootState) => state.pick.picked);
  const dispatch = useDispatch();
  const onRemove = (diff: IBusinessListProp) => {
    dispatch(remove(diff));
  };

  return (
    <div className={cn("container", `${className}`)}>
      <div className={cn("wrapper")}>
        <div className={cn("tag")}>
          {pick.map((item: IBusinessListProp, key: number) => {
            return (
              <CategoryTag onClick={onRemove} data={item} key={key}>
                {item.businessName}
              </CategoryTag>
            );
          })}
        </div>
        {children}
      </div>
    </div>
  );
};

export default SelectPopHeader;
