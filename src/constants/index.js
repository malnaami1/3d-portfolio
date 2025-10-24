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
  memoryLane,
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
    title: "Mobile App Developer",
    icon: mobile,
  },
  {
    title: "Systems Programmer",
    icon: backend,
  },
  {
    title: "Game Designer",
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
      "DevDiary is a Markdown-based logging platform built for developers to document bugs, errors, and setup processes across coding projects, helping you debug faster and more efficiently.",
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
        name: "Express",
        color: "orange-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "CodeBERT",
        color: "orange-text-gradient",
      },
      {
        name: "Node.js",
        color: "double-green-text-gradient",
      },
    ],
    image: devDiary,
    source_code_link: "https://github.com/acm-projects/DevDiary",
  },
  {
    name: "Memory Lane",
    description:
      "WEHack25 WINNER! Memory Lane is a mobile app designed to connect users with local businesses that match their interests. With intelligent recommendations powered by Python algorithms, you can always find something to do.",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "Expo/Go",
        color: "green-text-gradient",
      },
      {
        name: "Typescript",
        color: "pink-text-gradient",
      },
      {
        name: "Python",
        color: "orange-text-gradient",
      },
      {
        name: "Figma",
        color: "pink-text-gradient",
      },
    ],
    image: memoryLane,
    source_code_link: "https://github.com/enayas/wehack2025",
  },
  {
    name: "Knight Attack!",
    description:
      "Injustice, beware, its the Knight Attack! This is a 2D platform game where you play as the Knight in Silver Armor, scouring the land for any injustices (ehm, zombies!) and bringing light back once and for all.",
    tags: [
      {
        name: "Godot",
        color: "blue-text-gradient",
      },
      {
        name: "GDScript",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "orange-text-gradient",
      },
      {
        name: "Blender",
        color: "pink-text-gradient",
      },
    ],
    image: twodplatform,
    source_code_link: "https://github.com/malnaami1/knight-attack",
  },
];

export { services, technologies, experiences, projects };