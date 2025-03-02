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


// Task 3: Dynamic Inventory Management – Adding and Removing Items

const inventoryList = document.getElementById("inventoryList");

function addItemToInventory(product) {
    let newListItem = document.createElement("li");
    newListItem.setAttribute("class", "product-item");
    newListItem.setAttribute("id", "product");
    newListItem.setAttribute("onclick", `removeInventoryItem("${product}")`);
    newListItem.textContent = product;
    inventoryList.appendChild(newListItem);
};

addItemToInventory("Click Me");
addItemToInventory("Add a product below");

let productForm = document.getElementById('productForm');
let error = document.getElementById('Error');

productForm.addEventListener('submit', (event1) => {
    let productName = document.getElementById('productName').ariaValueMax;
    if(productName === '') {
        error.textContent = 'Product name is reuired';
        event1.preventDefault();
    } else {
        error.textContent = '';
        addItemToInventory(productName);
        event1.preventDefault();
    };
});

function removeInventoryItem(id) {
    let invItem = document.getElementById(id);
    inventoryList.removeChild(invItem);
};