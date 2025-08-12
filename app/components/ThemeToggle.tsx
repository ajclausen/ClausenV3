'use client';

import { useTheme } from './ThemeProvider';
import { useState, useRef, useEffect } from 'react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [previewTheme, setPreviewTheme] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setPreviewTheme(null);
      }
    }

    function handleKeyPress(event: KeyboardEvent) {
      // Toggle theme switcher with 'T' key
      if ((event.key === 't' || event.key === 'T') && !event.metaKey && !event.ctrlKey) {
        // Don't trigger if user is typing in an input
        const target = event.target as HTMLElement;
        if (target.tagName === 'INPUT' || 
            target.tagName === 'TEXTAREA' || 
            target.isContentEditable) {
          return;
        }
        event.preventDefault();
        setIsOpen(prev => !prev);
        if (!isOpen) {
          // Reset selected index when opening
          const currentIndex = themes.findIndex(t => t.id === theme);
          setSelectedIndex(currentIndex >= 0 ? currentIndex : 0);
        }
      }
      
      // Navigate themes with arrow keys when open
      if (isOpen) {
        if (event.key === 'ArrowDown') {
          event.preventDefault();
          setSelectedIndex(prev => (prev + 1) % themes.length);
        } else if (event.key === 'ArrowUp') {
          event.preventDefault();
          setSelectedIndex(prev => (prev - 1 + themes.length) % themes.length);
        } else if (event.key === 'Enter') {
          event.preventDefault();
          setTheme(themes[selectedIndex].id);
          setIsOpen(false);
          setPreviewTheme(null);
        } else if (event.key === 'Escape') {
          setIsOpen(false);
          setPreviewTheme(null);
        }
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [isOpen, selectedIndex, theme, setTheme]);

  const themes = [
    { 
      id: 'alucard' as const, 
      name: 'Alucard',
      description: 'Clean light',
      colors: ['#f8f8f2', '#7c3aed', '#00a550', '#ff1493']
    },
    { 
      id: 'dracula' as const, 
      name: 'Dracula',
      description: 'Classic dark',
      colors: ['#282a36', '#bd93f9', '#50fa7b', '#ff79c6']
    },
    { 
      id: 'midnight' as const, 
      name: 'Midnight',
      description: 'Deep blue',
      colors: ['#0f172a', '#a78bfa', '#10b981', '#ec4899']
    },
    { 
      id: 'forest' as const, 
      name: 'Forest',
      description: 'Nature green',
      colors: ['#f0f4f0', '#7c3aed', '#059669', '#db2777']
    },
    { 
      id: 'rosepetal' as const, 
      name: 'Rose Petal',
      description: 'Soft pink',
      colors: ['#fff5f7', '#a855f7', '#059669', '#ec4899']
    },
    { 
      id: 'cherryblossom' as const, 
      name: 'Cherry Blossom',
      description: 'Dark pink',
      colors: ['#2d1b2e', '#e0aaff', '#80ff72', '#ff79c6']
    },
  ];

  const currentTheme = themes.find(t => t.id === theme);

  // Apply preview theme on hover
  useEffect(() => {
    if (previewTheme) {
      // Remove all theme classes
      document.documentElement.classList.remove('dracula', 'alucard', 'midnight', 'forest', 'rosepetal', 'cherryblossom');
      // Add preview theme class
      document.documentElement.classList.add(previewTheme);
    } else if (theme) {
      // Restore original theme when not previewing
      document.documentElement.classList.remove('dracula', 'alucard', 'midnight', 'forest', 'rosepetal', 'cherryblossom');
      document.documentElement.classList.add(theme);
    }
  }, [previewTheme, theme]);

  // Update preview when using keyboard navigation
  useEffect(() => {
    if (isOpen && selectedIndex >= 0) {
      setPreviewTheme(themes[selectedIndex].id);
    }
  }, [selectedIndex, isOpen]);

  return (
    <div className="fixed top-4 right-4 z-50" ref={dropdownRef}>
      {/* Enhanced theme button with preview */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2 px-3 py-2 rounded-xl bg-dracula-current-line/10 backdrop-blur-md border border-dracula-current-line/20 hover:bg-dracula-current-line/20 hover:border-dracula-current-line/30 transition-all duration-200"
        aria-label="Change theme"
      >
        {/* Color preview dots */}
        <div className="flex items-center gap-1">
          {currentTheme?.colors.map((color, i) => (
            <div
              key={i}
              className="w-3 h-3 rounded-full border border-dracula-foreground/20"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
        
        {/* Theme name (hidden on mobile) */}
        <span className="hidden sm:block text-sm font-medium text-dracula-foreground">
          {currentTheme?.name}
        </span>
        
        {/* Arrow icon */}
        <svg 
          className={`w-4 h-4 text-dracula-comment transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Enhanced dropdown with animations */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 rounded-xl bg-dracula-background/95 backdrop-blur-md border border-dracula-current-line/30 shadow-2xl overflow-hidden animate-fadeIn">
          <div className="p-2">
            <div className="text-xs font-semibold text-dracula-comment px-3 py-2 uppercase tracking-wider">
              Select Theme
            </div>
            {themes.map((t, index) => (
              <button
                key={t.id}
                onClick={() => {
                  setTheme(t.id);
                  setIsOpen(false);
                  setPreviewTheme(null);
                }}
                onMouseEnter={() => {
                  setPreviewTheme(t.id);
                  setSelectedIndex(index);
                }}
                onMouseLeave={() => {
                  setPreviewTheme(null);
                }}
                className={`
                  w-full px-3 py-2.5 rounded-lg text-left
                  hover:bg-dracula-current-line/20 transition-all duration-150
                  flex items-center gap-3 group
                  ${theme === t.id ? 'bg-dracula-current-line/15' : ''}
                  ${selectedIndex === index ? 'ring-2 ring-dracula-cyan/50' : ''}
                `}
              >
                {/* Color preview */}
                <div className="flex items-center gap-0.5">
                  {t.colors.map((color, i) => (
                    <div
                      key={i}
                      className={`
                        w-2.5 h-2.5 rounded-full
                        ${theme === t.id ? 'ring-2 ring-offset-1 ring-dracula-cyan ring-offset-dracula-background' : ''}
                      `}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                
                {/* Theme info */}
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-sm text-dracula-foreground">
                      {t.name}
                    </span>
                    {theme === t.id && (
                      <span className="text-xs px-1.5 py-0.5 rounded-md bg-dracula-cyan/20 text-dracula-cyan font-medium">
                        Active
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-dracula-comment mt-0.5">
                    {t.description}
                  </div>
                </div>
                
                {/* Checkmark for active theme */}
                {theme === t.id && (
                  <svg className="w-4 h-4 text-dracula-cyan flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            ))}
          </div>
          
          {/* Footer with keyboard hints */}
          <div className="px-3 py-2 bg-dracula-current-line/10 border-t border-dracula-current-line/20">
            <div className="text-xs text-dracula-comment space-y-1">
              <div className="flex items-center gap-2">
                <kbd className="px-1.5 py-0.5 rounded bg-dracula-current-line/30 text-dracula-foreground font-mono text-xs">↑↓</kbd>
                <span>Navigate</span>
                <kbd className="px-1.5 py-0.5 rounded bg-dracula-current-line/30 text-dracula-foreground font-mono text-xs">Enter</kbd>
                <span>Select</span>
              </div>
              <div className="text-dracula-comment/70">Hover to preview themes</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}