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
        <Route exact path="/donate/1" element={<DonatePage id={1}/>} />
        <Route exact path="/donate/2" element={<DonatePage id={2}/>} />
        <Route exact path="/donate/3" element={<DonatePage id={3}/>} />
        <Route exact path="/donation-list/1" element={<DonationListPage id={1}/>} />
        <Route exact path="/donation-list/2" element={<DonationListPage id={2}/>} />
        <Route exact path="/donation-list/3" element={<DonationListPage id={3}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
