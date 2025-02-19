import React from "react";
import box from "../assets/box.svg";
import star from "../assets/dark-star.svg";
import garbage from "../assets/garbage.svg";
import smith from "../assets/smith.svg";
import search from "../assets/search.svg";
import arrow from "../assets/arrow.svg";

const Messaging = () => {
  return (
    <div className="pt-[33px] pl-[33px] pr-[88px] pb-[88px] flex flex-col gap-[27px] grid grid-cols-3 gap-[24px]">
      {/* First */}
      <div className="rounded-[8px] min-h-[100vh] shadow-[0px_4px_4px_0px_#00000040] col-span-2 flex flex-col gap-[24px] py-[16px] px-[23px] border border-[1px] border-[#0000004A]">
        <div className="flex items-center gap-[9px]">
          <div className="relative">
            <input
              placeholder="search"
              className="h-[40px] w-[100%] border border-[1px] border-[#968181B2] border-opacity-70 rounded-[30px] font-inter text-[#908888] font-medium p-[14px]"
            />
            <img src={search} className="absolute top-[12px] right-[20px]" />
          </div>
          <div className="px-[10px]  py-[5px] border border-[1px] border-[#000000] flex justify-between gap-[30px] rounded-[5px] shadow-[0px_2px_2px_0px_#00000040]">
            <p className="font-poppins text-[10px] leading-[15px] text-[#000000]">
              All Messages
            </p>
            <img src={arrow} />
          </div>
          <div className="px-[10px]  py-[5px] border border-[1px] border-[#000000] flex justify-between gap-[30px] rounded-[5px] shadow-[0px_2px_2px_0px_#00000040]">
            <p className="font-poppins text-[10px] leading-[15px] text-[#000000]">
              All Status
            </p>
            <img src={arrow} />
          </div>
          <div className="px-[10px]  py-[5px] border border-[1px] border-[#000000] flex justify-between gap-[30px] rounded-[5px] shadow-[0px_2px_2px_0px_#00000040]">
            <p className="font-poppins text-[10px] leading-[15px] text-[#000000]">
              Last 7 days
            </p>
            <img src={arrow} />
          </div>
        </div>
        <div className="flex items-center gap-[12px]">
          <div>
            <input className="border border-[1px] border-[#0000005C] rounded-[5px] h-[20px] w-[20px]" />
          </div>
          <div className="px-[10px]  py-[5px] border border-[1px] border-[#000000] flex justify-between gap-[30px] rounded-[5px] shadow-[0px_2px_2px_0px_#00000040]">
            <p className="font-poppins text-[10px] leading-[15px] text-[#000000]">
              Mark as Read
            </p>
          </div>
          <div className="px-[10px]  py-[5px] border border-[1px] border-[#000000] flex justify-between gap-[30px] rounded-[5px] shadow-[0px_2px_2px_0px_#00000040]">
            <p className="font-poppins text-[10px] leading-[15px] text-[#000000]">
              Archived
            </p>
          </div>
          <div className="px-[10px]  py-[5px] border border-[1px] border-[#000000] flex justify-between gap-[30px] rounded-[5px] shadow-[0px_2px_2px_0px_#00000040]">
            <p className="font-poppins text-[10px] leading-[15px] text-[#000000]">
              Deleted
            </p>
          </div>
        </div>
        <div className="h-[1px] w-[100%] bg-[#000000]"></div>
        <div className="flex gap-[8px] items-center">
          <div>
            <input className="border border-[1px] border-[#0000005C] rounded-[5px] h-[20px] w-[20px]" />
          </div>
          <div>
            <img src={smith} />
          </div>
          <div className="flex flex-col gap-[8px]">
            <h1 className="font-inter text-[20px] leading-[24px] text-[#000000]">
              Sarah Smith{" "}
            </h1>
            <h1 className="font-inter text-[11px] leading-[13px] text-[#000000]">
              Project Update - Q1 2025{" "}
            </h1>
            <h1 className="font-inter text-[11px] leading-[13px] text-[#000000]">
              Lorem ipsum dolor sit amet consectetur. Donec tellus nec.{" "}
            </h1>
          </div>
        </div>
      </div>
      {/* Second */}
      <div className="rounded-[8px] col-span-1 shadow-[0px_4px_4px_0px_#00000040] flex flex-col gap-[24px] py-[16px] px-[23px] border border-[1px] border-[#0000004A]">
        <div className="flex gap-[8px] items-center">
          <div>
            <img src={smith} />
          </div>
          <div className="flex flex-col gap-[8px]">
            <h1 className="font-inter text-[20px] leading-[24px] text-[#000000]">
              Sarah Smith{" "}
            </h1>
            <h1 className="font-inter text-[11px] leading-[13px] text-[#000000]">
              Project Update - Q1 2025{" "}
            </h1>
          </div>
          <div className="flex gap-[12px]">
            <img src={star} />
            <img src={box} />
            <img src={garbage} />
          </div>
        </div>
        <div className="mt-[32px]">
          <h1 className="font-inter text-[18px leading-[21px]">
            Project Update - Q1 2025
          </h1>
          <h1 className="font-inter text-[11px] leading-[13px] mt-[7px]">
            Lorem ipsum dolor sit amet consectetur. Odio id scelerisque ac id.
            Est a arcu donec pretium sit. Enim scelerisque integer nulla
            accumsan at ullamcorper. Non risus elit rhoncus suspendisse.
            Consectetur massa molestie arcu vitae.
          </h1>
          <h1 className="font-inter text-[11px] leading-[13px] mt-[7px]">
            10:30Am jan 15,2025
          </h1>
          <div className="rounded-[7px] bg-[#D9D9D9] p-[16px] mt-[15px] flex flex-col gap-[14px]">
            <div
              className="h-[77px] text-[#000000] shadow-[0px_4px_4px_0px_#00000040] bg-[#FFFFFF] rounded-[7px] p-[6px]"
              placeholder="Type your reply......."
            ></div>
            <div className="flex justify-end">
              <button className="w-[110px] h-[29px] rounded-[5px] border border-[1px] bg-[#1D345C] border-[#00000029]  text-[#FFFFFF] font-poppins text-[15px] leading-[22px]">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messaging;
