import React from "react";
import styles from "./mainCategory.module.scss";
import cb from "classnames/bind";
import { restaurant } from "../../../../asset/image";
import { CategoryCard } from "../../../../component";
import SelectPopHeader from "../../../../component/SelectPopHeader";

const cn = cb.bind(styles);

const ServiceScene = () => {
  return (
    <div className={cn("container")}>
      <p>service</p>
    </div>
  );
};

export default ServiceScene;
