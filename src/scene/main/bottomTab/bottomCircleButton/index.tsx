import React from "react";
import styles from "./bottomCircleButton.module.scss";
import cb from "classnames/bind";
import { AiOutlinePlus } from "react-icons/ai";

const cn = cb.bind(styles);
interface IBottomCircleButton {
  className: string;
  onClick: any;
}
const BottomCircleButton = (props: IBottomCircleButton) => {
  const { className, onClick } = props;
  return (
    <div className={cn("container", className)} onClick={onClick}>
      <AiOutlinePlus size={50} color={"#ffffff"} className={"plus-icon"} />
    </div>
  );
};

export default BottomCircleButton;
