import React from 'react';
import { useTheme } from './themecontext';

export default function DarkButton() {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <button onClick={() => setDarkMode(!darkMode)} style={{ all: 'unset', cursor: 'pointer' }}>
      {darkMode ? (
        <img src='/sun.png' alt='Switch to light mode' style={{ width: '50px', height: '50px' }} />
      ) : (
        <img src='/moon.png' alt='Switch to dark mode' style={{ width: '50px', height: '50px' }} />
      )}
    </button>
  );
}