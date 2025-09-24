import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="theme-toggle relative flex items-center justify-center"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      title={`Switch to ${isDark ? 'light' : 'dark'} theme`}
    >
      <Sun 
        className={`absolute w-4 h-4 transition-all duration-300 ${
          isDark ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
        }`}
        style={{ color: 'var(--color-orange-500)' }}
      />
      <Moon 
        className={`absolute w-4 h-4 transition-all duration-300 ${
          isDark ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
        }`}
        style={{ color: 'var(--color-blue-400)' }}
      />
    </button>
  );
};

export default ThemeToggle;