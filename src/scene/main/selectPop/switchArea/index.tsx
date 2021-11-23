import React, { useEffect, useState } from "react";
import MainCategory from "../mainCategory";

import SubCategoryScene from "../subCategoryScene";
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
      {selected === -1 ? (
        <MainCategory setSelected={setSelected} />
      ) : (
        <SubCategoryScene setSelected={setSelected} selected={selected} />
      )}
    </>
  );
};

export default SwitchArea;
