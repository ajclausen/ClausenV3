'use client';

import { useTheme } from './ThemeProvider';
import { useState, useRef, useEffect } from 'react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const themes = [
    { 
      id: 'dracula', 
      name: 'Dracula', 
      icon: '🧛', 
      description: 'Classic dark theme'
    },
    { 
      id: 'midnight', 
      name: 'Midnight', 
      icon: '🌙', 
      description: 'High contrast dark'
    },
    { 
      id: 'alucard', 
      name: 'Alucard', 
      icon: '☀️', 
      description: 'Cool light theme'
    },
    { 
      id: 'forest', 
      name: 'Forest', 
      icon: '🌲', 
      description: 'Fresh green theme'
    },
  ] as const;

  const currentTheme = themes.find(t => t.id === theme) || themes[0];

  return (
    <div className="fixed top-4 right-4 z-50" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-dracula-current-line/30 backdrop-blur-sm hover:bg-dracula-current-line/50 transition-all duration-200 border border-dracula-comment/20"
        aria-label="Theme switcher"
      >
        <span className="text-lg">{currentTheme.icon}</span>
        <span className="text-sm font-medium text-dracula-foreground">{currentTheme.name}</span>
        <svg 
          className={`w-4 h-4 text-dracula-comment transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-56 rounded-lg bg-dracula-background/95 backdrop-blur-md border border-dracula-current-line shadow-xl overflow-hidden">
          {themes.map((themeOption) => (
            <button
              key={themeOption.id}
              onClick={() => {
                setTheme(themeOption.id as 'dracula' | 'midnight' | 'alucard' | 'forest');
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-3 hover:bg-dracula-current-line/30 transition-colors duration-150 flex items-center gap-3 ${
                theme === themeOption.id ? 'bg-dracula-current-line/20' : ''
              }`}
            >
              <span className="text-lg">{themeOption.icon}</span>
              <div>
                <div className="text-sm font-medium text-dracula-foreground">{themeOption.name}</div>
                <div className="text-xs text-dracula-comment">{themeOption.description}</div>
              </div>
              {theme === themeOption.id && (
                <svg className="w-4 h-4 text-dracula-cyan ml-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}