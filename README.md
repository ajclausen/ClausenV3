# Portfolio Website

A modern portfolio website featuring the official Dracula theme with dark/light mode support, smooth scrolling, and responsive design. Built with Next.js 15, TypeScript, and Tailwind CSS v4.

## Tech Stack

- **Framework:** Next.js 15 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 with Dracula theme
- **Theme:** Official Dracula color scheme
- **Font:** Inter (via next/font)
- **Icons:** Custom SVG icons
- **Animation:** CSS transitions and custom smooth scrolling
- **Deployment:** Vercel

## Design Credits

This portfolio design is inspired by [Brittany Chiang's portfolio](https://brittanychiang.com). The implementation is original, with proper attribution included in the footer.

## Features

✅ **Theme System**
- Official Dracula theme implementation (dark mode)
- Alucard theme (light mode) with smooth transitions
- Theme persistence using localStorage
- No flash of unstyled content (FOUC)
- Subtle glassmorphic theme toggle button

✅ **Core Setup**
- Next.js 15 with App Router and TypeScript
- Tailwind CSS v4 with custom theme configuration
- Inter font integration via next/font
- Optimized for performance and SEO

✅ **Layout & Navigation**
- Two-column layout (fixed left sidebar, scrollable content)
- Responsive design with mobile-first approach
- Smooth scrolling with custom easing animations
- Active section tracking with visual indicators
- Accessibility features (skip to content, ARIA labels, reduced motion support)

✅ **Interactive Elements**
- Mouse hover bloom effect (adapts to theme)
- Social media links (GitHub, LinkedIn)
- Experience section with technology badges
- Project archive page
- Custom 404 page

✅ **Visual Effects**
- Cursor bloom effect with theme-aware colors
- Smooth transitions and animations
- Custom scrollbar styling
- Focus states with Dracula pink outlines

## Color Palette

### Dracula Theme (Dark Mode)
```css
--dracula-background: #282a36;    /* Background */
--dracula-current-line: #44475a;  /* Current Line/Selection */
--dracula-foreground: #f8f8f2;    /* Foreground (main text) */
--dracula-comment: #6272a4;       /* Comment (muted text) */
--dracula-cyan: #8be9fd;          /* Cyan (accents) */
--dracula-green: #50fa7b;         /* Green (links) */
--dracula-orange: #ffb86c;        /* Orange */
--dracula-pink: #ff79c6;          /* Pink (hover states) */
--dracula-purple: #bd93f9;        /* Purple (badges, highlights) */
--dracula-red: #ff5555;           /* Red */
--dracula-yellow: #f1fa8c;        /* Yellow */
```

### Alucard Theme (Light Mode)
```css
--dracula-background: #f8f8f2;    /* Light background */
--dracula-current-line: #e0e0e0;  /* Light gray */
--dracula-foreground: #282a36;    /* Dark text */
--dracula-comment: #6272a4;       /* Same comment color */
--dracula-cyan: #0fa5a5;          /* Darker cyan */
--dracula-green: #00a550;         /* Darker green */
--dracula-pink: #ff1493;          /* Deep pink */
--dracula-purple: #7c3aed;        /* Darker purple */
/* ... adjusted for light mode contrast */
```

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Usage

### Theme Toggle
Click the sun/moon icon in the top-right corner to switch between:
- 🌙 **Dracula** (Dark Mode) - The classic Dracula theme
- ☀️ **Alucard** (Light Mode) - A light variant with adjusted colors

Your theme preference is automatically saved and restored on your next visit.

## Project Structure

```
portfolio-website/
├── app/
│   ├── components/
│   │   ├── ThemeProvider.tsx  # Theme context provider
│   │   ├── ThemeToggle.tsx    # Theme switch button
│   │   └── SmoothScroll.tsx   # Smooth scrolling handler
│   ├── archive/
│   │   └── page.tsx           # Project archive page
│   ├── layout.tsx             # Root layout with theme setup
│   ├── page.tsx               # Main portfolio page
│   ├── not-found.tsx          # Custom 404 page
│   └── globals.css            # Global styles with Dracula theme
├── data/
│   ├── experience.ts          # Work experience data
│   └── projects.ts            # Project data
└── public/                    # Static assets (SVGs, etc.)
```

## Remaining Tasks

See [TODO.md](./TODO.md) for the complete list of remaining features to implement.

## Key Features & Implementation Details

### Theme System
- **Dracula/Alucard Themes**: Implemented using CSS custom properties and class-based switching
- **No Flash**: Theme is applied before render using an inline script
- **Persistence**: Theme preference saved to localStorage
- **Smooth Transitions**: All theme changes animate smoothly

### Performance Optimizations
- **Smooth Scrolling**: Custom implementation using `requestAnimationFrame` for 60fps scrolling
- **Easing Functions**: Cubic bezier easing for natural motion
- **Reduced Motion**: Respects user's motion preferences
- **Optimized Cursor Effect**: GPU-accelerated radial gradient that adapts to theme

### Accessibility
- **Keyboard Navigation**: Full keyboard support with visible focus states
- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **Skip Links**: Skip to content functionality
- **Color Contrast**: Meets WCAG standards in both themes

### Technical Decisions
- **Tailwind CSS v4**: Using the new CSS-first configuration with `@theme` directive
- **CSS Custom Properties**: For dynamic theme switching without JavaScript overhead
- **Context API**: For theme state management across components
- **suppressHydrationWarning**: Used strategically to handle browser extensions

## Attribution

- Design inspired by [Brittany Chiang](https://brittanychiang.com)
- Built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/)
- Deployed with [Vercel](https://vercel.com/)