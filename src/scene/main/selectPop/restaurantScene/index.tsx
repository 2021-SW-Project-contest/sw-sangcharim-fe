import React from "react";
import styles from "./restaurantScene.module.scss";
import cb from "classnames/bind";
import { restaurant } from "../../../../asset/image";
import { CategoryCard } from "../../../../component";
import SelectPopHeader from "../../../../component/SelectPopHeader";
const cn = cb.bind(styles);

const RestaurantScene = () => {
  return (
    <div className={cn("container")}>
      <p>restaurant</p>
    </div>
  );
};

export default RestaurantScene;
