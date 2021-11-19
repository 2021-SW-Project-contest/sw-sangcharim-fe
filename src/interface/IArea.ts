interface IArea {
  areaCategory: String;
  areaList: [
    {
      areaCode: number;
      areaName: String;
    }
  ];
}

export type IAreaType = IArea[];
