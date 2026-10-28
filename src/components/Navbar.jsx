/**
 * Navbar.jsx — Router-aware navigation with hamburger and login state
 */

import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';

const mainLinks = [
  { label: 'Home',        to: '/' },
  { label: 'Results',     to: '/results' },
  { label: 'Leaderboard', to: '/leaderboard' },
  { label: 'Hall of Fame',to: '/hall-of-fame' },
  { label: 'Videos',      to: '/videos' },
  { label: 'Blogs',       to: '/blogs' },
];

const Navbar = () => {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const { user }                  = useAuth();
  const location                  = useLocation();
  const mobileMenuRef             = useRef(null);

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  // Close on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  // Scrolled state
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Trap body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <nav
      className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}
      id="navbar"
      aria-label="Main navigation"
    >
      <div className="navbar__container">
        {/* Logo */}
        <Link to="/" className="navbar__logo" id="navbar-logo" aria-label="LCAL home">
          <span className="navbar__logo-icon" aria-hidden="true">♞</span>
          <span className="navbar__logo-text">LCAL</span>
        </Link>

        {/* Desktop links */}
        <ul className="navbar__links" role="list">
          {mainLinks.map(link => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `navbar__link${isActive ? ' active' : ''}`
                }
                id={`nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop actions */}
        <div className="navbar__actions" id="navbar-actions">
          {user ? (
            <Link to="/account" className="btn btn-outline btn-sm" id="btn-account">
              My Account
            </Link>
          ) : (
            <Link to="/login" className="btn btn-outline btn-sm" id="btn-login">
              Log In
            </Link>
          )}
        </div>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          id="hamburger-btn"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="navbar__mobile-menu"
          id="mobile-menu"
          ref={mobileMenuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <nav className="navbar__mobile-links">
            {mainLinks.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `navbar__mobile-link${isActive ? ' active' : ''}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="navbar__mobile-actions">
            {user ? (
              <Link to="/account" className="btn btn-outline">My Account</Link>
            ) : (
              <Link to="/login" className="btn btn-outline">Log In</Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
