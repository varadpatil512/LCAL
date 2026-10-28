/**
 * Layout.jsx — Shared page wrapper: Navbar + <main> + Footer
 * Also handles scroll-to-top on route change and sets document.title.
 */

import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import './Layout.css';

const Layout = ({ title }) => {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  // Set document title
  useEffect(() => {
    document.title = title
      ? `${title} — LCAL`
      : 'LCAL – League of Chess Association';
  }, [title]);

  return (
    <div className="layout">
      <Navbar />
      <main id="main-content" tabIndex="-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
