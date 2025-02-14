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
import people from "../../assets/manage-users.svg";
import activeDashboard from "../../assets/active-dashboard.svg";
import darkAudienceAnalytics from "../../assets/dark-audience-analytics.svg";
import darkEvent from "../../assets/dark-event.svg";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [openDashboard, setOpenDashboard] = React.useState(false);
  const [active, setActive] = React.useState("home");

  React.useEffect(() => {
    if (location.pathname === "/") {
      setActive("home");
    }
    if (location.pathname === "/performance-summary") {
      setActive("home");
      setOpenDashboard(true);
    }
    if (location.pathname === "/alerts") {
      setActive("home");
      setOpenDashboard(true);
    }
    if (location.pathname === "/management") {
      setActive("management");
    }
    if (
      location.pathname === "/live-event" ||
      location.pathname === "/physical-event" ||
      location.pathname === "/fan-forums"
    ) {
      setActive("event");
      setOpenDashboard(true);
    }
    if (
      location.pathname === "/subscriber-growth" ||
      location.pathname === "/video-performance" ||
      location.pathname === "/revenue-insights"
    ) {
      setActive("revenue");
      setOpenDashboard(true);
    }
  }, [location]);
  return (
    <div className="h-[100%] bg-[#1D345C] pt-[26px]">
      <h1
        className="font-istok text-[22.97px] font-bold leading-[33.06px] text-[#FFFFFF] text-center cursor-pointer"
        onClick={() => navigate("/")}
      >
        LOGO
      </h1>
      <div className="mt-[40px] flex flex-col gap-[52px]">
        <div>
          <div
            className={`${
              active == "home"
                ? "flex pl-[20px] gap-[17px]  items-center cursor-pointer  w-[100%] h-[70px] rounded-l-[37px] rounded-r-none bg-[#FFFFFF]"
                : "flex pl-[20px] gap-[17px]  items-center cursor-pointer w-[100%]"
            }`}
            onClick={() => {
              setOpenDashboard(!openDashboard);
              setActive("home");
              navigate("/");
            }}
          >
            <img
              src={active === "home" ? dashboard : activeDashboard}
              className="h-[27px] w-[27px]"
            />
            <p
              className={`${
                active === "home"
                  ? "font-istok text-[22.97px] font-bold leading-[33.06px] text-[#1B1919]"
                  : "font-istok text-[22.97px] font-bold leading-[33.06px] text-[#FFFFFF]"
              }`}
            >
              Dashboard
            </p>
            {active === "home" && <img src={arrowUp} className="ml-[11px]" />}
          </div>
          {openDashboard && active === "home" && (
            <div className="ml-[40px] mr-[26px] mt-[20px]">
              <p
                className="font-istok font-normal text-[19.14px] leading-[40px] text-[#FFFFFF] cursor-pointer"
                onClick={() => navigate("/performance-summary")}
              >
                Performance Summary
              </p>
              <p
                className="font-istok font-normal text-[19.14px] leading-[40px] text-[#FFFFFF] cursor-pointer"
                onClick={() => navigate("/alerts")}
              >
                Notifications & Alerts
              </p>
            </div>
          )}
        </div>

        <div
          className={`${
            active === "management"
              ? "flex pl-[20px] gap-[17px]  items-center cursor-pointer  w-[100%] h-[70px] rounded-l-[37px] rounded-r-none bg-[#FFFFFF]"
              : "flex pl-[20px] gap-[17px]  items-center cursor-pointer w-[100%]"
          }`}
          onClick={() => {
            setActive("management");
            setOpenDashboard(false);
            navigate("/management");
          }}
        >
          <img
            src={active === "management" ? people : management}
            className="h-[27px] w-[27px]"
          />
          <p
            className={`${
              active === "management"
                ? "font-istok text-[22.97px] font-bold leading-[33.06px] text-[#1B1919]"
                : "font-istok text-[22.97px] font-bold leading-[33.06px] text-[#FFFFFF]"
            }`}
          >
            Management
          </p>
        </div>
        <div>
          <div
            className={`${
              active === "event"
                ? "flex pl-[20px] gap-[17px]  items-center cursor-pointer  w-[100%] h-[70px] rounded-l-[37px] rounded-r-none bg-[#FFFFFF]"
                : "flex pl-[20px] gap-[17px]  items-center cursor-pointer w-[100%]"
            }`}
            onClick={() => {
              setActive("event");
              setOpenDashboard(!openDashboard);
              navigate("/live-event");
            }}
          >
            <img
              src={active === "event" ? darkEvent : events}
              className="h-[27px] w-[27px]"
            />{" "}
            <p
              className={`${
                active === "event"
                  ? "font-istok text-[22.97px] font-bold leading-[33.06px] text-[#1B1919]"
                  : "font-istok text-[22.97px] font-bold leading-[33.06px] text-[#FFFFFF]"
              }`}
            >
              Events
            </p>
            {active === "event" && <img src={arrowUp} className="ml-[11px]" />}
          </div>
          {openDashboard && active === "event" && (
            <div className="ml-[40px] mr-[26px] mt-[20px]">
              <p
                className="font-istok font-normal text-[19.14px] leading-[40px] text-[#FFFFFF] cursor-pointer"
                onClick={() => navigate("/live-event")}
              >
                Create Live Event
              </p>
              <p
                className="font-istok font-normal text-[19.14px] leading-[40px] text-[#FFFFFF] cursor-pointer"
                onClick={() => navigate("/physical-event")}
              >
                Create physical event
              </p>
              <p
                className="font-istok font-normal text-[19.14px] leading-[40px] text-[#FFFFFF] cursor-pointer"
                onClick={() => navigate("/fan-forums")}
              >
                fanForums
              </p>
            </div>
          )}
        </div>

        <div>
          <div
            className={`${
              active === "revenue"
                ? "flex pl-[20px] gap-[17px]  items-center cursor-pointer  w-[100%] h-[70px] rounded-l-[37px] rounded-r-none bg-[#FFFFFF]"
                : "flex pl-[20px] gap-[17px]  items-center cursor-pointer w-[100%]"
            }`}
            onClick={() => {
              setActive("revenue");
              setOpenDashboard(!openDashboard);
              navigate("/subscriber-growth");
            }}
          >
            <img
              src={active === "revenue" ? darkAudienceAnalytics : analytics}
              className="h-[27px] w-[27px]"
            />
            <p
              className={`${
                active === "revenue"
                  ? "font-istok text-[22.97px] font-bold leading-[33.06px] text-[#1B1919]"
                  : "font-istok text-[22.97px] font-bold leading-[33.06px] text-[#FFFFFF]"
              }`}
            >
              Analytics
            </p>
            {active === "revenue" && (
              <img src={arrowUp} className="ml-[11px]" />
            )}
          </div>
          {openDashboard && active === "revenue" && (
            <div className="ml-[40px] mr-[26px] mt-[20px]">
              <p
                className="font-istok font-normal text-[19.14px] leading-[40px] text-[#FFFFFF] cursor-pointer"
                onClick={() => navigate("/subscriber-growth")}
              >
                Subscriber Growth
              </p>
              <p
                className="font-istok font-normal text-[19.14px] leading-[40px] text-[#FFFFFF] cursor-pointer"
                onClick={() => navigate("/video-performance")}
              >
                Video Performance
              </p>
              <p
                className="font-istok font-normal text-[19.14px] leading-[40px] text-[#FFFFFF] cursor-pointer"
                onClick={() => navigate("/revenue-insights")}
              >
                Revenue Insights
              </p>
            </div>
          )}
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
