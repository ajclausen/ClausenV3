export interface Education {
  id: string;
  degree: string;
  field: string;
  institution: string;
  institutionUrl: string;
  dateRange: string;
  location: string;
  description?: string;
  achievements?: string[];
  relevantCourses?: string[];
}

export const education: Education[] = [
  {
    id: "bsnes",
    degree: "Bachelor of Science",
    field: "Network Engineering and Security (BSNES)",
    institution: "Currently Pursuing",
    institutionUrl: "#",
    dateRange: "In Progress",
    location: "Remote",
    description: "Formalizing my practical experience with comprehensive studies in network architecture, security protocols, and system administration.",
    relevantCourses: [
      "Network Security",
      "Cloud Infrastructure",
      "System Architecture",
      "Database Management",
      "Cybersecurity Fundamentals"
    ]
  },
  {
    id: "apprentice-university",
    degree: "Hands-On Program",
    field: "Full-Stack Development & Systems",
    institution: "Apprentice University",
    institutionUrl: "https://apprenticeuniversity.com",
    dateRange: "2017 - 2020",
    location: "Indianapolis, IN",
    description: "Intensive project-based learning program that transformed me from zero technical knowledge to production-ready engineer through real client work.",
    achievements: [
      "Managed university's web presence in exchange for tuition reduction",
      "Successfully recovered compromised WordPress site through manual inspection",
      "Completed multiple client projects while learning"
    ]
  }
];