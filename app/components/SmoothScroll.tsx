'use client';

import { useEffect } from 'react';

export default function SmoothScroll() {
  useEffect(() => {
    // Handle smooth scrolling for anchor links
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && link.hash && link.hash.startsWith('#')) {
        const targetId = link.hash.slice(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          e.preventDefault();
          
          // Calculate the target position
          const targetPosition = targetElement.offsetTop;
          const startPosition = window.pageYOffset;
          const distance = targetPosition - startPosition;
          const duration = 1000; // 1 second
          let start: number | null = null;
          
          // Easing function for smooth animation
          const easeInOutCubic = (t: number): number => {
            return t < 0.5 
              ? 4 * t * t * t 
              : 1 - Math.pow(-2 * t + 2, 3) / 2;
          };
          
          const animation = (currentTime: number) => {
            if (start === null) start = currentTime;
            const timeElapsed = currentTime - start;
            const progress = Math.min(timeElapsed / duration, 1);
            
            const ease = easeInOutCubic(progress);
            window.scrollTo(0, startPosition + distance * ease);
            
            if (timeElapsed < duration) {
              requestAnimationFrame(animation);
            } else {
              // Update URL hash after scrolling
              window.history.pushState(null, '', link.hash);
            }
          };
          
          requestAnimationFrame(animation);
        }
      }
    };
    
    // Add smooth scrolling to all internal links
    document.addEventListener('click', handleClick);
    
    // Handle browser back/forward navigation
    const handlePopState = () => {
      if (window.location.hash) {
        const targetElement = document.getElementById(window.location.hash.slice(1));
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };
    
    window.addEventListener('popstate', handlePopState);
    
    // Handle initial load with hash
    if (window.location.hash) {
      setTimeout(() => {
        const targetElement = document.getElementById(window.location.hash.slice(1));
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
    
    return () => {
      document.removeEventListener('click', handleClick);
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);
  
  return null;
}