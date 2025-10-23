/*
 * The Library of Custom Reusable Web Components
 * This file is the library containing my collection of custom, reusable web components
 * that can be used across different parts of the project. These components go beyond what browsers provide,
 * allowing for expanded capabilities and functionality in the project.
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

// The Navigation Bar
const nav = document.querySelector("nav");

function createNav(nav) {
  if (nav) {
    // Define the navigation bar content:
    nav.innerHTML += `
      <ul class="nav-menu">
        <li>
          <a href="#main" aria-label="View Cryptocurrency Data"
            >Cryptocurrency Data</a
          >
        </li>
        <li><a href="#about" aria-label="About This Tracker">About</a></li>
        <li>
          <a href="#news-section" aria-label="View Cryptocurrency Data"
            >Cryptocurrency News</a
          >
        </li>
      </ul>
      `;
  }
}
createNav(nav);

// The Scroll to Top Button
class ToTop extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    <a href="#" aria-label="Scroll to top" title="Scroll to top">
      <svg width="45px" height="45px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 15L12 9L18 15" stroke="#0088ff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </a>
    `;
  }
}
customElements.define("to-top", ToTop);

const toTop = document
  .querySelector("body")
  .appendChild(document.createElement("to-top"));
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

// The Printing Functionality

document.addEventListener("keydown", (event) => {
  if (event.ctrlKey && event.key === "p") {
    event.preventDefault();
    printPage();
  }
});

function printPage() {
  const htmlElement = document.body;
  if (htmlElement.classList.contains("dark-mode")) {
    htmlElement.classList.remove("dark-mode");
    htmlElement.classList.add("light-mode");
    window.print();
    htmlElement.classList.remove("light-mode");
    htmlElement.classList.add("dark-mode");
  } else {
    window.print();
  }
}

// The Footer
const footer = document.querySelector("footer");
const year = new Date().getFullYear();
function createFooter(footer) {
  if (footer) {
    footer.style.display = "flex";
    footer.style.flexDirection = "column";
    // Define the footer content:
    footerContainer.innerHTML += `
        <ul class="nav-menu">
          <li>
            <a href="#main" aria-label="View Cryptocurrency Data"
              >Cryptocurrency Data</a
            >
          </li>
          <li><a href="#about" aria-label="About This Tracker">About</a></li>
          <li>
            <a href="#news-section" aria-label="View Cryptocurrency Data"
              >Cryptocurrency News</a
            >
          </li>
        </ul>
        <p id="copyright">Copyright © <a href="https://primesolar.github.io/web-developer/" class="link-primary" rel="noopener noreferrer">Vladislav Kazantsev</a> ${year}</p>
        <a type="button" href="https://www.buymeacoffee.com/CocaCola" id="bmc-button" target="_blank" rel="noopener noreferrer" aria-label="Buy me a coffee" role="button">☕ Buy me a coffee</a>
        <a href="https://www.buymeacoffee.com/CocaCola" id="bmc-arrow" target="_blank" rel="noopener noreferrer" aria-label="Buy me a coffee" role="button">⬇</a>
        <a href="https://www.buymeacoffee.com/CocaCola" id="bmc-link" target="_blank" rel="noopener noreferrer" aria-label="Buy me a coffee" role="button">coff.ee/CocaCola</a>
      `;
    function applyFooterStyles() {
      if (window.matchMedia("(max-width: 768px)").matches) {
        footer.style.paddingBottom = "4rem";
      } else {
        footer.style.paddingBottom = "";
      }
    }
    applyFooterStyles();
    window.addEventListener("resize", applyFooterStyles);
  }
}
createFooter(footer);

// The Contact Us Link Titles
const contactUsLinks = document.querySelectorAll("a");
for (let x of contactUsLinks) {
  if (x.getAttribute("href") === "contact.html") {
    x.title = "Navigate to Our Contact Page";
  }
}

console.log("components.js is completed");
