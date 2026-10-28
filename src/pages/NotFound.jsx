/**
 * NotFound.jsx — 404 page
 */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  useEffect(() => { document.title = '404 Not Found — LCAL'; }, []);

  return (
    <section
      style={{
        minHeight: 'calc(100dvh - 128px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '48px 16px',
        background: 'var(--bg-deep)',
      }}
    >
      <span style={{ fontSize: '5rem', color: 'var(--gold)', marginBottom: '24px', display: 'block' }} aria-hidden="true">♚</span>
      <h1 style={{ fontFamily: 'Newsreader, Cinzel, serif', fontSize: 'clamp(28px, 5vw, 48px)', color: 'var(--cream)', fontWeight: 400, marginBottom: '16px' }}>
        404 — Page not found
      </h1>
      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', color: 'var(--muted)', maxWidth: '400px', lineHeight: 1.6, marginBottom: '36px' }}>
        The king has moved, but this square doesn't exist. Let's get you back on the board.
      </p>
      <Link to="/" className="btn btn-primary" id="btn-404-home">Return to home</Link>
    </section>
  );
};

export default NotFound;
