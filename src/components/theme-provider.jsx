import React, { createContext, useContext, useEffect, useState } from "react";

// Define the available themes
const THEME_DARK = "dark";
const THEME_LIGHT = "light";
const THEME_SYSTEM = "system";

// Default values for the ThemeProvider
const initialState = {
  theme: THEME_SYSTEM,
  setTheme: () => null,
};

const ThemeProviderContext = createContext(initialState);

export function ThemeProvider({
  children,
  defaultTheme = THEME_SYSTEM,
  storageKey = "vite-ui-theme",
  ...props
}) {
  // Use localStorage to get the theme or fall back to default
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem(storageKey) || defaultTheme;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(THEME_LIGHT, THEME_DARK);

    if (theme === THEME_SYSTEM) {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? THEME_DARK
        : THEME_LIGHT;
      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  const value = {
    theme,
    setTheme: (newTheme) => {
      localStorage.setItem(storageKey, newTheme);
      setTheme(newTheme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};
