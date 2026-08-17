// Powers the Code DNA canvas helix. Colors are each tech's real brand color.

export type DnaNode = {
  label: string
  color: string
  detail: string
}

export const dnaNodes: DnaNode[] = [
  { label: 'Go', color: '#00ADD8', detail: 'Primary language — CLI tools, APIs, the web scraper' },
  { label: 'Python', color: '#3776AB', detail: 'AI agents, FastAPI services, data pipelines, Ursina game dev' },
  { label: 'TypeScript', color: '#3178C6', detail: 'Next.js frontends, strict typing across full-stack projects' },
  { label: 'C++', color: '#00599C', detail: 'DSA, competitive programming, systems fundamentals' },
  { label: 'FastAPI', color: '#009688', detail: 'Async REST APIs, JWT auth, OpenAPI docs' },
  { label: 'LangGraph', color: '#FF6B35', detail: 'Multi-agent orchestration and state machines' },
  { label: 'OpenAI', color: '#8B7FD9', detail: 'GPT-4 integration, embeddings, function calling' },
  { label: 'PostgreSQL', color: '#336791', detail: 'Schema design, indexing, SQLAlchemy ORM' },
  { label: 'MongoDB', color: '#47A248', detail: 'Document design, aggregation pipelines' },
  { label: 'Redis', color: '#DC382D', detail: 'Caching, pub/sub, session management' },
  { label: 'Docker', color: '#2496ED', detail: 'Containerization, Docker Compose, CI environments' },
  { label: 'GitHub', color: '#F0A833', detail: '56 repos · 82 stars · 6+ merged PRs · Pull Shark ×2' },
]
