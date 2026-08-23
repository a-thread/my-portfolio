import SectionHeader from '../SectionHeader';
import './style.scss';

const Bio = () => {
  return (
    <div id="about" className="about">
      <div className="wrap about__grid">
        <SectionHeader eyebrow="About" heading="A bit about me" className="about__header" />
        <div className="about__copy">
          <p>Senior Software Engineer with 5+ years designing and scaling cloud-native systems in enterprise environments. I specialize in full-stack development with an emphasis on reusable architectures, dynamic APIs, and scalable frontend frameworks that accelerate delivery and reduce redundancy. I've built systems leveraging C#, TypeScript, Angular, .NET Core, and AWS to deliver solutions that are both performant and maintainable — architectural contributions ranging from backend factories (DTO, Filter, Validator) to frontend component libraries have cut new feature build time by up to 80%.</p>
          <p>Beyond individual features, I focus on setting the standards that let a whole team move faster: defining frontend and SDLC conventions that get adopted org-wide, leading migration patterns that become the team's reference implementation, and mentoring engineers through architecture and code review. I've also been selected for enterprise agentic-AI pilot programs, helping shape how teams use AI tools responsibly. I thrive in fast-paced, cross-functional environments and bring a mindset of curiosity and practical execution to building software that scales with purpose.</p>
        </div>
      </div>
    </div>
  );
};

export default Bio;
