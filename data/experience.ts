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
    companyUrl: "https://www.ecoparkingtechnologies.com",
    description: "Architect and maintain network infrastructure for 50+ smart parking facilities nationwide, including a 693-sensor Las Vegas casino with custom 10G fiber backhaul. Led company-wide migration from legacy APN to Cloudflare architecture, eliminating vendor lock-in and saving thousands monthly. Built three production applications that streamline operations: React-based cost calculator, full-stack project tracker with Ruby/Fishbowl integration, and network management tools.",
    technologies: ["React", "TypeScript", "Node.js", "Ruby", "PostgreSQL", "Docker", "Cloudflare Tunnels", "Ubiquiti UniFi", "10G Fiber", "Linux"]
  },
  {
    id: "nexusopus",
    dateRange: "Oct 2017 — Mar 2020",
    title: "President",
    company: "NexusOpus",
    companyUrl: "#",
    description: "School-initiated learning opportunity that evolved into managing Apprentice University's web presence. Successfully recovered website after security breach through manual file-by-file inspection. Negotiated tuition reduction in exchange for web management services. Gained hands-on experience with WordPress security, site migrations, and infrastructure management.",
    technologies: ["WordPress", "Security Recovery", "DNS Management", "FTP", "Database Administration", "Photoshop", "Illustrator"]
  },
  {
    id: "flexware",
    dateRange: "Sep 2019 — Jan 2020",
    title: "Junior Systems Engineer",
    company: "Flexware Innovation",
    companyUrl: "https://www.flexwareinnovation.com",
    description: "Started with zero Linux/networking experience and became primary technical resource within months. Built and deployed gateway hardware for smart parking systems, configured mesh networks, and annotated thousands of images for ML training. Impressed leadership leading to direct hire by client company (ECO) as their first full-time technical employee.",
    technologies: ["Ubuntu Server", "Linux CLI", "Ubiquiti", "DHCP", "IoT Sensors", "Machine Learning", "3D Printing", "Network Architecture"]
  },
  {
    id: "diagnotes",
    dateRange: "Mar 2019 — Aug 2019",
    title: "Digital Assets Manager",
    company: "Diagnotes, Inc.",
    companyUrl: "https://backlinehealth.com",
    description: "Managed WordPress site with HotJar analytics integration to track user behavior and improve UX. Created interview-driven marketing videos with motion graphics and designed infographics to simplify complex medical concepts. Analyzed Google Analytics data to inform design decisions and improve site navigation.",
    technologies: ["WordPress", "HotJar", "Google Analytics", "Premiere Pro", "After Effects", "Illustrator", "Photoshop", "UX Research"]
  },
  {
    id: "sincerely-hers",
    dateRange: "Sep 2018 — Mar 2019",
    title: "Assistant Marketing Coordinator",
    company: "Sincerely Hers",
    companyUrl: "https://sincerelyhers.com",
    description: "Managed Amazon PPC campaigns maintaining 6% ACoS target through strategic bid optimization. Built VBA macro to automate keyword bid adjustments, eliminating hours of manual work. Worked on API integration connecting Amazon to Microsoft Azure for streamlined marketing workflows.",
    technologies: ["Amazon Seller Central", "VBA/Excel Automation", "API Integration", "Azure", "E-commerce", "Shopify", "Advanced Excel"]
  },
  {
    id: "omnisource",
    dateRange: "2018",
    title: "Marketing Assistant",
    company: "OMNISource Marketing",
    companyUrl: "https://www.omni.cc",
    description: "Marketing and operations apprenticeship combining creative work with fulfillment operations. Updated Shopify sites with new graphics and content, assisted art team with Illustrator file updates, and managed order fulfillment operations including packing, shipping, and quality control.",
    technologies: ["Shopify", "Adobe Illustrator", "E-commerce", "Order Fulfillment", "Inventory Management"]
  },
  {
    id: "t2-systems",
    dateRange: "2018",
    title: "Software Developer",
    company: "T2 Systems",
    companyUrl: "https://www.t2systems.com",
    description: "Built REST/SOAP proxy bridge to connect legacy database with modern APIs. Integrated Sisense analytics into Jira dashboard for improved project visibility. Learned valuable lessons about requirements verification when discovering sign system used SOAP after building REST integration.",
    technologies: ["REST API", "SOAP", "Jira", "Sisense Analytics", "Service Proxy", "Mobile Testing"]
  },
  {
    id: "bitwise",
    dateRange: "2017",
    title: "Web Developer",
    company: "Bitwise Solutions",
    companyUrl: "https://www.silvertech.com",
    description: "Web development apprenticeship focused on WordPress development and QA testing. Performed comprehensive site testing for WCEI and other clients, debugged WordPress issues, created page layouts in Photoshop, and recorded Kentico CMS tutorial videos.",
    technologies: ["WordPress", "Kentico CMS", "Photoshop", "QA Testing", "Client Communication", "Slack"]
  }
];