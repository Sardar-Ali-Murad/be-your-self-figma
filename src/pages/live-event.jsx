import React from "react";
import Access from "../components/live-event/access";
import Details from "../components/live-event/details";
import Preview from "../components/live-event/preview";

const LiveEvent = () => {
  return (
    <div className="pt-[33px] pl-[33px] pr-[88px] pb-[88px] flex flex-col gap-[27px]">
      <Details />
      <Access />
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

export default LiveEvent;
