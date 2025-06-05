const cryptoDataContainer = document.getElementById("crypto-data");
const searchInput = document.getElementById("search");
const toggleThemeButton = document.getElementById("toggle-theme");
const loadingSpinner = document.getElementById("loading-spinner");
const errorMessage = document.createElement("div");
errorMessage.className = "error-message";
cryptoDataContainer.appendChild(errorMessage);

let darkMode = JSON.parse(localStorage.getItem("darkMode")) || false;
const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

// Debounce function to limit the rate of function calls
function debounce(func, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}

// Function to fetch cryptocurrency prices
async function fetchCryptoPrices() {
  loadingSpinner.style.display = "block";
  errorMessage.textContent = ""; // Clear previous error messages
  cryptoDataContainer.innerHTML = ""; // Clear previous data

  try {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false"
    );
    if (!response.ok) throw new Error("Failed to fetch data from the server.");

    const data = await response.json();
    populateCryptoData(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    errorMessage.textContent = "Error loading data. Please try again later.";
  } finally {
    loadingSpinner.style.display = "none";
  }
}

// Function to populate cryptocurrency data
function populateCryptoData(data) {
  // Clear previous data to avoid duplication
  cryptoDataContainer.innerHTML = ""; // Clear previous data

  data.forEach((coin) => {
    const card = document.createElement("div");
    card.className = "crypto-card";
    card.dataset.id = coin.id; // Store the coin ID for favorites
    card.innerHTML = `
            <h2>${coin.name} (${coin.symbol.toUpperCase()})</h2>
            <p>Price: ${coin.current_price.toFixed(2)} USD</p>
            <p>Change: ${coin.price_change_percentage_24h.toFixed(2)}%</p>
            <p>Market Cap: ${coin.market_cap.toLocaleString()} USD</p>
            <button class="favorite-button" data-tooltip="${
              favorites.includes(coin.id) ? "Remove" : "Add"
            } ${coin.name} ${
      favorites.includes(coin.id) ? "from" : "to"
    } your favorites">${
      favorites.includes(coin.id) ? "Remove from Favorites" : "Add to Favorites"
    }</button>
            <button class="alert-button" data-tooltip="Set a price alert for ${
              coin.name
            }">Set Price Alert</button>
        `;
    cryptoDataContainer.appendChild(card);

    // Add event listener for the favorite button
    card.querySelector(".favorite-button").addEventListener("click", () => {
      toggleFavorite(coin.id);
      const favoriteButton = card.querySelector(".favorite-button");
      favorites.includes(coin.id)
        ? (favoriteButton.textContent = "Remove from Favorites")
        : (favoriteButton.textContent = "Add to Favorites");
      favoriteButton.setAttribute(
        "data-tooltip",
        favorites.includes(coin.id)
          ? `Remove ${coin.name} from your favorites`
          : `Add ${coin.name} to your favorites`
      );
    });

    // Add event listener for the alert button
    card.querySelector(".alert-button").addEventListener("click", () => {
      setPriceAlert(coin.id);
    });
  });

  updateFavoritesDisplay();
}

// Function to toggle favorite status
function toggleFavorite(coinId) {
  if (favorites.includes(coinId)) {
    favorites.splice(favorites.indexOf(coinId), 1); // Remove from favorites
  } else {
    favorites.push(coinId); // Add to favorites
  }
  localStorage.setItem("favorites", JSON.stringify(favorites));
  updateFavoritesDisplay();
}

// Function to update favorites display
function updateFavoritesDisplay() {
  const cards = cryptoDataContainer.getElementsByClassName("crypto-card");
  for (let card of cards) {
    const coinId = card.dataset.id;
    if (favorites.includes(coinId)) {
      card.classList.add("favorite");
      card.querySelector(".favorite-button").classList.add("favorite");
    } else {
      card.classList.remove("favorite");
      card.querySelector(".favorite-button").classList.remove("favorite");
    }
  }
}

// Function to set a price alert
function setPriceAlert(coinId) {
  const targetPrice = prompt("Enter target price for alert (USD):");
  if (targetPrice) {
    const alerts = JSON.parse(localStorage.getItem("alerts")) || {};
    alerts[coinId] = parseFloat(targetPrice);
    localStorage.setItem("alerts", JSON.stringify(alerts));
    alert(`Alert set for ${coinId} at price ${targetPrice} USD.`);
  }
}

// Function to check price alerts
function checkPriceAlerts(data) {
  const alerts = JSON.parse(localStorage.getItem("alerts")) || {};
  for (const coin of data) {
    const targetPrice = alerts[coin.id];
    if (targetPrice && coin.current_price >= targetPrice) {
      // Notify the user
      new Notification(
        `Alert: ${coin.name} reached ${coin.current_price} USD!`,
        {
          body: `Target price: ${targetPrice} USD`,
        }
      );
      // Remove the alert after notifying
      delete alerts[coin.id];
    }
  }
  localStorage.setItem("alerts", JSON.stringify(alerts));
}

// Debounced search functionality
const debouncedSearch = debounce(() => {
  const filter = searchInput.value.toLowerCase();
  const cards = cryptoDataContainer.getElementsByClassName("crypto-card");

  for (let card of cards) {
    const coinName = card.querySelector("h2").textContent.toLowerCase();
    card.style.display = coinName.includes(filter) ? "" : "none";
  }
}, 300); // 300ms debounce delay

// Event listeners
searchInput.addEventListener("input", debouncedSearch);
toggleThemeButton.addEventListener("click", () => {
  darkMode = !darkMode;
  document.body.classList.toggle("dark-mode", darkMode);
  localStorage.setItem("darkMode", JSON.stringify(darkMode)); // Save theme preference
  toggleThemeButton.innerHTML = `<i class="fas fa-adjust"></i> ${
    darkMode ? "Light Theme" : "Dark Theme"
  }`;
});

// Request permission for notifications
if (Notification.permission !== "granted") {
  Notification.requestPermission();
}

// Fetch prices on load and set interval for updates
fetchCryptoPrices();
setInterval(fetchCryptoPrices, 60000); // Refresh every minute

// Check for price alerts periodically
setInterval(() => {
  fetchCryptoPrices().then(checkPriceAlerts);
}, 60000); // Check alerts every minute

// WebSocket integration for real-time updates (if applicable)
const socket = new WebSocket("wss://your-websocket-url");

socket.onopen = () => {
  console.log("WebSocket connection established.");
};

socket.onerror = (error) => {
  console.error("WebSocket error:", error);
};

socket.onclose = () => {
  console.log("WebSocket connection closed.");
};

socket.onmessage = (event) => {
  const data = JSON.parse(event.data);
  updateCryptoPrices(data);
};

// Function to update cryptocurrency prices from WebSocket data
function updateCryptoPrices(data) {
  data.forEach((coin) => {
    const card = document.querySelector(`.crypto-card[data-id="${coin.id}"]`);
    if (card) {
      card.querySelector(
        "p"
      ).textContent = `Price: ${coin.current_price.toFixed(2)} USD`;
      card.querySelector(
        "p:nth-child(3)"
      ).textContent = `Change: ${coin.price_change_percentage_24h.toFixed(2)}%`;
    }
  });
}

// Initialize the application
document.addEventListener("DOMContentLoaded", () => {
  // Fetch initial data
  fetchCryptoPrices();
});
