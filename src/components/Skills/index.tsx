import "./style.scss";

const skillGroups = [
  {
    label: "Front End",
    items: ["Angular", "TypeScript", "RxJS", "NgRx", "React", "Redux", "Next.js", "Sass", "Tailwind"],
  },
  {
    label: "Back End",
    items: ["C#", ".NET Core", "Python", "Node.js", "REST", "GraphQL", "EF Core", "PostgreSQL", "Redis"],
  },
  {
    label: "Tools & DevOps",
    items: ["Git", "AWS Lambda", "S3 / SNS / SQS", "Terraform", "CI/CD", "Jest", "Docker"],
  },
  {
    label: "Soft Skills",
    items: ["Leadership", "Mentorship", "Communication", "Resourcefulness", "Adaptability"],
  },
];

const Skills = () => {
  return (
    <div id="skills" className="toolkit">
      <div className="wrap">
        <div className="toolkit__head">
          <div className="eyebrow"><span className="eyebrow-mark" />Toolkit</div>
          <h2>Tools &amp; technologies</h2>
        </div>
        <div className="toolkit__grid">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <h3>{group.label}</h3>
              <div className="toolkit__pills">
                {group.items.map((item) => (
                  <span className="pill" key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
