import { Project, TimelineItem, SkillItem, StatItem, EducationItem, CertificateItem, PublicationItem } from "./types";

export const projectsData: Project[] = [
  {
    id: "candidate-portal",
    title: "Candidate Recruitment Portal",
    category: "Product | Intelligent HR-Tech",
    description: "An advanced, enterprise-grade portal simplifying specialized engineering candidate processing with smart workflows, dynamic evaluations, and automated feedback engines.",
    tech: ["React.js", "Express", "Supabase", "Tailwind CSS", "Motion"],
    imageSeed: "candidate",
    features: [
      "Dynamic multi-step evaluation logs with real-time feedback",
      "Interactive hiring boards and Kanban-style pipeline manager",
      "High-contrast interface optimized for fast corporate scans",
      "Robust client-side validation and rich visual filters"
    ]
  },
  {
    id: "hrms-platform",
    title: "Enterprise HRMS Platform",
    category: "Full-Stack Development | Management",
    description: "A centralized Human Resource Management System built to scale, featuring precise attendance, visual organization charts, performance tracking, and automated reporting.",
    tech: ["Typescript", "React", "PostgreSQL", "Recharts", "Node.js"],
    imageSeed: "hrms",
    features: [
      "Dynamic graphical personnel reporting dashboards",
      "Custom leaves and attendance managers with fast verification",
      "Automated PDF evaluation exporter and digital signing",
      "Granular role-based security configurations"
    ]
  },
  {
    id: "immigration-manager",
    title: "Immigration Case Management System",
    category: "Automation | Legal Workflows",
    description: "A high-compliance legal automation system streamlining critical visa petitions and workflow statuses. Dramatically reduces manual follow-up triggers and paperwork validation delays.",
    tech: ["React", "Express.js", "SQL", "Cron-Handlers", "Glassmorphism"],
    imageSeed: "immigration",
    features: [
      "Automated document status audit tracks with compliance checks",
      "Predefined notification relays for scheduled renewal milestones",
      "Secure cloud vault with automated index generation",
      "Dynamic interactive legal workflow progress timeline"
    ]
  },
  {
    id: "ai-auto-recipes",
    title: "AI Automation Workflows",
    category: "AI Integration & Workflows",
    description: "A series of state-of-the-art automated pipelines utilizing Prompt Engineering to streamline high-density information digests, web scrapers, and smart scheduling relays.",
    tech: ["Prompt Engineering", "Google GenAI", "Python", "Slack-Hooks", "Vite"],
    imageSeed: "automation",
    features: [
      "Automated incoming thread digestion with high-fidelity summaries",
      "Smart calendar optimizer matching priority parameters",
      "Custom vector-grounding scripts mapping product specs",
      "Multi-agent task dispatcher built with advanced prompts"
    ]
  },
  {
    id: "image-caption-generator",
    title: "Image Caption Generator Using Deep Learning",
    category: "Deep Learning | Computer Vision",
    description: "An AI-powered application featuring custom image parsing pipelines and backend API validation to generate accurate, context-aware caption reports.",
    tech: ["Python", "Flask", "TensorFlow", "Keras", "Model Testing"],
    imageSeed: "caption",
    features: [
      "Developed an AI-powered application with backend API integration and response validation.",
      "Worked on data preprocessing, workflow optimization, and model testing.",
      "Integrated Flask APIs for real-time request handling and output generation.",
      "Improved system accuracy through iterative debugging and validation processes."
    ]
  },
  {
    id: "student-performance-analysis",
    title: "Student Performance Analysis & ML Dashboards",
    category: "Data Analytics | Power BI & Python",
    description: "An academic reporting and telemetry suite automating data validation and presenting rich student insights on live metrics and performance trends.",
    tech: ["Power BI", "Python", "SQL", "Data Modeling", "Predictive Reporting"],
    imageSeed: "analytics_pb",
    features: [
      "Performed SQL-based data analysis and reporting on academic datasets.",
      "Built Power BI dashboards for monitoring performance trends and high-priority metrics.",
      "Automated analytical reporting workflows using structured Python scripts and SQL queries.",
      "Generated actionable insights and telemetry logs through data-driven evaluation techniques."
    ]
  },
  {
    id: "career-guidance-website",
    title: "Career Guidance Website for Undergraduates",
    category: "SaaS | Socially Relevant Project",
    description: "A highly structured, query-based recommendation platform helping college students discover potential career trajectories with optimized workflows.",
    tech: ["Java", "SQL", "Web Dev", "Query Optimization", "UX Design"],
    imageSeed: "guidance",
    features: [
      "Developed a structured query-based recommendation platform for undergraduate students.",
      "Worked on backend workflow optimization, relational validation, and secure API responses.",
      "Improved student interaction processes, usability scales, and form validation triggers.",
      "Maintained thoroughly indexed data routing structures to protect confidential student data."
    ]
  }
];


