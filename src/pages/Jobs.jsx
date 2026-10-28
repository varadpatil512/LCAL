/**
 * Jobs.jsx — Job listings page
 */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { jobs } from '../data/jobs';

const Jobs = () => {
  useEffect(() => { document.title = 'Jobs — LCAL'; }, []);

  return (
    <>
      <div className="page-header">
        <div className="container">
          <p className="page-header__breadcrumb">
            <Link to="/">Home</Link>
            <span> &rsaquo; Jobs</span>
          </p>
          <h1 className="page-header__title">Jobs &amp; Opportunities</h1>
          <p className="page-header__desc">
            Join the LCAL team. We are always looking for passionate people who love chess.
          </p>
        </div>
      </div>

      <section className="section section--bg" aria-label="Job listings">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {jobs.map(job => (
              <article
                key={job.id}
                style={{
                  background: 'var(--card)',
                  border: '1px solid var(--border)',
                  padding: '28px 32px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  gap: '24px',
                  flexWrap: 'wrap',
                  transition: 'border-color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--border-strong)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
              >
                <div style={{ flex: 1, minWidth: '200px' }}>
                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '8px' }}>
                    <span className="badge badge-gold">{job.type}</span>
                    {job.location && (
                      <span style={{ fontSize: '11px', color: 'var(--muted)', fontFamily: 'Inter, sans-serif', alignSelf: 'center' }}>
                        📍 {job.location}
                      </span>
                    )}
                  </div>
                  <h2 style={{
                    fontFamily: 'Newsreader, Cinzel, serif',
                    fontSize: '1.1rem',
                    fontWeight: '400',
                    color: 'var(--cream)',
                    marginBottom: '10px',
                  }}>
                    {job.title}
                  </h2>
                  <p style={{
                    fontSize: '0.87rem',
                    color: 'var(--muted)',
                    fontFamily: 'Inter, sans-serif',
                    lineHeight: '1.6',
                  }}>
                    {job.description}
                  </p>
                </div>

                <div style={{ flexShrink: 0 }}>
                  <a
                    href={job.applyUrl}
                    className="btn btn-primary btn-sm"
                    id={`btn-apply-${job.id}`}
                    aria-label={`Apply for ${job.title}`}
                  >
                    Apply →
                  </a>
                </div>
              </article>
            ))}
          </div>

          <p style={{ marginTop: '40px', fontSize: '0.85rem', color: 'var(--muted)', fontFamily: 'Inter, sans-serif' }}>
            Don't see a suitable role? Email us at{' '}
            <a href="mailto:jobs@lcal.in" style={{ color: 'var(--gold)' }}>jobs@lcal.in</a> — we review speculative applications.
          </p>
        </div>
      </section>
    </>
  );
};

export default Jobs;
