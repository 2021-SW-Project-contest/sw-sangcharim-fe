import React, { ReactNode, useState } from "react";
import styles from "./selectPop.module.scss";
import cb from "classnames/bind";
import SwitchArea from "./switchArea";
import { CategoryCard, CategoryTag } from "../../../component";
import { restaurant } from "../../../asset/image";
import SelectPopHeader from "../../../component/SelectPopHeader";

const cn = cb.bind(styles);
interface ISelectPop {
  className?: string;
  show: boolean;
  children?: ReactNode;
}
interface IPickList {
  text: string;
  key: number;
}
const SelectPop = (props: ISelectPop) => {
  const { className, children, show } = props;

  return (
    <SelectPopHeader className={className}>
      <SwitchArea show={show}></SwitchArea>
    </SelectPopHeader>
  );
};

export default SelectPop;
