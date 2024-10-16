export function loadStoredTheme() {
  const theme = localStorage.getItem("theme");

  if (theme === "light") {
    setAppTheme("light");
  } else {
    setAppTheme("dark");
  }
}

export function getAppTheme() {
  const theme = localStorage.getItem("theme");

  if (theme) return theme;

  const root = document.querySelector("html") as HTMLElement;

  return root.classList.contains("dark") ? "dark" : "light";
}

export function setAppTheme(theme: string) {
  const root = document.querySelector("html") as HTMLElement;

  if (theme === "dark") {
    localStorage.setItem("theme", "dark");
    root.classList.add("dark");
  } else {
    localStorage.setItem("theme", "light");
    root.classList.remove("dark");
  }
}
