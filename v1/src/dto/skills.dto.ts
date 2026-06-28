export interface Skill {
  title: string;
  description: string;
  items: string[];
  icon: string; // The Lucide icon identifier
}

export const skills: Skill[] = [
  {
    title: "System Design & Architecture",
    description: "Designing scalable, resilient, and highly performant system architectures.",
    items: ["Structured Monolithic", "Database Design", "Scaling"],
    icon: "layers"
  },
  {
    title: "API Integration",
    description: "Crafting and consuming robust RESTful APIs, GraphQL endpoints, and webhook architectures.",
    items: ["REST", "Webhooks", "WebSockets", "API Gateways"],
    icon: "plug"
  },
  {
    title: "Automation",
    description: "Streamlining operations, CI/CD pipelines, and workflows using scripts and schedules.",
    items: ["GitHub Actions", "Shell Scripting", "Workflow Automation", "Task Scheduling"],
    icon: "zap"
  },
  {
    title: "AI Systems",
    description: "Harnessing large language models, prompt engineering, and retrieval-augmented generation (RAG).",
    items: ["Prompt Engineering", "Context Engineering", "Harness Engineering", "RAG", "LangChain", "Multi-Agent Systems"],
    icon: "brain"
  },
  {
    title: "Agentic Engineering",
    description: "Creating autonomous, goal-oriented AI agents and multi-agent coordination frameworks.",
    items: ["ChatGPT", "Claude", "Gemini", "Cursor", "Antigravity", "GitHub Copilot"],
    icon: "bot"
  },
  {
    title: "Responsive Web App",
    description: "Engineering fluid, high-performance, and responsive web applications.",
    items: ["TypeScript", "React", "Next.js", "Astro", "Tailwind CSS"],
    icon: "monitor"
  },
  {
    title: "Clean UI",
    description: "Building pixel-perfect, accessible (WCAG), and animation-rich minimalist user interfaces.",
    items: ["Design Systems", "Accessibility (WCAG)", "Shadcn", "MagicUI"],
    icon: "palette"
  },
  {
    title: "Cloud Deployments",
    description: "Architecting secure cloud environments and automated deployments.",
    items: ["Docker", "AWS", "Supabase", "Firebase", "Vercel / Render", "Cloudflare"],
    icon: "cloud"
  }
];
