// Ensure data.js is included in your HTML
// <script src="data.js"></script>
// <script src="maps.js"></script>

// Initialize the map
const map = L.map('map').setView([-1.292066, 36.821946], 7);

// Set up the OpenStreetMap layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add markers to the map
let markers = [];

function addMarkers(donations) {
  markers = donations.map(donation => {
    const marker = L.marker([donation.location.lat, donation.location.lng]).addTo(map);
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
}

function filterMap() {
  const regionValue = document.getElementById('region').value.toLowerCase();
  const searchValue = document.getElementById('search').value.toLowerCase();

  const filteredDonations = donations.filter(donation => {
    const matchesRegion = regionValue === "" || donation.region.toLowerCase() === regionValue;
    const matchesName = searchValue === "" || donation.donorName.toLowerCase().includes(searchValue);
    return matchesRegion && matchesName;
  });

  const bounds = L.latLngBounds(filteredDonations.map(d => [d.location.lat, d.location.lng]));

  // Clear existing markers
  markers.forEach(marker => map.removeLayer(marker));

  // Add filtered markers to map
  addMarkers(filteredDonations);

  // Adjust map view
  if (filteredDonations.length > 0) {
    map.fitBounds(bounds);
  } else {
    map.setView([-1.292066, 36.821946], 7); // Default view
  }
}

// Initial display
addMarkers(donations);
filterMap();

// Event listeners for filtering (if necessary)
// document.getElementById('region').addEventListener('change', filterMap);
// document.getElementById('search').addEventListener('input', filterMap);
