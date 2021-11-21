import React, {
  Children,
  ReactChild,
  ReactChildren,
  ReactNode,
  useEffect,
  useState,
} from "react";
import styles from "./toolBox.module.scss";
import cb from "classnames/bind";

const cn = cb.bind(styles);
interface IToolBoxProps {
  children: ReactNode;
}
const ToolBox = (props: IToolBoxProps) => {
  const { children } = props;
  return (
    <div className={cn("container")}>
      <p>{children}</p>
    </div>
  );
};

export default ToolBox;
