(() => {
  const root = document.documentElement;
  const preference = window.matchMedia("(prefers-color-scheme: dark)");
  let savedTheme;

  try {
    savedTheme = localStorage.getItem("colour-scheme");
  } catch {
    // The system preference still works when browser storage is unavailable.
  }

  const hasSavedTheme = () => savedTheme === "light" || savedTheme === "dark";
  const isDark = () => hasSavedTheme() ? savedTheme === "dark" : preference.matches;

  if (hasSavedTheme()) {
    root.dataset.theme = savedTheme;
  }

  document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".theme-toggle");
    if (!button) return;

    const updateButton = () => {
      const dark = isDark();
      button.textContent = dark ? "Light mode" : "Dark mode";
      button.setAttribute("aria-label", `Use ${dark ? "light" : "dark"} colour scheme`);
      button.setAttribute("aria-pressed", String(dark));
    };

    updateButton();
    button.hidden = false;
    preference.addEventListener("change", updateButton);
    button.addEventListener("click", () => {
      savedTheme = isDark() ? "light" : "dark";
      root.dataset.theme = savedTheme;
      try {
        localStorage.setItem("colour-scheme", savedTheme);
      } catch {
        // Keep the chosen scheme for this page when storage is unavailable.
      }
      updateButton();
    });
  });
})();
