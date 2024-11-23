import { getStoredTheme } from "../lib/themeUtils";
import { describe, it, expect, vi, beforeEach } from "vitest";

describe("getStoredTheme", () => {
  //mocked localStorage
  const localStorageMock = (() => {
    let store: Record<string, string> = {};
    return {
      getItem: (key: string) => store[key] || null,
      setItem: (key: string, value: string) => {
        store[key] = value;
      },
      clear: () => {
        store = {};
      },
    };
  })();

  Object.defineProperty(window, "localStorage", { value: localStorageMock });

  // mocked window.matchMedia
  const matchMediaMock = vi.fn((query: string) => ({
    matches: query === "(prefers-color-scheme: dark)", // preferred dark theme
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
  }));
  Object.defineProperty(window, "matchMedia", { value: matchMediaMock });

  beforeEach(() => {
    localStorageMock.clear();
    vi.clearAllMocks();
  });
  it('should return "dark" if theme is stored as "dark" in localStorage', () => {
    localStorageMock.setItem("theme", JSON.stringify("dark"));
    expect(getStoredTheme()).toBe("dark");
  });

  it('should return "light" if theme is stored as "light" in localStorage', () => {
    localStorageMock.setItem("theme", JSON.stringify("light"));
    expect(getStoredTheme()).toBe("light");
  });

  it('should return "dark" if no theme is stored but prefers-color-scheme is dark', () => {
    matchMediaMock.mockReturnValueOnce({ matches: true } as any); // Symulacja preferencji systemowych
    expect(getStoredTheme()).toBe("dark");
  });

  it('should return "light" if no theme is stored and prefers-color-scheme is light', () => {
    matchMediaMock.mockReturnValueOnce({ matches: false } as any); // Preferencje systemowe na jasny
    expect(getStoredTheme()).toBe("light");
  });

  it('should return "light" if localStorage is invalid and prefers-color-scheme is light', () => {
    localStorageMock.setItem("theme", "invalid-json"); // Niepoprawne dane w localStorage
    matchMediaMock.mockReturnValueOnce({ matches: false } as any);
    expect(getStoredTheme()).toBe("light");
  });
});
