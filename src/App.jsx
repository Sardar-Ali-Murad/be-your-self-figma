import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import PerformanceSummary from "./pages/performance-summary";
import Alerts from "./pages/alerts";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/performance-summary" element={<PerformanceSummary />} />
          <Route path="/alerts" element={<Alerts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
