import React from "react";
import Cards from "../components/revenue-insights/cards";
import Graph from "../components/revenue-insights/graph";
import Body from "../components/revenue-insights/body";


const RevenueInsights = () => {
  return (
    <div className="pt-[33px] pl-[33px] pr-[88px] pb-[88px] flex flex-col gap-[27px]">
      <Cards name="revenue"/>
      <Graph/>
      <Body/>
    </div>
  );
};

export default RevenueInsights;
