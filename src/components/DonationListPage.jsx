import React, { useEffect, useState } from "react";
import "./DonationListPage.scss";

const DonationListPage = () => {
  const [donations, setDonations] = useState([
    {
      "id": 1,
      "account": "John Doe",
      "amount": 100,
      "date": "2023-06-20"
    },
    {
      "id": 2,
      "account": "Jane Smith",
      "amount": 50,
      "date": "2023-06-22"
    },
    {
      "id": 3,
      "account": "Michael Johnson",
      "amount": 200,
      "date": "2023-06-23"
    },
    {
      "id": 4,
      "account": "Emily Davis",
      "amount": 75,
      "date": "2023-06-25"
    },
    {
      "id": 5,
      "account": "David Wilson",
      "amount": 150,
      "date": "2023-06-27"
    },
    {
      "id": 6,
      "account": "Sarah Thompson",
      "amount": 120,
      "date": "2023-06-30"
    },
    {
      "id": 7,
      "account": "Robert Anderson",
      "amount": 80,
      "date": "2023-07-02"
    },
    {
      "id": 8,
      "account": "Olivia Martinez",
      "amount": 90,
      "date": "2023-07-05"
    },
    {
      "id": 8,
      "account": "Olivia Martinez",
      "amount": 90,
      "date": "2023-07-05"
    },
    {
      "id": 8,
      "account": "Olivia Martinez",
      "amount": 90,
      "date": "2023-07-05"
    },
    {
      "id": 8,
      "account": "Olivia Martinez",
      "amount": 90,
      "date": "2023-07-05"
    },
  ]
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.example.com/donations");
        const data = await response.json();
        setDonations(data);
      } catch (error) {
        console.error("Error fetching donations:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="donation_list_container">
      <h1 className="title">Donation List</h1>
      <table className="donation_table">
        <thead>
          <tr>
            <th>Account</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {donations.map((donation) => (
            <tr key={donation.id}>
              <td>{donation.account}</td>
              <td>${donation.amount}</td>
              <td>{donation.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DonationListPage;
