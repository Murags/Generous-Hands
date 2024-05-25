const donationData = {
  "Africa": {
    "Kenya": [
      { name: "Nairobi", lat: -1.286389, lng: 36.817223 },
      { name: "Mombasa", lat: -4.043477, lng: 39.668206 },
      { name: "Kisumu", lat: -0.091701, lng: 34.767956 },
      { name: "Nyeri", lat: -0.425729, lng: 36.946018 },
      { name: "Nakuru", lat: -0.363589, lng: 36.109593 },
      { name: "Kiambu", lat: -1.3505, lng: 36.6988 },
      { name: "Voi", lat: -3.397248, lng: 37.573007 }
    ],
    "Uganda": [
      { name: "Kampala", lat: 0.347596, lng: 32.58252 }
    ],
    "Tanzania": [
      { name: "Dar es Salaam", lat: -6.792354, lng: 39.208328 }
    ]
  }
};

const donations = [
  {
    donorName: "John Mwangi",
    item: "Clothes",
    quantity: 5,
    location: { lat: -1.286389, lng: 36.817223 },
    region: "Nairobi",
    details: "5 bags of clothes",
    contact: "johnmwangi@example.com"
  },
  {
    donorName: "Jane Wanjiku",
    item: "Food",
    quantity: 10,
    location: { lat: -4.043477, lng: 39.668206 },
    region: "Mombasa",
    details: "10 boxes of non-perishable food",
    contact: "janewanjiku@example.com"
  },
  {
    donorName: "Samuel Otieno",
    item: "Books",
    quantity: 20,
    location: { lat: -0.091701, lng: 34.767956 },
    region: "Kisumu",
    details: "20 educational books",
    contact: "samuelotieno@example.com"
  },
  {
    donorName: "Grace Njeri",
    item: "Toys",
    quantity: 15,
    location: { lat: -1.209047, lng: 36.822914 },
    region: "Nairobi",
    details: "15 boxes of toys",
    contact: "gracenjeri@example.com"
  },
  {
    donorName: "Peter Karanja",
    item: "Food",
    quantity: 8,
    location: { lat: -0.425729, lng: 36.946018 },
    region: "Nyeri",
    details: "8 bags of rice",
    contact: "peterkaranja@example.com"
  },
  {
    donorName: "Lucy Muthoni",
    item: "Clothes",
    quantity: 12,
    location: { lat: -1.292066, lng: 36.821946 },
    region: "Nairobi",
    details: "12 bags of clothes",
    contact: "lucymuthoni@example.com"
  },
  {
    donorName: "David Kamau",
    item: "Shoes",
    quantity: 25,
    location: { lat: -3.397248, lng: 37.573007 },
    region: "Voi",
    details: "25 pairs of shoes",
    contact: "davidkamau@example.com"
  },
  {
    donorName: "Susan Auma",
    item: "Books",
    quantity: 30,
    location: { lat: -0.089484, lng: 34.768379 },
    region: "Kisumu",
    details: "30 educational books",
    contact: "susanauma@example.com"
  },
  {
    donorName: "Kevin Ndung'u",
    item: "Food",
    quantity: 15,
    location: { lat: -0.363589, lng: 36.109593 },
    region: "Nakuru",
    details: "15 boxes of canned food",
    contact: "kevinndungu@example.com"
  },
  {
    donorName: "Mary Njeri",
    item: "Toys",
    quantity: 20,
    location: { lat: -1.3505, lng: 36.6988 },
    region: "Kiambu",
    details: "20 boxes of toys",
    contact: "marynjeri@example.com"
  }
];

// Initialize the map
const map = L.map('map').setView([-1.292066, 36.821946], 7);

// Set up the OpenStreetMap layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add markers to the map
const markers = donations.map(donation => {
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

function updateCountries() {
  const continentSelect = document.getElementById('continent');
  const countrySelect = document.getElementById('country');
  const regionSelect = document.getElementById('region');

  countrySelect.innerHTML = '<option value="">Select a country</option>';
  regionSelect.innerHTML = '<option value="">Select a region</option>';

  if (continentSelect.value) {
    const countries = Object.keys(donationData[continentSelect.value]);
    countries.forEach(country => {
      const option = document.createElement('option');
      option.value = country;
      option.textContent = country;
      countrySelect.appendChild(option);
    });
  }
}

function updateRegions() {
  const continentSelect = document.getElementById('continent');
  const countrySelect = document.getElementById('country');
  const regionSelect = document.getElementById('region');

  regionSelect.innerHTML = '<option value="">Select a region</option>';

  if (continentSelect.value && countrySelect.value) {
    const regions = donationData[continentSelect.value][countrySelect.value];
    regions.forEach(region => {
      const option = document.createElement('option');
      option.value = region.name.toLowerCase();
      option.textContent = region.name;
      regionSelect.appendChild(option);
    });
  }
}

// Filter map based on region and donor name
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
  filteredDonations.forEach(donation => {
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
  });

  // Adjust map view
  if (filteredDonations.length > 0) {
    map.fitBounds(bounds);
  } else {
    map.setView([-1.292066, 36.821946], 7); // Default view
  }
}

function populateContinents() {
  const continentSelect = document.getElementById('continent');
  const continents = Object.keys(donationData);
  continents.forEach(continent => {
    const option = document.createElement('option');
    option.value = continent;
    option.textContent = continent;
    continentSelect.appendChild(option);
  });
}

// Show home (initial map view)
function showHome() {
  document.querySelector('.map').style.display = 'block';
  map.invalidateSize();
}

// Initial display
populateContinents();
showHome();
