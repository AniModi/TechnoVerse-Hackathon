import React, {useState, useEffect} from "react";
import { ethers } from 'ethers'
import charityABI from './../abis/charity.json'
import donationABI from './../abis/donation.json'
import config from './config.json'
import "./LeaderboardPage.scss";

const LeaderboardPage = () => {
  // Sample leaderboard data
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
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

    let leaderboard = await donationC.getDonors()
    // console.log('donors', leaderboard[0])
    let leaderboardData = []
    for (let i = 0; i < leaderboard.length; i++) {
      const _account = (leaderboard[i])
      const _NFT = await charity.balanceOf(_account)
      leaderboardData.push({_account, _NFT})
    }
    // Sort in descending order
    leaderboardData.sort((a, b) => b._NFT - a._NFT)
    setLeaderboardData(leaderboardData);
  }

  return (
    <div className="leaderboard_container">
      <h1 className="title">Leaderboard</h1>
      <table className="leaderboard_table">
        <thead>
          <tr>
            <th>Account</th>
            <th>Number of NFTs</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((entry, index) => (
            <tr key={index}>
              <td>{entry._account}</td>
              <td>{entry._NFT.toString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaderboardPage;
