/**
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

(function ($) {
  /** Build and return the navigation bar component with accessible links and descriptive labels. */
  const createNav = () => {
    /** Build the navigation bar component. */
    const $nav = $("<nav>", {
      /** Use a template string. */
      html: `
      <ul class="nav-menu">
        <li>
          <a href="#crypto-data" aria-label="View Cryptocurrency Data"
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
      `,
    });
    $("nav").replaceWith($nav);
  };
  /** The call of the function to build and return the navigation bar component with accessible links and descriptive labels. */
  createNav();

  /** Build and return the "Scroll to top" button component. */
  const createToTopElement = function () {
    const $toTop = $("<to-top>", {
      html: `
    <a href="#" aria-label="Scroll to top" title="Scroll to top">
      <svg width="45px" height="45px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 15L12 9L18 15" stroke="#0088ff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </a>
          `,
    });

    $("body").append($toTop);

    return $toTop;
  };
  /** The call of the function to build and return the "Scroll to top" button component. */
  const $toTop = createToTopElement();

  /** The scroll event listener. */
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 100) {
      $toTop.addClass("active");
    } else {
      $toTop.removeClass("active");
    }
  });

  /** The printing functionality. */
  $(window).keydown((event) => {
    if (event.ctrlKey && event.key === "p") {
      event.preventDefault();
      printPage();
    }
  });

  $("#print-button").click(() => {
    event.preventDefault();
    printPage();
  });

  function printPage() {
    /** Check if the body has the "dark-mode" class. */
    if ($("body").hasClass("dark-mode")) {
      /** Enable the light mode. */
      $("body").removeClass("dark-mode").addClass("light-mode");

      /** Launch printing. */
      window.print();

      /** Revert back to dark mode. */
      $("body").removeClass("light-mode").addClass("dark-mode");
    } else {
      /** Launch printing if the body has the "light-mode" class. */
      window.print();
    }
  }

  /** The footer component. */
  const footer = $("footer");
  const year = new Date().getFullYear();
  /** Build and return the footer component. */
  function createFooter() {
    if (footer) {
      footer.css({
        display: "flex",
        flexDirection: "column",
      });
      /** Define the footer content. */
      footer.append(`
        <p id="copyright">Copyright ©&nbsp;<a href="https://primesolar.github.io/web-developer/" class="link-primary" rel="noopener noreferrer">Vladislav Kazantsev</a>&nbsp;${year}</p>
        <a type="button" href="https://www.buymeacoffee.com/CocaCola" id="bmc-button" target="_blank" rel="noopener noreferrer" aria-label="Buy me a coffee" role="button">☕ Buy me a coffee</a>
        <a href="https://www.buymeacoffee.com/CocaCola" id="bmc-arrow" target="_blank" rel="noopener noreferrer" aria-label="Buy me a coffee" role="button">⬇</a>
        <a href="https://www.buymeacoffee.com/CocaCola" id="bmc-link" target="_blank" rel="noopener noreferrer" aria-label="Buy me a coffee" role="button">coff.ee/CocaCola</a>
      `);
      /** Apply style rules based on a size of a user device. */
      function applyFooterStyles() {
        if (window.matchMedia("(max-width: 768px)").matches) {
          footer.css({
            paddingBottom: "4rem",
          });
        } else {
          footer.css({
            paddingBottom: "",
          });
        }
      }
      applyFooterStyles();
      /** Reapply style rules on window resize. */
      $(window).on("resize", applyFooterStyles);
    }
  }
  /** The call of the function to build and return the footer component. */
  createFooter();

  /** The "Contact Us" links titles. */
  const contactUsLinks = document.querySelectorAll("a");
  for (let x of contactUsLinks) {
    if (x.getAttribute("href") === "contact.html") {
      x.title = "Navigate to Our Contact Page";
    }
  }

  console.log("components.js is completed");
})(window.jQuery);
