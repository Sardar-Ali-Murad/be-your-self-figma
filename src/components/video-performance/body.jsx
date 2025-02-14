import React from "react";
import img from "../../assets/video-image.svg";
import play from "../../assets/play-icon.svg";
import eye from "../../assets/eye-icon.svg";
import heart from "../../assets/heart.svg";
import audience from "../../assets/video-audience.svg";

const body = () => {
  return (
    <div className="flex flex-col gap-[27px]">
      {/* First */}
      <div className="grid grid-cols-2 gap-[24px]">
        <div className="px-[16px] py-[8px] shadow-[0px_4px_4px_0px_#00000040] rounded-[7px]">
          <h1 className="font-poppins text-[14.52px] font-semibold leading-[21.78px] text-[#1C2D70] drop-shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
            Top performing Video
          </h1>
          <div className="my-[17px] flex flex-col gap-[12px]">
            <div className="flex flex-row gap-[12px] rounded-[7px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] py-[10px] pl-[17px]">
              <div className="relative">
                <img src={img} />
                <img src={play} className="absolute left-[30px] top-[10px]" />
              </div>
              <div className="flex flex-col gap-[12px]">
                <h1 className="font-poppins font-semibold text-[11.99px] leading-[17.99px] text-[#1C2D70]">
                  How to maximize content reach
                </h1>
                <div className="flex flex-row gap-[14px]">
                  <div className="flex flex-row gap-[3px]">
                    <img src={eye} />
                    <p className="font-poppins font-semibold text-[8.4px] leading-[12.59px] text-[#1C2D70]">
                      245k views
                    </p>
                  </div>
                  <div className="flex flex-row gap-[3px]">
                    <p className="font-poppins font-semibold text-[8.4px] leading-[12.59px] text-[#1C2D70]">
                      .89% completion
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-[12px] rounded-[7px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] py-[10px] pl-[17px]">
              <div className="relative">
                <img src={img} />
                <img src={play} className="absolute left-[30px] top-[10px]" />
              </div>
              <div className="flex flex-col gap-[12px]">
                <h1 className="font-poppins font-semibold text-[11.99px] leading-[17.99px] text-[#1C2D70]">
                  How to maximize content reach
                </h1>
                <div className="flex flex-row gap-[14px]">
                  <div className="flex flex-row gap-[3px]">
                    <img src={eye} />
                    <p className="font-poppins font-semibold text-[8.4px] leading-[12.59px] text-[#1C2D70]">
                      245k views
                    </p>
                  </div>
                  <div className="flex flex-row gap-[3px]">
                    <img src={heart} />
                    <p className="font-poppins font-semibold text-[8.4px] leading-[12.59px] text-[#1C2D70]">
                      .89% completion
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-[16px] py-[8px] shadow-[0px_4px_4px_0px_#00000040] rounded-[7px] flex flex-col gap-[15px]">
          <h1 className="font-poppins text-[14.52px] font-semibold leading-[21.78px] text-[#1C2D70] drop-shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
            Top performing Video
          </h1>
          <img src={audience} />
          <div
            className="bg-[#F0E7E773] pt-[4px] pl-[8px] pb-[31px] pr-[30px] rounded-[4px] shadow-[0px_4px_4px_0px_#00000040;
]"
          >
            <h1 className="font-poppins text-[18px] leading-[26px] text-[#1C2D70]">
              improvement Suggestions
            </h1>
            <div className="mt-[8px]">
              <p className="font-poppins text-[14px] leading-[21px] text-[#1C2D70]">
                . Optimize frist 15 seconds for batter engagements
              </p>
              <p className="font-poppins text-[14px] leading-[21px] text-[#1C2D70]">
                . Optimize frist 15 seconds for batter engagements
              </p>
              <p className="font-poppins text-[14px] leading-[21px] text-[#1C2D70]">
                . Optimize frist 15 seconds for batter engagements
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Second */}
      <div className="pt-[4px] pl-[20px] pr-[38px] pb-[38px] shadow-[0px_4px_4px_0px_#00000040]">
        <h1 className="font-poppins text-[18px] leading-[26px] text-[#1C2D70]">
          Content Insights
        </h1>
        <div className="mt-[16px] grid grid-cols-3 gap-[9px]">
          <div className="pt-[8px] pl-[8px] pr-[30px] pb-[30px] rounded-[3px] shadow-[0px_4px_4px_0px_#00000040] flex flex-col gap-[5px]">
            <h1 className="font-bold text-[18px] leading-[26px] text-[#1C2D70] font-poppins">
              Best Posting Time
            </h1>
            <p className="font-poppins text-[15px] leading-[22px] text-[#1C2D70]">
              Lorem ipsum dolor sit amet consectetur. Augue arcu adipiscing.
            </p>
          </div>
          <div className="pt-[8px] pl-[8px] pr-[30px] pb-[30px] rounded-[3px] shadow-[0px_4px_4px_0px_#00000040] flex flex-col gap-[5px]">
            <h1 className="font-bold text-[18px] leading-[26px] text-[#1C2D70] font-poppins">
              Optimal Video Length
            </h1>
            <p className="font-poppins text-[15px] leading-[22px] text-[#1C2D70]">
              Lorem ipsum dolor sit amet consectetur. Augue arcu adipiscing.
            </p>
          </div>
          <div className="pt-[8px] pl-[8px] pr-[30px] pb-[30px] rounded-[3px] shadow-[0px_4px_4px_0px_#00000040] flex flex-col gap-[5px]">
            <h1 className="font-bold text-[18px] leading-[26px] text-[#1C2D70] font-poppins">
              Topic trends
            </h1>
            <p className="font-poppins text-[15px] leading-[22px] text-[#1C2D70]">
              Lorem ipsum dolor sit amet consectetur. Augue arcu adipiscing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default body;
