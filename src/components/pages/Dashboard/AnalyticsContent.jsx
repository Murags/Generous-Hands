import React, { useEffect, useRef } from "react";
import L from "leaflet";
import { Chart, registerables } from "chart.js";
import "leaflet/dist/leaflet.css";
import "chart.js/auto";
import donations from "./data"; // Assuming this is where your donation data is imported from

Chart.register(...registerables);

function AnalyticsContent() {
  const lineChartRef = useRef(null);
  const barChartRef = useRef(null);
  const mapRef = useRef(null);
  const geoJsonLayerRef = useRef(null);

  useEffect(() => {
    console.log(donations); // Verify the data

    // Calculate monthly and category data
    const monthlyData = {};
    const categoryData = {};

    donations.forEach((donation) => {
      const month = new Date(donation.date).toLocaleString("default", {
        month: "short",
        year: "numeric",
      });
      if (!monthlyData[month]) {
        monthlyData[month] = 0;
      }
      monthlyData[month] += 1;

      if (!categoryData[donation.item]) {
        categoryData[donation.item] = 0;
      }
      categoryData[donation.item] += 1;
    });

    // Chart.js for line chart (Monthly Donations)
    if (lineChartRef.current) lineChartRef.current.destroy();
    const ctxLine = document
      .getElementById("donationsLineChart")
      .getContext("2d");
    lineChartRef.current = new Chart(ctxLine, {
      type: "line",
      data: {
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
      },
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

    // Chart.js for bar chart (Donations by Category)
    if (barChartRef.current) barChartRef.current.destroy();
    const ctxBar = document
      .getElementById("categoriesBarChart")
      .getContext("2d");
    barChartRef.current = new Chart(ctxBar, {
      type: "bar",
      data: {
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
      },
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

    // Leaflet.js for choropleth map (Donations by Region)
    if (!mapRef.current) {
      mapRef.current = L.map("choroplethMap").setView([0.0236, 37.9062], 6);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapRef.current);

      fetch("http://localhost:3000/kenya.geojson")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((geojson) => {
          geojson.features.forEach((feature) => {
            const regionName = feature.properties.COUNTY_NAM;
            feature.properties.donations = donations.reduce((acc, curr) => {
              if (curr.region.toUpperCase() === regionName) {
                return acc + curr.quantity;
              }
              return acc;
            }, 0);
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

          if (geoJsonLayerRef.current) {
            mapRef.current.removeLayer(geoJsonLayerRef.current);
          }

          geoJsonLayerRef.current = L.geoJson(geojson, { style: style }).addTo(
            mapRef.current
          );
          mapRef.current.fitBounds(geoJsonLayerRef.current.getBounds());
        })
        .catch((error) => {
          console.error("Error fetching GeoJSON:", error);
        });
    }

    return () => {
      if (lineChartRef.current) lineChartRef.current.destroy();
      if (barChartRef.current) barChartRef.current.destroy();
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <section id="AnalyticsContent">
      <div className="region-summaries">
        <div className="summary-section">
          <div className="totalDonations">
            Total Donations:
            <div className="metrics">
              <span id="totalDonations">{donations.length}</span>
              <i className="fas fa-donate"></i>
            </div>
          </div>
          <div className="averageQuantity">
            Average Quantity:
            <div className="metrics">
              <span id="averageQuantity">
                {donations.reduce((acc, curr) => acc + curr.quantity, 0) /
                  donations.length || 0}
              </span>
              <i className="fas fa-balance-scale"></i>
            </div>
          </div>
          <div className="numberOfDonors">
            Number of Donors:
            <div className="metrics">
              <span id="numberOfDonors">
                {new Set(donations.map((donation) => donation.donorName)).size}
              </span>
              <i className="fas fa-users"></i>
            </div>
          </div>
        </div>
        <div className="map-container">
          <h3>Donations by Region</h3>
          <div id="choroplethMap" style={{ height: "500px" }}></div>
        </div>
      </div>
      <div className="analytics-container">
        <div className="chart-container">
          <h3>Monthly Donations</h3>
          <canvas id="donationsLineChart"></canvas>
        </div>
        <div className="chart-container">
          <h3>Donation Categories</h3>
          <canvas id="categoriesBarChart"></canvas>
        </div>
      </div>
    </section>
  );
}

export default AnalyticsContent;
