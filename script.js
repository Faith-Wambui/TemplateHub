// ============================================
// script.js — TemplatHub App Logic
// ============================================

(function () {
  "use strict";

  // ---- STATE ----
  let activeCategory = "all";
  let searchQuery = "";

  // ---- DOM REFS ----
  const grid = document.getElementById("templateGrid");
  const tabs = document.querySelectorAll(".tab-btn");
  const searchInput = document.getElementById("searchInput");
  const searchClear = document.getElementById("searchClear");
  const searchLabel = document.getElementById("searchResultsLabel");
  const noResults = document.getElementById("noResults");
  const totalCount = document.getElementById("totalCount");
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");

  // ---- INIT ----
  function init() {
    // Set total count in hero
    animateCount(totalCount, TEMPLATES.length);

    // Render all templates on load
    renderTemplates();

    // Tab click
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        activeCategory = tab.dataset.cat;
        tabs.forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");
        searchQuery = "";
        searchInput.value = "";
        searchClear.style.display = "none";
        searchLabel.textContent = "";
        renderTemplates();
      });
    });

    // Search input
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      searchClear.style.display = searchQuery ? "block" : "none";

      // Reset to all categories when searching
      if (searchQuery) {
        activeCategory = "all";
        tabs.forEach((t) => t.classList.remove("active"));
        tabs[0].classList.add("active");
      }

      renderTemplates();
    });

    // Clear search
    searchClear.addEventListener("click", () => {
      searchInput.value = "";
      searchQuery = "";
      searchClear.style.display = "none";
      searchLabel.textContent = "";
      renderTemplates();
      searchInput.focus();
    });

    // Hamburger menu
    hamburger.addEventListener("click", () => {
      mobileMenu.classList.toggle("open");
    });

    // Close mobile menu when link clicked
    mobileMenu.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => mobileMenu.classList.remove("open"));
    });
  }

  // ---- RENDER ----
  function renderTemplates() {
    let filtered = TEMPLATES;

    // Filter by category
    if (activeCategory !== "all") {
      filtered = filtered.filter((t) => t.category === activeCategory);
    }

    // Filter by search
    if (searchQuery) {
      filtered = filtered.filter(
        (t) =>
          t.name.toLowerCase().includes(searchQuery) ||
          t.description.toLowerCase().includes(searchQuery) ||
          t.category.toLowerCase().includes(searchQuery)
      );
    }

    // Update label
    if (searchQuery) {
      searchLabel.textContent = `${filtered.length} result${filtered.length !== 1 ? "s" : ""} for "${searchInput.value}"`;
    } else {
      searchLabel.textContent = "";
    }

    // Render
    grid.innerHTML = "";

    if (filtered.length === 0) {
      noResults.classList.remove("hidden");
    } else {
      noResults.classList.add("hidden");
      filtered.forEach((template, i) => {
        const card = createCard(template, i);
        grid.appendChild(card);
      });
    }
  }

  // ---- CREATE CARD ----
  function createCard(template, index) {
    const card = document.createElement("div");
    card.className = "template-card";
    card.setAttribute("data-cat", template.category);
    card.style.animationDelay = `${index * 60}ms`;

    const catLabel = {
      "project-management": "Project Management",
      "program-management": "Program Management",
      "meal": "MEAL"
    }[template.category];

    const iconClass = {
      "project-management": "pm",
      "program-management": "pgm",
      "meal": "meal"
    }[template.category];

    const badgeClass = {
      "project-management": "badge-pm",
      "program-management": "badge-pgm",
      "meal": "badge-meal"
    }[template.category];

    card.innerHTML = `
      <div class="card-top">
        <div class="card-icon ${iconClass}">${template.icon}</div>
        <span class="card-badge ${badgeClass}">${catLabel}</span>
      </div>
      <div class="card-title">${template.name}</div>
      <div class="card-desc">${template.description}</div>
      <div class="card-footer">
        <div class="card-format">
          <span>📄</span> .docx
        </div>
        <a class="btn-download" href="${template.file}" download>
          ⬇ Download
        </a>
      </div>
    `;

    return card;
  }

  // ---- ANIMATED COUNTER ----
  function animateCount(el, target) {
    let start = 0;
    const duration = 1200;
    const step = Math.ceil(target / (duration / 16));

    const interval = setInterval(() => {
      start += step;
      if (start >= target) {
        start = target;
        clearInterval(interval);
      }
      el.textContent = start;
    }, 16);
  }

  // ---- START ----
  document.addEventListener("DOMContentLoaded", init);
})();
