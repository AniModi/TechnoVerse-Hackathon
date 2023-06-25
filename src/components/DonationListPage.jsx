import React, { useEffect, useState } from "react";
import {ethers} from "ethers";
import charityABI from './../abis/charity.json'
import donationABI from './../abis/donation.json'
import config from './config.json'
import "./DonationListPage.scss";

const convertTime = (timestamp)=>{
  const milliseconds = timestamp * 1000;

  // Create a new Date object with the converted milliseconds
  const date = new Date(milliseconds);
  
  // Get the various components of the date
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // Months are zero-based, so add 1
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  
  // Construct the formatted date string
  const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  return formattedDate;
}

const DonationListPage = (props) => {
  const id = props.id;
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // try {
      //   const response = await fetch("https://api.example.com/donations");
      //   const data = await response.json();
      //   setDonations(data);
      // } catch (error) {
      //   console.error("Error fetching donations:", error);
      // }
      await loadBlockchainData();
    };

    fetchData();
  }, []);

  const loadBlockchainData = async () => {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const charityAddress =config["charity"];
    const donationAddress =config["donation"];
    const signer = await provider.getSigner();
    // console.log(signer);
    const charity = new ethers.Contract(charityAddress, charityABI, signer);
    const donationC = new ethers.Contract(donationAddress, donationABI, signer);

    const _donations = await donationC.getTrustDonations()
    console.log('donations',_donations)
    setDonations(_donations);
  }

  return (
    <div className="donation_list_container">
      <h1 className="title">Tamper-proof&nbsp;donation records</h1>
      <table className="donation_table">
        <thead>
          <tr>
            <th>Account</th>
            <th>Amount</th>
            <th>Date & Time</th>
          </tr>
        </thead>
        <tbody>
        {donations.map((donation) => {
          if(donation._trustId == id-1){
          return(
            <tr key={donation.id}>
              <td>{donation.donor}</td>
              <td>{ethers.formatEther(donation.amount.toString())} ETH</td>
              <td>{convertTime(donation.time.toString())}</td>
            </tr>);}
            })}
        </tbody>
      </table>
    </div>
  );
};

export default DonationListPage;
