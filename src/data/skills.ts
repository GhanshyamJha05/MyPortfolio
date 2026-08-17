export type Skill = {
  name: string
  level: 'Expert' | 'Advanced' | 'Intermediate' | 'Beginner'
  detail: string
}

export type SkillCategory = {
  category: string
  skills: Skill[]
}

export const skills: SkillCategory[] = [
  {
    category: 'Languages',
    skills: [
      { name: 'Go', level: 'Advanced', detail: 'CLI tools, REST APIs, concurrency, web scrapers.' },
      { name: 'Python', level: 'Advanced', detail: 'FastAPI, LangGraph agents, data pipelines, automation.' },
      { name: 'TypeScript', level: 'Advanced', detail: 'Next.js frontends, type-safe full-stack apps.' },
      { name: 'JavaScript', level: 'Advanced', detail: 'React apps, tooling, real-time data front ends.' },
      { name: 'C++', level: 'Intermediate', detail: 'DSA, competitive programming, systems fundamentals.' },
      { name: 'Java', level: 'Intermediate', detail: 'Coursework and applied CS fundamentals.' },
    ],
  },
  {
    category: 'Backend & APIs',
    skills: [
      { name: 'FastAPI', level: 'Advanced', detail: 'Async endpoints, JWT auth, SQLAlchemy, OpenAPI docs.' },
      { name: 'REST API Design', level: 'Advanced', detail: 'Contracts, versioning, error handling, security practices.' },
      { name: 'Node.js', level: 'Intermediate', detail: 'API layers behind full-stack projects.' },
      { name: 'Docker', level: 'Intermediate', detail: 'Containerized dev environments, Docker Compose.' },
    ],
  },
  {
    category: 'AI & Agents',
    skills: [
      { name: 'OpenAI / GPT API', level: 'Advanced', detail: 'GPT-4 integration, function calling, prompt engineering.' },
      { name: 'LangGraph', level: 'Intermediate', detail: 'Multi-agent orchestration and state machines.' },
      { name: 'Resume/NLP tooling', level: 'Intermediate', detail: 'Built an AI-assisted resume analyzer.' },
    ],
  },
  {
    category: 'Databases',
    skills: [
      { name: 'PostgreSQL', level: 'Advanced', detail: 'Schema design, indexing, SQLAlchemy ORM.' },
      { name: 'MongoDB', level: 'Intermediate', detail: 'Document design, aggregation pipelines.' },
      { name: 'Redis', level: 'Intermediate', detail: 'Caching, pub/sub, session management.' },
      { name: 'MySQL', level: 'Intermediate', detail: 'Relational modeling and querying.' },
    ],
  },
  {
    category: 'Frameworks',
    skills: [
      { name: 'Next.js', level: 'Advanced', detail: 'App Router, static export, production builds.' },
      { name: 'React', level: 'Advanced', detail: 'Hooks, component architecture, Framer Motion animation.' },
      { name: 'Tailwind CSS', level: 'Advanced', detail: 'Design-system-driven styling, dark mode theming.' },
    ],
  },
  {
    category: 'Tools & DevOps',
    skills: [
      { name: 'Git / GitHub', level: 'Advanced', detail: '56 public repos, active PR workflow, Pull Shark ×2.' },
      { name: 'GitHub Actions', level: 'Intermediate', detail: 'CI basics across personal repos.' },
      { name: 'VS Code', level: 'Advanced', detail: 'Primary daily driver, extension-tuned workflow.' },
      { name: 'Postman', level: 'Intermediate', detail: 'API testing and debugging.' },
    ],
  },
]
