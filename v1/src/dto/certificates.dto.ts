interface props {
  title: string
  subtitle: string
  fileName: string
}

export const certificates: props[] = [
  {
    title: 'GALACTIC Problem Solver',
    subtitle: '2024 NASA Space Apps Challenge',
    fileName: 'GALACTIC.pdf'
  },
  {
    title: 'GALACTIC Problem Solver',
    subtitle: '2025 NASA Space Apps Challenge',
    fileName: 'GALACTIC2025.pdf'
  },
  {
    title: 'DevFest Cebu 2025',
    subtitle: 'Google Developer Groups Cebu',
    fileName: 'Devfest 2025 Cert - (Araneta Paolo) .pdf'
  },
  {
    title: 'AI Pilipinas Certificate',
    subtitle: 'AI Pilipinas',
    fileName: 'AIPilipinasCertificate.pdf'
  },
  {
    title: 'AI Ready ASEAN',
    subtitle: 'AI Ready ASEAN',
    fileName: 'AI READY ASEAN.pdf'
  },
  {
    title: 'ASEAN AI Hackathon 2026',
    subtitle: 'ASEAN AI',
    fileName: 'ASEAN AI HACKATHON 2026.pdf'
  },
  {
    title: 'ASEAN AI',
    subtitle: 'Mapua Malayan Colleges Laguna',
    fileName: 'ASEAN AI - Mapua Malayan Colleges Laguna.png'
  },
  {
    title: 'AWS AI Practitioner Challenge',
    subtitle: 'Amazon Web Services',
    fileName: 'AWS AI Practitioner Challenge.pdf'
  },
  {
    title: 'Build with AI Cebu 2026',
    subtitle: 'Build with AI Cebu',
    fileName: 'Build with AI Cebu 2026.png'
  },
  {
    title: 'Data Analytics Fundamentals',
    subtitle: 'Data analytics certificate',
    fileName: 'Data Analytics Fundamentals.pdf'
  },
  {
    title: 'Google AI Professional',
    subtitle: 'Google AI certificate',
    fileName: 'Google AI Professional.pdf'
  },
  {
    title: 'IBM Dev Day Bob Edition',
    subtitle: 'IBM Dev Day certificate',
    fileName: 'IBM Dev Day Bob Edition Certificates.pdf'
  },
  {
    title: 'OLTEK Certificate',
    subtitle: 'OLTEK',
    fileName: 'oltek_cert.jpg'
  },
  {
    title: 'Reply AI Agent Challenge',
    subtitle: 'Reply',
    fileName: 'Reply AI Agent Challenge.pdf'
  }
]

export const certificatesHomePage: props[] = certificates.slice(0, 3)
