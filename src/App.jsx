/**
 * App.jsx — Multi-page router setup with lazy-loaded pages
 * All pages are lazy-loaded for code splitting.
 * Layout (Navbar + Footer) wraps every route.
 */

import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Layout from './components/Layout';

/* Lazy-loaded pages */
const Home         = lazy(() => import('./pages/Home'));
const Results      = lazy(() => import('./pages/Results'));
const ResultDetail = lazy(() => import('./pages/ResultDetail'));
const Leaderboard  = lazy(() => import('./pages/Leaderboard'));
const HallOfFame   = lazy(() => import('./pages/HallOfFame'));
const Videos       = lazy(() => import('./pages/Videos'));
const Blogs        = lazy(() => import('./pages/Blogs'));
const BlogPost     = lazy(() => import('./pages/BlogPost'));
const Constitution = lazy(() => import('./pages/Constitution'));
const Jobs         = lazy(() => import('./pages/Jobs'));
const Legal        = lazy(() => import('./pages/Legal'));
const Login        = lazy(() => import('./pages/Login'));
const Account      = lazy(() => import('./pages/Account'));
const NotFound     = lazy(() => import('./pages/NotFound'));

/* Loading fallback */
const PageLoader = () => (
  <div style={{
    minHeight: '60dvh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--gold)',
    fontSize: '2rem',
    fontFamily: 'Cinzel, serif',
    letterSpacing: '0.1em',
  }} aria-label="Loading">
    ♟
  </div>
);

function App() {
  return (
    <AuthProvider>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {/* All pages share the Layout (Navbar + Footer) */}
          <Route element={<Layout />}>
            <Route index              element={<Home />} />
            <Route path="results"     element={<Results />} />
            <Route path="results/:id" element={<ResultDetail />} />
            <Route path="leaderboard" element={<Leaderboard />} />
            <Route path="hall-of-fame"element={<HallOfFame />} />
            <Route path="videos"      element={<Videos />} />
            <Route path="blogs"       element={<Blogs />} />
            <Route path="blogs/:slug" element={<BlogPost />} />
            <Route path="constitution"element={<Constitution />} />
            <Route path="jobs"        element={<Jobs />} />
            <Route path="legal"       element={<Legal />} />
            <Route path="login"       element={<Login />} />
            <Route path="account"     element={<Account />} />
            <Route path="*"           element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </AuthProvider>
  );
}

export default App;
