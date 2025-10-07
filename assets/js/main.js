// Main JavaScript for Hyper Market website

// Sample products data
const products = [
  {
    id: 1,
    title_en: "Fresh Apples",
    title_ar: "تفاح طازج",
    price: 2.99,
    image: "assets/images/products/apple.jpg",
    category: "grocery",
  },
  {
    id: 2,
    title_en: "Smartphone",
    title_ar: "هاتف ذكي",
    price: 599.99,
    image: "assets/images/products/phone.jpg",
    category: "electronics",
  },
  {
    id: 3,
    title_en: "Kitchen Blender",
    title_ar: "خلاط مطبخ",
    price: 49.99,
    image: "assets/images/products/blender.jpg",
    category: "home",
  },
  {
    id: 4,
    title_en: "Coffee Beans",
    title_ar: "حبوب قهوة",
    price: 12.99,
    image: "assets/images/products/coffee.jpg",
    category: "grocery",
  },
  {
    id: 5,
    title_en: "Laptop",
    title_ar: "لابتوب",
    price: 899.99,
    image: "assets/images/products/laptop.jpg",
    category: "electronics",
  },
  {
    id: 6,
    title_en: "Bed Sheets",
    title_ar: "ملاءات سرير",
    price: 29.99,
    image: "assets/images/products/bedsheets.jpg",
    category: "home",
  },
  {
    id: 7,
    title_en: "Olive Oil",
    title_ar: "زيت زيتون",
    price: 8.99,
    image: "assets/images/products/olive-oil.jpg",
    category: "grocery",
  },
  {
    id: 8,
    title_en: "Headphones",
    title_ar: "سماعات رأس",
    price: 79.99,
    image: "assets/images/products/headphones.jpg",
    category: "electronics",
  },
];

// Navigation functionality
function initNavigation() {
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      const isExpanded = this.getAttribute("aria-expanded") === "true";
      this.setAttribute("aria-expanded", !isExpanded);
      navMenu.classList.toggle("active");

      // Animate hamburger icon
      this.classList.toggle("active");
    });
  }

  // Close mobile menu when clicking on a link
  const navLinks = document.querySelectorAll(".nav-menu a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      if (navMenu.classList.contains("active")) {
        navMenu.classList.remove("active");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.classList.remove("active");
      }
    });
  });
}

// Theme toggle functionality
function initThemeToggle() {
  const themeToggle = document.querySelector(".theme-toggle");
  const themeIcon = document.querySelector(".theme-icon");

  if (themeToggle) {
    // Check for saved theme preference or use preferred color scheme
    const savedTheme = localStorage.getItem("hyper-market-theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      document.body.classList.add("dark-mode");
      if (themeIcon) themeIcon.textContent = "☀️";
    }

    themeToggle.addEventListener("click", function () {
      document.body.classList.toggle("dark-mode");

      // Update icon and save preference
      if (document.body.classList.contains("dark-mode")) {
        if (themeIcon) themeIcon.textContent = "☀️";
        localStorage.setItem("hyper-market-theme", "dark");
      } else {
        if (themeIcon) themeIcon.textContent = "🌙";
        localStorage.setItem("hyper-market-theme", "light");
      }
    });
  }
}

// Language toggle functionality
function initLanguageToggle() {
  const langToggle = document.querySelector(".lang-toggle");

  if (langToggle) {
    langToggle.addEventListener("click", function () {
      toggleLanguage();
    });
  }
}

// Display featured products on homepage
function displayFeaturedProducts() {
  const productsGrid = document.querySelector(
    ".featured-products .products-grid"
  );

  if (productsGrid) {
    // Clear existing content
    productsGrid.innerHTML = "";

    // Get first 4 products
    const featuredProducts = products.slice(0, 4);

    // Create product cards
    featuredProducts.forEach((product) => {
      const productCard = createProductCard(product);
      productsGrid.appendChild(productCard);
    });
  }
}

// Display all products on products page
function displayAllProducts(filteredProducts = null) {
  const productsGrid = document.querySelector(".products-grid");

  if (productsGrid) {
    // Clear existing content
    productsGrid.innerHTML = "";

    // Use filtered products or all products
    const productsToDisplay = filteredProducts || products;

    if (productsToDisplay.length === 0) {
      productsGrid.innerHTML = `<p class="no-products" data-i18n="no_products_found">No products found</p>`;
      return;
    }

    // Create product cards
    productsToDisplay.forEach((product) => {
      const productCard = createProductCard(product);
      productsGrid.appendChild(productCard);
    });
  }
}

