interface props {
  title: string
  subtitle: string
  imageURI: string
}

export const certificates: props[] = [
  {
    title: 'GALACTIC PROBLEM SOLVER',
    subtitle: '2024 NASA Space Apps Challenge',
    imageURI: '/assets/certificates/spaceapps2024.png'
  },
  {
    title: 'GALACTIC PROBLEM SOLVER',
    subtitle: '2025 NASA Space Apps Challenge',
    imageURI: '/assets/certificates/spaceapps2025.png',
  },
  {
    title: 'DevFest Cebu 2025',
    subtitle: 'Google Developer Groups Cebu',
    imageURI: '/assets/certificates/devfest2025.png',
  }
]

export const certificatesHomePage: props[] = certificates.slice(0, 3)