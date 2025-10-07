// Translation system for Hyper Market
const translations = {
  en: {
    // Navigation
    home: "Home",
    products: "Products",
    about: "About Us",
    contact: "Contact",

    // Hero Section
    hero_title: "Shop Smart, Live Comfortably",
    hero_subtitle:
      "Hyper Market offers you the best products at competitive prices with guaranteed quality. Discover a world of choices under one roof.",
    shop_now: "Shop Now",

    // Categories
    our_categories: "Our Categories",
    grocery: "Grocery",
    grocery_desc: "Best food products from around the world",
    electronics: "Electronics",
    electronics_desc: "Latest electronic devices and technology",
    home_products: "Home Products",
    home_products_desc: "Everything you need to equip your home",

    // Products
    featured_products: "Featured Products",
    view_all_products: "View All Products",
    price: "Price",
    category: "Category",

    // Footer
    hyper_market: "Hyper Market",
    footer_desc:
      "Your first destination for shopping with high quality and competitive prices.",
    quick_links: "Quick Links",
    contact_info: "Contact Info",
    address: "Address: City, Main Street",
    phone: "Phone: +1234567890",
    email: "Email: info@hypermarket.com",
    follow_us: "Follow Us",
    copyright: "2023 Hyper Market. All rights reserved.",
    privacy_policy: "Privacy Policy",

    // About Page
    about_title: "About Hyper Market",
    our_story: "Our Story",
    story_content:
      "Hyper Market was established in 2010 with a vision to provide the best shopping experience for our customers. We offer a wide range of high-quality products at competitive prices.",
    our_mission: "Our Mission",
    mission_content:
      "Our mission is to make shopping easier and more enjoyable for everyone. We strive to provide exceptional customer service and continuously improve our product offerings.",
    our_values: "Our Values",
    values_content:
      "We believe in quality, integrity, and customer satisfaction. These values guide everything we do at Hyper Market.",

    // Contact Page
    contact_title: "Contact Us",
    contact_subtitle:
      "We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
    name: "Name",
    email: "Email",
    message: "Message",
    send_message: "Send Message",
    required_field: "This field is required",
    invalid_email: "Please enter a valid email address",
    message_sent: "Message sent successfully!",

    // Products Page
    all_products: "All Products",
    search_placeholder: "Search products...",
    filter_by_category: "Filter by category",
    all_categories: "All Categories",
    no_products_found: "No products found",

    // Product Categories
    grocery_category: "Grocery",
    electronics_category: "Electronics",
    home_category: "Home",
    clothing_category: "Clothing",
  },

  ar: {
    // Navigation
    home: "الرئيسية",
    products: "المنتجات",
    about: "من نحن",
    contact: "تواصل معنا",

    // Hero Section
    hero_title: "تسوق بذكاء، عيش براحة",
    hero_subtitle:
      "هايبر ماركت يوفر لك أفضل المنتجات بأسعار تنافسية وجودة مضمونة. اكتشف عالمًا من الخيارات تحت سقف واحد.",
    shop_now: "تسوق الآن",

    // Categories
    our_categories: "أقسامنا",
    grocery: "البقالة",
    grocery_desc: "أفضل المنتجات الغذائية من جميع أنحاء العالم",
    electronics: "الإلكترونيات",
    electronics_desc: "أحدث الأجهزة الإلكترونية والتقنية",
    home_products: "منتجات المنزل",
    home_products_desc: "كل ما تحتاجه لتجهيز منزلك",

    // Products
    featured_products: "منتجات مميزة",
    view_all_products: "عرض جميع المنتجات",
    price: "السعر",
    category: "الفئة",

    // Footer
    hyper_market: "هايبر ماركت",
    footer_desc: "وجهتك الأولى للتسوق بجودة عالية وأسعار منافسة.",
    quick_links: "روابط سريعة",
    contact_info: "معلومات التواصل",
    address: "العنوان: المدينة، الشارع الرئيسي",
    phone: "الهاتف: +1234567890",
    email: "البريد: info@hypermarket.com",
    follow_us: "تابعنا",
    copyright: "2023 هايبر ماركت. جميع الحقوق محفوظة.",
    privacy_policy: "سياسة الخصوصية",

    // About Page
    about_title: "عن هايبر ماركت",
    our_story: "قصتنا",
    story_content:
      "تأسس هايبر ماركت في عام 2010 برؤية توفير أفضل تجربة تسوق لعملائنا. نقدم مجموعة واسعة من المنتجات عالية الجودة بأسعار تنافسية.",
    our_mission: "مهمتنا",
    mission_content:
      "مهمتنا هي جعل التسوق أسهل وأكثر متعة للجميع. نسعى لتقديم خدمة عملاء استثنائية وتحسين عروض منتجاتنا باستمرار.",
    our_values: "قيمنا",
    values_content:
      "نؤمن بالجودة والنزاهة ورضا العملاء. هذه القيم توجه كل ما نقوم به في هايبر ماركت.",

    // Contact Page
    contact_title: "تواصل معنا",
    contact_subtitle:
      "نحن نحب أن نسمع منك. أرسل لنا رسالة وسنرد في أقرب وقت ممكن.",
    name: "الاسم",
    email: "البريد الإلكتروني",
    message: "الرسالة",
    send_message: "إرسال الرسالة",
    required_field: "هذا الحقل مطلوب",
    invalid_email: "يرجى إدخال بريد إلكتروني صحيح",
    message_sent: "تم إرسال الرسالة بنجاح!",

    // Products Page
    all_products: "جميع المنتجات",
    search_placeholder: "ابحث عن المنتجات...",
    filter_by_category: "تصفية حسب الفئة",
    all_categories: "جميع الفئات",
    no_products_found: "لم يتم العثور على منتجات",

    // Product Categories
    grocery_category: "البقالة",
    electronics_category: "الإلكترونيات",
    home_category: "المنزل",
    clothing_category: "الملابس",
  },
};

