document.addEventListener('DOMContentLoaded', function() {
    // Sample donation data with Kenyan locations
    const donations = [
      {
        donorName: "John Mwangi",
        item: "Clothes",
        quantity: 5,
        location: { lat: -1.286389, lng: 36.817223 },
        details: "5 bags of clothes",
        contact: "johnmwangi@example.com"
      },
      {
        donorName: "Jane Wanjiku",
        item: "Food",
        quantity: 10,
        location: { lat: -1.292066, lng: 36.821946 },
        details: "10 boxes of non-perishable food",
        contact: "janewanjiku@example.com"
      },
      {
        donorName: "Samuel Otieno",
        item: "Books",
        quantity: 20,
        location: { lat: -0.091701, lng: 34.767956 },
        details: "20 educational books",
        contact: "samuelotieno@example.com"
      },
      {
        donorName: "Grace Njeri",
        item: "Toys",
        quantity: 15,
        location: { lat: -1.209047, lng: 36.822914 },
        details: "15 boxes of toys",
        contact: "gracenjeri@example.com"
      }
    ];

    // Initialize the map
    const map = L.map('map').setView([-1.292066, 36.821946], 7);

    // Set up the OpenStreetMap layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add markers to the map
    donations.forEach(donation => {
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

      marker.on('click', () => {
        marker.openPopup();
      });
    });

    // Ensure the map resizes correctly
    setTimeout(function() {
      map.invalidateSize();
    }, 100);
  });
