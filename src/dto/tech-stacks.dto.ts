interface props {
  type: string;
  items: string[];
}

export const techStacks: props[] = [
  {
    type: "Frontend",
    items: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Vite",
      "ESLint",
      "Prettier",
      "HTML",
      "CSS",
    ],
  },
  {
    type: "Backend",
    items: [
      "Python",
      "Node.js",
      "Django",
      "Flask",
      "PostgreSQL",
      "Java",
      "MongoDB",
      "REST",
      "MySQL",
    ],
  },
  {
    type: "AI & Machine Learning",
    items: [
      "TensorFlow",
      "PyTorch",
      "Numpy",
      "Hugging Face",
      "LangChain",
    ],
  },
  {
    type: "DevOps & Cloud",
    items: ["Docker", "Github Actions", "Supabase", "Firebase", "Vercel", "Render"],
  },
  {
    type: "Authentication",
    items: ["JWT", "OAuth"],
  },
  {
    type: "Developer Tools",
    items: ["Github", "Git", "VSCode", "Postman", "Trello", "Figma", "Canva"],
  },
  {
    type: "No Code - Low Code",
    items: ["WordPress"],
  },
];

export const techStacksHomePage: props[] = techStacks.map((stack) => ({
  type: stack.type,
  items: stack.items.slice(0, 5)
})).slice(0, 3)
