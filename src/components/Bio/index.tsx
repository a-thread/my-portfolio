import "./style.scss";

const Bio = () => {
  return (
    <div id="about" className="about">
      <div className="wrap about__grid">
        <div>
          <div className="eyebrow"><span className="eyebrow-mark" />About</div>
          <h2>A bit about me</h2>
        </div>
        <div className="about__copy">
          <p>Senior Software Engineer with 5+ years of experience architecting and shipping full-stack systems on Angular, TypeScript, C#/.NET Core, and AWS. I focus on building reusable engineering patterns — frameworks, standards, and pipelines that make an entire team faster, not just my own code.</p>
          <p>Recent work includes re-architecting a nightly batch process into a real-time AWS Lambda/SNS/S3 pipeline, and building a DTO/Validator/Filter factory system that cut feature build time by roughly 80% for my team. I also mentor engineers through code review and contribute to my company's enterprise agentic-AI pilot program, helping author governance and control standards for responsible AI adoption.</p>
        </div>
      </div>
    </div>
  );
};

export default Bio;
