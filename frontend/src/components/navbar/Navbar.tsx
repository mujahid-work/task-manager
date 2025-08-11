import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isDetailPage = location.pathname.startsWith('/detail/');

  return (
    <nav aria-label="Main navigation" style={{ padding: '1rem', background: '#eee', display: 'flex', alignItems: 'center' }}>
      {isDetailPage && (
        <button onClick={() => navigate('/')} aria-label="Back to listing" style={{ marginRight: '1rem' }}>
          Back
        </button>
      )}
      <span style={{ fontWeight: 'bold' }}>My Tasks App</span>
    </nav>
  );
};

export default Navbar;