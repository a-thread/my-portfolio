import SectionHeader from "../../shared/SectionHeader";
import "./style.scss";

const Bio = () => {
  return (
    <div id="about" className="about">
      <div className="wrap grid">
        <SectionHeader
          eyebrow="About"
          heading="A bit about me"
          className="header"
        />
        <div className="copy">
          <p>
            Senior Software Engineer with 5+ years designing and scaling
            cloud-native systems in enterprise environments. I specialize in
            full-stack development with an emphasis on reusable architectures,
            dynamic APIs, and scalable frontend frameworks that accelerate
            delivery and reduce redundancy. I've built systems leveraging C#,
            TypeScript, Angular, .NET Core, and AWS to deliver solutions that
            are both performant and maintainable — architectural contributions
            ranging from backend factories to frontend component libraries have
            cut new feature build time by up to 80%.
          </p>
          <p>
            Beyond individual features, I focus on setting the standards that
            let a whole team move faster: defining frontend conventions that get
            adopted org-wide, leading migration patterns that become the team's
            reference implementation, and mentoring engineers through
            architecture and code review. That scope isn't limited to greenfield
            work, either — I'm often the engineer trusted to modernize legacy
            infrastructure without disrupting production, and to turn one-off
            platform migrations into documented playbooks the rest of the team
            can build on. I thrive in fast-paced, cross-functional environments
            and bring a mindset of curiosity and practical execution to building
            software that scales with purpose.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bio;
