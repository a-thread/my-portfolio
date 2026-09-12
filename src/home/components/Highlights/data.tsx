interface Highlight {
  title: string;
  description: string;
  tint: "teal" | "sage";
  icon: JSX.Element;
}

export const highlights: Highlight[] = [
  {
    title: "Reusable Frameworks",
    description:
      "Architected DTO/Validator/Filter factories that cut feature build time ~80% across the team.",
    tint: "teal",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2 2 7l10 5 10-5-10-5Z" />
        <path d="M2 12l10 5 10-5" />
        <path d="M2 17l10 5 10-5" />
      </svg>
    ),
  },
  // Source: 8.20.26 Weekly Summary
  {
    title: "AI-Accelerated Modernization",
    description:
      "Built a custom automation skill and used it to migrate 18 legacy components (150+ files, ~9,000 lines) in a single afternoon.",
    tint: "teal",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
        <path d="M21 3v5h-5" />
        <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
        <path d="M3 21v-5h5" />
      </svg>
    ),
  },
  // Source: 8.31.26 Weekly Summary
  {
    title: "AI Governance Tooling",
    description:
      "Built a friction-analysis CLI that surfaced ~2.4 hours/week of avoidable approval delay and shipped it as a reusable tool for the team.",
    tint: "teal",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2 4 5v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V5l-8-3Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  // Source: 8.20.26 Weekly Summary
  {
    title: "Documentation at Scale",
    description:
      "Generated 40+ machine-verified reference docs for a company design system, type-checking every code example before publishing.",
    tint: "sage",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z" />
        <path d="M14 2v6h6" />
        <path d="m9 15 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Legacy Modernization",
    description:
      "Go-to engineer for legacy infrastructure — delivered surgical updates across a dozen+ programs without sacrificing production safety.",
    tint: "sage",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="13" r="8" />
        <path d="M12 9v4l3 2" />
        <path d="M9 2h6" />
      </svg>
    ),
  },
  {
    title: "Mentorship",
    description:
      "Mentor engineers through code review; previously coached 30+ developers as a full-stack teaching assistant.",
    tint: "sage",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="9" cy="8" r="3.2" />
        <path d="M3.5 20c0-3.3 2.5-5.5 5.5-5.5s5.5 2.2 5.5 5.5" />
        <circle cx="17.5" cy="9" r="2.4" />
        <path d="M15.8 14.3c2.4.4 4.2 2.3 4.2 5" />
      </svg>
    ),
  },
];
