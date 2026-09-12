import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Bio from "./components/Bio";
import Contact from "./components/Contact";
import Feedback from "./components/Feedback";
import Highlights from "./components/Highlights";
import Intro from "./components/Intro";
import Skills from "./components/Skills";

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    const target = (
      location.state as {
        scrollTo?: string;
      } | null
    )?.scrollTo;
    if (!target) return;

    document
      .getElementById(target)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [location.state]);

  return (
    <>
      <Intro />
      <Highlights />
      <Skills />
      <Bio />
      <Feedback />
      <Contact />
    </>
  );
};

export default HomePage;
