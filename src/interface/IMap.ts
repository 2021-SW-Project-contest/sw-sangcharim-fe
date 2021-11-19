export interface IFarMap {
  focusLat: number;
  focusLong: number;
  areaList: [
    {
      areaCode: number;
      lat: number;
      long: number;
      businessCount: number;
    }
  ];
}
