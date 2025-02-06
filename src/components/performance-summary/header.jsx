import React from "react";
import eye from "../../assets/eye.svg";
import house from "../../assets/house.svg";
import sub from "../../assets/sub.svg";
import lines from "../../assets/lines.svg";

const Header = () => {
  return (
    <div className="flex flex-col gap-[12px]">
      <h1 className="font-inter text-[22.97px] font-medium leading-[27.8px] text-[#1B1919]">
        Performance
      </h1>
      <div className="grid grid-cols-4 gap-[16px]">
        <div className="rounded-[9px] bg-[#1D345C] shadow-[0px_2.7px_2.7px_0px_#00000040] w-[100%] p-[15px] flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <h1 className="font-inter text-[22.22px] font-medium leading-[26.89px] text-[#FFFFFF]">
              Total Views
            </h1>
            <div className="h-[39px] w-[39px] shadow-[0px_4px_4px_0px_#00000040] rounded-[9px] bg-[#FFFFFF] flex justify-center items-center">
              <img src={eye} />
            </div>
          </div>
          <div className="flex items-center justify-between mt-[25px]">
            <h1 className="font-inter text-[21.33px] font-medium leading-[25.81px] text-[#FFFFFF]">
              2,4M +12% v last week{" "}
            </h1>
          </div>
        </div>
        <div className="rounded-[9px] bg-[#1D345C] shadow-[0px_2.7px_2.7px_0px_#00000040] w-[100%] p-[15px] flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <h1 className="font-inter text-[22.22px] font-medium leading-[26.89px] text-[#FFFFFF]">
              Revenue
            </h1>
            <div className="h-[39px] w-[39px] shadow-[0px_4px_4px_0px_#00000040] rounded-[9px] bg-[#FFFFFF] flex justify-center items-center">
              <img src={house} />
            </div>
          </div>
          <div className="flex items-center justify-between mt-[25px]">
            <h1 className="font-inter text-[21.33px] font-medium leading-[25.81px] text-[#FFFFFF]">
              2,4M +12% v last week{" "}
            </h1>
          </div>
        </div>
        <div className="rounded-[9px] bg-[#1D345C] shadow-[0px_2.7px_2.7px_0px_#00000040] w-[100%] p-[15px] flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <h1 className="font-inter text-[22.22px] font-medium leading-[26.89px] text-[#FFFFFF]">
              Subscribers
            </h1>
            <div className="h-[39px] w-[39px] shadow-[0px_4px_4px_0px_#00000040] rounded-[9px] bg-[#FFFFFF] flex justify-center items-center">
              <img src={sub} />
            </div>
          </div>
          <div className="flex items-center justify-between mt-[25px]">
            <h1 className="font-inter text-[21.33px] font-medium leading-[25.81px] text-[#FFFFFF]">
              2,4M +12% v last week{" "}
            </h1>
          </div>
        </div>
        <div className="rounded-[9px] bg-[#1D345C] shadow-[0px_2.7px_2.7px_0px_#00000040] w-[100%] p-[15px] flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <h1 className="font-inter text-[22.22px] font-medium leading-[26.89px] text-[#FFFFFF]">
              Engagement Rate
            </h1>
            <div className="h-[39px] w-[39px] shadow-[0px_4px_4px_0px_#00000040] rounded-[9px] bg-[#FFFFFF] flex justify-center items-center">
              <img src={lines} />
            </div>
          </div>
          <div className="flex items-center justify-between mt-[25px]">
            <h1 className="font-inter text-[21.33px] font-medium leading-[25.81px] text-[#FFFFFF]">
              2,4M +12% v last week{" "}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
