import React, {useState, useEffect} from "react";
import "./OrganizationsPage.scss";
import Card from "./Card";

const OrganizationsPage = () => {
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
            
  }

  useEffect(()=>{
    loadOrganisations();
  },[]);

  return (
    <div className="organizations_page_container">
      <div className="organizations_page_container_title">
        Organizations
      </div>
        <div className="organizations_page_container_cards">
            <div className="organizations_page_container_cards_card">
            <Card url = {images[0]}  name={names[0]} data={descriptions[0]} id={1}/>
            </div>
            <div className="organizations_page_container_cards_card">
            <Card url = {images[1]}  name={names[1]} data={descriptions[1]} id={2}/>
            </div>
            <div className="organizations_page_container_cards_card">
            <Card url = {images[2]}  name={names[2]} data={descriptions[2]} id={3}/>
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
