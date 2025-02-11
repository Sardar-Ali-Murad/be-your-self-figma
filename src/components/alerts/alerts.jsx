import React from "react";
import search from "../../assets/search.svg";
import down from "../../assets/drop-down.svg";
import img1 from "../../assets/alert-user-1.svg";
import img2 from "../../assets/alert-user-2.svg";
import reply from "../../assets/reply.svg";
import follow from "../../assets/follow.svg";
import caution from "../../assets/caution.svg";
import bell from "../../assets/bell.svg";
import replyAll from "../../assets/reply-all.svg";
import manageUsers from "../../assets/manage-users.svg";
import stats from "../../assets/stats.svg";
import settings from "../../assets/setting.svg";

const Alerts = () => {
  return (
    <div className="mt-[46px] grid grid-cols-2 gap-[17px]">
      {/* First Portion */}
      <div className="flex flex-col gap-[14px]">
        <div className="py-[22px] px-[26px] rounded-[6px] shadow-[0px_3.01px_3.01px_0px_rgba(0,0,0,0.25)] grid grid-cols-3 gap-[16px]">
          <div className="relative">
            <input
              placeholder="search"
              className="h-[50px] w-[100%] border border-[1px] border-[#968181B2] border-opacity-70 rounded-[30px] font-inter text-[#908888] font-medium p-[14px]"
            />
            <img src={search} className="absolute top-[16px] right-[20px]" />
          </div>
          <div className="bg-[#1D345C] py-[9px] px-[11px]  rounded-[6px] flex justify-between items-center">
            <p className="text-[#FFFFFF] text-[17px] leading-[24px] font-poppins">
              All Types
            </p>
            <img src={down} />
          </div>
          <div className="bg-[#1D345C] py-[9px] px-[11px]  rounded-[6px] flex justify-between items-center">
            <p className="text-[#FFFFFF] text-[17px] leading-[24px] font-poppins">
              Last24 hrs
            </p>
            <img src={down} />
          </div>
        </div>
        <div className="py-[22px] px-[26px] rounded-[6px] shadow-[0px_3.01px_3.01px_0px_rgba(0,0,0,0.25)] flex gap-[15px]">
          <img src={img1} />
          <div className="flex flex-col gap-[11px]">
            <h1 className="font-inter font-medium text-[19px] leading-[23px] text-[#000000]">
              John Cooper commented on your post
            </h1>
            <p className="font-inter font-medium text-[10px] leading-[13px] text-[#000000]">
              Great content Keep it up!
            </p>
            <div className="flex gap-[22px] items-center">
              <div className="flex gap-[7px] items-center">
                <img src={reply} />
                <p className="font-inter font-medium text-[10px] leading-[13px]">
                  Reply
                </p>
              </div>
              <p className="font-inter font-medium text-[10px] leading-[13px]">
                {" "}
                2hrs ago
              </p>
            </div>
          </div>
        </div>
        <div className="py-[22px] px-[26px] rounded-[6px] shadow-[0px_3.01px_3.01px_0px_rgba(0,0,0,0.25)] flex gap-[15px]">
          <img src={img2} />
          <div className="flex flex-col gap-[11px]">
            <h1 className="font-inter font-medium text-[19px] leading-[23px] text-[#000000]">
              Sarah Smith subscribed to your channel
            </h1>

            <div className="flex gap-[22px] items-center">
              <div className="flex gap-[7px] items-center">
                <img src={follow} />
                <p className="font-inter font-medium text-[10px] leading-[13px]">
                  Follow Back
                </p>
              </div>
              <p className="font-inter font-medium text-[10px] leading-[13px]">
                {" "}
                2hrs ago
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* First Portion */}
      {/* Second Portion */}
      <div className="flex flex-col gap-[15px]">
        {/* First */}
        <div className="shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-[5px] pt-[8px] pb-[29px] px-[12px] flex flex-col gap-[3px]">
          <h1 className="font-istok font-bold text-[24px] leading-[35px] text-[#1D345C]">
            Prioritzed Alerts
          </h1>
          <div className="shadow-[0px_4px_4px_0px_#00000040] rounded-[6px] py-[18px] px-[10px] flex gap-[7px] items-center">
            <div
              className="h-[18px] w-[18px] flex justify-center items-center bg-[#1D345C]"
              style={{ borderRadius: "50%" }}
            >
              <img src={caution} />
            </div>
            <div className="flex flex-col gap-[4px]">
              <h1 className="font-inter font-medium text-[13px] leading-[16px] text-[#000000]">
                Content Milestone Reached
              </h1>
              <p className="font-inter text-[10px] leading-[12px] text-[#000000]">
                Your post reached 1000 viewa
              </p>
            </div>
          </div>
          <div className="shadow-[0px_4px_4px_0px_#00000040] rounded-[6px] py-[18px] px-[10px] flex gap-[7px] items-center">
            <img src={bell} />
            <div className="flex flex-col gap-[4px]">
              <h1 className="font-inter font-medium text-[13px] leading-[16px] text-[#000000]">
                New Feature Avaliable
              </h1>
              <p className="font-inter text-[10px] leading-[12px] text-[#000000]">
                Try our new analytics dashboard
              </p>
            </div>
          </div>
        </div>
        {/* Second */}
        <div className="shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-[5px] pt-[8px] pb-[29px] px-[12px] flex flex-col gap-[3px]">
          <h1 className="font-istok font-bold text-[24px] leading-[35px] text-[#1D345C]">
            Quick Actions
          </h1>
          <div className="grid grid-cols-2 gap-[5px] mb-[12px]">
            <div className="shadow-[0px_4px_4px_0px_#00000040] rounded-[6px] py-[18px] px-[10px] flex gap-[15px] items-center">
              <img src={replyAll} />
              <h1 className="font-inter font-bold text-[20px] leading-[25px] text-[#000000]">
                Reply All
              </h1>
            </div>
            <div className="shadow-[0px_4px_4px_0px_#00000040] rounded-[6px] py-[18px] px-[10px] flex gap-[15px] items-center">
              <img src={manageUsers} />
              <h1 className="font-inter font-bold text-[20px] leading-[25px] text-[#000000]">
                Manage User
              </h1>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-[5px]">
            <div className="shadow-[0px_4px_4px_0px_#00000040] rounded-[6px] py-[18px] px-[10px] flex gap-[15px] items-center">
              <img src={stats} />
              <h1 className="font-inter font-bold text-[20px] leading-[25px] text-[#000000]">
                View Stats
              </h1>
            </div>
            <div className="shadow-[0px_4px_4px_0px_#00000040] rounded-[6px] py-[18px] px-[10px] flex gap-[15px] items-center">
              <img src={settings} />
              <h1 className="font-inter font-bold text-[20px] leading-[25px] text-[#000000]">
                Settings
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* Second Portion */}
    </div>
  );
};

export default Alerts;
