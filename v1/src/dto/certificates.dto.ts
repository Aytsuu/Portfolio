interface props {
  title: string
  issuer: string
  fileName: string
}

export const certificates: props[] = [
  {
    title: '2024 NASA International Space Apps Challenge',
    issuer: 'NASA',
    fileName: 'GALACTIC.pdf'
  },
  {
    title: '2025 NASA International Space Apps Challenge',
    issuer: 'NASA',
    fileName: 'GALACTIC2025.pdf'
  },
  {
    title: 'DevFest Cebu 2025',
    issuer: 'Google Developer Groups Cebu',
    fileName: 'Devfest 2025 Cert - (Araneta Paolo) .pdf'
  },
  {
    title: 'AI Pilipinas Certificate',
    issuer: 'AI Pilipinas',
    fileName: 'AIPilipinasCertificate.pdf'
  },
  {
    title: 'AI Ready ASEAN',
    issuer: 'AI Singapore',
    fileName: 'AI READY ASEAN.pdf'
  },
  {
    title: 'ASEAN AI Hackathon 2026',
    issuer: 'Passage to ASEAN (P2A) Secretariat',
    fileName: 'ASEAN AI HACKATHON 2026.pdf'
  },
  {
    title: 'ASEAN AI Hackathon 2026',
    issuer: 'Mapua Malayan Colleges Laguna',
    fileName: 'ASEAN AI - Mapua Malayan Colleges Laguna.png'
  },
  {
    title: 'AWS AI Practitioner Challenge',
    issuer: 'Udacity',
    fileName: 'AWS AI Practitioner Challenge.pdf'
  },
  {
    title: 'Build with AI Cebu 2026',
    issuer: 'Google Developer Groups Cebu',
    fileName: 'Build with AI Cebu 2026.png'
  },
  {
    title: 'Data Analytics Fundamentals',
    issuer: 'DataSense Analytics',
    fileName: 'Data Analytics Fundamentals.pdf'
  },
  {
    title: 'Google AI Professional',
    issuer: 'Google',
    fileName: 'Google AI Professional.pdf'
  },
  {
    title: 'IBM Dev Day Bob Edition',
    issuer: 'IBM',
    fileName: 'IBM Dev Day Bob Edition Certificates.pdf'
  },
  {
    title: 'OLTEK Certificate',
    issuer: 'OLTEK',
    fileName: 'oltek_cert.jpg'
  },
  {
    title: 'Reply AI Agent Challenge',
    issuer: 'Reply',
    fileName: 'Reply AI Agent Challenge.pdf'
  },
  {
    title: 'USAII Global AI Hackathon 2026',
    issuer: 'USAII',
    fileName: 'USAII Finalist.png'
  }
]

export const certificatesHomePage: props[] = certificates.slice(0, 3)
