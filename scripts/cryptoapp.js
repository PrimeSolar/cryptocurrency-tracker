/*
 * Cryptocurrency Tracker Script
 *
 * This script provides an extensive tracker for cryptocurrency prices
 * and news. It utilizes the CoinGecko API to fetch current market data and CoinTelegraph
 * to retrieve the latest news articles in the cryptocurrency space.
 *
 * Key Features:
 * - Displays a list of cryptocurrencies along with their current prices, market cap,
 *   and price changes.
 * - Allows users to mark cryptocurrencies as favorites and stores their preferences
 *   in local storage for persistence across sessions.
 * - Includes a search functionality to filter cryptocurrencies based on user input.
 * - Supports price alert functionality, notifying users when a selected cryptocurrency
 *   reaches a specified price.
 * - Has a dark mode theme toggle that persists user preferences using local storage.
 * - Fetches and displays the latest cryptocurrency news articles with links.
 * - Automatically refreshes cryptocurrency prices and news articles at specified intervals.
 * - Language selector that updates the user interface.
 *
 * Copyright © Vladislav Kazantsev
 * All rights reserved.
 * This code is the intellectual property of Vladislav Kazantsev.
 * You are welcome to clone the related repository and use the code for exploratory purposes.
 * However, unauthorized reproduction, modification, or redistribution of this code (including cloning of related repository or altering it for activities beyond exploratory use) is strictly prohibited.
 * Code snippets may be shared only when the original author is explicitly credited and a direct link to the original source of the code is provided alongside the code snippet.
 * Sharing the link to the file is permitted, except when directed toward retrieval purposes.
 * Any form of interaction with this file is strictly prohibited when facilitated by the code, except when such interaction is for discussion or exchange purposes with others.
 * This copyright notice applies globally.
 * For inquiries about collaboration, usage outside exploratory purposes, or permissions, please contact: hypervisor7@pm.me
 */

let cryptoDataContainer = document.getElementById("crypto-data");
const searchInput = document.getElementById("search");
const modal = document.getElementById("price-alert-modal");
const closeButton = document.querySelector(".close-button");
const setAlertButton = document.getElementById("set-alert-button");
let currentCoinId = null;
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
  errorMessage.textContent = "";
  cryptoDataContainer.innerHTML = "";

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
  cryptoDataContainer.innerHTML = "";

  // Get the current language from localStorage
  const currentLanguage = localStorage.getItem("selectedLanguage") || "en";

  // Determine the translation object based on current language
  const langTranslations = translations[currentLanguage] || translations["en"];

  const favoriteCoins = data.filter((coin) => favorites.includes(coin.id));
  const nonFavoriteCoins = data.filter((coin) => !favorites.includes(coin.id));

  const sortedData = [...favoriteCoins, ...nonFavoriteCoins];

  // Create cards for each currency
  sortedData.forEach((coin) => {
    const card = document.createElement("div");
    card.className = "crypto-card";
    card.dataset.id = coin.id; // Store currency identifiers for favorites
    card.innerHTML = `
            <h2>${coin.name} (${coin.symbol.toUpperCase()})</h2>
            <p>${langTranslations.labels.price}: ${coin.current_price.toFixed(
      2
    )} USD</p>
            <p>${
              langTranslations.labels.change
            }: ${coin.price_change_percentage_24h.toFixed(2)}%</p>
            <p>${
              langTranslations.labels.marketCap
            }: ${coin.market_cap.toLocaleString()} USD</p>
            <button class="favorite-button" data-tooltip="${
              favorites.includes(coin.id)
                ? langTranslations.buttons.favoriteTooltipRemove.replace(
                    "{coinName}",
                    coin.name
                  )
                : langTranslations.buttons.favoriteTooltipAdd.replace(
                    "{coinName}",
                    coin.name
                  )
            }">${
      favorites.includes(coin.id)
        ? langTranslations.buttons.removeFromFavorites
        : langTranslations.buttons.addToFavorites
    }</button>
            <button class="alert-button" data-tooltip="${langTranslations.buttons.alertTooltip.replace(
              "{coinName}",
              coin.name
            )}">${langTranslations.buttons.setPriceAlert}</button>
        `;
    cryptoDataContainer.appendChild(card);

    // Add event listener for the favorite button
    card.querySelector(".favorite-button").addEventListener("click", () => {
      toggleFavorite(coin.id);
    });

    // Add event listener for the alert button
    card.querySelector(".alert-button").addEventListener("click", () => {
      setPriceAlert(coin.id);
    });
  });

  updateFavoritesDisplay();
}

