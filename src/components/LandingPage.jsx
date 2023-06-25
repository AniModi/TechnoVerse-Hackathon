import React, {useEffect, useState} from "react";
import "./LandingPage.scss";
import Card from "./Card";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  const handleNavigate = (e) => {
    if(e.target.innerText === "More Organizations") {
        navigate("/organizations");
    }
    else {
        navigate("/leaderboard");
    }
  }

  const [images, setImages]= useState(['']);
  const [names, setNames]= useState(['']);
  const [descriptions, setDescriptions]= useState(['']);

  const loadOrganisations = async ()=>{
    setImages([]);
    const response1 = await fetch(`https://beige-asleep-chinchilla-881.mypinata.cloud/ipfs/QmWF2vsEyJ7MJsemiPzupvcsidn6VANL6EYkrsSPSjZ7zK/1.json`);
        const data1 = await response1.json();
        const response2 = await fetch(`https://beige-asleep-chinchilla-881.mypinata.cloud/ipfs/QmWF2vsEyJ7MJsemiPzupvcsidn6VANL6EYkrsSPSjZ7zK/2.json`);
        const data2 = await response2.json();
        const response3 = await fetch(`https://beige-asleep-chinchilla-881.mypinata.cloud/ipfs/QmWF2vsEyJ7MJsemiPzupvcsidn6VANL6EYkrsSPSjZ7zK/3.json`);
        const data3 = await response3.json();
        setImages([
          'https://beige-asleep-chinchilla-881.mypinata.cloud/ipfs/' + data1.image.slice(7),
          'https://beige-asleep-chinchilla-881.mypinata.cloud/ipfs/' + data2.image.slice(7),
          'https://beige-asleep-chinchilla-881.mypinata.cloud/ipfs/' + data3.image.slice(7)
        ]);
        setNames([data1.name, data2.name, data3.name]);
        setDescriptions([data1.about, data2.about, data3.about]);
            
          // console.log('Images', images[3])
  }

  useEffect(()=>{
    loadOrganisations();
  },[]);

  return (
    <div className="landing_page_container">
      <h1>PhilanthroNet</h1>
      <div className="landing_page_container_one"></div>
      <div className="landing_page_container_one_left">
        <br/><br/>
        <p className="title">Truly Decentralized Charity Platform</p>
        <p>
           Now, you can donate to your desired charitable organisation with Ether (ETH).<br/><br/>
           For every donation you make, you get a NFT as a token of appreciation.<br/><br/>
           All donations are stored in a donation record, ensuring accountability.<br/><br/>
           The NFTs are unique and are minted on the Ethereum blockchain, ensuring transparency of donations.<br/><br/>
           NFTs can be used to avail membership status, access to our events and community of donators.
           <br/><br/><br/>
           --- Scroll down ---
        </p>
        </div>
        {/* <h1>Future goals:<br/> To implement zero knowledge proofs to verify donors<br/>
        To use DAO to validate charity funds allocation</h1> */}

      <div className="landing_page_container_two">
        
        <div className="landing_page_container_two_header">
            Donate for a cause
        </div>
            <div className="landing_page_container_two_cards">
                <div className="landing_page_container_two_cards_card">
                    <Card url = {images[0]}  name={names[0]} data={descriptions[0]} id={1}/>
                </div>
                <div className="landing_page_container_two_cards_card">
                    <Card url = {images[1]} name={names[1]} data={descriptions[1]} id={2}/>
                    </div>
                <div className="landing_page_container_two_cards_card">
                    <Card url = {images[2]} name={names[2]} data={descriptions[2]} id={3}/>
                    </div>
            </div>
        <div className="landing_page_container_two_btn">
            <button className="landing_page_container_two_btn_btn" onClick={handleNavigate}>More Organizations</button>
            <button className="landing_page_container_two_btn_btn" onClick={handleNavigate}>Go to leaderboard</button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
