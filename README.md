# Portfolio Website

A modern portfolio website inspired by Brittany Chiang's design, built with Next.js 15, TypeScript, and Tailwind CSS v4.

## Tech Stack

- **Framework:** Next.js 15 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Font:** Inter (via Next.js Font Optimization)
- **Deployment:** Vercel

## Design Credits

This portfolio design is inspired by [Brittany Chiang's portfolio](https://brittanychiang.com). The implementation is original, with proper attribution included in the footer.

## Features Implemented

✅ **Core Setup**
- Next.js 15 project with TypeScript
- Tailwind CSS v4 configuration
- Inter font integration
- Custom color scheme matching the original design

✅ **Layout & Structure**
- Two-column layout (fixed left, scrollable right)
- Responsive design (mobile-first approach)
- Smooth scrolling sections
- Accessibility features (skip to content, ARIA labels)

✅ **Components**
- Header with name and title
- Navigation with hover effects
- Social media links with SVG icons
- About section
- Footer with attribution

## Color Palette

```css
--navy: #0a192f;
--light-navy: #112240;
--lightest-navy: #233554;
--slate: #8892b0;
--light-slate: #a8b2d1;
--lightest-slate: #ccd6f6;
--white: #e6f1ff;
--cyan: #64ffda;

/* Text hierarchy colors */
--slate-400: rgb(148 163 184);  /* Body text (darker) */
--slate-200: rgb(226 232 240);  /* Links (lighter) */
--teal-300: rgb(94 234 212);    /* Hover states (bright) */
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

## Project Structure

```
portfolio-website/
├── app/
│   ├── layout.tsx      # Root layout with Inter font
│   ├── page.tsx        # Main portfolio page
│   └── globals.css     # Global styles and Tailwind imports
├── components/         # (To be created for modular components)
├── data/              # (To be created for experience/projects data)
└── public/            # Static assets
```

## Remaining Tasks

See [TODO.md](./TODO.md) for the complete list of remaining features to implement.

## Development Notes

- Using Tailwind CSS v4 with the new CSS-first configuration approach
- The `@theme` directive is used to define custom design tokens
- Smooth scrolling is enabled via CSS for better performance
- The layout uses CSS Grid and Flexbox for responsive design

### Recent Changes (Text Styling Refactor)
- Refactored text colors to follow a clear visual hierarchy:
  - Body text: `text-slate-400` (darker gray, rgb(148 163 184))
  - Links: `text-slate-200` (lighter gray, rgb(226 232 240))
  - Hover states: `hover:text-teal-300` (bright teal, rgb(94 234 212))
- Updated all sections (About, Experience, Projects, Writing) to use consistent text colors
- Removed global body color to allow Tailwind utility classes to work properly
- Added explicit color definitions in `@theme` block for Tailwind v4 compatibility

### Known Issues
- Text colors in About section may not render correctly in some cases - investigating Tailwind v4 color inheritance

## Attribution

- Design inspired by [Brittany Chiang](https://brittanychiang.com)
- Built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/)
- Deployed with [Vercel](https://vercel.com/)