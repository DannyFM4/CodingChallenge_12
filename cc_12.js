// Task 1: Business Dashboard – DOM Element Selection and Creation

// select the dashboard container
const dashboard = document.getElementById("dashboard");
const selectDashboard = document.querySelector("dashboard");

// create new div
const metricCard = document.createElement("div");

// assigning class and id to different elements
metricCard.setAttribute("class", "metric-card");
metricCard.setAttribute("id", "revenueCard");

// ppulating card with a place holder
metricCard.textContent = "Revenue: $0";

// append metric card
dashboard.appendChild(metricCard);