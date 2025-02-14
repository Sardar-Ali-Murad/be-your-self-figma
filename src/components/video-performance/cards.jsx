import React from "react";
import Card from "../common/card";
import download from "../../assets/download.svg";
import filter from "../../assets/light-filter.svg";
import share from "../../assets/share.svg";

const Cards = () => {
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
      <div className="grid grid-cols-5 gap-[12px]">
        <Card title="Total view" subTitle="248.5K" footerTitle="+12.4%" />
        <Card title="Watch time" subTitle="248.5K" footerTitle="+12.4%" />
        <Card title="Engagement" subTitle="248.5K" footerTitle="+12.4%" />
        <Card title="Shares" subTitle="248.5K" footerTitle="+12.4%" />
        <Card title="Completion" subTitle="248.5K" footerTitle="+12.4%" />
      </div>
    </div>
  );
};

export default Cards;
