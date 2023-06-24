import React from "react";
import "./LandingPage.scss";
import Card from "./Card";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  const handleNavigate = (e) => {
    if(e.target.innerText === "Find Organizations") {
        navigate("/organizations");
    }
    else {
        navigate("/about");
    }
  }
  return (
    <div className="landing_page_container">
      <div className="landing_page_container_one"></div>
      <div className="landing_page_container_one_left"></div>
      <div className="landing_page_container_two">
        <div className="landing_page_container_two_header">
            Donate for a cause
        </div>
            <div className="landing_page_container_two_cards">
                <div className="landing_page_container_two_cards_card">
                    <Card url = "https://cdn2.f-cdn.com/contestentries/2069462/55699415/624b6ab30ecd6_thumb900.jpg"/>
                </div>
                <div className="landing_page_container_two_cards_card">
                    <Card url = "https://img.freepik.com/premium-vector/voluntary-service-icon-two-hand-keeping-heart-charity-concept-volunteers-support-hand-love-charitable-organizations-vector-isolated-white-background-eps-10_399089-2202.jpg"/>
                </div>
                <div className="landing_page_container_two_cards_card">
                    <Card url = "https://img.freepik.com/premium-vector/heart-hands-charity-donation-voluntary-nonprofit-organization-logo-design-vector-il_707267-382.jpg?w=2000"/>
                </div>
            </div>
        <div className="landing_page_container_two_btn">
            <button className="landing_page_container_two_btn_btn" onClick={handleNavigate}>Find Organizations</button>
            <button className="landing_page_container_two_btn_btn" onClick={handleNavigate}>Know more</button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
