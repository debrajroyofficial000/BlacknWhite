import { useState } from "react";
import { createContext, useContext } from "react";

// Context With Default value
export const ThemeContext = createContext({
  theme: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

// Provider Component
export const ThemeProvider = ThemeContext.Provider;

// Custom Hook
function useTheme() {
  return useContext(ThemeContext);
}

export default useTheme;
