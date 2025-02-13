import React from "react";
import img1 from "../../assets/forum-img-1.svg";
import img2 from "../../assets/forum-img-2.svg";
import img3 from "../../assets/forum-img-3.svg";
import img4 from "../../assets/forum-img-4.svg";
import eye from "../../assets/eye.svg";
import heart from "../../assets/heart.svg";
import dollar from "../../assets/dollar.svg";

const Body = () => {
  return (
    <div>
      <div className="py-[17px] pl-[12px] pr-[60px] mt-[50px] px-[26px] rounded-[25px] shadow-[0px_3.01px_3.01px_0px_rgba(0,0,0,0.25)] flex items-center justify-between">
        <div className="flex gap-[22px] items-center">
          <img src={img1} />
          <div className="flex flex-col gap-[13px]">
            <div>
              <h1 className="font-inter font-medium text-[19px] leading-[23px] text-[#000000]">
                Community Guidelines 2025{" "}
              </h1>
              <p className="font-inter font-medium text-[10px] leading-[13px] text-[#000000]">
                Posted by Admin . 2 hours ago{" "}
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
        </div>
        <div className="flex items-center gap-[1px]">
          <div
            className="h-[12px] w-[12px] bg-[#000000]"
            style={{ borderRadius: "50%" }}
          ></div>
          <div
            className="h-[12px] w-[12px] bg-[#000000]"
            style={{ borderRadius: "50%" }}
          ></div>
          <div
            className="h-[12px] w-[12px] bg-[#000000]"
            style={{ borderRadius: "50%" }}
          ></div>
        </div>
      </div>
      <div className="py-[17px] pl-[12px] pr-[60px] mt-[50px] px-[26px] rounded-[25px] shadow-[0px_3.01px_3.01px_0px_rgba(0,0,0,0.25)] flex items-center justify-between">
        <div className="flex gap-[22px] items-center">
          <img src={img1} />
          <div className="flex flex-col gap-[13px]">
            <div>
              <h1 className="font-inter font-medium text-[19px] leading-[23px] text-[#000000]">
                Upcoming Event Discussion{" "}
              </h1>
              <p className="font-inter font-medium text-[10px] leading-[13px] text-[#000000]">
                Posted by sarah . 2 hours ago{" "}
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
        </div>
        <div className="flex items-center gap-[1px]">
          <div
            className="h-[12px] w-[12px] bg-[#000000]"
            style={{ borderRadius: "50%" }}
          ></div>
          <div
            className="h-[12px] w-[12px] bg-[#000000]"
            style={{ borderRadius: "50%" }}
          ></div>
          <div
            className="h-[12px] w-[12px] bg-[#000000]"
            style={{ borderRadius: "50%" }}
          ></div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-[14px]">
        <div className="py-[17px] pl-[12px] pr-[60px] gap-[10px]  flex flex-col justify-between mt-[50px] px-[26px] rounded-[15px] shadow-[0px_3.01px_3.01px_0px_rgba(0,0,0,0.25)]">
          <p className="font-inter font-semibold text-[20px] leading-[23px] text-[#1B1919]">
            Top Contributors
          </p>
          <div className="relative flex">
            <img src={img1} className="h-[50px] w-[50px] absolute top-[-40px]" />
            <img src={img2} className="h-[50px] w-[50px] absolute top-[-40px] left-[25px]" />
            <img src={img3} className="h-[50px] w-[50px] absolute top-[-40px] left-[35px]" />
            <img src={img4} className="h-[50px] w-[50px] absolute top-[-40px] left-[45px]" />
          </div>
        </div>
        <div className="py-[17px] pl-[12px] pr-[60px]  flex flex-col justify-between mt-[50px] px-[26px] rounded-[15px] shadow-[0px_3.01px_3.01px_0px_rgba(0,0,0,0.25)]">
          <p className="font-inter font-semibold text-[20px] leading-[23px] text-[#1B1919]">
            Active Discussios
          </p>
          <p className="font-poppins text-[33px] leading-[50px] font-bold text-[#000000]">
            24
          </p>
        </div>
        <div className="py-[17px] pl-[12px] pr-[60px]  flex flex-col justify-between mt-[50px] px-[26px] rounded-[15px] shadow-[0px_3.01px_3.01px_0px_rgba(0,0,0,0.25)]">
          <p className="font-inter font-semibold text-[20px] leading-[23px] text-[#1B1919]">
            Total members{" "}
          </p>
          <p className="font-poppins text-[33px] leading-[50px] font-bold text-[#000000]">
            1,024
          </p>
        </div>
      </div>
    </div>
  );
};

export default Body;
