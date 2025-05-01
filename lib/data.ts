export interface Skill {
  name: string
  proficiency: number // 0‑100
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert"
  tags: string[]
  description?: string
}

export interface SkillCategory {
  id: string
  name: string
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    name: "Frontend & Mobile",
    skills: [
      {
        name: "React",
        proficiency: 75,
        level: "Advanced",
        tags: ["Hooks", "Context API", "React Query"],
        description: "Building interactive UIs and managing component state",
      },
      {
        name: "TypeScript",
        proficiency: 70,
        level: "Advanced",
        tags: ["Types", "Generics", "Interfaces"],
      },
      {
        name: "Next.js",
        proficiency: 70,
        level: "Advanced",
        tags: ["App Router", "ISR", "SEO"],
      },
      {
        name: "React Native",
        proficiency: 60,
        level: "Intermediate",
        tags: ["Expo", "Mobile UI", "Cross‑platform"],
      },
      {
        name: "Tailwind CSS",
        proficiency: 70,
        level: "Advanced",
        tags: ["Responsive Design", "Utility Classes"],
      },
      {
        name: "JavaScript",
        proficiency: 80,
        level: "Advanced",
        tags: ["ES6+", "Async/Await", "DOM"],
      },
    ],
  },
  {
    id: "backend",
    name: "Backend & DevOps",
    skills: [
      {
        name: "Python",
        proficiency: 80,
        level: "Advanced",
        tags: ["Pandas", "NumPy", "Scikit‑learn"],
      },
      {
        name: "FastAPI",
        proficiency: 70,
        level: "Advanced",
        tags: ["REST", "Dependency Injection", "OpenAPI"],
      },
      {
        name: "Databases",
        proficiency: 60,
        level: "Intermediate",
        tags: ["MongoDB", "Firebase Firestore", "SQL"],
      },
      {
        name: "LangChain",
        proficiency: 60,
        level: "Intermediate",
        tags: ["Vector Stores", "Prompt Engineering"],
      },
      {
        name: "API Design",
        proficiency: 70,
        level: "Advanced",
        tags: ["REST", "Authentication", "Versioning"],
      },
      {
        name: "AWS / Cloud",
        proficiency: 50,
        level: "Intermediate",
        tags: ["S3", "EC2", "IAM"],
      },
    ],
  },
  {
    id: "tools",
    name: "Tools & Practices",
    skills: [
      {
        name: "Git",
        proficiency: 85,
        level: "Expert",
        tags: ["GitHub", "GitFlow", "Branching"],
      },
      {
        name: "Testing",
        proficiency: 55,
        level: "Intermediate",
        tags: ["Jest", "React Testing Library"],
      },
      {
        name: "CI/CD",
        proficiency: 50,
        level: "Intermediate",
        tags: ["GitHub Actions", "Automated Deployments"],
      },
      {
        name: "UI/UX Design",
        proficiency: 60,
        level: "Intermediate",
        tags: ["Figma", "Wireframing"],
      },
      {
        name: "Agile Methodologies",
        proficiency: 70,
        level: "Advanced",
        tags: ["Scrum", "Kanban"],
      },
    ],
  },
]

export const workExperiences = [
  /*
  {
    id: "tepia",
    title: "TEPIA",
    role: "Software Engineering Intern (Incoming)",
    description:
      "Joining TEPIA in summer 2025 to help build a React Native application with integrated AI features.",
    date: "Jun 2025 – Sep 2025",
    tags: ["React Native", "AI", "Mobile Development"],
    image: "tepia_logo.svg",
  },
  */
  {
    id: "akbari",
    title: "UC Irvine – Akbari Lab",
    role: "Technical Research Assistant",
    description:
      "Developed Python ML models (KNN, Bi‑LSTM) achieving 85 % accuracy in predicting neurological recovery from blood‑pressure signals in cardiac‑arrest rat studies.",
    date: "Mar 2024 – Jun 2024",
    tags: ["Python", "Machine Learning", "Signal Processing"],
    image: "/gillespie.jpg",
  },
  {
    id: "dosety",
    title: "Dosety",
    role: "Founder",
    description:
      "Bootstrapped an AI‑driven supplement management platform; shipped the MVP on Firebase/React and onboarded 51 active users in the first month.",
    date: "Oct 2023 – Present",
    tags: ["React", "TypeScript", "Firebase", "OpenAI API"],
    image: "dosetyc.png",
    links: {
      website: "https://dosety-landingpage.vercel.app/",
    },
  },
]

export const projects = [
  {
    id: "dosety",
    title: "Dosety – AI Supplement Platform",
    description:
      "Web app that prevents supplement overuse by generating personalised intake schedules using the OpenAI API.",
    date: "2024",
    tags: ["React", "TypeScript", "Firebase", "OpenAI API"],
    image: "dosety.png",
    links: {
      website: "https://dosety.com",
    },
  },
  {
    id: "caseloop",
    title: "CaseLoop Resource Platform",
    description:
      "Competition project for Ford Philanthropy: FastAPI backend that surfaces real‑time community resources for case managers via LangChain‑powered search.",
    date: "2024",
    tags: ["FastAPI", "LangChain", "Python"],
    image: "caseloop.png",
    links: {
      demo: "https://caseloop.org",
    },
  },
  {
    id: "recovery‑predictor",
    title: "Blood‑Pressure Recovery Predictor",
    description:
      "Python pipeline that analyses blood‑pressure signals and predicts neurological deficit scores; achieved 85 % accuracy in lab testing.",
    date: "2024",
    tags: ["Python", "KNN", "Bi‑LSTM"],
    image: "lab.png",
  },
  {
    id: "uioffice",
    title: "UI Office – Shared Workspace Website",
    description:
      "Landing page and admin dashboard for a Korean shared office solution, built with React and Next.js. The admin panel uses Prisma + PostgreSQL for content management and Pinata for image uploads.",
    date: "2025",
    tags: ["Next.js", "React", "Prisma", "PostgreSQL", "Pinata"],
    image: "uioffice.png",
    links: {
      website: "https://uioffice.kr/",
    },
  },
]
