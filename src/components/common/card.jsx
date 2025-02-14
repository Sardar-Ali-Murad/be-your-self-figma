import React from "react";
import arrow from "../../assets/audience-arrow-up.svg";

const card = ({ title, subTitle, footerTitle }) => {
  return (
    <div className="rounded-[9px] bg-[#1D345C] shadow-[0px_2.7px_2.7px_0px_#00000040] w-[100%] p-[15px] flex gap-[10px] flex-col justify-between">
      <div className="flex justify-between items-center">
        <h1 className="font-inter text-[16.66px] font-medium leading-[20.17px] text-[#FFFFFF]">
          {title}
        </h1>
      </div>
      <h1 className="font-inter text-[28.97px] font-medium leading-[35.06px] text-[#FFFFFF]">
        {subTitle}
      </h1>
      <div className="flex items-center">
        <img src={arrow} />
        <h1 className="font-inter text-[15.76px] font-medium leading-[19.08px] text-[#FFFFFF]">
          {footerTitle}
        </h1>
      </div>
    </div>
  );
};

export default card;
