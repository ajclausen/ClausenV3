export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issuerUrl: string;
  badgeImage: string;
  dateEarned: string;
  expirationDate?: string;
  credentialId?: string;
  verificationUrl?: string;
  description?: string;
  skills?: string[];
}

export const certifications: Certification[] = [
  {
    id: "comptia-aplus",
    name: "CompTIA A+",
    issuer: "CompTIA",
    issuerUrl: "https://www.comptia.org",
    badgeImage: "/images/CompTIA_A_2B.png",
    dateEarned: "2025",
    expirationDate: "2026",
    credentialId: "COMP001234567", // Replace with your actual credential ID
    verificationUrl: "https://www.credly.com/badges/your-badge-id", // Replace with your actual verification URL
    description: "Industry-standard certification validating foundational IT skills and technical proficiency in hardware, software, networking, and security.",
    skills: [
      "Hardware Troubleshooting",
      "Operating Systems",
      "Network Fundamentals",
      "Security Best Practices",
      "Mobile Devices",
      "Cloud Computing Basics"
    ]
  }
];

// Future certifications you might add
export const plannedCertifications = [
  "CompTIA Network+",
  "CompTIA Security+",
  "AWS Certified Solutions Architect",
  "Cisco CCNA"
];