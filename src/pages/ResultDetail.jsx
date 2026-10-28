/**
 * ResultDetail.jsx — Single result detail page at /results/:id
 */
import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { results } from '../data/results';
import MatchCard   from '../components/MatchCard';

const ResultDetail = () => {
  const { id }  = useParams();
  const result  = results.find(r => r.id === id);

  useEffect(() => {
    if (result) document.title = `${result.white} vs ${result.black} | LCAL`;
  }, [result]);

  if (!result) return <Navigate to="/results" replace />;

  return (
    <>
      <div className="page-header">
        <div className="container">
          <p className="page-header__breadcrumb">
            <Link to="/">Home</Link>
            <span> &rsaquo; </span>
            <Link to="/results">Results</Link>
            <span> &rsaquo; {result.round}</span>
          </p>
          <h1 className="page-header__title">
            {result.white} vs {result.black}
          </h1>
          <p className="page-header__desc">{result.season} · {result.round}</p>
        </div>
      </div>

      <section className="section section--bg">
        <div className="container" style={{ maxWidth: '720px' }}>
          <MatchCard result={result} />

          <div style={{ marginTop: '32px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {result.gameUrl && (
              <a
                href={result.gameUrl}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                View full game ↗
              </a>
            )}
            <Link to="/results" className="btn btn-secondary">← Back to results</Link>
          </div>

          {/* Info table */}
          <div style={{ marginTop: '40px' }}>
            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.87rem',
              color: 'var(--cream)',
            }}>
              {[
                ['Date',    new Date(result.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })],
                ['Season',  result.season],
                ['Round',   result.round],
                ['White',   result.white],
                ['Black',   result.black],
                ['Result',  result.result],
              ].map(([label, value]) => (
                <tr key={label} style={{ borderBottom: '1px solid var(--border)' }}>
                  <td style={{ padding: '12px 0', color: 'var(--muted)', width: '120px', textTransform: 'uppercase', fontSize: '11px', letterSpacing: '0.1em' }}>
                    {label}
                  </td>
                  <td style={{ padding: '12px 0', fontFamily: label === 'Result' ? 'Newsreader, Cinzel, serif' : 'Inter, sans-serif', color: label === 'Result' ? 'var(--gold)' : 'var(--cream)', fontSize: label === 'Result' ? '1.1rem' : '0.87rem' }}>
                    {value}
                  </td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResultDetail;
