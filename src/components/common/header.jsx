import React from "react";
import dark from "../../assets/dark.svg";
import light from "../../assets/light.svg";
import user from "../../assets/user.svg";
import search from "../../assets/search.svg";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <div className="pl-[35px] py-[20px] pr-[88px] h-[73px] bg-[#FFFFFF] shadow-[0px_4px_4px_0px_#00000040] w-[100%] flex flex-row items-center justify-between">
      <h1 className="font-inter text-[29.44px] font-medium leading-[35.63px] text-[#1B1919]">
        {location.pathname === "/"
          ? "Overview"
          : location.pathname === "/performance-summary"
          ? "Performance"
          : location.pathname === "/alerts"
          ? "Overviwe"
          : location.pathname === "/management"
          ? "Content Dashboard"
          : location.pathname === "/live-event"
          ? "Create Live Event"
          : location.pathname === "/physical-event"
          ? "Create Physical Event"
          : "Forum Management"}
      </h1>
      <div className="flex flex-row items-center gap-[40px]">
        <div className="flex flex-row items-center gap-[11px]">
          <div className="relative">
            <input
              placeholder="search"
              className="h-[50px] w-[300px] border border-[1px] border-[#968181B2] border-opacity-70 rounded-[30px] font-inter text-[#908888] font-medium p-[14px]"
            />
            <img src={search} className="absolute top-[16px] right-[20px]" />
          </div>
          <div className="w-[112px] h-[41px] rounded-[30px] bg-[#FFFFFF] shadow-[0px_4px_4px_0px_#00000040] flex justify-between items-center">
            <div
              className="w-[42px] h-[41px] bg-[#1D345C] flex justify-center items-center"
              style={{ borderRadius: "50%" }}
            >
              <img src={dark} />
            </div>
            <img src={light} className="w-[35px] h-[20px] pr-[12px]" />
          </div>
        </div>
        <img src={user} />
      </div>
    </div>
  );
};

export default Header;
