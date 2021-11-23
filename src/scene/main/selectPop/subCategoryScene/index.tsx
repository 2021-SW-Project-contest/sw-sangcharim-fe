import React, { useEffect, useState } from "react";
import styles from "./subCategoryScene.module.scss";
import cb from "classnames/bind";
import { restaurant, service, retail } from "../../../../asset/image";
import { IBusinessListProp } from "../../../../interface/IBusiness";
import { Business } from "../../../../api";
import { CategoryTag } from "../../../../component";
import SubMiddle from "./subMiddle";
import Indicator from "../../../../component/Indicator";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../../modules";
import { add, remove } from "../../../../modules/pick";
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

  const pick = useSelector((state: RootState) => state.pick.picked);
  const dispatch = useDispatch();

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

  const onAdd = (diff: IBusinessListProp) => {
    let isPicked = true;
    pick &&
      pick.map((item) => {
        if (item.businessCode === diff.businessCode) {
          isPicked = false;
        }
      });
    if (pick.length < 3 && isPicked) {
      dispatch(add(diff));
      // console.log(pick.length);
      // console.log(pick[0].businessCode);
      // console.log(pick[1].businessCode);
    } else if (!(pick.length < 3)) {
      alert("최대 3가지 항목 선택 가능합니다.");
    } else if (!isPicked) {
      alert("이미 선택된 항목입니다.");
    }
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
                <CategoryTag
                  data={item}
                  key={key}
                  className="_outline"
                  onClick={onAdd}
                >
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
