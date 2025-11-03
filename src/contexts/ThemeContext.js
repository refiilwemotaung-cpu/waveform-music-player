import React, { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const theme = {
    isDarkMode,
    toggleTheme,
    colors: {
      background: isDarkMode
        ? "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)"
        : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      text: isDarkMode ? "#ffffff" : "#333333",
      glass: isDarkMode
        ? "rgba(255, 255, 255, 0.1)"
        : "rgba(255, 255, 255, 0.2)",
      glassBorder: isDarkMode
        ? "rgba(255, 255, 255, 0.2)"
        : "rgba(255, 255, 255, 0.3)",
    },
  };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
