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
      <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 relative">
        {/* Theme Switcher Button */}
        <button
          onClick={toggleTheme}
          className="absolute top-4 right-4 px-4 py-2 bg-blue-500 text-white rounded dark:bg-blue-700"
        >
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
        
        <header className="text-center">
          <h1 className="text-4xl mb-4">Theme Switcher Example</h1>
        </header>
        <main className="mt-6">
          <p className="text-lg">
            This is a simple theme switcher between light and dark mode using Tailwind CSS.
          </p>
        </main>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme context
export const useTheme = () => useContext(ThemeContext);
