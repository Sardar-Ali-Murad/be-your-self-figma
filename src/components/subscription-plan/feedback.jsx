import React from "react";
import john from "../../assets/john.svg";
import miller from "../../assets/miller.svg";

const Feedback = () => {
  return (
    <div className="border border-[1px] border-[#00000075] pt-[15px] pl-[15px] pr-[15px] pb-[80px] rounded-[2px] shadow-[0px_4px_4px_0px_#00000040]">
      <h1
        className="font-istok font-bold text-[18px] leading-[26px] text-[#1D345C] drop-shadow-[0px_4px_4px_0px_#00000040]"
        style={{ textShadow: "0px 4px 4px 0px #00000040" }}
      >
        Recent Subscriber Feedback
      </h1>
      <div className="mt-[32px]">
        <div className="flex flex-col gap-[9px]">
          <div className="grid grid-cols-5">
            <p className="font-istok font-bold text-[18px] leading-[26px] text-[#1D345C] drop-shadow-[0px_4px_4px_0px_#00000040]">
              Subscriber
            </p>
            <p className="font-istok font-bold text-[18px] leading-[26px] text-[#1D345C] drop-shadow-[0px_4px_4px_0px_#00000040]">
              Plan
            </p>
            <p className="font-istok font-bold text-[18px] leading-[26px] text-[#1D345C] drop-shadow-[0px_4px_4px_0px_#00000040]">
              Feedback
            </p>
            <p className="font-istok font-bold text-[18px] leading-[26px] text-[#1D345C] drop-shadow-[0px_4px_4px_0px_#00000040]">
              Status
            </p>
            <p className="font-istok font-bold text-[18px] leading-[26px] text-[#1D345C] drop-shadow-[0px_4px_4px_0px_#00000040]">
              Action
            </p>
          </div>
          <div className="grid grid-cols-5 items-center">
            <div className="flex items-center gap-[11px]">
              <img src={john} />
              <p className="font-istok text-[18px] leading-[26px] text-[#1D345C] drop-shadow-[0px_4px_4px_0px_#00000040]">
                John Cooper
              </p>
            </div>
            <p>Pro plan</p>
            <p>Price too high</p>
            <div className="bg-[#1D345C] w-[100px] h-[25px] px-[12px] rounded-[21px]">
              <p className="font-istok font-bold text-[18px] leading-[26px] text-[#FFFFFF] drop-shadow-[0px_4px_4px_0px_#00000040]">
                Churned
              </p>
            </div>
            <div className="flex flex-col gap-[2px]">
              <div
                className="h-[7px] w-[7px] bg-[#1D345C]"
                style={{ borderRadius: "50%" }}
              ></div>
              <div
                className="h-[7px] w-[7px] bg-[#1D345C]"
                style={{ borderRadius: "50%" }}
              ></div>
              <div
                className="h-[7px] w-[7px] bg-[#1D345C]"
                style={{ borderRadius: "50%" }}
              ></div>
            </div>
          </div>
          <div className="grid grid-cols-5 items-center">
            <div className="flex items-center gap-[11px]">
              <img src={miller} />
              <p className="font-istok text-[18px] leading-[26px] text-[#1D345C] drop-shadow-[0px_4px_4px_0px_#00000040]">
                John Cooper
              </p>
            </div>
            <p>Pro plan</p>
            <p>Price too high</p>
            <div className="bg-[#1D345C] w-[100px] h-[25px] px-[12px] rounded-[21px]">
              <p className="font-istok font-bold text-[18px] leading-[26px] text-[#FFFFFF] drop-shadow-[0px_4px_4px_0px_#00000040]">
                Churned
              </p>
            </div>
            <div className="flex flex-col gap-[2px]">
              <div
                className="h-[7px] w-[7px] bg-[#1D345C]"
                style={{ borderRadius: "50%" }}
              ></div>
              <div
                className="h-[7px] w-[7px] bg-[#1D345C]"
                style={{ borderRadius: "50%" }}
              ></div>
              <div
                className="h-[7px] w-[7px] bg-[#1D345C]"
                style={{ borderRadius: "50%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
