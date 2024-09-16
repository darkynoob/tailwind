const toggleThemeButton = document.getElementById("toggle-dark-mode");
const html = document.documentElement;

toggleThemeButton.addEventListener("click", () => {
  html.classList.toggle("dark");
});

const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
console.log(darkModeMediaQuery.matches);
