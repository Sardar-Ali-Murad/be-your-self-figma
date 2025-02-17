import React from "react";
import Cards from "../components/event-ticketing/cards";
import Graphs from "../components/event-ticketing/graph";
import Body from "../components/event-ticketing/body";
import { useLocation } from "react-router-dom";

const EventTicketing = () => {
  const location = useLocation();
  return (
    <div className="pt-[33px] pl-[33px] pr-[88px] pb-[88px] flex flex-col gap-[27px]">
      <Cards name={location.pathname.split("/").slice(1).join("")} />
      <Graphs />
      <Body />
    </div>
  );
};

export default EventTicketing;
