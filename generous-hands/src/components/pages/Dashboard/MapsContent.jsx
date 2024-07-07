import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faTshirt, faBook, faGift, faShoePrints, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import donations from './data';

library.add(faUtensils, faTshirt, faBook, faGift, faShoePrints, faQuestionCircle);

function MapsContent() {
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [regions, setRegions] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredDonations, setFilteredDonations] = useState(donations);

  useEffect(() => {
    const uniqueRegions = [...new Set(donations.map(donation => donation.region))];
    const uniqueCategories = [...new Set(donations.map(donation => donation.category))];

    setRegions(uniqueRegions);
    setCategories(uniqueCategories);

    const mapInstance = L.map('map').setView([-1.292066, 36.821946], 7);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(mapInstance);

    setMap(mapInstance);
    return () => {
      if (mapInstance) mapInstance.remove();
    };
  }, []);

  useEffect(() => {
    if (!map) return;

    markers.forEach(marker => map.removeLayer(marker));
    const newMarkers = filteredDonations.map(donation => {
      const icon = L.divIcon({
        html: `<div style="font-size: 20px; color: #333;"><i class="${getIconClass(donation.category)}"></i></div>`,
        className: 'custom-marker-icon',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });
      const marker = L.marker([donation.location.lat, donation.location.lng], { icon }).addTo(map);
      const infoWindowContent = `
        <div class="info-window">
          <h2>${donation.donorName}</h2>
          <p><strong>Item:</strong> ${donation.item} - ${donation.quantity}</p>
          <p><strong>Details:</strong> ${donation.details}</p>
          <p><strong>Contact:</strong> ${donation.contact}</p>
        </div>
      `;
      marker.bindPopup(infoWindowContent);
      marker.on('click', () => marker.openPopup());
      return marker;
    });
    setMarkers(newMarkers);
  }, [filteredDonations, map]);

  const filterMap = () => {
    const regionValue = document.getElementById('region').value;
    const categoryValue = document.getElementById('category').value;
    const searchValue = document.getElementById('search').value.toLowerCase();
    const filtered = donations.filter(donation => {
      const regionMatch = !regionValue || donation.region === regionValue;
      const categoryMatch = !categoryValue || donation.category === categoryValue;
      const searchMatch = !searchValue || donation.donorName.toLowerCase().includes(searchValue);
      return regionMatch && categoryMatch && searchMatch;
    });
    setFilteredDonations(filtered);
  };

  const getIconClass = (category) => {
    switch (category) {
      case 'Food': return 'fas fa-utensils';
      case 'Clothing': return 'fas fa-tshirt';
      case 'Books': return 'fas fa-book';
      case 'Toys': return 'fas fa-gift';
      case 'Footwear': return 'fas fa-shoe-prints';
      default: return 'fas fa-question-circle';
    }
  };

  return (
    <section id="MapsContent">
      <div className="filter-container">
        <div className="filter">
          <label htmlFor="region">Region:</label>
          <select id="region" onChange={filterMap}>
            <option value="">All</option>
            {regions.map(region => (
              <option key={region} value={region}>{region}</option>
            ))}
          </select>
        </div>
        <div className="filter">
          <label htmlFor="category">Category:</label>
          <select id="category" onChange={filterMap}>
            <option value="">All</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
        <div className="filter">
          <label htmlFor="search">Search by Donor:</label>
          <input type="text" id="search" onInput={filterMap} />
        </div>
      </div>
      <div id="map" style={{ height: '400px' }}></div>
    </section>
  );
}

export default MapsContent;
