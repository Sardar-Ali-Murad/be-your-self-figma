import React from "react";
import plus from "../../assets/plus.svg";
import filter from "../../assets/filter.svg";
import search from "../../assets/search.svg";

const Header = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex gap-[5px] items-center">
          <h1 className="font-inter font-semibold text-[27px] leading-[32px] text-[#1B1919]">
            Forum Management
          </h1>
          <div className="bg-[#1D345C] py-[9px] gap-[8px] px-[11px]  rounded-[6px] flex justify-between items-center">
            <img src={plus} />
            <p className="text-[#FFFFFF] text-[17px] leading-[24px] font-poppins">
              create new thrad
            </p>
          </div>
        </div>
        <div className="flex gap-[5px] items-center">
          <div className="relative">
            <input
              placeholder="search"
              className="h-[50px] w-[300px] border border-[1px] border-[#968181B2] border-opacity-70 rounded-[30px] font-inter text-[#908888] font-medium p-[14px]"
            />
            <img src={search} className="absolute top-[16px] right-[20px]" />
          </div>
          <div className="bg-[#FFFFFF] shadow-[0px_3.42px_3.42px_0px_rgba(0,0,0,0.25)] py-[9px] gap-[8px] px-[11px]  rounded-[6px] flex justify-between items-center">
            <img src={filter} />
            <p className="text-[#000000] text-[17px] leading-[24px] font-poppins">
              Filter
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
