import React from "react";
import date from "../../assets/date.svg";
import time from "../../assets/time.svg";
import duration from "../../assets/duration.svg";

const DateTime = () => {
  return (
    <div className="rounded-[6px] pl-[18px] pt-[13px] pb-[52px] pr-[34px] shadow-[2px_2px_3px_2px_rgba(0,0,0,0.25)] flex flex-col gap-[12px]">
      <h1 className="font-inter font-bold text-[21px leading-[26px] text-[#1B1919]">
      Date & Time & Location
      </h1>
      <div className="flex flex-row justify-between w-[90%]">
        <div className="relative">
          <h1 className="font-inter font-medium text-[12px] leading-[14px] text-[#1B1919] mb-[6px]">
            DATE
          </h1>
          <input
            placeholder="DD/MM/YYYY"
            className="h-[32px] border border-[1px] border-[#968181B2] border-opacity-70 rounded-[6px] font-inter text-[#908888] font-medium p-[14px]"
          />
          <img src={date} className="absolute top-[27px] right-[20px]" />
        </div>
        <div className="relative">
          <h1 className="font-inter font-medium text-[12px] leading-[14px] text-[#1B1919] mb-[6px]">
            Time
          </h1>
          <input
            placeholder="******"
            className="h-[32px] border border-[1px] border-[#968181B2] border-opacity-70 rounded-[6px] font-inter text-[#908888] font-medium p-[14px]"
          />
          <img src={time} className="absolute top-[26px] right-[20px]" />
        </div>
        <div className="relative">
          <h1 className="font-inter font-medium text-[12px] leading-[14px] text-[#1B1919] mb-[6px]">
            Durraction
          </h1>
          <input
            placeholder="30 mints"
            className="h-[32px] border border-[1px] border-[#968181B2] border-opacity-70 rounded-[6px] font-inter text-[#908888] font-medium p-[14px]"
          />
          <img src={duration} className="absolute top-[25px] right-[20px]" />
        </div>
      </div>
    </div>
  );
};

export default DateTime;
