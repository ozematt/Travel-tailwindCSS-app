import { saveTheme } from "../lib/themeUtils";
import { describe, it, expect, vi, beforeEach } from "vitest";

describe("savedTheme", () => {
  // mocking localStorage
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

  beforeEach(() => {
    // clear mocks
    vi.clearAllMocks();
    document.documentElement.className = ""; // clear `document.documentElement` class
  });

  it("should save the theme to localStorage", () => {
    saveTheme("dark");
    expect(localStorageMock.getItem("theme")).toBe(JSON.stringify("dark"));

    saveTheme("light");
    expect(localStorageMock.getItem("theme")).toBe(JSON.stringify("light"));
  });

  it('should add the "dark" class to document.documentElement for dark theme', () => {
    saveTheme("dark");
    expect(document.documentElement.classList.contains("dark")).toBe(true);
  });

  it('should remove the "dark" class from document.documentElement for light theme', () => {
    document.documentElement.classList.add("dark");
    expect(document.documentElement.classList.contains("dark")).toBe(false);
  });

  it("should handle errors in localStorage gracefully", () => {
    // Simulating an error in localStorage
    const setItemSpy = vi
      .spyOn(window.localStorage, "setItem")
      .mockImplementation(() => {
        throw new Error("Test error");
      });

    expect(() => saveTheme("dark")).not.toThrow(); // The function should not throw an error
    expect(console.error).toHaveBeenCalledWith(
      "Failed to save theme to localStorage.",
      expect.any(Error)
    );

    setItemSpy.mockRestore(); // Restoring original `setItem`
  });
});
