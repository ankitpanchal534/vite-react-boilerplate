const theme = {
  colors: {
    primary: {
      base: "#D5006D", // pink-600
      gradient: {
        from: "#D5006D", // pink-600
        via: "#FF4081", // pink-500
        to: "#FFABAB", // lightpink
      },
      hover: "rgba(213, 0, 109, 0.9)", // pink-600 with opacity
      light: "#F8BBD0", // pink-50
      border: "#F50057", // pink-500
      text: "#C51162", // pink-700
    },
    secondary: {
      border: "#F8BBD0", // lightpink
      bg: "#FFEBEE", // pink-100
    },
    white: {
      bg: "rgba(255, 255, 255, 0.9)",
      border: "rgba(255, 255, 255, 0.5)",
    },
    gray: {
      text: "#4B5563", // gray-600
      bg: "#E5E7EB", // gray-200
    },
  },
};
export type TTheme = typeof theme;

import { createContext, useContext } from "react";

// Create theme context
const ThemeContext = createContext(theme);

// Custom hook to use theme
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

// Theme provider component
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export default theme;
