import React from "react";
import Sidebar from "../components/common/sidebar";
import Header from "../components/common/header";
import PageHeader from "../components/alerts/page-header";
import Alerts from "../components/alerts/alerts";

const AlertsPage = () => {
  return (
    <div className="flex">
      <div className="flex-[1]">
        <Sidebar />
      </div>
      <div className="flex-[4]">
        <Header />
        <div className="pt-[33px] pl-[33px] pr-[88px] pb-[88px] flex flex-col gap-[27px]">
          <PageHeader />
          <Alerts />
        </div>
      </div>
    </div>
  );
};

export default AlertsPage;
