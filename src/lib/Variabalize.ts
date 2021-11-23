import { useState } from "react";
import { IMapParamData, IParamData } from "../interface/IBase";
import { IBusinessListProp } from "../interface/IBusiness";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../modules";
import { add, remove } from "../modules/pick";
export const Variabalize = (pickedItems: IBusinessListProp[]) => {
  const [data, setData] = useState<IMapParamData>();

  if (pickedItems.length === 1) {
    setData({
      businessCode1: pickedItems[0].businessCode,
      businessCode2: pickedItems[1].businessCode,
      businessCode3: pickedItems[2].businessCode,
    });
  } else if (pickedItems.length === 2) {
    setData({
      businessCode1: pickedItems[0].businessCode,
      businessCode2: pickedItems[1].businessCode,
    });
  } else if (pickedItems.length === 3) {
    setData({
      businessCode1: pickedItems[0].businessCode,
      businessCode2: pickedItems[1].businessCode,
      businessCode3: pickedItems[2].businessCode,
    });
  }

  return data;
};
