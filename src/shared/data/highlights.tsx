export interface IHighlight {
  title: string;
  description: string;
  tint: 'teal' | 'sage';
  icon: JSX.Element;
}

export const highlights: IHighlight[] = [
  {
    title: 'Reusable Frameworks',
    description: 'Architected DTO/Validator/Filter factories that cut feature build time ~80% across the team.',
    tint: 'teal',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 2 7l10 5 10-5-10-5Z" /><path d="M2 12l10 5 10-5" /><path d="M2 17l10 5 10-5" /></svg>
    ),
  },
  {
    title: 'Real-Time Pipelines',
    description: 'Re-architected a nightly batch process into a real-time AWS Lambda/SNS/S3 system.',
    tint: 'teal',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" /></svg>
    ),
  },
  {
    title: 'Team Standards',
    description: "Set frontend/SDLC standards adopted team-wide; led a state-management migration now used as the team's reference implementation.",
    tint: 'teal',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="4" width="12" height="16" rx="2" /><path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1" /><path d="m9 13 2 2 4-4" /></svg>
    ),
  },
  {
    title: 'Responsible AI',
    description: 'Selected for enterprise agentic-AI pilot programs; author governance and control documentation for responsible AI adoption.',
    tint: 'sage',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="7" y="7" width="10" height="10" rx="1.5" /><path d="M9 7V3M15 7V3M9 21v-4M15 21v-4M3 9h4M3 15h4M17 9h4M17 15h4" /></svg>
    ),
  },
  {
    title: 'Proactive Security',
    description: 'Identified and escalated real security exposures — supply-chain risk, credential leaks, dependency-hardening gaps.',
    tint: 'sage',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 4 5v6c0 5 3.4 8.7 8 10 4.6-1.3 8-5 8-10V5l-8-3Z" /><path d="m9 12 2 2 4-4" /></svg>
    ),
  },
  {
    title: 'Mentorship',
    description: 'Mentor engineers through code review; previously coached 30+ developers as a full-stack teaching assistant.',
    tint: 'sage',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="8" r="3.2" /><path d="M3.5 20c0-3.3 2.5-5.5 5.5-5.5s5.5 2.2 5.5 5.5" /><circle cx="17.5" cy="9" r="2.4" /><path d="M15.8 14.3c2.4.4 4.2 2.3 4.2 5" /></svg>
    ),
  },
];
