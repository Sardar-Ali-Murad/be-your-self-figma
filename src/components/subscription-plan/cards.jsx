import React from "react";
import Card from "../common/card";
import download from "../../assets/download.svg";
import filter from "../../assets/light-filter.svg";
import share from "../../assets/share.svg";

const Cards = ({ name }) => {
  return (
    <div>
      <div className="flex gap-[5px] justify-end mb-[20px]">
        <div className="bg-[#FFFFFF] shadow-[0px_3.42px_3.42px_0px_rgba(0,0,0,0.25)] py-[9px] gap-[8px] px-[11px]  rounded-[6px] flex justify-between items-center">
          <img src={download} />
          <p className="text-[#000000] text-[17px] leading-[24px] font-poppins">
            Export
          </p>
        </div>{" "}
        <div className="bg-[#FFFFFF] shadow-[0px_3.42px_3.42px_0px_rgba(0,0,0,0.25)] py-[9px] gap-[8px] px-[11px]  rounded-[6px] flex justify-between items-center">
          <img src={share} />
          <p className="text-[#000000] text-[17px] leading-[24px] font-poppins">
            Shares
          </p>
        </div>{" "}
        <div className="bg-[#2654FF] shadow-[0px_3.42px_3.42px_0px_rgba(0,0,0,0.25)] py-[9px] gap-[8px] px-[11px]  rounded-[6px] flex justify-between items-center">
          <img src={filter} />
          <p className="text-[#FFFFFF] text-[17px] leading-[24px] font-poppins">
            Filter
          </p>
        </div>{" "}
      </div>

      <div className="grid grid-cols-4 gap-[12px]">
        <Card
          title="Basic Plan"
          subTitle="$124,563.00"
          footerTitle="Active Subscribers"
          name={name}
        />
        <Card
          title="Pro Plan"
          subTitle="1,890"
          footerTitle="Active Subscribers"
          name={name}
        />
        <Card
          title="Enterprise"
          subTitle="780"
          footerTitle="Active Subscribers"
          name={name}
        />
        <Card
          title="Total Revenue"
          subTitle="$128,450"
          footerTitle="this month"
          name={name}
        />
      </div>
    </div>
  );
};

export default Cards;
