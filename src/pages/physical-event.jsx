import React from "react";
import Details from "../components/physical-event/details";
import Preview from "../components/physical-event/preview";
import DateTime from "../components/physical-event/date-time";

const PhysicalEvent = () => {
  return (
    <div className="pt-[33px] pl-[33px] pr-[88px] pb-[88px] flex flex-col gap-[27px]">
      <p className="font-inter text-[17px] leading-[21px] text-[#1B1919] pb-[34px]">
        fill in the details below to create your events
      </p>
      <Details />
      <DateTime/>
      <Preview />
      <div className="py-[30px] flex gap-[35px] w-[80%] justify-end">
        <button className="h-[32px] b-[#1D345C] px-[7px] rounded-[9px] bg-[#1D345C]  font-inter font-[13px] leading-[16px] text-[#FFFFFF]">
          save Draft
        </button>
        <button className="h-[32px] b-[#1D345C] px-[7px] rounded-[9px] bg-[#1D345C]  font-inter font-[13px] leading-[16px] text-[#FFFFFF]">
          preview full Page
        </button>
        <button className="h-[32px] b-[#1D345C] px-[7px] rounded-[9px] bg-[#1D345C]  font-inter font-[13px] leading-[16px] text-[#FFFFFF]">
          save & publish
        </button>
      </div>
    </div>
  );
};

export default PhysicalEvent;
