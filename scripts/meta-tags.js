/**
 * Configuration Script for Cryptocurrency Tracker
 *
 * This script sets up the essential HTML structure for the Cryptocurrency Tracker web application.
 * It dynamically inserts metadata, styles, and scripts to configure the document's head and body
 * elements for optimal SEO, accessibility, and user experience.
 *
 * Key Features:
 * - Sets the default language of the document to English (`lang = "en"`).
 * - Defines the default text direction as left-to-right (`dir = "ltr"`).
 * - Configures the document title for the web page.
 * - Inserts viewport settings to ensure responsive design.
 * - Includes metadata for author, copyright, description, and keywords to enhance SEO.
 * - Links to the stylesheet for styling the application.
 * - Adds a badge to enhance brand identity.
 * - Loads the Dexie.js library for client-side database management.
 * - Specifies the type attribute for all script elements for better compatibility.
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

const html = document.querySelector("html");
const head = document.querySelector("head");
const body = document.querySelector("body");

/** Set the <html> element `lang` property. */
html.lang = "en";

/** Set `dir="ltr"` for the <html> element. */
html.dir = "ltr";

/** Set <title>Cryptocurrency Tracker</title>. */
document.title = "Cryptocurrency Tracker";

/** Set <meta name="viewport" content="width=device-width, initial-scale=1" />. */
const metaViewport = document.createElement("meta");
metaViewport.name = "viewport";
metaViewport.content = "width=device-width, initial-scale=1";
head.appendChild(metaViewport);

/** Insert <meta name="author" content="Vladislav Kazantsev">. */
const metaAuthor = document.createElement("meta");
metaAuthor.name = "author";
metaAuthor.content = "Vladislav Kazantsev";
head.appendChild(metaAuthor);

/** Insert <meta name="copyright" content="© `Current Year` Vladislav Kazantsev">. */
const metaCopyright = document.createElement("meta");
metaCopyright.name = "copyright";
metaCopyright.content =
  "© " + new Date().getFullYear() + " Vladislav Kazantsev";
head.appendChild(metaCopyright);

/** Insert <meta name="description" content="Cryptocurrency tracker for tracking prices in real time.">. */
const metaDescription = document.createElement("meta");
metaDescription.name = "description";
metaDescription.content =
  "Cryptocurrency tracker for tracking prices in real time.";
head.appendChild(metaDescription);

/** Insert <meta name="keywords" content="cryptocurrency, prices, bitcoin price, ethereum price, market cap, crypto price alerts, cryptocurrency change percentage, top cryptocurrencies, crypto market, best cryptocurrency, crypto price comparison, altcoin prices">. */
const metaKeywords = document.createElement("meta");
metaKeywords.name = "keywords";
metaKeywords.content =
  "cryptocurrency, prices, bitcoin price, ethereum price, market cap, crypto price alerts, cryptocurrency change percentage, top cryptocurrencies, crypto market, best cryptocurrency, crypto price comparison, altcoin prices";
head.appendChild(metaKeywords);

/** Insert <link rel="stylesheet" type="text/css" href="styles/style-min.css">. */
const linkStyle = document.createElement("link");
linkStyle.rel = "stylesheet";
linkStyle.type = "text/css";
linkStyle.href = "styles/style-min.css";
head.appendChild(linkStyle);

/** Insert <link rel="icon" href="pics/logos/logo.svg">. */
const linkImage = document.createElement("link");
linkImage.rel = "icon";
linkImage.href = "assets/logo.svg";
head.appendChild(linkImage);

/** Connect <script src="https://npmcdn.com/dexie@4.0.11/dist/dexie.min.js"></script>. */
const dexieScript = document.createElement("script");
dexieScript.src = "https://npmcdn.com/dexie@4.0.11/dist/dexie.min.js";
body.appendChild(dexieScript);

/** Connect <script src="scripts/cryptoapp-min.js"></script>.
const cryptoAppScript = document.createElement("script");
cryptoAppScript.src = "scripts/cryptoapp-min.js";
body.appendChild(cryptoAppScript); */

/** Connect <script src="scripts/components-min.js"></script>.
const componentsScript = document.createElement("script");
componentsScript.src = "scripts/components-min.js";
body.appendChild(componentsScript); */

/** Set `type="text/javascript"` for all <script> elements for better compatibility. */
for (let x of document.querySelectorAll("script")) {
  x.type = "text/javascript";
}

/** Insert <meta http-equiv="Pragma" content="no-cache">.
var metaPragma = document.createElement("meta");
metaPragma.httpEquiv = "Pragma";
metaPragma.content = "no-cache";
document.querySelector("head").appendChild(metaPragma); */
