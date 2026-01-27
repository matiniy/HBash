'use client';

import React, { useEffect, useState } from 'react';

const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check if html has light-mode class (default is light)
    const htmlElement = document.documentElement;
    const checkTheme = () => {
      setIsDark(!htmlElement.classList.contains('light-mode'));
    };
    checkTheme();
    
    // Watch for class changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(htmlElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    const htmlElement = document.documentElement;
    if (htmlElement.classList.contains('light-mode')) {
      // Switch to dark mode
      htmlElement.classList.remove('light-mode');
      htmlElement.classList.add('dark-mode');
      setIsDark(true);
    } else {
      // Switch to light mode
      htmlElement.classList.remove('dark-mode');
      htmlElement.classList.add('light-mode');
      setIsDark(false);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-white/10 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-aqua-neon focus:ring-offset-2 focus:ring-offset-deep-forest"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        // Sun icon for light mode (when currently dark)
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ) : (
        // Moon icon for dark mode (when currently light)
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      )}
    </button>
  );
};

export default ThemeToggle;

