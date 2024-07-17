import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const OrgAnalytics = () => {
  const donationsChartRef = useRef(null);
  const itemsChartRef = useRef(null);

  useEffect(() => {
    const ctx = donationsChartRef.current.getContext('2d');
    const itemsCtx = itemsChartRef.current.getContext('2d');

    // Initialize donations chart
    const donationsChartInstance = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
          {
            label: 'Donations',
            data: [10, 20, 70, 40, 30, 60],
            backgroundColor: 'rgba(248, 111, 45, 0.2)',
            borderColor: '#f86f2d',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    // Initialize items chart
    const itemsChartInstance = new Chart(itemsCtx, {
      type: 'pie',
      data: {
        labels: ['Clothes', 'Food', 'Books', 'Toys', 'Others'],
        datasets: [
          {
            label: 'Donated Items',
            data: [40, 25, 20, 10, 5],
            backgroundColor: [
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(153, 102, 255, 0.2)',
            ],
            borderColor: [
              'rgba(54, 162, 235, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
        },
      },
    });

    // Cleanup on component unmount
    return () => {
      donationsChartInstance.destroy();
      itemsChartInstance.destroy();
    };
  }, []);

  return (
    <section id="orgAnalytics" className="section active">
      <h2>Dashboard Overview</h2>
      <div className="statsCards">
        <div id="donationsTotal" className="statCard">
          <h3>Total Donations</h3>
          <p>150</p>
        </div>
        <div id="thankyous" className="statCard">
          <h3>Thank You Notes Sent</h3>
          <p>120</p>
        </div>
        <div id="most-items" className="statCard">
          <h3>Most Donated Item</h3>
          <p>Clothes</p>
        </div>
        <div id="monthly" className="statCard">
          <h3>Donations This Month</h3>
          <p>20</p>
        </div>
      </div>
      <div className="charts">
        <div className="graphChart-container">
          <canvas id="donationsChart" ref={donationsChartRef}></canvas>
        </div>
        <div className="pieChart-container">
          <canvas id="itemsChart" ref={itemsChartRef}></canvas>
        </div>
      </div>
    </section>
  );
};

export default OrgAnalytics;