// Create product card HTML
function createProductCard(product) {
  const card = document.createElement("div");
  card.className = "product-card fade-in";

  const title = currentLanguage === "ar" ? product.title_ar : product.title_en;
  const categoryKey = `${product.category}_category`;
  const categoryText =
    translations[currentLanguage][categoryKey] || product.category;

  card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${title}" loading="lazy">
        </div>
        <div class="product-info">
            <h3 class="product-title">${title}</h3>
            <div class="product-price">$${product.price.toFixed(2)}</div>
            <span class="product-category">${categoryText}</span>
        </div>
    `;

  return card;
}

// Initialize product filters
function initProductFilters() {
  const searchInput = document.getElementById("product-search");
  const categoryFilter = document.getElementById("category-filter");

  if (searchInput) {
    searchInput.addEventListener("input", filterProducts);
  }

  if (categoryFilter) {
    categoryFilter.addEventListener("change", filterProducts);
  }
}

// Filter products based on search and category
function filterProducts() {
  const searchTerm = document
    .getElementById("product-search")
    .value.toLowerCase();
  const categoryValue = document.getElementById("category-filter").value;

  const filteredProducts = products.filter((product) => {
    const title =
      currentLanguage === "ar" ? product.title_ar : product.title_en;
    const matchesSearch = title.toLowerCase().includes(searchTerm);
    const matchesCategory =
      categoryValue === "all" || product.category === categoryValue;

    return matchesSearch && matchesCategory;
  });

  displayAllProducts(filteredProducts);
}

// Contact form functionality
function initContactForm() {
  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      if (validateContactForm()) {
        // Simulate form submission
        const formData = {
          name: document.getElementById("name").value,
          email: document.getElementById("email").value,
          message: document.getElementById("message").value,
        };

        console.log("Form submitted:", formData);

        // Show success message
        alert(translations[currentLanguage]["message_sent"]);

        // Reset form
        contactForm.reset();
      }
    });
  }

  // Real-time validation
  const formInputs = document.querySelectorAll(
    "#contact-form input, #contact-form textarea"
  );
  formInputs.forEach((input) => {
    input.addEventListener("blur", validateField);
  });
}

// Validate contact form
function validateContactForm() {
  let isValid = true;

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  // Validate each field
  if (!validateField({ target: name })) isValid = false;
  if (!validateField({ target: email })) isValid = false;
  if (!validateField({ target: message })) isValid = false;

  return isValid;
}

// Validate individual form field
function validateField(e) {
  const field = e.target;
  const value = field.value.trim();
  const errorElement = document.getElementById(`${field.id}-error`);

  // Reset error state
  field.classList.remove("error");
  if (errorElement) errorElement.style.display = "none";

  let isValid = true;

  // Check if field is required and empty
  if (field.hasAttribute("required") && value === "") {
    isValid = false;
    showFieldError(field, errorElement, "required_field");
  }

  // Validate email format
  if (field.type === "email" && value !== "") {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      isValid = false;
      showFieldError(field, errorElement, "invalid_email");
    }
  }

  return isValid;
}

// Show field error message
function showFieldError(field, errorElement, errorKey) {
  field.classList.add("error");

  if (errorElement) {
    errorElement.textContent = translations[currentLanguage][errorKey];
    errorElement.style.display = "block";
  }
}

// Initialize AOS animations
function initAnimations() {
  AOS.init({
    duration: 800,
    easing: "ease-in-out",
    once: true,
    mirror: false,
    offset: 100,
  });
}

// Scroll animations for header
function initScrollAnimations() {
  const header = document.querySelector(".header");
  let lastScrollTop = 0;

  window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Header background on scroll
    if (scrollTop > 100) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    // Header hide/show on scroll
    if (scrollTop > lastScrollTop && scrollTop > 200) {
      // Scrolling down
      header.style.transform = "translateY(-100%)";
    } else {
      // Scrolling up
      header.style.transform = "translateY(0)";
    }

    lastScrollTop = scrollTop;
  });
}

// Custom scroll animations for elements
function initCustomScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  // Observe elements with custom animation class
  const animatedElements = document.querySelectorAll(".fade-in-up");
  animatedElements.forEach((el) => observer.observe(el));
}

// Page load animation
function initPageLoadAnimation() {
  document.body.classList.add("page-load-animation");
}

// Enhanced product card animations
function enhanceProductAnimations() {
  const productCards = document.querySelectorAll(".product-card");

  productCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px) scale(1.02)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
    });
  });
}

// Stagger animation for lists
function initStaggerAnimations() {
  const staggerElements = document.querySelectorAll(".stagger-animation");

  staggerElements.forEach((container) => {
    const items = container.children;
    Array.from(items).forEach((item, index) => {
      item.style.animationDelay = `${index * 0.1}s`;
    });
  });
}

// Update the main initialization function
document.addEventListener("DOMContentLoaded", function () {
  initNavigation();
  initThemeToggle();
  initLanguageToggle();
  initContactForm();
  initAnimations();
  initScrollAnimations();
  initCustomScrollAnimations();
  initPageLoadAnimation();
  initStaggerAnimations();

  // Page-specific initializations
  if (document.querySelector(".featured-products")) {
    displayFeaturedProducts();
    enhanceProductAnimations();
  }

  if (document.querySelector(".products-grid")) {
    displayAllProducts();
    initProductFilters();
    enhanceProductAnimations();
  }
});

// Update product display functions to include AOS
function createProductCard(product) {
  const card = document.createElement("div");
  card.className = "product-card";
  card.setAttribute("data-aos", "fade-up");
  card.setAttribute("data-aos-duration", "600");

  const title = currentLanguage === "ar" ? product.title_ar : product.title_en;
  const categoryKey = `${product.category}_category`;
  const categoryText =
    translations[currentLanguage][categoryKey] || product.category;

  card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${title}" loading="lazy">
        </div>
        <div class="product-info">
            <h3 class="product-title">${title}</h3>
            <div class="product-price">$${product.price.toFixed(2)}</div>
            <span class="product-category">${categoryText}</span>
        </div>
    `;

  return card;
}

// Refresh AOS when language changes
const originalSetLanguage = setLanguage;
setLanguage = function (lang) {
  originalSetLanguage(lang);
  // Refresh AOS after language change
  setTimeout(() => {
    AOS.refresh();
  }, 300);
};

// Refresh AOS when products are filtered
const originalFilterProducts = filterProducts;
filterProducts = function () {
  originalFilterProducts();
  // Refresh AOS after filtering
  setTimeout(() => {
    AOS.refresh();
    enhanceProductAnimations();
  }, 300);
};
