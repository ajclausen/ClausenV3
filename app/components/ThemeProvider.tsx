'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dracula' | 'alucard' | 'midnight' | 'forest';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('alucard');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Get theme from localStorage after mount
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme === 'alucard' || savedTheme === 'dracula' || savedTheme === 'midnight' || savedTheme === 'forest') {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      // Remove previous theme class
      document.documentElement.classList.remove('dracula', 'alucard', 'midnight', 'forest');
      // Add new theme class
      document.documentElement.classList.add(theme);
      localStorage.setItem('theme', theme);
    }
  }, [theme, mounted]);

  // Prevent flash by not rendering children until mounted
  if (!mounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}