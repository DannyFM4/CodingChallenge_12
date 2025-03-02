// Task 1: Business Dashboard – DOM Element Selection and Creation

// select the dashboard container
const dashboard = document.getElementById("dashboard");
const selectDashboard = document.querySelector("#dashboard");

// create new div
const metricCard = document.createElement("div");

// assigning class and id to different elements
metricCard.setAttribute("class", "metric-card");
metricCard.setAttribute("id", "revenueCard");

// ppulating card with a place holder
metricCard.textContent = "Revenue: $0";

// append metric card
dashboard.appendChild(metricCard);


// Task 2: Updating Dashboard Metrics – Working with NodeLists and Arrays

const metricCards = document.querySelectorAll(".metric-card"); // selects all elements with metric-card class
const metricCardArray = Array.from(metricCards); //converts list into array


metricCardArray.forEach(card => { // uses forEach method to update the information
    card.textContent += " - Updated";

    card.style.backgroundColor = "#f0f8ff";
});