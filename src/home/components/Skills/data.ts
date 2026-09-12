interface SkillGroup {
  label: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: "Front End",
    items: [
      "Angular",
      "TypeScript",
      "RxJS",
      "NgRx",
      "React",
      "Redux",
      "Next.js",
      "Sass",
      "Tailwind",
    ],
  },
  {
    label: "Back End",
    items: [
      "C#",
      ".NET Core",
      "Python",
      "Node.js",
      "REST",
      "GraphQL",
      "EF Core",
      "PostgreSQL",
      "Redis",
    ],
  },
  {
    label: "Tools & DevOps",
    items: [
      "Git",
      "AWS Lambda",
      "S3 / SNS / SQS",
      "Terraform",
      "Scalr",
      "Datadog",
      "CI/CD",
      "Jest",
      "Docker",
    ],
  },
  {
    label: "Soft Skills",
    items: [
      "Leadership",
      "Mentorship",
      "Communication",
      "Resourcefulness",
      "Adaptability",
    ],
  },
];
