// Edit this file to update your hero/about/contact content.
// Fields marked [PLACEHOLDER] need your input — search for that tag to find them all.

export const profile = {
  name: 'Ghanshyam Jha',
  initials: 'GJ',
  title: 'Software Engineer',
  kicker: 'const dev = { role: "builder" }',
  pitch:
    "I'm Ghanshyam, a full-stack and ML-leaning engineer — CSE undergrad who builds real things: web platforms, CLI tools, and game engines. Worked across web scraping infra, resume tooling, and hackathon-speed prototypes.",
  bioLong:
    "I'm a Computer Science & Engineering student who cares more about shipping working software than talking about it. My repos span Go, Python, and TypeScript — from a voxel-engine Minecraft clone to a high-throughput web scraper to production-style full-stack apps. I move fast in hackathons and slow down when the system needs to be correct.",
  chips: [
    {
      label: 'Full-stack + Systems',
      detail: 'React/Next.js on the front, Go and Python on the back — I like owning both ends.',
    },
    {
      label: 'Built Sentinel CLI',
      detail: 'A command-line tool for developer workflows — one of several CLI-first projects.',
    },
    {
      label: 'Hackathon-tested',
      detail: 'Hacktoberfest 2025 contributor, CMR Hackathon 2.0 — I build under real time pressure.',
    },
    {
      label: '56 repos and counting',
      detail: '82 GitHub stars, active OSS contributor with multiple merged pull requests.',
    },
  ],
  stats: [
    { label: 'Public repos', value: '56' },
    { label: 'GitHub stars', value: '82' },
    { label: 'OSS PRs merged', value: '6+' },
  ],
  resumeUrl: '/resume.pdf', // [PLACEHOLDER] drop your resume PDF in /public as resume.pdf
  email: 'ghanshyamjha05@gmail.com',
  social: {
    github: 'https://github.com/GhanshyamJha05',
    linkedin: 'https://www.linkedin.com/in/ghanshyam-jha-b967732a2/',
    twitter: 'https://x.com/gjha6048',
  },
  currentlyVibingTo: null as null | { label: string; spotifyEmbedUrl: string }, // [PLACEHOLDER] optional
  quote: 'Ship the thing. Then make it correct.', // [PLACEHOLDER] swap for a line that's actually yours
}
