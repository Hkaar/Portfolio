/**
 * Loads the theme stored in local storage
 */
export function loadStoredTheme() {
  const theme = localStorage.getItem("theme");

  if (theme === "light") {
    setAppTheme("light");
  } else {
    setAppTheme("dark");
  }
}

/**
 * Get the current app theme
 *
 * @returns string
 */
export function getAppTheme() {
  const theme = localStorage.getItem("theme");

  if (theme) return theme;

  const root = document.querySelector("html") as HTMLElement;
  return root.classList.contains("dark") ? "dark" : "light";
}

/**
 * Sets the current app theme to the given theme
 * 
 * @param theme - The theme to be set in the app
 */
export function setAppTheme(theme: "dark" | "light") {
  const root = document.querySelector("html") as HTMLElement;

  if (theme === "dark") {
    localStorage.setItem("theme", "dark");
    root.classList.add("dark");
  } else {
    localStorage.setItem("theme", "light");
    root.classList.remove("dark");
  }
}
