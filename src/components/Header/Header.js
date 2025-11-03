import React from "react";
import { useTheme } from "../../contexts/ThemeContext";
import "./Header.css";

const Header = () => {
  const { isDarkMode, toggleTheme, colors } = useTheme();

  return (
    <header
      className="app-header glass-effect"
      style={{
        background: colors.glass,
        borderColor: colors.glassBorder,
      }}
    >
      <div className="header-content">
        <h1 className="app-title" style={{ color: colors.text }}>
          🎵 Waveform
        </h1>
        <button
          className="theme-toggle-btn"
          onClick={toggleTheme}
          style={{
            background: colors.glass,
            borderColor: colors.glassBorder,
            color: colors.text,
          }}
        >
          {isDarkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>
    </header>
  );
};

export default Header;
