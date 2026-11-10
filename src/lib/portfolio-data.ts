export type Project = {
  title: string;
  repository: string;
  summary: string;
  technologies: string;
};

export type Experience = {
  company: string;
  role: string;
  period: string;
};

export const projects: Record<string, Project> = {
  modelToMarket: {
    title: "Model To Market",
    repository: "https://github.com/qlemon-56/model-to-market-2026",
    summary: "Trading hackathon where I created a mean reversion trading strategy.",
    technologies: "Python - MT5 API - Claude Agents",
  },
  arvid: {
    title: "Arvid",
    repository: "https://github.com/DungeonsInteractive/arvid",
    summary: "1st year electronics project 1 submission",
    technologies: "C++ - STM32",
  },
  projectiles: {
    title: "Projectile engine",
    repository: "https://github.com/qlemon-56/Projectiles",
    summary: "Attempting to replicate my professors projectiles quiz app",
    technologies: "C++",
  }, 
  loggingservice: {
    title: "Logging Service",
    repository: "https://github.com/qlemon-56/loggingservice",
    summary: "Logging service in C#",
    technologies: "C#",
  }
};

export const experiences: Record<string, Experience> = {
  zetron: {
    company: "Zetron UK",
    role: "Software Developer Intern",
    period: "August 2026 - Present",
  },
  ycc: {
    company: "York Community Consulting",
    role: "Software Developer",
    period: "March 2026 - Present",
  }

};

export const insightDays = [
  "Meet UBS - London",
  "Bank of America Quant Strats and Data Group Event", 
  "Deutsche Bank: Inspiring Future Leaders",
  "JPMC: Your Future in Tech"
];

export const extracurriculars = [
  "AI Engine's Model to Market Hackathon",
  "Manchester Formula Fusion 2026",
  "Silverstone - FSUK 2026",
];