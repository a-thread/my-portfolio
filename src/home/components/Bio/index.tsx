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
            I'm a Senior Software Engineer who's spent the last 5+ years
            turning ambitious ideas into cloud-native systems that hold up
            under real production weight. I really love working full stack,
            designing systems end-to-end that build upon one another and
            work together seamlessly.
          </p>
          <p>
            What I care about most is efficiency and reusability. I've
            defined frontend conventions that have been adopted org-wide,
            led migrations that have become the reference implementations,
            and I'd rather spend an hour teaching the "why" behind a
            pattern than fix it myself and move on.
          </p>
          <p>
            More recently, that's meant building AI-assisted tooling and
            automation of my own that do in an afternoon what used to take
            weeks and help shape my organization's AI governance and
            security policy as adoption scales. Being early to something
            messy is something that brings me a lot of joy, as does figuring
            out the guardrails before everyone else needs them.
          </p>
          <p>
            As an autistic transgender man, I'm proud to be a leader in my
            company and to be an example of how much we can accomplish as
            neurodivergent trans folks in tech. Most days you'll find me
            listening to a book and playing with my dog outside or piecing
            together a quilt. Whatever it is I am filling my life with, I
            strive to bring balance, patience, curiosity, and the belief
            that the best work — code or otherwise — is built with heart
            and is something I can be proud of.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bio;
