import React, { useState, ReactNode, useEffect } from "react";

import { areafetch } from "../../../api/area.api";
import { IAreaType } from "../../../interface/IArea";

const Second = () => {
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
  const location = "상계동";
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

export default Second;
