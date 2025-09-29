const html = document.querySelector("html");
const head = document.querySelector("head");
const body = document.querySelector("body");

// Set the <html> element `lang` property
html.lang = "en";

// Set `dir="ltr"` for the <html> element
html.dir = "ltr";

// Set <title>Cryptocurrency Tracker</title>
document.title = "Cryptocurrency Tracker";

// Set <meta name="viewport" content="width=device-width, initial-scale=1" />
const metaViewport = document.createElement("meta");
metaViewport.name = "viewport";
metaViewport.content = "width=device-width, initial-scale=1";
head.appendChild(metaViewport);

// Insert <meta name="author" content="Vladislav Kazantsev">
const metaAuthor = document.createElement("meta");
metaAuthor.name = "author";
metaAuthor.content = "Vladislav Kazantsev";
head.appendChild(metaAuthor);

// Insert <meta name="copyright" content="© `Current Year` Vladislav Kazantsev">
const metaCopyright = document.createElement("meta");
metaCopyright.name = "copyright";
metaCopyright.content =
  "© " + new Date().getFullYear() + " Vladislav Kazantsev";
head.appendChild(metaCopyright);

// Insert <meta name="description" content="Cryptocurrency tracker for tracking prices in real time.">
const metaDescription = document.createElement("meta");
metaDescription.name = "description";
metaDescription.content =
  "Cryptocurrency tracker for tracking prices in real time.";
head.appendChild(metaDescription);

// Insert <meta name="keywords" content="cryptocurrency, prices, bitcoin price, ethereum price, market cap, crypto price alerts, cryptocurrency change percentage, top cryptocurrencies, crypto market, best cryptocurrency, crypto price comparison, altcoin prices">
const metaKeywords = document.createElement("meta");
metaKeywords.name = "keywords";
metaKeywords.content =
  "cryptocurrency, prices, bitcoin price, ethereum price, market cap, crypto price alerts, cryptocurrency change percentage, top cryptocurrencies, crypto market, best cryptocurrency, crypto price comparison, altcoin prices";
head.appendChild(metaKeywords);

// Insert <link rel="stylesheet" type="text/css" href="styles/style-min.css">
const linkStyle = document.createElement("link");
linkStyle.rel = "stylesheet";
linkStyle.type = "text/css";
linkStyle.href = "styles/style-min.css";
head.appendChild(linkStyle);

// Insert <link rel="icon" href="pics/logos/logo.svg">
const linkImage = document.createElement("link");
linkImage.rel = "icon";
linkImage.href = "assets/logo.svg";
head.appendChild(linkImage);

// Connect <script src="https://npmcdn.com/dexie@4.0.11/dist/dexie.min.js"></script>
const dexieScript = document.createElement("script");
dexieScript.src = "https://npmcdn.com/dexie@4.0.11/dist/dexie.min.js";
body.appendChild(dexieScript);

// // Connect <script src="scripts/cryptoapp-min.js"></script>
// const cryptoAppScript = document.createElement("script");
// cryptoAppScript.src = "scripts/cryptoapp-min.js";
// body.appendChild(cryptoAppScript);

// // Connect <script src="scripts/components-min.js"></script>
// const componentsScript = document.createElement("script");
// componentsScript.src = "scripts/components-min.js";
// body.appendChild(componentsScript);

// Set `type="text/javascript"` for all <script> elements for better compatibility
for (let x of document.querySelectorAll("script")) {
  x.type = "text/javascript";
}

// Insert <meta http-equiv="Pragma" content="no-cache">
// var metaPragma = document.createElement("meta");
// metaPragma.httpEquiv = "Pragma";
// metaPragma.content = "no-cache";
// document.querySelector("head").appendChild(metaPragma);
