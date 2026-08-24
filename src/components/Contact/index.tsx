import { BsGithub, BsTelephone } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import SectionHeader from '../SectionHeader';
import { SITE, emailHref } from '@shared/data/site';
import './style.scss';

const Contact = () => {
  return (
    <div id="contact" className="contact-band">
      <div className="wrap contact-band-inner">
        <SectionHeader eyebrow="Get in touch" heading="Let's build something remarkable." align="center" className="contact-band-header" />
        <a className="contact-band-email" href={emailHref}>{SITE.email}</a>
        <div className="contact-band-chips">
          <a className="contact-band-chip" href={SITE.phoneHref}>
            <BsTelephone />
            {SITE.phone}
          </a>
          <a className="contact-band-chip" href={SITE.github} target="_blank" rel="noreferrer">
            <BsGithub />
            {SITE.githubHandle}
          </a>
          <a className="contact-band-chip" href={SITE.linkedin} target="_blank" rel="noreferrer">
            <FaLinkedinIn />
            {SITE.linkedinHandle}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
