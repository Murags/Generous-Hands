// Function to show different sections
function showSection(sectionId) {
  const sections = document.querySelectorAll(".section");
  sections.forEach((section) => {
    section.classList.remove("active");
  });
  document.getElementById(sectionId).classList.add("active");

  // Update active class in the menu
  const menuItems = document.querySelectorAll(".menu-item");
  menuItems.forEach((item) => {
    item.classList.remove("active");
  });
  document
    .querySelector(`[onclick="showSection('${sectionId}')"]`)
    .classList.add("active");
}

// Function to toggle thank you form visibility
function toggleThankYouForm(button) {
  const form = button.nextElementSibling;
  form.classList.toggle("hidden");
}

// Function to send thank you message
function sendThankYouMessage(button, donorName) {
  const textarea = button.previousElementSibling;
  const message = textarea.value;

  if (message.trim() === "") {
    alert("Please write a thank you message.");
    return;
  }

  alert(`Thank you message sent to ${donorName}: ${message}`);
  textarea.value = "";
  button.parentElement.classList.add("hidden");
}

// Sample data for analytics chart
const ctx = document.getElementById("donationsChart").getContext("2d");
const donationsChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Donations",
        data: [10, 20, 70, 40, 30, 60],
        backgroundColor: "rgba(248, 111, 45, 0.2)",
        borderColor: "#f86f2d",
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

// Sample data for items pie chart
const itemsCtx = document.getElementById("itemsChart").getContext("2d");
const itemsChart = new Chart(itemsCtx, {
  type: "pie",
  data: {
    labels: ["Clothes", "Food", "Books", "Toys", "Others"],
    datasets: [
      {
        label: "Donated Items",
        data: [40, 25, 20, 10, 5],
        backgroundColor: [
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  },
});

// Initialize first section as active
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".section").classList.add("active");
});
