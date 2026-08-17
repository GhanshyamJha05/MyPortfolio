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

// [PLACEHOLDER] I don't have your resume in this session — fill in your real employer(s) here.
// (Multiple AI tools you've used surfaced "MyUnione" as a possible employer — confirm before publishing,
// and never ship invented metrics like a specific % improvement unless it's actually true.)
export const work: ExperienceEntry[] = [
  {
    id: 'work-placeholder',
    org: '[YOUR_COMPANY]',
    role: '[YOUR_ROLE]',
    type: 'Internship',
    dates: '[START] – [END]',
    location: '[CITY / Remote]',
    description:
      '[PLACEHOLDER] 2–4 sentences on real impact — use metrics you can back up: % improvement, users served, scale handled.',
    tags: ['[stack]'],
  },
]

// Real — sourced from your GitHub README and profile.
export const hackathons: ExperienceEntry[] = [
  {
    id: 'cmr-hackathon',
    org: 'CMR Hackathon 2.0',
    role: 'Builder',
    type: 'Contract',
    dates: '2025',
    location: 'India',
    description:
      'Built and shipped a working prototype under competition time constraints.',
    tags: ['Rapid prototyping'],
  },
  {
    id: 'hacktoberfest-2025',
    org: 'Hacktoberfest',
    role: 'Open Source Contributor',
    type: 'Contract',
    dates: '2025',
    location: 'Remote',
    description:
      'Contributed merged pull requests across open-source repositories — part of an active OSS pattern reflected in 56 public repos and two Pull Shark achievements on GitHub.',
    tags: ['Open source'],
  },
  {
    id: 'ideathon',
    org: 'Ideathon',
    role: 'Contributor',
    type: 'Contract',
    dates: '[YEAR]', // [PLACEHOLDER] confirm year
    location: '[LOCATION]',
    description:
      'Built an innovative project for an ideathon competition using JavaScript and web technologies.',
    tags: ['JavaScript'],
  },
]

// [PLACEHOLDER] Add your real degree, institution, and dates.
export const education: ExperienceEntry[] = [
  {
    id: 'education-placeholder',
    org: '[YOUR_INSTITUTION]',
    role: '[YOUR_DEGREE], Computer Science & Engineering',
    type: 'Academic',
    dates: '[START] – [END]',
    location: '[CITY, COUNTRY]',
    description: '[PLACEHOLDER] Relevant coursework, focus areas, or honors.',
  },
]

export const experienceTabs: { id: ExperienceTab; label: string; data: ExperienceEntry[] }[] = [
  { id: 'work', label: 'Work', data: work },
  { id: 'hackathons', label: 'Hackathons', data: hackathons },
  { id: 'education', label: 'Education', data: education },
]
