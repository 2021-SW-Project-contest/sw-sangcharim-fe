import classNames from "classnames";
import React, { useState, ReactNode, useEffect } from "react";

import { areafetch } from "../../../api/area.api";
import { IAreaType } from "../../../interface/IArea";

const First = () => {
  const [data, setData] = useState<IAreaType>([]);

  const area = async () => {
    try {
      await areafetch().then((res) => {
        setData(res);
      });
    } catch (e) {
      console.log(e);
    }
  };
  const location = "공릉동";
  const sang = data.filter((data) => data.areaCategory == location);

  useEffect(() => {
    area();
  }, []);

  return (
    <div>
      {sang.map((doc) => {
        return (
          <div>
            {doc.areaList.map((sc) => {
              return <div>{sc.areaName}</div>;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default First;

// const caseList = [
//   { category: "외식업", img: restaurant },
//   { category: "서비스업", img: service },
//   { category: "소매업", img: retail },
// ];
// const SubCategoryScene = (props: ISubCategorySceneProps) => {
//   const { selected, setSelected } = props;
//   const [data, setData] = useState<IdataSet>();

//   const getData = async () => {
//     const response = await Business.fetch();
//     response.map((item) => {
//       if (item.businessCategory === caseList[selected].category) {
//         setData({
//           title: caseList[selected].category,
//           categoryList: item.businessList,
//           img: caseList[selected].img,
//         });
//       }
//     });
//   };
