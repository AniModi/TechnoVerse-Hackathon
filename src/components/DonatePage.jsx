import React, { useEffect, useState } from "react";
import "./DonatePage.scss";
import { useNavigate } from "react-router-dom";

const DonatePage = () => {
  const [background, setBackground] = useState({
    background: "white",
  });


  const [donation, setDonation] = useState([0]);

    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate("/donation-list");
    }

    console.log(donation);
  useEffect(() => {
    const call = async () => {
      const response = await fetch('https://beige-asleep-chinchilla-881.mypinata.cloud/ipfs/QmWF2vsEyJ7MJsemiPzupvcsidn6VANL6EYkrsSPSjZ7zK/1.json');
      const data = await response.json();
      console.log(data.image);
      const newBackground = {
        ...background,
        background: `url(${data.image})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      };
      setBackground(newBackground);
    };
    call();
  }, []);

  const handleDonationChange = (e) => {
    const inputValue = e.target.value;
    if (/^\d*\.?\d*$/.test(inputValue)) {
      setDonation(inputValue);
    }
  };

  const handleConnect = async () => {
    return;
  }

  const handleDonation = async () => {
    return;
  };

  return (
    <div className="donate_container">
      <div className="donate_card_container">
        <div className="card" style={background}></div>
      </div>
      <div className="content">
        <button className="connect_button" onClick={handleConnect}>Connect to MetaMask</button>
        <input
          className="donation_input"
          type="text"
          placeholder="Enter donation amount"
          value={donation}
          onChange={handleDonationChange}
        />
        <button className="donate_button" onClick={handleDonation}>Make Donation</button>
        <button className="donation_list_button" onClick={handleNavigate}>
          View Donation List
        </button>
      </div>
    </div>
  );
};

export default DonatePage;
