import React from "react";
import tv from "../../assets/tv.svg";
import mobile from "../../assets/mobile.svg";
import preview from "../../assets/preview.svg";

const Preview = () => {
  return (
    <div className="rounded-[6px] pl-[18px] pt-[13px] pb-[52px] pr-[34px]  shadow-[2px_2px_3px_2px_rgba(0,0,0,0.25)] flex flex-col gap-[12px]">
      <div className="flex justify-between items-center">
        <h1 className="font-inter font-bold text-[21px leading-[26px] text-[#1B1919]">
          Event Access
        </h1>
        <div className="flex gap-[12px] items-center">
            <img src={tv}/>
            <img src={mobile}/>
        </div>
      </div>
      <div className="mt-[12px] border border-[#D9D9D9] rounded-[5px]">
        <img src={preview} className="rounded-[5px]"/>
      </div>
    </div>
  );
};

export default Preview;
