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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  python,
  invoice,
  invoice1,
  medilink,
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
    id: "contact",
    title: "Contact",
  },
];

const createSkillIcon = (label, background, textColor = "#FFFFFF") =>
  `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256"><rect width="256" height="256" rx="64" fill="${background}"/><text x="50%" y="52%" dominant-baseline="middle" text-anchor="middle" font-family="Poppins, sans-serif" font-size="96" font-weight="700" fill="${textColor}">${label}</text></svg>`
  )}`;

const services = [
  {
    title: "App Development Specialist",
    icon: mobile,
  },
];

const technologies = [
  { name: "Python", icon: python },
  { name: "C Programming", icon: createSkillIcon("C", "#5C6BC0") },
  { name: "Flutter", icon: createSkillIcon("Fl", "#02569B") },
  { name: "Firebase", icon: createSkillIcon("Fb", "#FFCA28", "#1A1A1A") },
  { name: "Git & GitHub", icon: createSkillIcon("Git", "#F1502F") },
  { name: "SQL", icon: createSkillIcon("SQL", "#0F9D58") },
];

const experiences = [
  {
    title: "Community Impact & Advocacy Intern",
    company_name: "Jivanamasteya Trust",
    icon: creator,
    iconBg: "#383E56",
    date: "June 2025 – July 2025",
    points: [
      "Contributed to community impact and advocacy initiatives focused on social welfare and sustainable development.",
      "Assisted in planning and executing awareness programs and outreach activities to engage local communities.",
      "Conducted research and gathered data to support advocacy campaigns and reports.",
      "Collaborated with team members and mentors to enhance project outcomes and community engagement strategies.",
      "Gained hands-on experience in NGO operations, communication, and impact assessment.",
    ],
  },
];

const projects = [
  {
    name: "Smart Business Management App",
    description:
      "Comprehensive business management application with intelligent invoice generation. Features a modern dashboard with quick stats, invoice tracking, business setup interface, and easy navigation. Streamlines invoicing workflows with customizable templates, real-time tracking, and automated reminders. Built with Flutter and Dart for cross-platform performance.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "dart",
        color: "green-text-gradient",
      },
    ],
    image: invoice,
    images: [invoice, invoice1],
    source_code_link: "https://github.com/",
  },
  {
    name: "MediLink",
    description:
      "Healthcare platform connecting patients, doctors, and pharmacies with AI consultations, video calls, and related services. Enables seamless healthcare delivery through smart rural care solutions, instant access to medical professionals, and integrated pharmacy services.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: medilink,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
