export type Project = {
  id: string
  title: string
  status: string
  description: string
  tech: string[]
  links: { label: string; url: string }[]
  images: string[] // [PLACEHOLDER] add real screenshots to /public/projects/
  featured: boolean
}

export const projects: Project[] = [
  {
    id: 'car-rental',
    title: 'Car Rental Website',
    status: 'Production',
    description:
      'A complete platform for renting cars with a modern UI, built end-to-end in TypeScript and Next.js — from listing browse flows to booking.',
    tech: ['TypeScript', 'Next.js'],
    links: [{ label: 'GitHub', url: 'https://github.com/GhanshyamJha05/Car-Rental-Website' }],
    images: ['/projects/placeholder-1.svg'],
    featured: true,
  },
  {
    id: 'sentinel-cli',
    title: 'Sentinel CLI',
    status: 'CLI Tool',
    description:
      'A command-line developer tool built for speed and scriptability — the terminal on this site is a nod to it. [PLACEHOLDER] add a fuller description of what Sentinel actually watches/does.',
    tech: ['Go'],
    links: [{ label: 'GitHub', url: 'https://github.com/GhanshyamJha05?tab=repositories' }],
    images: ['/projects/placeholder-2.svg'],
    featured: true,
  },
  {
    id: 'web-scraper-go',
    title: 'Web Scraper (Go)',
    status: 'Production',
    description:
      'A high-performance web scraper written in Go to extract data efficiently at scale — one of the top-starred repos on the profile.',
    tech: ['Go'],
    links: [{ label: 'GitHub', url: 'https://github.com/GhanshyamJha05/WEB_SCRAPPER_Using-GO' }],
    images: ['/projects/placeholder-3.svg'],
    featured: true,
  },
  {
    id: 'resume-analyzer',
    title: 'AI Resume Analyzer',
    status: 'Research Project',
    description:
      'A JavaScript-based tool that parses and evaluates resumes — combining practical NLP techniques with a usable front-end for real feedback.',
    tech: ['JavaScript'],
    links: [{ label: 'GitHub', url: 'https://github.com/GhanshyamJha05/Resume_Analyzer' }],
    images: ['/projects/placeholder-4.svg'],
    featured: false,
  },
  {
    id: 'live-stock-tracker',
    title: 'Live Stock Tracker (Go)',
    status: 'Live',
    description:
      'Real-time stock tracking app with a Go backend feeding live price data to a JavaScript front end.',
    tech: ['Go', 'JavaScript'],
    links: [{ label: 'GitHub', url: 'https://github.com/GhanshyamJha05/Live_Stock_Tracker_usingGO' }],
    images: ['/projects/placeholder-5.svg'],
    featured: false,
  },
  {
    id: 'minecraft-clone',
    title: 'Minecraft Basic Clone',
    status: 'Research Project',
    description:
      'A voxel-based Minecraft-like game clone built with Python and the Ursina engine — chunk generation, block placement, and basic world physics from scratch.',
    tech: ['Python', 'Ursina Engine'],
    links: [{ label: 'GitHub', url: 'https://github.com/GhanshyamJha05/minecraft-basic-by-python' }],
    images: ['/projects/placeholder-6.svg'],
    featured: false,
  },
]
