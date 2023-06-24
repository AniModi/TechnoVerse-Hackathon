import React from "react";
import "./OrganizationsPage.scss";
import Card from "./Card";

const OrganizationsPage = () => {
  return (
    <div className="organizations_page_container">
      <div className="organizations_page_container_title">
        Organizations
      </div>
        <div className="organizations_page_container_cards">
            <div className="organizations_page_container_cards_card">
                <Card></Card>
            </div>
            <div className="organizations_page_container_cards_card">
                <Card></Card>
            </div>
            <div className="organizations_page_container_cards_card">
                <Card></Card>
            </div>
            <div className="organizations_page_container_cards_card">
                <Card></Card>
            </div>
            <div className="organizations_page_container_cards_card">
                <Card></Card>
            </div>
            <div className="organizations_page_container_cards_card">
                <Card></Card>
            </div>
        </div>
    </div>
  );
};

export default OrganizationsPage;
