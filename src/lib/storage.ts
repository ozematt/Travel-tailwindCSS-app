export function getStoredTheme(): string {
  try {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return JSON.parse(savedTheme);
    }
    //check user preferences
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return prefersDark ? "dark" : "light";
  } catch (error) {
    console.warn(
      "Błąd odczytu motywu z localStorage. Zwracam domyślny motyw.",
      error
    );
    return "light";
  }
}

export function saveTheme(theme: string): void {
  try {
    localStorage.setItem("theme", JSON.stringify(theme));

    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  } catch (error) {
    console.error("Nie udało się zapisać motywu do localStorage.", error);
  }
}