export const timelineData: TimelineItem[] = [
  {
    id: "timeline-1",
    years: "12/2026 - Present",
    role: "AI Intern",
    company: "Hrud.ai",
    location: "Visakhapatnam",
    achievements: [
      "Assisted in troubleshooting and validating AI-based conversational workflows to ensure robust operation.",
      "Worked on structured data handling and response optimization processes to deliver clean data streams.",
      "Supported debugging, issue tracking, and comprehensive system-level workflow documentation.",
      "Collaborated with developers in Agile spaces to improve system usability and operational performance.",
      "Participated actively in AI-assisted testing paradigms and conversational reply validation workflows."
    ],
    type: "internship",
    skillsGained: ["AI Workflows", "Structured Data Handling", "Agile Debugging", "Workflow Documentation"]
  },
  {
    id: "timeline-2",
    years: "05/2025 - 07/2025",
    role: "Java Full Stack Developer Intern",
    company: "Miracle Software Systems",
    location: "Bhogapuram, Vizianagaram",
    achievements: [
      "Assisted directly in backend validation and rigorous REST API testing using Postman toolsets.",
      "Performed SQL-based data validation queries, integrity checks, and debugging practices.",
      "Worked in Agile teams to identify, isolate, and resolve high-priority application issues.",
      "Participated heavily in software troubleshooting, enhancement tracking, and structured documentation.",
      "Gained critical exposure to deployment workflows, code environments, and system support processes."
    ],
    type: "internship",
    skillsGained: ["Java OOP", "SQL Data Validation", "REST APIs", "Agile Collaboration"]
  },
  {
    id: "timeline-3",
    years: "11/2022 - Present",
    role: "Bachelor of Technology (B.Tech)",
    company: "Maharaj Vijayaram Gajapathi Rai College of Engineering (MVGR)",
    location: "Vizianagaram",
    achievements: [
      "Maintaining an outstanding CGPA of 8.75/10.0 in B.Tech Computer Science Engineering foundations.",
      "Gained deep training in Cloud Computing, Computer Networks, Database Management Systems, Agile Development, OOP, and Software Engineering.",
      "Developed multiple socially relevant web systems, including the Career Guidance Website and ML-based Dashboards.",
      "Earned digital certifications across Salesforce virtual developer tracts, Google Android, Cisco, and Eduskills."
    ],
    type: "learning",
    skillsGained: ["Computer Networks", "Database Management", "Software Engineering", "Cloud Computing"]
  }
];

