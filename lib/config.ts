import { SiteConfig } from "@/types";

/**
 * SINGLE SOURCE OF TRUTH.
 *
 * Edit this file to update the entire portfolio — name, bio, GitHub username,
 * skills, experience, certifications, testimonials, and social links all flow
 * from here into every page and component. Nothing else needs to change.
 *
 * Values below are pre-filled from the original portfolio content; replace
 * with your own.
 */
export const siteConfig: SiteConfig = {
  name: "Benjamin Florence Nicol E. Saludes",
   jobTitle: "Information Technology",
   tagline: "",
  bio: "Highly motivated IT professional eager to build a fulfilling career in software development. I bring hands-on experience across the system development lifecycle — application development, database design, test automation, and network implementation — and I'm continuing to learn, adapt, and grow with every project.",
   location: "Los Baños, Laguna, Philippines",
  email: "espanaflorence@gmail.com",
   githubUsername: "bnjmnspain",
   linkedinUrl: "https://www.linkedin.com/in/benjamin-florence-nicol-saludes-235426426/",
   resumeUrl: "/Portfolio/Benjami.Saludes.Resume.pdf",
  siteUrl: "https://bnjmnspain.github.io/Portfolio",

  socials: [
    { label: "GitHub", url: "https://github.com/bnjmnspain", icon: "github" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/benjamin-florence-nicol-saludes-235426426/", icon: "linkedin" },
    { label: "Email", url: "https://mail.google.com/mail/u/0/?fs=1&to=espanaflorence@gmail.com&tf=cm", icon: "mail" },
  ],

  softSkills: [
    "Problem solving",
    "Communication",
    "Adaptability",
    "Teamwork",
    "Ownership under deadlines",
  ],

  careerHighlights: [
    "Received the IBM Best Improved Award 2026 during a Solutions Delivery internship.",
    "Designed and shipped an end-to-end ordering system for 88 Hotspring Resort.",
    "Test automation, particularly in using Selenium for automated testing and documentation on the JAPAN CSU environment.",
  ],

  skills: [
    // Frontend
    { name: "TypeScript", category: "Frontend", level: 4, years: 1 },
    { name: "Next.js", category: "Frontend", level: 3, years: 1 },
    { name: "Tailwind CSS", category: "Frontend", level: 3, years: 1 },
    { name: "Web & UI Design", category: "Frontend", level: 3, years: 1 },
    // Backend
    { name: "Application Development", category: "Backend", level: 3, years: 1 },
    // Mobile
    { name: "Android Studio", category: "Mobile", level: 3, years: 1 },
    { name: "Java", category: "Mobile", level: 4, years: 2 },
    // Databases
    { name: "MySQL", category: "Databases", level: 4, years: 2 },
    { name: "MongoDB", category: "Databases", level: 3, years: 1 },
    { name: "Relational Database Design", category: "Databases", level: 4, years: 2 },
    // Cloud
    { name: "Private Cloud Infrastructure", category: "Cloud", level: 2, years: 1 },
    // DevOps
    { name: "GitBash / Version Control", category: "DevOps", level: 3, years: 1 },
    { name: "Hardware Configuration", category: "DevOps", level: 3, years: 2 },
    // Testing
    { name: "Selenium Testing", category: "Testing", level: 4, years: 1 },
    { name: "Test Automation Scripts", category: "Testing", level: 4, years: 1 },
    // Architecture
    { name: "System Development Lifecycle", category: "Architecture", level: 3, years: 1 },
    { name: "Networking Fundamentals", category: "Architecture", level: 3, years: 2 },
    // AI/LLM Tools
    { name: "C++", category: "AI/LLM Tools", level: 3, years: 2 },
  ],

  experience: [
    {
      company: "88 Hotspring Resort and Hotel",
      position: "Web Developer — Part-time",
      location: "Calamba, Laguna",
      start: "Jun 2026",
      end: "Jul 2026",
      responsibilities: [
        "Conceptualized and built an ordering system end-to-end.",
        "Designed friendly workflows for submitting and managing customer orders.",
      ],
       achievements: [
         "Shipped a working ordering system used by resort staff and guests.",
         "Identified opportunities to improve business processes through technology.",
       ],
     },
     {
       company: "IBM Solutions Delivery Philippines",
       position: "Intern",
       location: "UP-Ayala Land TechnoHub, Quezon City",
       start: "Feb 2026",
       end: "May 2026",
       responsibilities: [
         "Built and maintained automated test suites using Selenium.",
         "Used Java and Git/GitBash in day-to-day version-control workflows.",
       ],
       achievements: [
         "Received the IBM Best Improved Award 2026.",
         "Handled tasks independently against real deadlines in a professional IT environment.",
       ],
     },
  ],

  certifications: [
    {
      name: "CCNA: Switching, Routing, and Wireless Essentials",
      issuer: "Cisco",
      date: "2024",
      credentialUrl: "https://www.credly.com/badges/22b79af4-42c9-484e-b718-168cccbb8c18",
    },
    {
      name: "AWS Academy Graduate - Cloud Foundations",
      issuer: "Amazon Web Services",
      date: "2025",
      credentialUrl: "https://www.credly.com/go/RPo4AJ1Q",
    },
  ],

  education: [
    {
      institution: "De La Salle University",
      year: "2026",
      degree: "Bachelor of Science in Information Technology",
      location: "Taft Avenue, Metro Manila",
      thesis: "Endpoint Detection and Response Tool for Unmanaged Line of Physical and Isolated Virtual Machines for Private Cloud Infrastructure of DLSU CCS-TSG",
      mapUrl: "https://www.dlsu.edu.ph/",
    },
    {
      institution: "La Consolacion College of Daet",
      year: "2021",
      degree: "Senior High School",
      location: "Daet, Camarines Norte",
      note: "Science, Technology, Engineering, & Mathematics (STEM) Strand",
      mapUrl: "https://lcc-daet.edu.ph/",
    },
    {
      institution: "Jose Panganiban National High School",
      year: "2019",
      degree: "Junior High School",
      location: "Jose Panganiban, Camarines Norte",
      note: "Science, Technology, & Engineering (STE) Class",
      mapUrl: "https://www.facebook.com/p/DepEd-JPNHS-Senior-High-School-100072061396463/",
    },
  ],
};

export default siteConfig;
