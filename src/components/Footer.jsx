/**
 * Footer.jsx — 4-column footer with react-router Links
 */

import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => (
  <footer className="footer" id="footer" aria-label="Site footer">
    <div className="container">
      <div className="footer__main">
        {/* Brand */}
        <div className="footer__brand">
          <Link to="/" className="footer__logo" aria-label="LCAL home">
            <span className="footer__logo-icon" aria-hidden="true">♞</span>
            <span className="footer__logo-text">LCAL</span>
          </Link>
          <p className="footer__brand-desc">
            League of Chess Association — where every move tells a story.
            Building the next generation of chess champions since Season 1.
          </p>
          <div className="footer__social-icons">
            <a href="https://www.youtube.com/@spiritofaustralianimishrau4608/featured" target="_blank" rel="noopener noreferrer" className="footer__social-icon" aria-label="Instagram">📷</a>
            <a href="https://www.youtube.com/@spiritofaustralianimishrau4608/featured" target="_blank" rel="noopener noreferrer" className="footer__social-icon" aria-label="YouTube">▶</a>
            <a href="https://www.youtube.com/@spiritofaustralianimishrau4608/featured" target="_blank" rel="noopener noreferrer" className="footer__social-icon" aria-label="Twitter / X">✕</a>
          </div>
        </div>

        {/* Explore */}
        <div className="footer__group">
          <h4 className="footer__group-title">Explore</h4>
          <ul className="footer__links">
            <li><Link to="/results"     className="footer__link">Results</Link></li>
            <li><Link to="/leaderboard" className="footer__link">Leaderboard</Link></li>
            <li><Link to="/hall-of-fame"className="footer__link">Hall of Fame</Link></li>
            <li><Link to="/videos"      className="footer__link">Videos</Link></li>
            <li><Link to="/blogs"       className="footer__link">Blogs</Link></li>
          </ul>
        </div>

        {/* About */}
        <div className="footer__group">
          <h4 className="footer__group-title">About</h4>
          <ul className="footer__links">
            <li><Link to="/constitution" className="footer__link">Constitution</Link></li>
            <li><Link to="/jobs"         className="footer__link">Jobs</Link></li>
            <li><a href="mailto:contact@lcal.in" className="footer__link">Contact</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div className="footer__group">
          <h4 className="footer__group-title">Legal</h4>
          <ul className="footer__links">
            <li><Link to="/legal#terms"   className="footer__link">Terms &amp; Conditions</Link></li>
            <li><Link to="/legal#privacy" className="footer__link">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__copyright">© LCAL 2026. All Rights Reserved.</p>
        <div className="footer__bottom-links">
          <Link to="/legal#terms"   className="footer__bottom-link">Terms</Link>
          <Link to="/legal#privacy" className="footer__bottom-link">Privacy</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
