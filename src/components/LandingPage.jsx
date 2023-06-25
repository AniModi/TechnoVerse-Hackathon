import React, { useEffect, useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import "./LandingPage.scss";
import Card from "./Card";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  const handleNavigate = (e) => {
    if (e.target.innerText === "More Organizations") {
      navigate("/organizations");
    } else {
      navigate("/leaderboard");
    }
  };

  const [images, setImages] = useState([""]);
  const [names, setNames] = useState([""]);
  const [descriptions, setDescriptions] = useState([""]);

  const loadOrganisations = async () => {
    setImages([]);
    const response1 = await fetch(
      "https://beige-asleep-chinchilla-881.mypinata.cloud/ipfs/QmWF2vsEyJ7MJsemiPzupvcsidn6VANL6EYkrsSPSjZ7zK/1.json"
    );
    const data1 = await response1.json();
    const response2 = await fetch(
      "https://beige-asleep-chinchilla-881.mypinata.cloud/ipfs/QmWF2vsEyJ7MJsemiPzupvcsidn6VANL6EYkrsSPSjZ7zK/2.json"
    );
    const data2 = await response2.json();
    const response3 = await fetch(
      "https://beige-asleep-chinchilla-881.mypinata.cloud/ipfs/QmWF2vsEyJ7MJsemiPzupvcsidn6VANL6EYkrsSPSjZ7zK/3.json"
    );
    const data3 = await response3.json();
    setImages([
      "https://beige-asleep-chinchilla-881.mypinata.cloud/ipfs/" +
        data1.image.slice(7),
      "https://beige-asleep-chinchilla-881.mypinata.cloud/ipfs/" +
        data2.image.slice(7),
      "https://beige-asleep-chinchilla-881.mypinata.cloud/ipfs/" +
        data3.image.slice(7),
    ]);
    setNames([data1.name, data2.name, data3.name]);
    setDescriptions([data1.about, data2.about, data3.about]);
  };

  useEffect(() => {
    loadOrganisations();
  }, []);

  return (
    <div className="landing_page_container">
      <div className="landing_page_container_one">
        <div className="landing_page_container_one_left">
          <h1 className="landing_page_container_one_title">PhilanthroNet</h1>
          <h2 className="landing_page_container_one_subheading">Truly Decentralized Charity Platform</h2>
          <p className="landing_page_container_one_description">
            Now, you can donate to your desired charitable organisation with Ether (ETH). For every donation you make, you get a NFT as a token of appreciation. All donations are stored in a donation record, ensuring accountability. The NFTs are unique and are minted on the Ethereum blockchain, ensuring transparency of donations. NFTs can be used to avail membership status, access to our events and community of donators.
          </p>
          <FaArrowDown className="arrow-bounce" />
        </div>
      </div>

      <div className="landing_page_container_two">
        <div className="landing_page_container_two_header">Donate for a Cause</div>
        <div className="landing_page_container_two_cards">
          <div className="landing_page_container_two_cards_card">
            <Card url={images[0]} name={names[0]} data={descriptions[0]} id={1} />
          </div>
          <div className="landing_page_container_two_cards_card">
            <Card url={images[1]} name={names[1]} data={descriptions[1]} id={2} />
          </div>
          <div className="landing_page_container_two_cards_card">
            <Card url={images[2]} name={names[2]} data={descriptions[2]} id={3} />
          </div>
        </div>
        <div className="landing_page_container_two_btn">
          <button className="landing_page_container_two_btn_btn" onClick={handleNavigate}>
            More Organizations
          </button>
          <button className="landing_page_container_two_btn_btn" onClick={handleNavigate}>
            Go to Leaderboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
