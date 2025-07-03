export interface BlogPost {
  id: string;
  year: string;
  title: string;
  url: string;
  icon?: string; // emoji or icon identifier
}

export const blogPosts: BlogPost[] = [
  {
    id: "accessibility-pitfalls",
    year: "2024",
    title: "5 Common Accessibility Pitfalls and How to Avoid Them",
    url: "https://klaviyo.tech/5-common-accessibility-pitfalls-and-how-to-avoid-them-e316dfc55ff0",
    icon: "♿"
  },
  {
    id: "algolia-wordpress",
    year: "2020",
    title: "Integrating Algolia Search with WordPress Multisite",
    url: "https://upstatement.com/blog/integrating-algolia-search-with-wordpress-multisite/",
    icon: "🔭"
  },
  {
    id: "headless-cms",
    year: "2019",
    title: "Building a Headless Mobile App CMS From Scratch",
    url: "https://upstatement.com/blog/building-a-headless-mobile-app-cms-from-scratch/",
    icon: "🎃"
  }
];