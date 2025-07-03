# TODO: Portfolio Website Development

## 🎉 Main Implementation Complete!

All core sections and features have been successfully implemented. The portfolio website now includes:

- ✅ Full layout with two-column design
- ✅ All content sections (About, Experience, Projects, Writing)
- ✅ Navigation with hover effects
- ✅ Social media links
- ✅ Responsive design
- ✅ Proper attribution to Brittany Chiang

## 🔄 Recent Updates

### Text Styling Refactor (Latest)
- ✅ Refactored text colors across all sections to follow visual hierarchy:
  - Body text: `text-slate-400` (darker gray)
  - Links: `text-slate-200` (lighter gray)
  - Hover states: `hover:text-teal-300` (bright teal)
- ✅ Updated navigation inactive states to use `text-slate-400`
- ✅ Fixed experience section date and description colors
- ✅ Updated projects section description colors
- ✅ Fixed writing section year labels
- ✅ Updated footer text color
- ✅ Fixed social media link colors

### Known Issues
- ⚠️ Text colors in About section not rendering as expected despite multiple fixes
- ⚠️ Possible Tailwind v4 color inheritance issue - needs further investigation

---

# Original TODO List

## ✅ Completed Tasks

1. **Set up Next.js 15 project with TypeScript and Tailwind CSS v4**
   - Created new Next.js app with TypeScript support
   - Configured Tailwind CSS v4 with new `@import` syntax
   - Set up PostCSS configuration

2. **Configure Inter font and global styles**
   - Imported Inter font using Next.js font optimization
   - Created custom color palette matching Brittany's design
   - Set up global CSS with custom properties
   - Added scrollbar styling and focus states

3. **Create root layout and main page structure**
   - Built two-column layout (fixed left, scrollable right)
   - Added responsive breakpoints
   - Implemented skip-to-content link for accessibility

4. **Build Header component with name and title**
   - Added name, title, and tagline
   - Styled with proper typography

5. **Create Navigation component with section links**
   - Built navigation with hover effects
   - Added line indicators that expand on hover
   - Hidden on mobile, visible on desktop

6. **Build SocialLinks component with icons**
   - Added GitHub, LinkedIn, CodePen, Instagram, and Goodreads icons
   - Implemented hover effects
   - Added proper ARIA labels

7. **Implement About section component**
   - Added section with sticky header on mobile
   - Included personal description matching the style
   - Added links with hover effects

8. **Add attribution and final polish**
   - Added footer with attribution to Brittany Chiang
   - Included technology stack information

## 📋 Remaining Tasks

### High Priority

1. **Create Experience section with timeline**
   - Build experience cards with:
     - Date ranges
     - Company names with links
     - Role titles (with role progression)
     - Job descriptions
     - Technology pills
     - Related links section
   - Add hover effects on cards
   - Implement timeline connector lines

2. **Build Projects section component**
   - Create project cards with:
     - Project titles with external links
     - Descriptions
     - Preview images
     - Technology stacks
     - GitHub stars (where applicable)
   - Add "View Full Project Archive" link

3. **Add Writing/Blog section**
   - Create blog post cards with:
     - Year indicators
     - Post titles with external links
     - Icon/image thumbnails
   - Simple list layout

### Medium Priority

4. **Componentize the codebase**
   - Extract components to separate files:
     - `components/Header.tsx`
     - `components/Navigation.tsx`
     - `components/SocialLinks.tsx`
     - `components/sections/About.tsx`
     - `components/sections/Experience.tsx`
     - `components/sections/Projects.tsx`
     - `components/sections/Writing.tsx`
     - `components/ExperienceCard.tsx`
     - `components/ProjectCard.tsx`
     - `components/BlogCard.tsx`

5. **Create data files**
   - `data/experience.ts` - Work experience data
   - `data/projects.ts` - Project information
   - `data/writing.ts` - Blog post links
   - `data/social.ts` - Social media links

### Low Priority

6. **Implement smooth scrolling and animations**
   - Add scroll-based navigation highlighting
   - Implement fade-in animations on scroll
   - Add hover animations for interactive elements
   - Consider adding the "Korok seeds" text animation

7. **Add interactive features**
   - Implement active section detection for navigation
   - Add keyboard navigation support
   - Consider adding a theme toggle (if desired)

8. **Performance optimizations**
   - Add image optimization for project screenshots
   - Implement lazy loading for images
   - Add meta tags for SEO
   - Create Open Graph images

9. **Mobile enhancements**
   - Improve mobile navigation (possibly add hamburger menu)
   - Optimize touch targets
   - Test on various devices

10. **Additional pages**
    - Create `/archive` page for all projects
    - Add 404 page
    - Consider adding a uses page

## 🎨 Design Refinements

- Fine-tune spacing and typography to match original
- Add subtle animations and transitions
- Ensure color contrast meets WCAG guidelines
- Test with screen readers

## 🚀 Deployment

- Set up Vercel deployment
- Configure custom domain (if applicable)
- Add analytics (if desired)
- Set up contact form or email integration

## 📝 Content Updates

- Replace placeholder content with your actual information
- Update all external links to your profiles
- Add your actual work experience
- Include your real projects
- Update meta descriptions and SEO content