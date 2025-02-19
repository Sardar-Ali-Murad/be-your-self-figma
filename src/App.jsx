import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import PerformanceSummary from "./pages/performance-summary";
import Alerts from "./pages/alerts";
import ManagementPage from "./pages/management";
import Sidebar from "./components/common/sidebar";
import Header from "./components/common/header";
import LiveEvent from "./pages/live-event";
import PhysicalEvent from "./pages/physical-event";
import FanForums from "./pages/fan-forums";
import SubscriberGrowth from "./pages/subscriber-growth";
import VideoPerformance from "./pages/video-performance";
import RevenueInsights from "./pages/revenue-insights";
import SubscriptionPlan from "./pages/subscription-plan";
import EventTicketing from "./pages/event-ticketing";
import ProductSales from "./pages/product-sales";
import Messaging from "./pages/messaging";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="flex">
          <div className="flex-[1]">
            <Sidebar />
          </div>
          <div className="flex-[4]">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/performance-summary"
                element={<PerformanceSummary />}
              />
              <Route path="/alerts" element={<Alerts />} />
              <Route path="/management" element={<ManagementPage />} />
              <Route path="/live-event" element={<LiveEvent />} />
              <Route path="/physical-event" element={<PhysicalEvent />} />
              <Route path="/fan-forums" element={<FanForums />} />
              <Route path="/subscriber-growth" element={<SubscriberGrowth />} />
              <Route path="/video-performance" element={<VideoPerformance />} />
              <Route path="/revenue-insights" element={<RevenueInsights />} />
              <Route path="/subscription-plan" element={<SubscriptionPlan />} />
              <Route path="/event-ticketing" element={<EventTicketing />} />
              <Route path="/product-sales" element={<ProductSales />} />
              <Route path="/messaging" element={<Messaging />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
