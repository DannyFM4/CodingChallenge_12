// Task 1: Business Dashboard – DOM Element Selection and Creation

const dashboard = document.getElementById("dashboard");

const selectDashboard = document.querySelector("dashboard");

const metricCard = document.createElement("div");

metricCard.setAttribute("class", "metric-card");
metricCard.setAttribute("id", "revenueCard");

metricCard.textContent = "Revenue: $0";

dashboard.appendChild(metricCard);