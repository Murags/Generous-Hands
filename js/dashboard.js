document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".sidebar li").classList.add("active-dash");

  const navItems = document.querySelectorAll(".sidebar li");

  async function removeActive() {
    const navItems = document.querySelectorAll(".sidebar li");
    navItems.forEach((item) => {
      item.classList.remove("active-dash");
    });
  }

  navItems.forEach((navLi) => {
    navLi.addEventListener("click", () => {
      removeActive();
      const targetId = navLi.innerText;
      const visibleSection = document.querySelector(`#${targetId}Content`);

      document.querySelectorAll("main section").forEach((section) => {
        section.style.display = "none";
      });

      navLi.classList.add("active-dash");
      visibleSection.style.display = "block";
    });
  });

  const table = document.getElementById("donationTable");
  const searchInput = document.getElementById("searchDonations");
  const filterPickupStatus = document.getElementById("filterPickupStatus");
  const filterDeliveryStatus = document.getElementById("filterDeliveryStatus");
  const applyFiltersButton = document.getElementById("applyFilters");


  function populateTable(data) {
    const tbody = table.querySelector("tbody");
    tbody.innerHTML = "";

    data.forEach((donation) => {
      const row = document.createElement("tr");
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
    const totalQuantity = data.reduce(
      (sum, donation) => sum + donation.quantity,
      0
    );
    const averageQuantity = (totalQuantity / totalDonations).toFixed(2);
    const numberOfDonors = new Set(data.map((donation) => donation.donorName))
      .size;

    document.getElementById("totalDonations").textContent = totalDonations;
    document.getElementById("averageQuantity").textContent = averageQuantity;
    document.getElementById("numberOfDonors").textContent = numberOfDonors;
  }

  function applyFilters() {
    const searchTerm = searchInput.value.toLowerCase();
    const pickupStatus = filterPickupStatus.value;
    const deliveryStatus = filterDeliveryStatus.value;

    const filteredData = donations.filter((donation) => {
      const matchesSearch =
        donation.donorName.toLowerCase().includes(searchTerm) ||
        donation.item.toLowerCase().includes(searchTerm) ||
        donation.details.toLowerCase().includes(searchTerm);
      const matchesPickupStatus =
        !pickupStatus || donation.pickupStatus === pickupStatus;
      const matchesDeliveryStatus =
        !deliveryStatus || donation.deliveryStatus === deliveryStatus;

      return matchesSearch && matchesPickupStatus && matchesDeliveryStatus;
    });

    populateTable(filteredData);
    updateSummary(filteredData);
    updateCharts(filteredData);
  }

  applyFiltersButton.addEventListener("click", applyFilters);

  // Initial population and summary update
  populateTable(donations);
  updateSummary(donations);
  updateCharts(donations);

  // Analytics section

  function updateCharts(data) {
    const monthlyData = {};
    const categoryData = {};

    const ctxLine = document
      .getElementById("donationsLineChart")
      .getContext("2d");
    const ctxBar = document
      .getElementById("categoriesBarChart")
      .getContext("2d");

    let lineChart = null;
    let barChart = null;
    data.forEach((donation) => {
      const month = new Date(donation.date).toLocaleString("default", {
        month: "short",
        year: "numeric",
      });
      if (!monthlyData[month]) {
        monthlyData[month] = 0;
      }
      monthlyData[month] += 1;

      if (!categoryData[donation.category]) {
        categoryData[donation.category] = 0;
      }
      categoryData[donation.category] += 1;
    });

    const lineChartData = {
      labels: Object.keys(monthlyData),
      datasets: [
        {
          label: "Donations per Month",
          data: Object.values(monthlyData),
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
          fill: false,
        },
      ],
    };

    const barChartData = {
      labels: Object.keys(categoryData),
      datasets: [
        {
          label: "Donations by Category",
          data: Object.values(categoryData),
          backgroundColor: "rgba(153, 102, 255, 0.2)",
          borderColor: "rgba(153, 102, 255, 1)",
          borderWidth: 1,
        },
      ],
    };

    if (lineChart) {
      lineChart.destroy();
    }

    if (barChart) {
      barChart.destroy();
    }

    lineChart = new Chart(ctxLine, {
      type: "line",
      data: lineChartData,
      options: {
        scales: {
          x: { title: { display: true, text: "Month" } },
          y: {
            title: { display: true, text: "Number of Donations" },
            beginAtZero: true,
          },
        },
      },
    });

    barChart = new Chart(ctxBar, {
      type: "bar",
      data: barChartData,
      options: {
        scales: {
          x: { title: { display: true, text: "Category" } },
          y: {
            title: { display: true, text: "Number of Donations" },
            beginAtZero: true,
          },
        },
      },
    });
  }

  // Choropleth Map (using Leaflet.js and appropriate plugin for Choropleth maps)
  const map = L.map("choroplethMap");

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(map);

  const regionData = {};

  // Calculate the total donations for each region
  donations.forEach((donation) => {
    if (!regionData[donation.region.toUpperCase()]) {
      regionData[donation.region.toUpperCase()] = 0;
    }
    regionData[donation.region.toUpperCase()] += donation.quantity;
  });

  fetch("kenya.geojson")
    .then((response) => response.json())
    .then((geojson) => {
      // Update GeoJSON properties with donation data
      geojson.features.forEach((feature) => {
        const regionName = feature.properties.COUNTY_NAM;
        feature.properties.donations = regionData[regionName] || 0;
      });

      function getColor(d) {
        return d > 20
          ? "#800026"
          : d > 15
          ? "#BD0026"
          : d > 10
          ? "#E31A1C"
          : d > 5
          ? "#FC4E2A"
          : d > 0
          ? "#FD8D3C"
          : "#FFEDA0";
      }

      function style(feature) {
        return {
          fillColor: getColor(feature.properties.donations),
          weight: 2,
          opacity: 1,
          color: "white",
          dashArray: "3",
          fillOpacity: 0.9,
        };
      }

      L.geoJson(geojson, { style: style }).addTo(map);

      // Fit the map view to the geojson layer (Kenya boundaries)
      map.fitBounds(L.geoJson(geojson).getBounds());
    });
});
