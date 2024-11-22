export function getStoredTheme(): string | null {
  try {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? JSON.parse(savedTheme) : null;
  } catch {
    return null;
  }
}

export function saveTheme(theme: string): void {
  localStorage.setItem("theme", JSON.stringify(theme));
}
