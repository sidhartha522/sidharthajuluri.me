import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

export default function Navigation() {
  const location = useLocation();

  return (
    <nav className="main-navigation">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          Sidhartha
        </Link>
        <div className="nav-links">
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            Portfolio
          </Link>
          <Link 
            to="/content" 
            className={`nav-link ${location.pathname === '/content' ? 'active' : ''}`}
          >
            Content
          </Link>
          <a 
            href="mailto:sidhartha@ekthaa.app" 
            className="nav-link nav-cta"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
