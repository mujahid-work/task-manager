import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import ListingPage from './pages/task/taskListingPage';
import DetailPage from './pages/task/taskDetailsPage';

const App: React.FC = () => (
  <Router>
    <Navbar />
    <div style={{ padding: '1rem' }}>
      <Routes>
        <Route path="/" element={<ListingPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>
    </div>
  </Router>
);

export default App;