function toggleFavorite(coinId) {
  if (favorites.includes(coinId)) {
    favorites.splice(favorites.indexOf(coinId), 1);
  } else {
    favorites.push(coinId);
  }
  localStorage.setItem("favorites", JSON.stringify(favorites));
  fetchCryptoPrices();
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

// Debounced search functionality
const debouncedSearch = debounce(() => {
  const filter = searchInput.value.toLowerCase();
  const cards = cryptoDataContainer.getElementsByClassName("crypto-card");

  for (let card of cards) {
    const coinName = card.querySelector("h2").textContent.toLowerCase();
    card.style.display = coinName.includes(filter) ? "" : "none";
  }
}, 300); // 300ms debounce delay

// Apply the theme on page load
document.body.classList.toggle("dark-mode", darkMode);
toggleThemeButton.innerHTML = `<i class="fas fa-adjust"></i> ${
  darkMode ? "Dark Theme" : "Light Theme"
}`;

// Event listeners
searchInput.addEventListener("input", debouncedSearch);
toggleThemeButton.addEventListener("click", () => {
  darkMode = !darkMode;
  document.body.classList.toggle("dark-mode", darkMode);
  localStorage.setItem("darkMode", JSON.stringify(darkMode));

  // Get the current selected language
  const currentLanguage = document.getElementById("language-selector").value;

  // Update theme button text based on language and current mode
  toggleThemeButton.innerHTML = `<i class="fas fa-adjust"></i> ${
    darkMode
      ? translations[currentLanguage].controls.darkTheme
      : translations[currentLanguage].controls.lightTheme
  }`;
});

// Function to set a price alert
function setPriceAlert(coinId) {
  currentCoinId = coinId; // Store the current coin identifier
  modal.style.display = "block"; // Show the modal
}

// Event listener for the close button
closeButton.addEventListener("click", () => {
  modal.style.display = "none"; // Hide the modal
});

// Event listener for the set alert button
setAlertButton.addEventListener("click", () => {
  const alertPrice = parseFloat(document.getElementById("alert-price").value);

  // Retrieve current language from localStorage
  const currentLanguage = localStorage.getItem("selectedLanguage") || "en";

  // Select appropriate translations
  const langTranslations = translations[currentLanguage] || translations["en"];

  if (isNaN(alertPrice)) {
    alert(langTranslations.errorMessages.invalidPrice);
  } else {
    const priceAlerts = JSON.parse(localStorage.getItem("priceAlerts")) || {};
    priceAlerts[currentCoinId] = alertPrice;
    localStorage.setItem("priceAlerts", JSON.stringify(priceAlerts));
    const coinName = document
      .querySelector(`.crypto-card[data-id="${currentCoinId}"] h2`)
      .textContent.split(" ")[0];
    alert(
      langTranslations.alerts.priceAlertSet
        .replace("{price}", alertPrice)
        .replace("{coinName}", coinName)
    );

    modal.style.display = "none";
  }
});

// Function to capitalize the first letter of a string
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function checkPriceAlerts() {
  const alerts = JSON.parse(localStorage.getItem("priceAlerts")) || {};
  const cards = cryptoDataContainer.getElementsByClassName("crypto-card");

  for (let card of cards) {
    const coinId = card.dataset.id;
    const currentPrice = parseFloat(
      card.querySelector("p").textContent.match(/[\d.]+/)[0]
    );

    if (alerts[coinId]) {
      const alertPrice = alerts[coinId];

      if (currentPrice >= alertPrice) {
        alert(
          `Price alert! ${capitalizeFirstLetter(
            coinId
          )} has reached ${currentPrice} USD.`
        );
        delete alerts[coinId];
      }
    }
  }
  localStorage.setItem("priceAlerts", JSON.stringify(alerts));
}

const newsSectionContainer = document.createElement("div");
newsSectionContainer.id = "news-section";

const newsHeading = document.createElement("h2");
newsHeading.textContent = "Latest Cryptocurrency News";

const articlesContainer = document.createElement("div");
articlesContainer.id = "news-articles";

newsSectionContainer.appendChild(newsHeading);
newsSectionContainer.appendChild(articlesContainer);

document.body.appendChild(newsSectionContainer);

async function fetchCryptoNews() {
  try {
    const response = await fetch("https://cointelegraph.com/rss");
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const text = await response.text();
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(text, "text/xml");
    const items = xmlDoc.getElementsByTagName("item");

    const articles = Array.from(items)
      .slice(0, 30)
      .map((item) => ({
        title: item.getElementsByTagName("title")[0].textContent,
        description: item.getElementsByTagName("description")[0].textContent,
        url: item.getElementsByTagName("link")[0].textContent,
        publishedAt: item.getElementsByTagName("pubDate")[0].textContent,
      }));

    displayNewsArticles(articles);
  } catch (error) {
    console.error("Error fetching news:", error.message);
    newsSectionContainer.innerHTML =
      "<p>Error loading news. Please try again later.</p>";
  }
}

function displayNewsArticles(articles) {
  const articlesContainer = document.getElementById("news-articles");
  articlesContainer.innerHTML = "";

  articles.forEach((article) => {
    const articleElement = document.createElement("div");
    articleElement.className = "news-article";
    articleElement.innerHTML = `
      <h3><a href="${article.url}" target="_blank">${article.title}</a></h3>
      <p>${article.description}</p>
      <p><small>Published on: ${new Date(
        article.publishedAt
      ).toLocaleDateString()}</small></p>
    `;
    articlesContainer.appendChild(articleElement);
  });
}

// Add language persistence logic
let currentLanguage = localStorage.getItem("selectedLanguage") || "en";

// Modify the language selector event listener
document
  .getElementById("language-selector")
  .addEventListener("change", (event) => {
    const selectedLanguage = event.target.value;

    // Update the language selector dropdown to show the correct selected language
    document.getElementById("language-selector").value = selectedLanguage;

    // Save the selected language to localStorage
    localStorage.setItem("selectedLanguage", selectedLanguage);

    // Update text for the selected language
    updateText(selectedLanguage);
  });

// Initialize the application
document.addEventListener("DOMContentLoaded", () => {
  // Set the language selector to the saved language
  document.getElementById("language-selector").value = currentLanguage;

  // Update text with the saved language
  updateText(currentLanguage);

  fetchCryptoPrices()
    .then(() => {
      fetchCryptoNews();
    })
    .catch((error) => {
      console.error("Error fetching cryptocurrency prices:", error);
    });

  setInterval(() => {
    fetchCryptoPrices()
      .then(() => {
        fetchCryptoNews();
      })
      .catch((error) => {
        console.error("Error fetching cryptocurrency prices:", error);
      });
  }, 60000);

  setInterval(checkPriceAlerts, 60000);
});
