import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isDetailPage = location.pathname.startsWith('/detail/');

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        <div className="container d-flex align-items-center gap-3">
        {isDetailPage && (
          <button 
            onClick={() => navigate('/')} 
            aria-label="Back to listing" 
            className="btn btn-outline-primary me-2"
          >
            <i className="bi bi-arrow-left me-2"></i>
            Back
          </button>
        )}
        <span className="navbar-brand mb-0 h1">My Tasks App</span>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;