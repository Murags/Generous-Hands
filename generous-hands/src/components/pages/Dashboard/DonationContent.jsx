import React, { useState, useEffect } from 'react';
import donations from './data';

function DonationContent() {
  const [donationData, setDonationData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [pickupStatus, setPickupStatus] = useState('');
  const [deliveryStatus, setDeliveryStatus] = useState('');

  useEffect(() => {
    setDonationData(donations);
  }, []);

  const filterDonations = () => {
    let filteredDonations = donations;

    if (searchTerm) {
      filteredDonations = filteredDonations.filter(donation =>
        donation.donorName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (pickupStatus) {
      filteredDonations = filteredDonations.filter(donation =>
        donation.pickupStatus === pickupStatus
      );
    }

    if (deliveryStatus) {
      filteredDonations = filteredDonations.filter(donation =>
        donation.deliveryStatus === deliveryStatus
      );
    }

    setDonationData(filteredDonations);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handlePickupStatusChange = (e) => {
    setPickupStatus(e.target.value);
  };

  const handleDeliveryStatusChange = (e) => {
    setDeliveryStatus(e.target.value);
  };

  const renderDonationsTable = () => {
    return donationData.map((donation, index) => (
      <tr key={index}>
        <td>{donation.donorName}</td>
        <td>{donation.item}</td>
        <td>{donation.quantity}</td>
        <td>{donation.date}</td>
        <td>{donation.contact}</td>
      </tr>
    ));
  };

  return (
    <section id="DonationContent">
      <div className="filter-options">
        <input
          type="text"
          id="searchDonations"
          placeholder="Search donations..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <select id="filterPickupStatus" value={pickupStatus} onChange={handlePickupStatusChange}>
          <option value="">All Pickup Statuses</option>
          <option value="Scheduled">Scheduled</option>
          <option value="Completed">Completed</option>
          <option value="Not Needed">Not Needed</option>
        </select>
        <select id="filterDeliveryStatus" value={deliveryStatus} onChange={handleDeliveryStatusChange}>
          <option value="">All Delivery Statuses</option>
          <option value="In Transit">In Transit</option>
          <option value="Delivered">Delivered</option>
          <option value="Not Required">Not Required</option>
        </select>
        <button onClick={filterDonations}>Apply Filters</button>
      </div>
      <div className="table-container">
        <table id='donationTable' className="donations-table">
          <thead>
            <tr>
              <th>Donor Name</th>
              <th>Item</th>
              <th>Quantity</th>
              <th>Date</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>{renderDonationsTable()}</tbody>
        </table>
      </div>
    </section>
  );
}

export default DonationContent;
