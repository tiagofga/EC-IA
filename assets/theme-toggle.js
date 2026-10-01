(() => {
  const STORAGE_KEY = "ecia-theme";
  const root = document.documentElement;
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");

  const getStoredTheme = () => {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === "light" || value === "dark" ? value : null;
  };

  const getTheme = () => getStoredTheme() || (systemTheme.matches ? "dark" : "light");

  const applyTheme = (theme) => {
    root.dataset.theme = theme;
    root.style.colorScheme = theme;

    document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
      const dark = theme === "dark";
      button.setAttribute("aria-label", dark ? "Ativar modo claro" : "Ativar modo escuro");
      button.setAttribute("title", dark ? "Ativar modo claro" : "Ativar modo escuro");
      button.setAttribute("aria-pressed", String(dark));
      button.innerHTML = dark
        ? '<span aria-hidden="true">☀</span><span class="theme-toggle-label">Claro</span>'
        : '<span aria-hidden="true">☾</span><span class="theme-toggle-label">Escuro</span>';
    });

    document.dispatchEvent(new CustomEvent("ecia-theme-change", { detail: { theme } }));
  };

  const toggleTheme = () => {
    const next = getTheme() === "dark" ? "light" : "dark";
    localStorage.setItem(STORAGE_KEY, next);
    applyTheme(next);
  };

  const createButton = (className) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = className;
    button.dataset.themeToggle = "true";
    button.addEventListener("click", toggleTheme);
    return button;
  };

  applyTheme(getTheme());

  document.addEventListener("DOMContentLoaded", () => {
    const sideSearch = document.querySelector(".wy-side-nav-search");
    if (sideSearch && !sideSearch.querySelector("[data-theme-toggle]")) {
      const button = createButton("theme-toggle theme-toggle-side");
      sideSearch.appendChild(button);
    }

    const mobileNav = document.querySelector(".wy-nav-top");
    if (mobileNav && !mobileNav.querySelector("[data-theme-toggle]")) {
      const button = createButton("theme-toggle theme-toggle-mobile");
      mobileNav.appendChild(button);
    }

    applyTheme(getTheme());
  });

  systemTheme.addEventListener("change", () => {
    if (!getStoredTheme()) applyTheme(getTheme());
  });
})();
