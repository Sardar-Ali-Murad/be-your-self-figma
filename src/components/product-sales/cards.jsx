import React from "react";
import Card from "../common/card";
import download from "../../assets/download.svg";
import filter from "../../assets/light-filter.svg";
import manage from "../../assets/manage.svg";

const Cards = ({ name }) => {
  return (
    <div>
      <div className="flex  justify-between items-center shadow-[0px_4px_4px_0px_#00000040] px-[12px] py-[14px] rounded-[5px] mb-[34px]">
        <h1 className="text-[20px] leading-[30px] font-bold font-istok text-[#1D345C]">
          Product Sales
        </h1>
        <div className="flex gap-[5px] justify-end">
          <div className="bg-[#FFFFFF] shadow-[0px_3.42px_3.42px_0px_rgba(0,0,0,0.25)] py-[9px] gap-[8px] px-[11px]  rounded-[6px] flex justify-between items-center">
            <img src={download} />
            <p className="text-[#000000] text-[17px] leading-[24px] font-poppins">
              Export Report
            </p>
          </div>{" "}
          <div className="bg-[#FFFFFF] shadow-[0px_3.42px_3.42px_0px_rgba(0,0,0,0.25)] py-[9px] gap-[8px] px-[11px]  rounded-[6px] flex justify-between items-center">
            <img src={manage} />
            <p className="text-[#000000] text-[17px] leading-[24px] font-poppins">
              Manage Promations
            </p>
          </div>{" "}
          <div className="bg-[#2654FF] shadow-[0px_3.42px_3.42px_0px_rgba(0,0,0,0.25)] py-[9px] gap-[8px] px-[11px]  rounded-[6px] flex justify-between items-center">
            <img src={filter} />
            <p className="text-[#FFFFFF] text-[17px] leading-[24px] font-poppins">
              Filter
            </p>
          </div>{" "}
        </div>
      </div>

      <div className="grid grid-cols-4 gap-[12px]">
        <Card
          title="Total Event"
          subTitle="1,234"
          footerTitle="+12% from last month"
          name={name}
        />
        <Card
          title="Sales Product"
          subTitle="$45,678"
          footerTitle="+12% from last month"
          name={name}
        />
        <Card
          title="Revenue"
          subTitle="$456780"
          footerTitle="+12% from last month"
          name={name}
        />
        <Card
          title="Stack Status"
          subTitle="89%"
          footerTitle="+12% from last month"
          name={name}
        />
      </div>
    </div>
  );
};

export default Cards;