export const skillsData: SkillItem[] = [
  {
    name: "Java & OOP",
    category: "dev",
    level: 90,
    label: "Expert Coding",
    description: "Developing robust backend logic using Java, ensuring strict object-oriented design and modular software engineering principles."
  },
  {
    name: "SQL & DBMS",
    category: "dev",
    level: 88,
    label: "Relational Queries",
    description: "Structuring database schemas, performing structured data validation, and optimizing SQL queries for application reliability."
  },
  {
    name: "REST APIs & Testing",
    category: "dev",
    level: 92,
    label: "Technical Testing",
    description: "Creating, manipulating, and validating REST API endpoints with Postman, ensuring clean payload handling."
  },
  {
    name: "Power BI & Analytics",
    category: "ai",
    level: 89,
    label: "Data Intelligence",
    description: "Translating academic and operational datasets into scannable charts, interactive dashboards, and automated Python reports."
  },
  {
    name: "AI & Conversational Workflows",
    category: "ai",
    level: 93,
    label: "Intelligent Systems",
    description: "Troubleshooting conversational agents, optimizing workflows at Hrud.ai, and building image-to-caption AI models."
  },
  {
    name: "Cloud Computing & GCP",
    category: "dev",
    level: 85,
    label: "Cloud Solutions",
    description: "Leveraging Google Cloud Platform and Cloud Operations basics for environment management and support."
  },
  {
    name: "Agile & Team Coordination",
    category: "pm",
    level: 91,
    label: "Agile Lead",
    description: "Spearheading sprint workflows, executing structured documentation, and collaborating with cross-functional developers."
  }
];

export const statsData: StatItem[] = [
  {
    id: "stat-1",
    value: "7+",
    numericValue: 7,
    label: "Completed Projects",
    badge: "Full-Stack & ML"
  },
  {
    id: "stat-2",
    value: "8.75",
    numericValue: 9,
    label: "B.Tech CGPA",
    badge: "Academic Honor"
  },
  {
    id: "stat-3",
    value: "8+",
    numericValue: 8,
    label: "Credentials Earned",
    badge: "Verified Skills"
  },
  {
    id: "stat-4",
    value: "Active",
    numericValue: 1,
    label: "AI Internship Role",
    badge: "Real-World Experience"
  }
];

export const educationData: EducationItem[] = [
  {
    degree: "Bachelor of Technology",
    institution: "Maharaj Vijayaram Gajapathi Rai College of Engineering",
    years: "11/2022 – Present",
    location: "Vizianagaram",
    score: "CGPA: 8.75"
  },
  {
    degree: "Intermediate",
    institution: "Narayana Junior College",
    years: "06/2020 – 04/2022",
    location: "Vizianagaram",
    score: "Percentage: 85.9%"
  },
  {
    degree: "SSC",
    institution: "The sunschool",
    years: "06/2011 – 04/2020",
    location: "Vizianagaram",
    score: "Percentage: 85.4%"
  }
];

export const certificatesData: CertificateItem[] = [
  { title: "Introduction to Cloud Computing", provider: "NPTEL" },
  { title: "Team Leader and Effectiveness", provider: "NPTEL" },
  { title: "CCNAv7: Introduction to Networks", provider: "Cisco Networking Academy" },
  { title: "Java Full Stack Developer Internship Certificate", provider: "Miracle Systems" },
  { title: "Employability Skill Job Ready Virtual Internship", provider: "Eduskills" },
  { title: "AI-ML Virtual Internship", provider: "Eduskills" },
  { title: "Salesforce Developer Virtual Internship", provider: "SmartInternz" },
  { title: "Google Android Developer Virtual Internship", provider: "SmartInternz" }
];

export const publicationsData: PublicationItem[] = [
  {
    title: "Meet the Mentor Shaping the Future of Engineering Students! 🚀",
    description: "A blog highlighting the critical role of mentorship in computer engineering education, focusing on direct career development, skill-building, and peer empowerment.",
    type: "blog"
  },
  {
    title: "The Era of AI: A Threat or an Opportunity? 💼📂",
    description: "An article exploring the definitive impact of artificial intelligence on jobs, industries, and the future workforce, offering insights on how students prepare for an automated era.",
    type: "article"
  },
  {
    title: "Focused and Fearless — Personal Growth & Career Podcast",
    description: "Host of a high-engagement motivational podcast discussing productivity, structural discipline, a learning mindset, and helping peers stay dedicated to career milestones.",
    type: "podcast"
  }
];

export const interestsData: string[] = [
  "Cloud Technologies",
  "AI & Automation",
  "NSS Volunteering & Community Service",
  "Blogging & Content Writing",
  "Podcast Creation & Tech Discussions",
  "Infrastructure Support",
  "Technology Research"
];

