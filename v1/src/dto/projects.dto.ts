interface props {
  name: string
  description: string
  imageURI: string
  link?: string
}

export const projects: props[] = [
  {
    name: "Securado",
    description: "Secure what matters, track anywhere anytime. Experience real-time tracking built for safety and reliability.",
    imageURI: '/assets/projects/securado_project.png',
    link: 'https://securado.onrender.com'
  },
  {
    name: "Barangay San Roque (Ciudad)",
    description: "Connecting communities through digital innovation and transparent governance",
    imageURI: '/assets/projects/sanroque_project.png',
    link: 'https://sanroqueciudad.com'
  },
  {
    name: "Meiro",
    description: "2D maze horror game impelementing rule-based artificial intelligence. The game features a thrill of a shifting maze.",
    imageURI: '/assets/projects/meiro_project.png',
    link: 'https://meiro-1612b.web.app'
  },
]

export const projectsHomePage: props[] = projects.slice(0, 4)
