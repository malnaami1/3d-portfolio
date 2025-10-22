import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  icode,
  acm,
  devDiary,
  jobit,
  twodplatform,
  threejs,
  ue5,
  godot,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "UI/UX Engineer",
    icon: backend,
  },
  {
    title: "Game Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Unreal Engine",
    icon: ue5,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "GoDot Engine",
    icon: godot,
  },
];

const experiences = [
  {
    title: "Instructor",
    company_name: "iCode",
    icon: icode,
    iconBg: "black",
    date: "Jan 2025 - May 2025",
    points: [
      "Instructed students in game design and development using Unreal Engine 5, emphasizing both technical and creative aspects of modern interactive media.",
      "Taught hands-on Blueprint scripting for gameplay logic, player mechanics, and interactive environments.",
      "Implemented collision detection systems, animation blueprints, and cinematic sequencing to bring gameplay elements and narratives to life",
      "Supervised the full game production pipeline, from concept and prototyping through polishing and final release, resulting in portfolio-ready Unreal Engine 5 games",
    ],
  },
  {
    title: "Full stack Engineer",
    company_name: "ACM Projects",
    icon: acm,
    iconBg: "white",
    date: "Aug 2025 - Present",
    points: [
      "Developing a responsive React/TypeScript UI for a developer logging platform, featuring AI-driven similar-log detection and automated solution recommendations",
      "Collaborating with backend to integrate secure authentication, authorization, and user data workflows with Node.js, Express, and MongoDB, ensuring reliable access control.",
      "Designing and optimizing RESTful APIs and database schemas for efficient log storage, search, and tagging, improving query performance and scalability.",
      "Building backend services to integrate with AI/LLM APIs (CodeBERT, OpenAI) for automated markdown documentation and search, reducing manual logging time.",
    ],
  }
];

const projects = [
  {
    name: "DevDiary",
    description:
      "Markdown-based logging platform built for developers to document bugs, errors, and setup processes across coding projects, helping you debug faster and more efficiently.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "CodeBERT",
        color: "orange-text-gradient",
      },
    ],
    image: devDiary,
    source_code_link: "https://github.com/acm-projects/DevDiary",
  },
  {
    name: "ShiftOh",
    description:
      "Test",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "2D Platformer",
    description:
      "2D Platform game",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: twodplatform,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };