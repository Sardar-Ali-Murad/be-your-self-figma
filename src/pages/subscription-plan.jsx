import React from "react";
import Cards from "../components/subscription-plan/cards";
import Graphs from "../components/subscription-plan/graphs";
import Feedback from "../components/subscription-plan/feedback";
import { useLocation } from "react-router-dom";

const SubscriptionPlan = () => {
  const location = useLocation();
  return (
    <div className="pt-[33px] pl-[33px] pr-[88px] pb-[88px] flex flex-col gap-[27px]">
      <Cards name={location.pathname.split("/").slice(1).join("")} />
      <Graphs />
      <Feedback />
    </div>
  );
};

export default SubscriptionPlan;
