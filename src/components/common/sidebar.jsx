import React from "react";
import management from "../../assets/management.svg";
import dashboard from "../../assets/dashboard.svg";
import events from "../../assets/events.svg";
import analytics from "../../assets/analytics.svg";
import earning from "../../assets/earning.svg";
import ad from "../../assets/ad.svg";
import messaging from "../../assets/messaging.svg";
import notification from "../../assets/notification.svg";
import settings from "../../assets/settings.svg";
import logout from "../../assets/logout.svg";
import arrowUp from "../../assets/arrow-up.svg";

const Sidebar = () => {
  return (
    <div className="min-h-[100vh] bg-[#1D345C] w-[300px] pt-[26px]">
      <h1 className="font-istok text-[22.97px] font-bold leading-[33.06px] text-[#FFFFFF] text-center">
        LOGO
      </h1>
      <div className="mt-[40px] flex flex-col gap-[52px]">
        <div className="flex pl-[20px] gap-[17px]  items-center cursor-pointer  w-[100%] h-[70px] rounded-l-[37px] rounded-r-none bg-[#FFFFFF] ">
          <img src={dashboard} className="h-[27px] w-[27px]" />
          <p className="font-istok text-[22.97px] font-bold leading-[33.06px] text-[#1B1919]">
            Dashboard
          </p>
          <img src={arrowUp} className="ml-[11px]" />
        </div>
        <div className="flex pl-[20px] gap-[17px]  items-center cursor-pointer w-[100%]">
          <img src={management} className="h-[27px] w-[27px]" />
          <p className="font-istok text-[22.97px] font-bold leading-[33.06px] text-[#FFFFFF]">
            Management
          </p>
        </div>
        <div className="flex pl-[20px] gap-[17px]  items-center cursor-pointer w-[100%]">
          <img src={events} className="h-[27px] w-[27px]" />
          <p className="font-istok text-[22.97px] font-bold leading-[33.06px] text-[#FFFFFF]">
            Events
          </p>
        </div>
        <div className="flex pl-[20px] gap-[17px]  items-center cursor-pointer w-[100%]">
          <img src={analytics} className="h-[27px] w-[27px]" />
          <p className="font-istok text-[22.97px] font-bold leading-[33.06px] text-[#FFFFFF]">
            Analytics
          </p>
        </div>
        <div className="flex pl-[20px] gap-[17px]  items-center cursor-pointer w-[100%]">
          <img src={earning} className="h-[27px] w-[27px]" />
          <p className="font-istok text-[22.97px] font-bold leading-[33.06px] text-[#FFFFFF]">
            Earning & Sales
          </p>
        </div>
        <div className="flex pl-[20px] gap-[17px]  items-center cursor-pointer w-[100%]">
          <img src={ad} className="h-[27px] w-[27px]" />
          <p className="font-istok text-[22.97px] font-bold leading-[33.06px] text-[#FFFFFF]">
            Ad Management{" "}
          </p>
        </div>
        <div className="flex pl-[20px] gap-[17px]  items-center cursor-pointer w-[100%]">
          <img src={messaging} className="h-[27px] w-[27px]" />
          <p className="font-istok text-[22.97px] font-bold leading-[33.06px] text-[#FFFFFF]">
            Messaging
          </p>
        </div>
        <div className="flex pl-[20px] gap-[17px]  items-center cursor-pointer w-[100%]">
          <img src={notification} className="h-[27px] w-[27px]" />
          <p className="font-istok text-[22.97px] font-bold leading-[33.06px] text-[#FFFFFF]">
            Notification
          </p>
        </div>
        <div className="flex pl-[20px] gap-[17px]  items-center cursor-pointer w-[100%]">
          <img src={settings} className="h-[27px] w-[27px]" />
          <p className="font-istok text-[22.97px] font-bold leading-[33.06px] text-[#FFFFFF]">
            Setting
          </p>
        </div>
        <div className="flex pl-[20px] gap-[17px]  items-center cursor-pointer w-[100%]">
          <img src={logout} className="h-[27px] w-[27px]" />
          <p className="font-istok text-[22.97px] font-bold leading-[33.06px] text-[#FFFFFF]">
            Logout
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
