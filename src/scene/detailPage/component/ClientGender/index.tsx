import React, { useState, useEffect } from "react";
import styles from "./ClientGender.module.scss";
import { ICustomer } from "../../../../interface/IDetail";
import { customerfetch } from "../../../../api/detail.api";
import { useRouteMatch } from "react-router-dom";
import cb from "classnames/bind";
import { useParams } from "react-router";
const cn = cb.bind(styles);

interface ICustomerParams {
  areaCode: number;
}

interface ICustomerList {
  male: Number;
  female: Number;
}

const womanpercent = 2;
const manpercent = 1;

const ClientGender = (prop: ICustomerList) => {
  const { male, female } = prop;
  const [data, setData] = useState<ICustomerList[]>();
  const matches = useRouteMatch();

  // params를 넘겨서 genderlist에서 male과 female값을 출력하고싶었습니다
  //ICustom 안에 genderRatio안에 male,female 값을 setData에 저장하고 싶었는데 genderlist에 male,female을 인식못함
  // const getdata = async () => {
  //   const params = matches.params as ICustomerParams;
  //   const response = await customerfetch(params);
  //   console.log(response);
  //   {
  //     response.map((item) => {
  //       item.genderRatio.map((i) => {
  //         return setData({
  //           male: i.male,
  //           female: i.female,
  //         });
  //       });
  //     });
  //   }
  // };
  // useEffect(() => {
  //   getdata();
  // }, []);
  return (
    <div className={cn("container")}>
      <div className={cn("wrapper")}>
        <div className={cn("gender_img")}>
          {/* 여성의 비율이 높을 때 */}
          {womanpercent > manpercent ? (
            <div className={cn("circle_wrapper")}>
              <div className={cn("man_circle")}>
                <p className={cn("percent")}>{manpercent}%</p>
              </div>
              <div className={cn("woman_circle")}>
                <p className={cn("percent")}>{womanpercent}%</p>
              </div>
            </div>
          ) : (
            // 남성의 비율이 높을 때
            <div className={cn("circle_wrapper")}>
              <div className={cn("big_circle")}>
                <p className={cn("percent")}>{manpercent}%</p>
              </div>
              <div className={cn("small_circle")}>
                <p className={cn("percent")}>{womanpercent}%</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClientGender;
