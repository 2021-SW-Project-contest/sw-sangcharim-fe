import React, { useEffect, useState } from "react";
import { restaurant } from "../../../../asset/image";
import { CategoryCard } from "../../../../component";
import MainCategory from "../mainCategory";
import RestaurantScene from "../restaurantScene";
import ServiceScene from "../serviceScene";
interface ISwitchAreaProps {
  show: boolean;
}
const SwitchArea = (props: ISwitchAreaProps) => {
  const { show } = props;
  const [selected, setSelected] = useState<number>(-1);
  useEffect(() => {
    if (!show) {
      setSelected(-1);
    }
  }, [show]);
  return (
    <>
      {selected === 0 ? (
        <RestaurantScene></RestaurantScene>
      ) : selected === 1 ? (
        <ServiceScene></ServiceScene>
      ) : (
        <MainCategory setSelected={setSelected}></MainCategory>
      )}
    </>
  );
};

export default SwitchArea;
