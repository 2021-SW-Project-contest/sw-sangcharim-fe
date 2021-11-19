import React, { useEffect, useState } from "react";
import styles from "./subCategoryScene.module.scss";
import cb from "classnames/bind";
import { restaurant, service, retail } from "../../../../asset/image";
import { IBusinessListProp } from "../../../../interface/IBusiness";
import { Business } from "../../../../api";
import { CategoryTag } from "../../../../component";
import { isTemplateExpression } from "typescript";
import SubMiddle from "./subMiddle";
import Indicator from "../../../../component/Indicator";
const cn = cb.bind(styles);

interface ISubCategorySceneProps {
  selected: number;
  setSelected: Function;
}
export interface IdataSet {
  categoryList: IBusinessListProp[];
  img: string;
  title: string;
}
const caseList = [
  { category: "외식업", img: restaurant },
  { category: "서비스업", img: service },
  { category: "소매업", img: retail },
];
const SubCategoryScene = (props: ISubCategorySceneProps) => {
  const { selected, setSelected } = props;
  const [data, setData] = useState<IdataSet>();

  const getData = async () => {
    const response = await Business.fetch();
    response.map((item) => {
      if (item.businessCategory === caseList[selected].category) {
        setData({
          title: caseList[selected].category,
          categoryList: item.businessList,
          img: caseList[selected].img,
        });
      }
    });
  };
  useEffect(() => {
    getData();
    console.log(`sub:${data}`);
  }, [selected]);

  return (
    <div className={cn("container")}>
      {data ? (
        <>
          <SubMiddle
            img={data.img}
            title={data.title}
            setSelected={setSelected}
          />
          <div className={cn("tag-wrapper")}>
            {data &&
              data.categoryList.map((item: IBusinessListProp, key: number) => (
                <CategoryTag key={key} className="_outline">
                  {item.businessName}
                </CategoryTag>
              ))}
          </div>
        </>
      ) : (
        <Indicator isCenter={true}></Indicator>
      )}
    </div>
  );
};

export default SubCategoryScene;
