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
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
