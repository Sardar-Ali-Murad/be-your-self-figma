import React from "react";
import PageHeader from "../components/alerts/page-header";
import Alerts from "../components/alerts/alerts";

const AlertsPage = () => {
  return (
    <div className="pt-[33px] pl-[33px] pr-[88px] pb-[88px] flex flex-col gap-[27px]">
      <PageHeader />
      <Alerts />
    </div>
  );
};

export default AlertsPage;
