import {
  HashRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import HomePage from './pages/home-page';
import PortfolioPage from './pages/portfolio-page';
import ResumePage from './pages/resume-page';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/projects' element={<PortfolioPage />} />
        <Route path='/resume' element={<ResumePage />} />
      </Routes>
    </Router>
  );
}

export default App;
