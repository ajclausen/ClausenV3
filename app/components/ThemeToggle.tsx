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
      id: 'dracula' as const, 
      name: 'Dracula',
      description: 'Dark'
    },
    { 
      id: 'midnight' as const, 
      name: 'Midnight',
      description: 'High contrast'
    },
    { 
      id: 'alucard' as const, 
      name: 'Alucard',
      description: 'Light'
    },
    { 
      id: 'forest' as const, 
      name: 'Forest',
      description: 'Green'
    },
  ];

  return (
    <div className="fixed top-4 right-4 z-50" ref={dropdownRef}>
      {/* Simple icon button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 rounded-lg bg-dracula-current-line/20 backdrop-blur-sm hover:bg-dracula-current-line/30 transition-colors duration-200"
        aria-label="Change theme"
      >
        <svg 
          className="w-5 h-5 text-dracula-foreground" 
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
      </button>

      {/* Simple dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 rounded-lg bg-dracula-background border border-dracula-current-line shadow-xl overflow-hidden">
          {themes.map((t) => (
            <button
              key={t.id}
              onClick={() => {
                setTheme(t.id);
                setIsOpen(false);
              }}
              className={`
                w-full px-4 py-2.5 text-left text-sm
                hover:bg-dracula-current-line/20 transition-colors
                flex items-center justify-between
                ${theme === t.id ? 'bg-dracula-current-line/10' : ''}
              `}
            >
              <div>
                <div className="font-medium text-dracula-foreground">{t.name}</div>
                <div className="text-xs text-dracula-comment">{t.description}</div>
              </div>
              {theme === t.id && (
                <svg className="w-4 h-4 text-dracula-cyan" fill="currentColor" viewBox="0 0 20 20">
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