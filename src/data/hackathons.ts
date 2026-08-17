// Hackathon Journey timeline. Ideathon, CMR Hackathon 2.0, and Hacktoberfest are confirmed
// (consistent across your resume and multiple independent sources). Murf AI Challenge and the
// Kaggle 5-Day Challenge are new — confirm these are accurate before treating them as fact.

export type HackathonEvent = {
  id: string
  event: string
  role: string
  date: string
  color: string
  icon: string
}

export const hackathonJourney: HackathonEvent[] = [
  { id: 'ideathon', event: 'Ideathon 1.0, LIET', role: 'Backend Dev', date: 'Dec 2023', color: '#F0A833', icon: '🧠' },
  { id: 'cmr', event: 'CMR Hackathon 2.0', role: 'Backend Dev', date: 'Jan 2025', color: '#F6AD55', icon: '💳' },
  { id: 'hacktoberfest', event: 'Hacktoberfest 2025', role: 'OSS Contributor', date: 'Oct 2025', color: '#22C55E', icon: '🐙' },
  { id: 'murf', event: 'Murf AI Challenge', role: 'AI Agent Builder', date: '2025', color: '#A78BFA', icon: '🤖' },
  { id: 'kaggle', event: 'Kaggle 5-Day Challenge', role: 'AI Agent Builder', date: '2025', color: '#60A5FA', icon: '📊' },
]
