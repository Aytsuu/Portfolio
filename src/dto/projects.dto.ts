interface props {
  name: string
  description: string
  techStack: string[]
  imageURI: string
  link?: string
}

export const projects = (theme: string): props[] => [
  {
    name: "Securado",
    description: "Secure what matters, track anywhere anytime. Experience real-time tracking built for safety and reliability.",
    techStack: ['TypeScript', 'React', 'Python', 'Django',  'Supabase', 'PostgreSQL', 'TailwindCSS'],
    imageURI: '/assets/projects/securado_project.png',
    link: 'https://securado.onrender.com'
  }, 
  {
    name: "Barangay San Roque (Ciudad)",
    description: "Connecting communities through digital innovation and transparent governance",
    techStack: ['TypeScript', 'React', 'Python', 'Django', 'Docker', 'Supabase', 'PostgreSQL', 'TailwindCSS'],
    imageURI: '/assets/projects/sanroque_project.png',
    link: 'https://sanroqueciudad.com'
  }, 
  {
    name: "Meiro",
    description: "2D maze horror game impelementing rule-based artificial intelligence. The game features a thrill of a shifting maze.",
    techStack: ['JavaScript', 'HTML', 'CSS', 'Flask', 'Python'],
    imageURI: '/assets/projects/meiro_project.png',
    link: 'https://meiro-1612b.web.app'
  }, 
  {
    name: "Portfolio",
    description: "My personal website, built to showcase my works and get a sense of progress in the field of software development.",
    techStack: ['TypeScript', 'React', 'Next.js', 'LangChain', 'TailwindCSS'],
    imageURI: `/assets/projects/portfolio_project_${theme === 'dark' ? 'light' : 'dark'}.png`,
    link: 'https://paoloaraneta.dev'
  },
]

export const projectsHomePage = (theme: string): props[] => projects(theme).slice(0, 4)