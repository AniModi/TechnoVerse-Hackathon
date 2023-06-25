import React, {useEffect, useState} from "react";
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

  const [images, setImages]= useState([]);
  const [names, setNames]= useState([]);
  const [descriptions, setDescriptions]= useState([]);

  const loadOrganisations = async ()=>{
    setImages([])
       
       let response = await fetch(`https://beige-asleep-chinchilla-881.mypinata.cloud/ipfs/QmWF2vsEyJ7MJsemiPzupvcsidn6VANL6EYkrsSPSjZ7zK/1.json`);
            let data = await response.json();
            setImages((prevImages)=>['https://beige-asleep-chinchilla-881.mypinata.cloud/ipfs/'+data.image.slice(7)]);
            setNames((prevNames)=>[data.name]);
            setDescriptions((prevDescriptions)=>[data.about]);

            response = await fetch(`https://beige-asleep-chinchilla-881.mypinata.cloud/ipfs/QmWF2vsEyJ7MJsemiPzupvcsidn6VANL6EYkrsSPSjZ7zK/2.json`);
            data = await response.json();
            setImages((prevImages)=>[...prevImages, 'https://beige-asleep-chinchilla-881.mypinata.cloud/ipfs/'+data.image.slice(7)]);
            setNames((prevNames)=>[...prevNames, data.name]);
            setDescriptions((prevDescriptions)=>[...prevDescriptions, data.about]);
            
            response = await fetch(`https://beige-asleep-chinchilla-881.mypinata.cloud/ipfs/QmWF2vsEyJ7MJsemiPzupvcsidn6VANL6EYkrsSPSjZ7zK/3.json`);
            data = await response.json();
            console.log('data', data)
            setImages((prevImages)=>[...prevImages, 'https://beige-asleep-chinchilla-881.mypinata.cloud/ipfs/'+data.image.slice(7)]);
            setNames((prevNames)=>[...prevNames, data.name]);
            setDescriptions((prevDescriptions)=>[...prevDescriptions, data.about]);
            
          // console.log('Images', images)
  }

  useEffect(()=>{
    loadOrganisations();
  },[]);

  return (
    <div className="landing_page_container">
      <h1>DonateX</h1>
      <div className="landing_page_container_one"></div>
      <div className="landing_page_container_one_left"></div>
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
            <button className="landing_page_container_two_btn_btn" onClick={handleNavigate}>Find Organizations</button>
            <button className="landing_page_container_two_btn_btn" onClick={handleNavigate}>Know more</button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
