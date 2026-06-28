interface props {
  title: string
  experiencedAt: string
  year: string
  location?: string
  highlights?: string[]
  skills?: string[]
}

export const experiences: props[] = [
  {
    title: 'Software Engineer Intern',
    experiencedAt: 'Dinnox IT Solutions',
    year: 'Feb 2026 - June 2026',
    location: 'Cebu City, Philippines',
    highlights: [
      'Led the development of a client-based website, implemented a structured monolithic architecture, and designed user workflows.',
      'Fixed a backend bug that heavily affected the development workflow of interns and senior developers.',
      'Increased team productivity by introducing automation tools and agentic engineering workflows.'
    ],
    skills: []
  },
  {
    title: 'Technical Training Instructor',
    experiencedAt: 'Barangay San Roque (Ciudad)',
    year: 'Aug 2025 - Oct 2025',
    location: 'Cebu City, Philippines',
    highlights: [
      'Served as a student trainer for the BarangayConnect Training Program, supporting 50+ local government workers through hands-on digital literacy training.',
      'Introduced and demonstrated key features of the barangay system to non-technical residents and staff.',
      'Conducted practical training sessions to assess and improve computer literacy and system usage skills.'
    ],
    skills: []
  },
  {
    title: 'BS Information Technology',
    experiencedAt: 'Cebu Technological University - Main Campus',
    year: '2022 - Expected July 2026',
    location: 'Cebu City, Philippines'
  }
]
