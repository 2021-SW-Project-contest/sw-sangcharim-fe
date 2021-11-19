import React from "react";
import styles from "./mainCategory.module.scss";
import cb from "classnames/bind";
import { restaurant, retail, service } from "../../../../asset/image";
import { CategoryCard } from "../../../../component";
const mainCategoryList = [
  {
    img: restaurant,
    title: "외식업",
    desc: "딱 맞는 상권의 맛집되어보기",
  },
  {
    img: service,
    title: "서비스업",
    desc: "딱 맞는 상권에 단골만들기",
  },
  {
    img: retail,
    title: "소매업",
    desc: "딱 맞는 상권에 거래하기",
  },
];
const cn = cb.bind(styles);
export interface IMainCategoryProps {
  setSelected: Function;
}
const MainCategory = (props: IMainCategoryProps) => {
  const { setSelected } = props;
  return (
    <div className={cn("container")}>
      {mainCategoryList.map((item, key) => {
        return (
          <CategoryCard
            wrapperClassName={cn("card-text-wrapper")}
            className={cn("category-card")}
            data={item}
            key={key}
            onClick={() => setSelected(key)}
          />
        );
      })}
    </div>
  );
};

export default MainCategory;
