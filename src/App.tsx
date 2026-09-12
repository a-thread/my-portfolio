import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "@home";
import PortfolioPage from "@projects";
import ResumePage from "@resume";
import Navigation from "@shared/components/Navigation";
import Footer from "@shared/components/Footer";

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<PortfolioPage />} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
