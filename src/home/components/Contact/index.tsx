import { BsGithub, BsTelephone } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import SectionHeader from "../../shared/SectionHeader";
import { SITE, emailHref } from "@shared/data/site";
import "./style.scss";

const Contact = () => {
  return (
    <div id="contact" className="contact-band">
      <div className="wrap inner">
        <SectionHeader
          eyebrow="Get in touch"
          heading="Let's build something remarkable."
          align="center"
          className="header"
        />
        <a className="email" href={emailHref}>
          {SITE.email}
        </a>
        <div className="chips">
          <a className="chip" href={SITE.phoneHref}>
            <BsTelephone />
            {SITE.phone}
          </a>
          <a
            className="chip"
            href={SITE.github}
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub />
            {SITE.githubHandle}
          </a>
          <a
            className="chip"
            href={SITE.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
            {SITE.linkedinHandle}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
