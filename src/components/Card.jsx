import React from "react";
import "./Card.scss";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const background = {
    background: "white",
  };
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/donate");
  };

  if (props.url) {
    background["background"] = `url(${props.url})`;
    background["backgroundSize"] = "contain";
    background["backgroundRepeat"] = "no-repeat";
    background["backgroundPosition"] = "center center";
  }
  return (
    <div className="card_container">
      <div className="card_container_bg" style={background}></div>
      <div className="card_container_content">
        <div className="card_container_content_name">
          {props.name || "Name"}
        </div>
        <div className="card_container_content_description">
          {props.data ||
            ` Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
          recusandae blanditiis dignissimos libero natus mollitia necessitatibus
          reprehenderit magni quod rerum illo, magnam nobis eum expedita a
          excepturi voluptatum quam? Repellat?`}
        </div>
        <div className="card_container_content_donate">
          <button
            className="card_container_content_donate_btn"
            onClick={handleNavigate}
          >
            Donate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