// Current language
let currentLanguage = "ar";

// Initialize translation system
function initI18n() {
  // Check for saved language preference or use browser language
  const savedLanguage = localStorage.getItem("hyper-market-language");
  const browserLang = navigator.language.split("-")[0];

  if (savedLanguage) {
    currentLanguage = savedLanguage;
  } else if (browserLang === "ar" || browserLang === "en") {
    currentLanguage = browserLang;
  }

  // Set initial language
  setLanguage(currentLanguage);
}

// Set language and update page
function setLanguage(lang) {
  if (translations[lang]) {
    currentLanguage = lang;
    localStorage.setItem("hyper-market-language", lang);

    // Update HTML direction
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;

    // Update language toggle button text
    const langToggle = document.querySelector(".lang-toggle");
    if (langToggle) {
      langToggle.textContent = lang === "ar" ? "EN" : "AR";
      langToggle.setAttribute("data-lang", lang === "ar" ? "en" : "ar");
    }

    // Translate page content
    translatePage();
  }
}

// Translate all elements with data-i18n attribute
function translatePage() {
  const elements = document.querySelectorAll("[data-i18n]");

  elements.forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (translations[currentLanguage][key]) {
      // Handle different element types
      if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
        element.placeholder = translations[currentLanguage][key];
      } else {
        element.textContent = translations[currentLanguage][key];
      }
    }
  });

  // Update meta tags
  updateMetaTags();
}

// Update meta tags for SEO
function updateMetaTags() {
  const title = document.querySelector("title");
  const description = document.querySelector('meta[name="description"]');

  if (title && description) {
    const page = window.location.pathname.split("/").pop() || "index.html";

    // Update title and description based on current page and language
    switch (page) {
      case "index.html":
        title.textContent =
          currentLanguage === "ar"
            ? "هايبر ماركت - Hyper Market"
            : "Hyper Market - هايبر ماركت";
        description.setAttribute(
          "content",
          currentLanguage === "ar"
            ? "هايبر ماركت يوفر أفضل المنتجات بأسعار منافسة. تسوق الآن واحصل على تجربة تسوق فريدة."
            : "Hyper Market offers the best products at competitive prices. Shop now and get a unique shopping experience."
        );
        break;
      case "about.html":
        title.textContent =
          currentLanguage === "ar"
            ? "من نحن - هايبر ماركت"
            : "About Us - Hyper Market";
        break;
      case "products.html":
        title.textContent =
          currentLanguage === "ar"
            ? "المنتجات - هايبر ماركت"
            : "Products - Hyper Market";
        break;
      case "contact.html":
        title.textContent =
          currentLanguage === "ar"
            ? "تواصل معنا - هايبر ماركت"
            : "Contact Us - Hyper Market";
        break;
    }
  }
}

// Toggle language
function toggleLanguage() {
  const newLang = currentLanguage === "ar" ? "en" : "ar";
  setLanguage(newLang);
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", initI18n);
