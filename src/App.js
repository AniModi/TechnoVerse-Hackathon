import React from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import OrganizationsPage from "./components/OrganizationsPage";
import DonatePage from "./components/DonatePage";
import DonationListPage from "./components/DonationListPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/organizations" element={<OrganizationsPage />} />
        <Route exact path="/donate" element={<DonatePage />} />
        <Route exact path="/donation-list" element={<DonationListPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
