import React from "react";
import Sidebar from "../components/common/sidebar";
import Header from "../components/common/header";
import PageHeader from "../components/performance-summary/header";
import Graphs from "../components/performance-summary/graphs";
import BottomCards from "../components/performance-summary/bottom-cards";

const PerformanceSummary = () => {
  return (
    <div className="flex">
      <div className="w-[300px]">
        <Sidebar />
      </div>
      <div className="flex-grow">
        <Header />
        <div className="pt-[33px] pl-[33px] pr-[88px] pb-[88px] flex flex-col gap-[27px]">
          <PageHeader />
          <Graphs />
          <BottomCards />
        </div>
      </div>
    </div>
  );
};

export default PerformanceSummary;
