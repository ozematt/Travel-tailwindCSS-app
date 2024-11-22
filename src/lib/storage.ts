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
