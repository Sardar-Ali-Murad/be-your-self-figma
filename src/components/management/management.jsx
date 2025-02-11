import React from "react";
import eye from "../../assets/eye.svg";
import plus from "../../assets/plus.svg";
import filter from "../../assets/filter.svg";
import grid from "../../assets/grid.svg";
import view from "../../assets/last-view.svg";
import img from "../../assets/upload-image.svg";
import heart from "../../assets/heart.svg";
import dollar from "../../assets/dollar.svg";

const Management = () => {
  return (
    <div className="flex flex-col gap-[15px]">
      <div className="grid grid-cols-3">
        <div className="rounded-[9px] bg-[#1D345C] shadow-[0px_2.7px_2.7px_0px_#00000040] w-[100%] py-[15px] px-[18px] flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <h1 className="font-inter text-[40px] font-medium leading-[47px] text-[#FFFFFF]">
              Total Views
            </h1>
            <div className="h-[39px] w-[39px] shadow-[0px_4px_4px_0px_#00000040] rounded-[9px] bg-[#FFFFFF] flex justify-center items-center">
              <img src={eye} />
            </div>
          </div>
          <h1 className="font-inter font-medium text-[54px] leading-[65px] text-[#FFFFFF] mt-[28px]">
            458.2k
          </h1>
          <div className="flex items-center justify-between mt-[25px]">
            <h1 className="font-inter text-[21.33px] font-medium leading-[25.81px] text-[#FFFFFF]">
              2,4M +12% v last week
            </h1>
          </div>
        </div>
      </div>
      <div className="rounded-[13px] shadow-[0px_3.96px_3.96px_0px_#00000040] pt-[45px] px-[10px] pb-[70px]">
        <div className="flex items-center justify-between">
          <div className="flex gap-[5px] items-center">
            <div className="bg-[#1D345C] py-[9px] gap-[8px] px-[11px]  rounded-[6px] flex justify-between items-center">
              <img src={plus} />
              <p className="text-[#FFFFFF] text-[17px] leading-[24px] font-poppins">
                Upload New content
              </p>
            </div>
            <div className="bg-[#FFFFFF] shadow-[0px_3.42px_3.42px_0px_rgba(0,0,0,0.25)] py-[9px] gap-[8px] px-[11px]  rounded-[6px] flex justify-between items-center">
              <img src={filter} />
              <p className="text-[#000000] text-[17px] leading-[24px] font-poppins">
                Filter
              </p>
            </div>
          </div>
          <div className="flex gap-[5px] items-center">
            <div className="bg-[#FFFFFF] shadow-[0px_3.42px_3.42px_0px_rgba(0,0,0,0.25)] py-[9px] gap-[8px] px-[11px]  rounded-[6px] flex justify-between items-center">
              <img src={grid} />
              <p className="text-[#000000] text-[17px] leading-[24px] font-poppins">
                Grid view
              </p>
            </div>
            <div className="bg-[#FFFFFF] shadow-[0px_3.42px_3.42px_0px_rgba(0,0,0,0.25)] py-[9px] gap-[8px] px-[11px]  rounded-[6px] flex justify-between items-center">
              <img src={view} />
              <p className="text-[#000000] text-[17px] leading-[24px] font-poppins">
                last views
              </p>
            </div>
          </div>
        </div>
        {/* Image Portion */}
        <div className="grid grid-cols-3">
          <div className="mt-[30px] shadow-[0px_3.96px_3.96px_0px_#00000040] px-[29px] pt-[8px] pb-[60px] flex flex-col gap-[16px]">
            <img src={img} className="w-[272px] h-[182px]" />
            <div className="flex flex-col gap-[1px]">
              <h1 className="font-inter font-medium text-[26px] leading-[33px] text-[#000000]">
                content Title
              </h1>
              <p className="font-inter font-medium text-[19px] leading-[22px] text-[#000000]">
                Published . jan 15,2025
              </p>
            </div>
            <div className="flex flex-col gap-[12px]">
              <div className="flex flex-row gap-[14px]">
                <div className="flex flex-row gap-[3px]">
                  <img src={eye} className="w-[18px] h-[12px]" />
                  <p className="font-poppins font-semibold text-[14px] leading-[12.59px] text-[#1C2D70]">
                    245k
                  </p>
                </div>
                <div className="flex flex-row gap-[3px]">
                  <img src={heart} className="w-[18px] h-[12px]" />
                  <p className="font-poppins font-semibold text-[14px] leading-[12.59px] text-[#1C2D70]">
                    245k
                  </p>
                </div>
                <div className="flex flex-row gap-[3px]">
                  <img src={dollar} className="w-[18px] h-[12px]" />
                  <p className="font-poppins font-semibold text-[14px] leading-[12.59px] text-[#1C2D70]">
                    245k
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Management;
