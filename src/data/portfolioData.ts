export interface Project {
  id: string;
  title: string;
  tags: string;
  description: string;
  image: string;
  link?: string;
  statusText?: string;
}

export interface EducationItem {
  id: string;
  title: string;
  institution: string;
  description: string;
  period: string;
  badge?: string;
  index?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  iconName: 'code' | 'server' | 'cloud' | 'repair' | 'desktop';
  category?: string;
  technologies?: string;
  description: string;
}

export interface SocialLink {
  label: string;
  shortLabel: string;
  href: string;
}

export const portfolioData = {
  personalInfo: {
    name: "Marvin Fabricante",
    roles: "FULL-STACK DEVELOPER & DEVOPS ENGINEER",
    headline: "MARVIN FABRICANTE — FULL-STACK DEVELOPER & DEVOPS ENGINEER",
    email: "hi@marvinfabricante630@gmail.com",
    contactEmail: "mailto:hi@marvinfabricante630@gmail.com",
    intro:
      "I am a Full-Stack Developer and DevOps Engineer with a passion for building scalable, high-performance web applications and resilient cloud infrastructure. My expertise spans modern frontend design, backend engineering with Java, Spring Boot, and .NET, along with containerization, CI/CD automation, and cloud deployments.",
    aboutParagraphs: [
      "I'm a Full-Stack Software Developer, System Administrator, and DevOps Engineer dedicated to delivering reliable end-to-end software solutions, enterprise server infrastructure, and hands-on computer systems servicing.",
      "My expertise spans web and desktop software with Next.js, FastAPI, Spring Boot, and .NET, alongside Windows & Linux system administration, cloud automation using Docker, Kubernetes, CI/CD, and AWS, and certified hardware, network, and system servicing.",
      "Let's connect if you're looking to collaborate on high-impact software, infrastructure, and technical projects!",
    ],
  },

  education: [
    {
      id: "bs-cs",
      index: "01",
      title: "BS in Computer Science",
      institution: "STI College Ortigas-Cainta",
      badge: "Undergraduate Degree",
      description:
        "Pursuing comprehensive computer science foundations, advancing expertise in data structures, algorithmic design, software engineering paradigms, and scalable distributed systems.",
      period: "August 2023 — Present",
    },
    {
      id: "css-servicing-tesda",
      index: "02",
      title: "Computer System Servicing NC II",
      institution: "TESDA",
      badge: "National Certification",
      description:
        "Certified competency in computer hardware assembly, OS configuration, system diagnostics, structured network cabling, and local area network (LAN) administration.",
      period: "January 2023 — May 2023",
    },
    {
      id: "smhs-ict",
      index: "03",
      title: "Information Communication Technology",
      institution: "Sumulong Memorial High School",
      badge: "Senior High Graduate",
      description:
        "Graduated with honors in specialized technical computing, developing foundational mastery in object-oriented programming, relational databases, and modern web application development.",
      period: "June 2021 — July 2024",
    },
    {
      id: "it-skills-olympics",
      index: "04",
      title: "IT Skills Olympics C# Programming",
      institution: "University of Makati",
      badge: "Regional Competition",
      description:
        "Represented university delegation in competitive programming, developing high-performance algorithmic solutions in C# under stringent execution time and accuracy criteria.",
      period: "November 2024",
    },
  ] as EducationItem[],

  projects: [
    {
      id: "automated-resume-analysis",
      title: "Automated Resume Analysis System",
      tags: "NEXT.JS, FASTAPI, REDIS, POSTGRESQL, DOCKER",
      description:
        "An enterprise-grade AI recruitment ecosystem and CS academic thesis developed for Mariwasa Siam Ceramics Inc. Features smart resume parsing (PDF/DOCX) using spaCy NLP, multi-factor match scoring, real-time candidate ranking, and dedicated portals for applicants, HR recruiters, and administrators.",
      image: "/mariwasa.png",
      link: "https://github.com/MarvinFabricante/Automated-Resume-Analysis",
      statusText: "Academic Thesis",
    },
    {
      id: "bangko-mabuhay",
      title: "Bangko Mabuhay",
      tags: "NEXT.JS, SPRING BOOT, SQL SERVER",
      description:
        "Bangko Mabuhay is a modern banking portal offering seamless online transactions, account management, and financial services with a user-friendly interface for everyday banking needs.",
      image: "/project2.png",
      link: "#",
    },
    {
      id: "devsync",
      title: "DevSync",
      tags: "NEXT.JS, SPRING BOOT, SPRING WEBSOCKETS, SQL SERVER",
      description:
        "DevSync is an e-learning platform that helps beginners learn web development with interactive tutorials, quizzes, and live collaboration features built on a robust .NET and Next.js stack.",
      image: "/project3.png",
      link: "#",
    },
  ] as Project[],

  services: [
    {
      id: "software-dev",
      title: "Full-Stack Software Development",
      iconName: "code",
      category: "Software Engineering",
      technologies: "Next.js • FastAPI • Spring Boot • REST / GraphQL • Nginx • RDBMS • Desktop Apps",
      description:
        "Engineering end-to-end web applications and native desktop software. Building high-performance APIs with FastAPI and Spring Boot, modern frontends in Next.js, relational database schemas (RDBMS), reverse proxies via Nginx, and native desktop clients.",
    },
    {
      id: "system-admin",
      title: "System Administration & Maintenance",
      iconName: "server",
      category: "Windows & Linux Server Administration",
      technologies: "Active Directory • Domain Controller • Group Policy • Remote Desktop • File Server • Ubuntu Server • SSH • Backups",
      description:
        "Administering and maintaining enterprise IT environments across Windows Server and Linux. Managing Active Directory, Domain Controllers, Group Policies, Remote Desktop access, automated backups, file servers, and hardened Ubuntu Linux servers via SSH.",
    },
    {
      id: "devops-cloud",
      title: "DevOps & Cloud Infrastructure",
      iconName: "cloud",
      category: "CI/CD & Cloud Orchestration",
      technologies: "Docker • Kubernetes • AWS • GitHub Actions • Jenkins • Prometheus • Linux",
      description:
        "Automating continuous integration and continuous deployment (CI/CD) pipelines with GitHub Actions and Jenkins. Containerizing workloads with Docker and Kubernetes, orchestrating resilient cloud services on AWS, and maintaining real-time monitoring with Prometheus on Linux.",
    },
    {
      id: "repair-servicing",
      title: "Computer System Servicing & Repair",
      iconName: "repair",
      category: "Hardware, Network & OS Maintenance",
      technologies: "Hardware Assembly • OS Installation • LAN Cabling • Network Configuration • System Troubleshooting",
      description:
        "Comprehensive computer system troubleshooting, hardware assembly, and repair. Installing and optimizing operating systems, structured LAN network cabling, hardware diagnostics, component replacements, and reliable local network configuration.",
    },
  ] as ServiceItem[],

  socials: [
    {
      label: "LinkedIn",
      shortLabel: "IN",
      href: "https://linkedin.com/in/marvinfabricante",
    },
    {
      label: "GitHub",
      shortLabel: "GH",
      href: "https://github.com/marbs605",
    },
    {
      label: "X (Twitter)",
      shortLabel: "X",
      href: "https://x.com/marbs605",
    },
    {
      label: "Instagram",
      shortLabel: "IG",
      href: "https://instagram.com/ignicoach",
    },
  ] as SocialLink[],
};
