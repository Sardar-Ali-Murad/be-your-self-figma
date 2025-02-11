import React from "react";
import people from "../../assets/people.svg";
import trophy from "../../assets/trophy.svg";
import bars from "../../assets/bars.svg";
import alert from "../../assets/alert.svg";

const Header = () => {
  return (
    <div className="flex flex-col gap-[12px]">
      <h1 className="font-inter text-[22.97px] font-medium leading-[27.8px] text-[#1B1919]">
        Notifications & Alerts
      </h1>
      <div className="grid grid-cols-4 gap-[16px]">
        <div className="rounded-[9px] bg-[#1D345C] shadow-[0px_2.7px_2.7px_0px_#00000040] w-[100%] p-[15px] flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <img src={people} />
            <h1 className="font-inter text-[12.1] font-medium leading-[14px] text-[#FFFFFF]">
              24hrs
            </h1>
          </div>
          <h1 className="font-inter font-medium text-[31px] leading-[38px] text-[#FFFFFF] mt-[16px]">
            247
          </h1>

          <div className="flex items-center justify-between mt-[25px]">
            <h1 className="font-inter text-[18px] font-medium leading-[24px] text-[#FFFFFF]">
              New Subscribers{" "}
            </h1>
          </div>
        </div>
        <div className="rounded-[9px] bg-[#1D345C] shadow-[0px_2.7px_2.7px_0px_#00000040] w-[100%] p-[15px] flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <img src={trophy} />
            <h1 className="font-inter text-[12.1] font-medium leading-[14px] text-[#FFFFFF]">
              24hrs
            </h1>
          </div>
          <h1 className="font-inter font-medium text-[31px] leading-[38px] text-[#FFFFFF] mt-[16px]">
            2
          </h1>
          <div className="flex items-center justify-between mt-[25px]">
            <h1 className="font-inter text-[18px] font-medium leading-[24px] text-[#FFFFFF]">
              Milestone Alerts{" "}
            </h1>
          </div>
        </div>
        <div className="rounded-[9px] bg-[#1D345C] shadow-[0px_2.7px_2.7px_0px_#00000040] w-[100%] p-[15px] flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <img src={bars} />
            <h1 className="font-inter text-[12.1] font-medium leading-[14px] text-[#FFFFFF]">
              24hrs
            </h1>
          </div>
          <h1 className="font-inter font-medium text-[31px] leading-[38px] text-[#FFFFFF] mt-[16px]">
            89%
          </h1>
          <div className="flex items-center justify-between mt-[25px]">
            <h1 className="font-inter text-[18px] font-medium leading-[24px] text-[#FFFFFF]">
              Content Performance{" "}
            </h1>
          </div>
        </div>
        <div className="rounded-[9px] bg-[#1D345C] shadow-[0px_2.7px_2.7px_0px_#00000040] w-[100%] p-[15px] flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <img src={alert} />
            <h1 className="font-inter text-[12.1] font-medium leading-[14px] text-[#FFFFFF]">
              24hrs
            </h1>
          </div>
          <h1 className="font-inter font-medium text-[31px] leading-[38px] text-[#FFFFFF] mt-[16px]">
            12
          </h1>
          <div className="flex items-center justify-between mt-[25px]">
            <h1 className="font-inter text-[18px] font-medium leading-[24px] text-[#FFFFFF]">
              System Notification{" "}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
