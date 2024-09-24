import React, { createContext, useState, useEffect, useContext } from 'react';


// Create the theme context
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Retrieve the saved theme from localStorage or default to 'light'
  const storedTheme = localStorage.getItem('theme');
  const defaultTheme = storedTheme ? storedTheme : 'light';

  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    // Add 'dark' class to html tag if the theme is dark, otherwise remove it
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Store the selected theme in localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Toggle between 'light' and 'dark' themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children} {/* Only renders children */}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme context
export const useTheme = () => useContext(ThemeContext);
