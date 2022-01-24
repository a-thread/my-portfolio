import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import HomePage from './layouts/home-page';
import PortfolioPage from './layouts/portfolio-page';
import ResumePage from './layouts/resume-page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/projects' element={<PortfolioPage />} />
        <Route path='/resume' element={<ResumePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
