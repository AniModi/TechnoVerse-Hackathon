import React from "react";
import "./LeaderboardPage.scss";

const LeaderboardPage = () => {
  // Sample leaderboard data
  const leaderboardData = [
    { name: "John Doe", NFT: 100 },
    { name: "Jane Smith", NFT: 75 },
    { name: "Michael Johnson", NFT: 50 },
    { name: "Emily Brown", NFT: 25 },
  ];

  return (
    <div className="leaderboard_container">
      <h1 className="title">Leaderboard</h1>
      <table className="leaderboard_table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Number of NFTs</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((entry, index) => (
            <tr key={index}>
              <td>{entry.name}</td>
              <td>{entry.NFT}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaderboardPage;
