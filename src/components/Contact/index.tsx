import { BsGithub, BsTelephone } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import "./style.scss";

const Contact = () => {
  return (
    <div id="contact" className="contact-band">
      <div className="wrap contact-band__inner">
        <div className="eyebrow contact-band__eyebrow"><span className="eyebrow-mark" />Get in touch</div>
        <h2>Let's build something great.</h2>
        <p className="contact-band__lede">Open to senior/staff engineering roles and interesting collaborations.</p>
        <a className="contact-band__email" href="mailto:aiden.threadgoode@gmail.com">aiden.threadgoode@gmail.com</a>
        <div className="contact-band__chips">
          <a className="contact-band__chip" href="tel:2077491341">
            <BsTelephone />
            207-749-1341
          </a>
          <a className="contact-band__chip" href="https://github.com/a-thread" target="_blank" rel="noreferrer">
            <BsGithub />
            github.com/a-thread
          </a>
          <a className="contact-band__chip" href="https://www.linkedin.com/in/a-thread" target="_blank" rel="noreferrer">
            <FaLinkedinIn />
            linkedin.com/in/a-thread
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
