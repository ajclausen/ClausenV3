export interface Experience {
  id: string;
  dateRange: string;
  title: string;
  company: string;
  companyUrl: string;
  previousTitles?: string[];
  description: string;
  technologies: string[];
  links?: {
    label: string;
    url: string;
  }[];
}

export const experiences: Experience[] = [
  {
    id: "eco-parking",
    dateRange: "Feb 2020 — Present",
    title: "System Engineer",
    company: "ECO Parking Technologies",
    companyUrl: "https://www.ecoparking.com",
    description: "Configure and deploy Ubiquiti networks for parking management systems. Lead product installations and manage complex systems integrations to ensure seamless operation of parking technology infrastructure.",
    technologies: ["Ubiquiti", "Network Configuration", "Systems Integration", "Product Installation"]
  },
  {
    id: "nexusopus",
    dateRange: "Oct 2017 — Mar 2020",
    title: "President",
    company: "NexusOpus",
    companyUrl: "#",
    description: "Founded and led a web development business focused on creating clean, modern websites for high-profile clients. Managed all aspects from client relations to design and WordPress development, delivering pixel-perfect digital experiences.",
    technologies: ["WordPress", "Web Design", "Client Management", "HTML", "CSS", "JavaScript"]
  },
  {
    id: "flexware",
    dateRange: "Sep 2019 — Jan 2020",
    title: "Junior Systems Engineer",
    company: "Flexware Innovation",
    companyUrl: "#",
    description: "Configured Ubiquiti networks and built gateway systems during an intensive apprenticeship. Gained hands-on experience training machine learning algorithms and working with cutting-edge technology infrastructure.",
    technologies: ["Ubiquiti", "Gateway Systems", "Machine Learning", "Network Configuration"]
  },
  {
    id: "diagnotes",
    dateRange: "Mar 2019 — Aug 2019",
    title: "Digital Assets Manager",
    company: "Diagnotes, Inc.",
    companyUrl: "#",
    description: "Managed company website and created compelling infographics to communicate complex medical information. Produced videography content for marketing campaigns, enhancing the company's digital presence.",
    technologies: ["Web Management", "Infographic Design", "Videography", "Content Creation"]
  },
  {
    id: "sincerely-hers",
    dateRange: "Sep 2018 — Mar 2019",
    title: "Assistant Marketing Coordinator",
    company: "Sincerely Hers",
    companyUrl: "#",
    description: "Optimized Amazon advertising campaigns by updating ad groups and cloning automatic campaigns to manual for better control. Gained valuable e-commerce and digital marketing experience in a fast-paced retail environment.",
    technologies: ["Amazon Advertising", "E-commerce", "Digital Marketing", "Campaign Management"]
  }
];