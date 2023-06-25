import React, { useEffect } from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import OrganizationsPage from "./components/OrganizationsPage";
import DonatePage from "./components/DonatePage";
import DonationListPage from "./components/DonationListPage";
import LeaderboardPage from "./components/LeaderboardPage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/organizations" element={<OrganizationsPage />} />
        <Route exact path="/donate/:id" element={<DonatePage/>} />
        <Route exact path="/donation-list/:id" element={<DonationListPage/>} />
        <Route exact path="/leaderboard" element={<LeaderboardPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
