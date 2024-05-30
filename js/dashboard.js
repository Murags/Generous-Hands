document.addEventListener('DOMContentLoaded', ()=>{
    document.querySelector('.sidebar li').classList.add("active-dash");

    const navItems = document.querySelectorAll('.sidebar li');

    async function removeActive() {
        const navItems = document.querySelectorAll('.sidebar li');
        navItems.forEach((item) => {
            item.classList.remove('active-dash');
        })
    }

    navItems.forEach(navLi => {
        navLi.addEventListener('click', ()=>{
            removeActive();
            const targetId =  navLi.innerText;
            const visibleSection = document.querySelector(`#${targetId}Content`)

            document.querySelectorAll("main section").forEach(section =>{
                section.style.display = 'none';
            })

            navLi.classList.add("active-dash");
            visibleSection.style.display = 'block';
        })
    })

    const table = document.getElementById('donationTable');
    const searchInput = document.getElementById('searchDonations');
    const filterPickupStatus = document.getElementById('filterPickupStatus');
    const filterDeliveryStatus = document.getElementById('filterDeliveryStatus');
    const applyFiltersButton = document.getElementById('applyFilters');

    const donations = [
      { donorName: "John Mwangi", item: "Clothes", quantity: 5, region: "Nairobi", details: "5 bags of clothes", contact: "johnmwangi@example.com", pickupStatus: "Scheduled", deliveryStatus: "In Transit" },
      { donorName: "Jane Wanjiku", item: "Food", quantity: 10, region: "Mombasa", details: "10 boxes of non-perishable food", contact: "janewanjiku@example.com", pickupStatus: "Completed", deliveryStatus: "Delivered" },
      { donorName: "Samuel Otieno", item: "Books", quantity: 20, region: "Kisumu", details: "20 educational books", contact: "samuelotieno@example.com", pickupStatus: "Scheduled", deliveryStatus: "In Transit" },
      { donorName: "Grace Njeri", item: "Toys", quantity: 15, region: "Nairobi", details: "15 boxes of toys", contact: "gracenjeri@example.com", pickupStatus: "Not Needed", deliveryStatus: "Delivered" },
      { donorName: "Peter Karanja", item: "Food", quantity: 8, region: "Nyeri", details: "8 bags of rice", contact: "peterkaranja@example.com", pickupStatus: "Scheduled", deliveryStatus: "In Transit" },
      { donorName: "Lucy Muthoni", item: "Clothes", quantity: 12, region: "Nairobi", details: "12 bags of clothes", contact: "lucymuthoni@example.com", pickupStatus: "Completed", deliveryStatus: "Delivered" },
      { donorName: "David Kamau", item: "Shoes", quantity: 25, region: "Voi", details: "25 pairs of shoes", contact: "davidkamau@example.com", pickupStatus: "Scheduled", deliveryStatus: "In Transit" },
      { donorName: "Susan Auma", item: "Books", quantity: 30, region: "Kisumu", details: "30 educational books", contact: "susanauma@example.com", pickupStatus: "Completed", deliveryStatus: "Delivered" },
      { donorName: "Kevin Ndung'u", item: "Food", quantity: 15, region: "Nakuru", details: "15 boxes of canned food", contact: "kevinndungu@example.com", pickupStatus: "Scheduled", deliveryStatus: "In Transit" },
      { donorName: "Mary Njeri", item: "Toys", quantity: 20, region: "Kiambu", details: "20 boxes of toys", contact: "marynjeri@example.com", pickupStatus: "Not Needed", deliveryStatus: "Delivered" }
    ];

    function populateTable(data) {
      const tbody = table.querySelector('tbody');
      tbody.innerHTML = '';

      data.forEach(donation => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${donation.donorName}</td>
          <td>${donation.item}</td>
          <td>${donation.quantity}</td>
          <td>${donation.region}</td>
          <td>${donation.details}</td>
          <td>${donation.contact}</td>
          <td>${donation.pickupStatus}</td>
          <td>${donation.deliveryStatus}</td>
        `;
        tbody.appendChild(row);
      });
    }

    function updateSummary(data) {
      const totalDonations = data.length;
      const totalQuantity = data.reduce((sum, donation) => sum + donation.quantity, 0);
      const averageQuantity = (totalQuantity / totalDonations).toFixed(2);
      const numberOfDonors = new Set(data.map(donation => donation.donorName)).size;

      document.getElementById('totalDonations').textContent = totalDonations;
      document.getElementById('averageQuantity').textContent = averageQuantity;
      document.getElementById('numberOfDonors').textContent = numberOfDonors;
    }

    function applyFilters() {
      const searchTerm = searchInput.value.toLowerCase();
      const pickupStatus = filterPickupStatus.value;
      const deliveryStatus = filterDeliveryStatus.value;

      const filteredData = donations.filter(donation => {
        const matchesSearch =
          donation.donorName.toLowerCase().includes(searchTerm) ||
          donation.item.toLowerCase().includes(searchTerm) ||
          donation.details.toLowerCase().includes(searchTerm);
        const matchesPickupStatus = !pickupStatus || donation.pickupStatus === pickupStatus;
        const matchesDeliveryStatus = !deliveryStatus || donation.deliveryStatus === deliveryStatus;

        return matchesSearch && matchesPickupStatus && matchesDeliveryStatus;
      });

      populateTable(filteredData);
      updateSummary(filteredData);
    }

    applyFiltersButton.addEventListener('click', applyFilters);

    // Initial population and summary update
    populateTable(donations);
    updateSummary(donations);
})
