export interface Project {
  id: string;
  title: string;
  url?: string;
  description: string;
  imageUrl?: string;
  technologies: string[];
  githubUrl?: string;
  githubStars?: string;
  year: string;
  madeAt?: string;
}

export const projects: Project[] = [
  {
    id: "spotify-course",
    title: "Build a Spotify Connected App",
    url: "https://www.newline.co/courses/build-a-spotify-connected-app",
    description: "Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.",
    imageUrl: "/images/spotify-course.jpg",
    technologies: [],
    year: "2020",
    madeAt: "newline"
  },
  {
    id: "spotify-profile",
    title: "Spotify Profile",
    url: "https://spotify-profile.herokuapp.com/",
    description: "Web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
    imageUrl: "/images/spotify-profile.jpg",
    technologies: ["React", "Express", "Spotify API", "Heroku"],
    githubUrl: "https://github.com/bchiang7/spotify-profile",
    githubStars: "689",
    year: "2020",
    madeAt: "Personal"
  },
  {
    id: "halcyon-theme",
    title: "Halcyon Theme",
    url: "https://halcyon-theme.netlify.app/",
    description: "Minimal dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more.",
    imageUrl: "/images/halcyon-theme.jpg",
    technologies: [],
    githubUrl: "https://marketplace.visualstudio.com/items?itemName=brittanychiang.halcyon-vscode",
    githubStars: "100k+ Installs",
    year: "2019",
    madeAt: "Personal"
  },
  {
    id: "v4",
    title: "brittanychiang.com (v4)",
    url: "https://v4.brittanychiang.com/",
    description: "An old portfolio site built with Gatsby with 6k+ stars and 3k+ forks",
    imageUrl: "/images/v4.jpg",
    technologies: ["Gatsby", "Styled Components", "Netlify"],
    githubUrl: "https://github.com/bchiang7/v4",
    githubStars: "7,938",
    year: "2021",
    madeAt: "Personal"
  }
];