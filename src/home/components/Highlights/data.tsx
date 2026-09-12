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
  {
    title: "Infrastructure Ownership",
    description:
      "Extracted a shared Lambda into its own containerized service with dedicated Terraform-managed infrastructure, improving monitoring and system visibility.",
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
        <rect x="4" y="4" width="16" height="6" rx="1.5" />
        <rect x="4" y="14" width="16" height="6" rx="1.5" />
        <path d="M8 7h.01M8 17h.01" />
      </svg>
    ),
  },
  {
    title: "Team Standards",
    description:
      "Set frontend/SDLC standards adopted team-wide; led a state-management migration now used as the team's reference implementation.",
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
        <rect x="6" y="4" width="12" height="16" rx="2" />
        <path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1" />
        <path d="m9 13 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Responsible AI",
    description:
      "Selected for enterprise agentic-AI pilot programs; author governance and control documentation for responsible AI adoption.",
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
        <rect x="7" y="7" width="10" height="10" rx="1.5" />
        <path d="M9 7V3M15 7V3M9 21v-4M15 21v-4M3 9h4M3 15h4M17 9h4M17 15h4" />
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
