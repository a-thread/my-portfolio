import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import HomePage from './pages/home-page';
import PortfolioPage from './pages/portfolio-page';
import ResumePage from './pages/resume-page';

const App: React.FC = () => {
  return (
    <div className="m-0 p-0 w-100 h-100">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/projects' element={<PortfolioPage />} />
          <Route path='/resume' element={<ResumePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
