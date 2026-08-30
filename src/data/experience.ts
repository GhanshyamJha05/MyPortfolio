export type ExperienceEntry = {
  id: string
  org: string
  role: string
  type: 'Full time' | 'Part time' | 'Internship' | 'Contract' | 'Academic'
  dates: string
  location: string
  description: string
  tags?: string[]
}

export type ExperienceTab = 'work' | 'hackathons' | 'education'

export const work: ExperienceEntry[] = [
  {
    id: 'myunione',
    org: 'MyUnione',
    role: 'Backend Developer & QA Tester',
    type: 'Internship',
    dates: 'Jan 2026 – Mar 2026',
    location: 'Remote',
    description:
      'Developed and maintained backend APIs and microservices. Conducted comprehensive end-to-end, unit, and integration testing to resolve critical issues and strengthen software quality. Optimized API response times and database queries, improving application performance by 20%+ through backend refactoring and caching strategies.',
    tags: ['Microservices', 'QA Testing', 'Performance Optimization'],
  },
]

export const hackathons: ExperienceEntry[] = [
  {
    id: 'ideathon-1',
    org: 'Ideathon 1.0, LIET',
    role: 'Backend Developer',
    type: 'Academic',
    dates: 'Dec 2025',
    location: 'Noida',
    description:
      'Developed backend architecture for MindMate, a mental wellness application. Designed API endpoints for user session management and personalized content delivery, ensuring scalability under strict time constraints.',
    tags: ['Backend Architecture', 'API Design'],
  },
  {
    id: 'hacktoberfest-2025',
    org: 'Hacktoberfest 2025',
    role: 'Open Source Contributor',
    type: 'Academic',
    dates: 'Oct 2025',
    location: 'Remote',
    description:
      'Identified and resolved bugs across multiple open-source repositories. Merged 6 Pull Requests across diverse projects, earning GitHub\'s Pull Shark badge (×2), along with the YOLO and Quickdraw achievements.',
    tags: ['Open Source', 'GitHub', 'Bug Fixing'],
  },
  {
    id: 'cmr-hackathon',
    org: 'CMR Hackathon 2.0',
    role: 'Backend Developer',
    type: 'Academic',
    dates: 'Jan 2025 – Feb 2025',
    location: 'Hyderabad',
    description:
      'Architected and implemented RESTful APIs in Python for Smart-School Wallet, a unified payment and health-monitoring platform. Designed database schemas enabling real-time transaction processing and synchronized health data.',
    tags: ['Python', 'REST APIs', 'Database Schema'],
  },
]

export const education: ExperienceEntry[] = [
  {
    id: 'kit-kanpur',
    org: 'Kanpur Institute of Technology',
    role: 'B.Tech, Computer Science & Engineering (CSE)',
    type: 'Academic',
    dates: '2023 – 2027',
    location: 'Kanpur, UP',
    description: 'Relevant Coursework: Data Structures & Algorithms, Backend Development, AI/ML Fundamentals, and Server Architecture. Completed a capstone project developing AI-based solutions for automation of key workflows.',
  },
]

export const experienceTabs: { id: ExperienceTab; label: string; data: ExperienceEntry[] }[] = [
  { id: 'work', label: 'Work', data: work },
  { id: 'hackathons', label: 'Hackathons', data: hackathons },
  { id: 'education', label: 'Education', data: education },
]

