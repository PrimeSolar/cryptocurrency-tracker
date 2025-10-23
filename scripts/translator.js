/*
 * Multilingual Translator for Cryptocurrency Tracker Application
 *
 * This script contains localized text strings for multiple languages, supporting:
 * - English (en)
 * - Spanish (es)
 * - French (fr)
 * - Portuguese (pt)
 * - Serbian (rs)
 * - Arabic (ae)
 *
 * Covers key application areas:
 * - Navigation Menu
 * - Header Texts
 * - Button Texts
 * - Button Labels
 * - Error Messages
 * - About Page Content
 * - Modal Dialogs
 * - Price Alerts
 *
 * Provides a comprehensive internationalization solution
 * for the Cryptocurrency Tracker,
 * enabling localized user experience.
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

// Translation data
const translations = {
  en: {
    navMenu: {
      cryptocurrencyData: "Cryptocurrency Data",
      about: "About",
      cryptocurrencyNews: "Cryptocurrency News",
    },
    header: {
      title: "Cryptocurrency Tracker",
    },
    controls: {
      searchPlaceholder: "Search for cryptocurrency...",
      toggleTheme: "Switch Theme", // English
      toggleThemeTooltip: "Switch between light and dark themes", // English
      lightTheme: "Light Theme", // English
      darkTheme: "Dark Theme", // English
    },
    labels: {
      price: "Price",
      change: "Change",
      marketCap: "Market Cap",
    },
    modal: {
      setAlert: "Set Price Alert",
      alertPrice: "Alert Price (USD):",
    },
    alerts: {
      priceAlertSet:
        "The {price} USD price alert has been successfully set for {coinName}.",
    },
    errorMessages: {
      fetchError: "Error loading data. Please try again later.",
      invalidPrice: "Please enter a valid price.",
    },
    buttons: {
      addToFavorites: "Add to Favorites",
      removeFromFavorites: "Remove from Favorites",
      setPriceAlert: "Set Price Alert",
      favoriteTooltipAdd: "Add {coinName} to your favorites",
      favoriteTooltipRemove: "Remove {coinName} from your favorites",
      alertTooltip: "Set a price alert for {coinName}",
    },
    about: {
      title: "About Cryptocurrency Tracker",
      paragraph1:
        "The Cryptocurrency Tracker is a user-friendly application designed to help you monitor the latest prices and trends in the cryptocurrency market. Whether you're a seasoned investor or just starting, our platform provides real-time data and insights to make informed decisions.",
      paragraph2:
        "With features like price alerts, market cap tracking, and a customizable interface, you can tailor your experience to fit your needs. Our goal is to empower users with the information they need to navigate the ever-evolving world of cryptocurrencies.",
      paragraph3:
        "Data provided by CoinGecko, ensuring you receive accurate and up-to-date information. Join us on this journey to explore the future of finance!",
    },
    footer: {
      dataProvided: "Data provided by CoinGecko",
    },
    news: {
      latestNews: "Latest Cryptocurrency News",
    },
    scrollToTop: "Scroll to top",
  },
  es: {
    header: {
      title: "Rastreador de Criptomonedas",
    },
    controls: {
      searchPlaceholder: "Buscar criptomoneda...",
      toggleTheme: "Cambiar Tema",
      toggleThemeTooltip: "Alternar entre temas claro y oscuro",
      lightTheme: "Tema Claro",
      darkTheme: "Tema Oscuro",
    },
    labels: {
      price: "Precio",
      change: "Cambio",
      marketCap: "Capitalización de Mercado",
    },
    modal: {
      setAlert: "Establecer Alerta de Precio",
      alertPrice: "Precio de Alerta (USD):",
    },
    alerts: {
      priceAlertSet:
        "La alerta de precio de {price} USD se ha establecido correctamente para {coinName}.",
    },
    errorMessages: {
      fetchError:
        "Error al cargar los datos. Por favor, inténtelo de nuevo más tarde.",
      invalidPrice: "Por favor, introduzca un precio válido.",
    },
    buttons: {
      addToFavorites: "Añadir a Favoritos",
      removeFromFavorites: "Eliminar de Favoritos",
      setPriceAlert: "Establecer Alerta",
      favoriteTooltipAdd: "Añadir {coinName} a favoritos",
      favoriteTooltipRemove: "Eliminar {coinName} de favoritos",
      alertTooltip: "Establecer una alerta de precio para {coinName}",
    },
    about: {
      title: "Acerca del Rastreador de Criptomonedas",
      paragraph1:
        "El Rastreador de Criptomonedas es una aplicación fácil de usar diseñada para ayudarte a monitorear los últimos precios y tendencias del mercado de criptomonedas. Ya seas un inversor experimentado o un principiante, nuestra plataforma proporciona datos en tiempo real e información para tomar decisiones informadas.",
      paragraph2:
        "Con funciones como alertas de precio, seguimiento de capitalización de mercado y una interfaz personalizable, puedes adaptar tu experiencia a tus necesidades. Nuestro objetivo es empoderar a los usuarios con la información que necesitan para navegar en el mundo en constante evolución de las criptomonedas.",
      paragraph3:
        "Datos proporcionados por CoinGecko, garantizando que recibas información precisa y actualizada. ¡Únete a nosotros en este viaje para explorar el futuro de las finanzas!",
    },
    footer: {
      dataProvided: "Datos proporcionados por CoinGecko",
    },
    news: {
      latestNews: "Últimas Noticias de Criptomonedas",
    },
    scrollToTop: "Volver arriba",
    navMenu: {
      cryptocurrencyData: "Datos de Criptomonedas",
      about: "Acerca de",
      cryptocurrencyNews: "Noticias de Criptomonedas",
    },
  },
  fr: {
    navMenu: {
      cryptocurrencyData: "Données de Cryptomonnaie",
      about: "À Propos",
      cryptocurrencyNews: "Actualités des Cryptomonnaies",
    },
    header: {
      title: "Suivi des Cryptomonnaies",
    },
    controls: {
      searchPlaceholder: "Rechercher une cryptomonnaie...",
      toggleTheme: "Changer de thème",
      toggleThemeTooltip: "Basculer entre les thèmes clair et sombre",
      lightTheme: "Thème Clair",
      darkTheme: "Thème Sombre",
    },
    labels: {
      price: "Prix",
      change: "Variation",
      marketCap: "Capitalisation Boursière",
    },
    modal: {
      setAlert: "Définir une Alerte de Prix",
      alertPrice: "Prix d'Alerte (USD) :",
    },
    alerts: {
      priceAlertSet:
        "L'alerte de prix de {price} USD a été définie avec succès pour {coinName}.",
    },
    errorMessages: {
      fetchError:
        "Erreur de chargement des données. Veuillez réessayer ultérieurement.",
      invalidPrice: "Veuillez saisir un prix valide.",
    },
    buttons: {
      addToFavorites: "Ajouter aux Favoris",
      removeFromFavorites: "Retirer des Favoris",
      setPriceAlert: "Définir une Alerte",
      favoriteTooltipAdd: "Ajouter {coinName} à vos favoris",
      favoriteTooltipRemove: "Retirer {coinName} de vos favoris",
      alertTooltip: "Définir une alerte de prix pour {coinName}",
    },
    about: {
      title: "À Propos du Suivi des Cryptomonnaies",
      paragraph1:
        "Le Suivi des Cryptomonnaies est une application conviviale conçue pour vous aider à surveiller les derniers prix et tendances du marché des cryptomonnaies. Que vous soyez un investisseur chevronné ou débutant, notre plateforme fournit des données en temps réel et des perspectives pour prendre des décisions éclairées.",
      paragraph2:
        "Avec des fonctionnalités telles que les alertes de prix, le suivi de la capitalisation boursière et une interface personnalisable, vous pouvez adapter votre expérience à vos besoins. Notre objectif est de donner aux utilisateurs les informations nécessaires pour naviguer dans le monde en constante évolution des cryptomonnaies.",
      paragraph3:
        "Données fournies par CoinGecko, garantissant que vous recevez des informations précises et à jour. Rejoignez-nous dans ce voyage pour explorer l'avenir de la finance !",
    },
    footer: {
      dataProvided: "Données fournies par CoinGecko",
    },
    news: {
      latestNews: "Dernières Actualités des Cryptomonnaies",
    },
    scrollToTop: "Retour en haut",
  },
  pt: {
    header: {
      title: "Rastreador de Criptomoedas",
    },
    controls: {
      searchPlaceholder: "Buscar criptomoeda...",
      toggleTheme: "Alternar Tema",
      toggleThemeTooltip: "Alternar entre temas claro e escuro",
      lightTheme: "Tema Claro",
      darkTheme: "Tema Escuro",
    },
    labels: {
      price: "Preço",
      change: "Variação",
      marketCap: "Capitalização de Mercado",
    },
    modal: {
      setAlert: "Definir Alerta de Preço",
      alertPrice: "Preço do Alerta (USD):",
    },
    alerts: {
      priceAlertSet:
        "O alerta de preço de {price} USD foi definido com sucesso para {coinName}.",
    },
    errorMessages: {
      fetchError:
        "Erro ao carregar dados. Por favor, tente novamente mais tarde.",
      invalidPrice: "Por favor, insira um preço válido.",
    },
    buttons: {
      addToFavorites: "Adicionar aos Favoritos",
      removeFromFavorites: "Remover dos Favoritos",
      setPriceAlert: "Definir Alerta",
      favoriteTooltipAdd: "Adicionar {coinName} aos favoritos",
      favoriteTooltipRemove: "Remover {coinName} dos favoritos",
      alertTooltip: "Definir um alerta de preço para {coinName}",
    },
    about: {
      title: "Sobre o Rastreador de Criptomoedas",
      paragraph1:
        "O Rastreador de Criptomoedas é um aplicativo fácil de usar, projetado para ajudar você a monitorar os últimos preços e tendências do mercado de criptomoedas. Seja você um investidor experiente ou um iniciante, nossa plataforma fornece dados em tempo real e insights para tomar decisões informadas.",
      paragraph2:
        "Com recursos como alertas de preço, acompanhamento de capitalização de mercado e uma interface personalizável, você pode adaptar sua experiência às suas necessidades. Nosso objetivo é capacitar os usuários com as informações necessárias para navegar no mundo em constante evolução das criptomoedas.",
      paragraph3:
        "Dados fornecidos pelo CoinGecko, garantindo que você receba informações precisas e atualizadas. Junte-se a nós nesta jornada para explorar o futuro das finanças!",
    },
    footer: {
      dataProvided: "Dados fornecidos pelo CoinGecko",
    },
    news: {
      latestNews: "Últimas Notícias de Criptomoedas",
    },
    scrollToTop: "Voltar ao topo",
    navMenu: {
      cryptocurrencyData: "Dados de Criptomoedas",
      about: "Sobre",
      cryptocurrencyNews: "Notícias de Criptomoedas",
    },
  },
  rs: {
    navMenu: {
      cryptocurrencyData: "Podaci o Kriptovalutama",
      about: "O Aplikaciji",
      cryptocurrencyNews: "Vesti o Kriptovalutama",
    },
    header: {
      title: "Praćenje Kriptovaluta",
    },
    controls: {
      searchPlaceholder: "Pretraži kriptovalutu...",
      toggleTheme: "Promeni temu", // Serbian for "Switch Theme"
      toggleThemeTooltip: "Prebacite između svetlih i tamnih tema", // Serbian
      lightTheme: "Svetla Tema", // Serbian
      darkTheme: "Tamna Tema", // Serbian
    },
    labels: {
      price: "Cena",
      change: "Promena",
      marketCap: "Tržišna Kapitalizacija",
    },
    modal: {
      setAlert: "Postavite upozorenje o ceni",
      alertPrice: "Cena upozorenja (USD):",
    },
    alerts: {
      priceAlertSet:
        "Uspešno je postavljeno upozorenje za cenu od {price} USD za {coinName}.",
    },
    errorMessages: {
      fetchError:
        "Greška prilikom učitavanja podataka. Pokušajte ponovo kasnije.",
      invalidPrice: "Molimo unesite važeću cenu.",
    },
    buttons: {
      addToFavorites: "Dodajte u omiljene",
      removeFromFavorites: "Ukloni iz omiljenih",
      setPriceAlert: "Postavite upozorenje",
      favoriteTooltipAdd: "Dodajte {coinName} u omiljene",
      favoriteTooltipRemove: "Uklonite {coinName} iz omiljenih",
      alertTooltip: "Postavite upozorenje o ceni za {coinName}. ",
    },
    about: {
      title: "O Praćenju Kriptovaluta",
      paragraph1:
        "Praćenje Kriptovaluta je aplikacija prilagođena korisnicima koja je dizajnirana da vam pomogne da pratite najnovije cene i trendove na tržištu kriptovaluta. Bilo da ste iskusni investitor ili tek počinjete, naša platforma pruža podatke u realnom vremenu i uvide kako biste doneli informisane odluke.",
      paragraph2:
        "Sa funkcijama kao što su upozorenja na cene, praćenje tržišne kapitalizacije i prilagodljivim interfejsom, možete prilagoditi svoje iskustvo prema svojim potrebama. Naš cilj je da osnažimo korisnike informacijama koje su im potrebne da se snalaze u stalno promenljivom svetu kriptovaluta.",
      paragraph3:
        "Podaci su obezbeđeni od CoinGecko, što osigurava da dobijate tačne i ažurirane informacije. Pridružite nam se na ovom putu da istražimo budućnost finansija!",
    },
    footer: {
      dataProvided: "Podaci obezbeđeni od CoinGecko",
    },
    news: {
      latestNews: "Najnovije vesti o kriptovalutama",
    },
    scrollToTop: "Povratak na vrh",
  },
  ae: {
    header: {
      title: "متتبع العملات المشفرة",
    },
    controls: {
      searchPlaceholder: "البحث عن عملة مشفرة...",
      toggleTheme: "تبديل الوضع",
      toggleThemeTooltip: "التبديل بين الوضع الفاتح والداكن",
      lightTheme: "الوضع الفاتح",
      darkTheme: "الوضع الداكن",
    },
    labels: {
      price: "السعر",
      change: "التغيير",
      marketCap: "القيمة السوقية",
    },
    modal: {
      setAlert: "تعيين تنبيه السعر",
      alertPrice: "سعر التنبيه (دولار أمريكي):",
    },
    alerts: {
      priceAlertSet:
        "تم تعيين تنبيه السعر بنجاح بقيمة {price} دولار أمريكي للعملة {coinName}.",
    },
    errorMessages: {
      fetchError: "خطأ في تحميل البيانات. يرجى المحاولة مرة أخرى لاحقًا.",
      invalidPrice: "يرجى إدخال سعر صحيح.",
    },
    buttons: {
      addToFavorites: "إضافة إلى المفضلة",
      removeFromFavorites: "إزالة من المفضلة",
      setPriceAlert: "تعيين تنبيه",
      favoriteTooltipAdd: "إضافة {coinName} إلى المفضلة",
      favoriteTooltipRemove: "إزالة {coinName} من المفضلة",
      alertTooltip: "تعيين تنبيه سعر لـ {coinName}",
    },
    about: {
      title: "حول متتبع العملات المشفرة",
      paragraph1:
        "متتبع العملات المشفرة هو تطبيق سهل الاستخدام مصمم لمساعدتك في متابعة أحدث الأسعار واتجاهات سوق العملات المشفرة. سواء كنت مستثمرًا محترفًا أو مبتدئًا، توفر منصتنا بيانات فورية ورؤى لاتخاذ قرارات مدروسة.",
      paragraph2:
        "مع ميزات مثل تنبيهات الأسعار، وتتبع القيمة السوقية، وواجهة قابلة للتخصيص، يمكنك تكييف تجربتك وفقًا لاحتياجاتك. هدفنا هو تمكين المستخدمين من المعلومات اللازمة للملاحة في عالم العملات المشفرة المتغير باستمرار.",
      paragraph3:
        "البيانات مقدمة من CoinGecko، مما يضمن حصولك على معلومات دقيقة ومحدثة. انضم إلينا في هذه الرحلة لاستكشاف مستقبل التمويل!",
    },
    footer: {
      dataProvided: "البيانات مقدمة من CoinGecko",
    },
    news: {
      latestNews: "أحدث أخبار العملات المشفرة",
    },
    scrollToTop: "العودة إلى الأعلى",
    navMenu: {
      cryptocurrencyData: "بيانات العملات المشفرة",
      about: "حول",
      cryptocurrencyNews: "أخبار العملات المشفرة",
    },
  },
};

// Function to update text based on selected language
function updateText(language) {
  // Define variables for elements used in the function
  const searchInput = document.getElementById("search");
  const toggleThemeButton = document.getElementById("toggle-theme");
  const setAlertButton = document.getElementById("set-alert-button");
  const errorMessage = document.getElementById("no-data-message");
  const footer = document.querySelector("footer");
  const newsHeading = document.querySelector("#news-section h2");

  // Set document direction based on language
  const rtlLanguages = ["ae"]; // Add other RTL languages if needed
  document.documentElement.dir = rtlLanguages.includes(language)
    ? "rtl"
    : "ltr";
  document.documentElement.lang = language;

  document.body.classList.toggle("rtl-layout", rtlLanguages.includes(language));

  // Update header title
  document.querySelector("header h1").innerText =
    translations[language].header.title;

  // Update navigation menu
  const navLinks = document.querySelectorAll(".nav-menu li a");
  navLinks[0].innerText =
    translations[language].navMenu.cryptocurrencyData || "Cryptocurrency Data";
  navLinks[1].innerText = translations[language].navMenu.about || "About";
  navLinks[2].innerText =
    translations[language].navMenu.cryptocurrencyNews || "Cryptocurrency News";

  // Update controls
  searchInput.placeholder = translations[language].controls.searchPlaceholder;
  toggleThemeButton.innerText = translations[language].controls.toggleTheme; // Correctly set to "Promeni temu"
  toggleThemeButton.setAttribute(
    "aria-label",
    translations[language].controls.toggleTheme
  );
  toggleThemeButton.setAttribute(
    "data-tooltip",
    translations[language].controls.toggleThemeTooltip
  ); // Update tooltip

  // Update modal
  setAlertButton.innerText = translations[language].modal.setAlert;
  document.getElementById("alert-price").placeholder =
    translations[language].modal.alertPrice;

  // Update modal content with translations
  const modalTitle = document.getElementById("modal-title");
  const alertPriceLabel = document.querySelector('label[for="alert-price"]');

  if (modalTitle) {
    modalTitle.textContent = translations[language].modal.setAlert;
  }
  if (alertPriceLabel) {
    alertPriceLabel.textContent = translations[language].modal.alertPrice;
  }
  if (setAlertButton) {
    setAlertButton.textContent = translations[language].buttons.setPriceAlert;
  }

  // Update error messages if the element exists
  if (errorMessage) {
    errorMessage.textContent = translations[language].errorMessages.fetchError;
  }

  // Update "Scroll to top" link text
  const scrollToTopLink = document.querySelector("to-top a"); // Update this line
  if (scrollToTopLink) {
    scrollToTopLink.setAttribute(
      "aria-label",
      translations[language].scrollToTop
    );
    scrollToTopLink.title = translations[language].scrollToTop;
  }

  // Update the About section based on the selected language
  const aboutSection = document.querySelector("#about");
  if (aboutSection) {
    aboutSection.querySelector("h2").innerText =
      translations[language].about.title; // Title
    aboutSection.querySelector("p:nth-of-type(1)").innerText =
      translations[language].about.paragraph1; // First paragraph
    aboutSection.querySelector("p:nth-of-type(2)").innerText =
      translations[language].about.paragraph2; // Second paragraph
    aboutSection.querySelector("p:nth-of-type(3)").innerText =
      translations[language].about.paragraph3; // Third paragraph
  }

  // Update footer text
  if (footer) {
    footer.innerText = translations[language].footer.dataProvided;
  }

  // Update news section heading
  if (newsHeading) {
    newsHeading.textContent = translations[language].news.latestNews;
  }

  // Update labels for price, change, and market cap
  const priceLabels = document.querySelectorAll(".crypto-card p");
  priceLabels.forEach((label) => {
    if (
      label.textContent.includes("Price:") ||
      label.textContent.includes("Cena:")
    ) {
      label.textContent = `${translations[language].labels.price}: ${
        label.textContent.split(": ")[1]
      }`;
    } else if (
      label.textContent.includes("Change:") ||
      label.textContent.includes("Promena:")
    ) {
      label.textContent = `${translations[language].labels.change}: ${
        label.textContent.split(": ")[1]
      }`;
    } else if (
      label.textContent.includes("Market Cap:") ||
      label.textContent.includes("Tržišna Kapitalizacija:")
    ) {
      label.textContent = `${translations[language].labels.marketCap}: ${
        label.textContent.split(": ")[1]
      }`;
    }
  });
  fetchCryptoPrices();
}

// Event listener for language selection
document
  .getElementById("language-selector")
  .addEventListener("change", (event) => {
    const selectedLanguage = event.target.value;
    updateText(selectedLanguage);
  });

// Initialize with default language
const defaultLanguage = "en"; // Set default language to English
updateText(defaultLanguage);
