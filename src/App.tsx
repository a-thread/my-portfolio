import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import * as React from "react";
import { useBetween } from 'use-between';
import HomePage from './layouts/home-page';
import PortfolioPage from './layouts/portfolio-page';
import ResumePage from './layouts/resume-page';
import { useShareableState } from './utils/utils';

function App() {
  const { theme} = useBetween(useShareableState);
  const className = theme + ' m-0 p-0 w-100 h-100'

  return (
    <div className={className}>
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
