import React from "react";

const Progress = ({ bgColor, width, title, percentage, opacity }) => {
  const getOpacity = (percentage) => percentage / 100;

  return (
    <div className="w-[100%] relative">
      <div className="relative top-[3px] flex items-center justify-between">
        <p className="px-[14px] py-[1px] relative font-poppins text-[16px] leading-[24px] text-[#FFFFFF] z-[1]">
          {title}
        </p>
        <p className="px-[14px] relative py-[1px] font-poppins text-[16px] leading-[24px] text-[#FFFFFF] z-[1]">
          {percentage}
        </p>
      </div>
      <div
        className={`absolute top-[0px] left-[0px] botton-[0px] ${bgColor} ${width} rounded-[9px] w-[100%] h-[31px] flex justify-between items-center`}
      ></div>
      <div
        className={`absolute top-[0px] left-[0px] botton-[0px]  ${bgColor}  rounded-[9px] w-[100%] h-[31px]`}
        style={{
          opacity: getOpacity(opacity),
        }}
      ></div>
    </div>
  );
};

export default Progress;
