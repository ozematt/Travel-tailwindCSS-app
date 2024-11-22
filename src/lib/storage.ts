export function getStoredTheme(): string {
  const savedTheme = localStorage.getItem("theme");
  return savedTheme ? JSON.parse(savedTheme) : "light";
}

export function saveTheme(theme: string): void {
  localStorage.setItem("theme", JSON.stringify(theme));
}
