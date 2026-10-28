/**
 * Results.jsx — Full results page with filters and pagination
 */

import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ResultRow  from '../components/ResultRow';
import Pagination from '../components/Pagination';
import { results, seasons, rounds } from '../data/results';
import './Results.css';

const PAGE_SIZE = 8;

const Results = () => {
  const [season, setSeason] = useState('All');
  const [round,  setRound]  = useState('All');
  const [page,   setPage]   = useState(1);

  useEffect(() => { document.title = 'Results | LCAL'; }, []);

  // Reset page when filters change
  useEffect(() => { setPage(1); }, [season, round]);

  const filtered = useMemo(() => {
    return results.filter(r =>
      (season === 'All' || r.season === season) &&
      (round  === 'All' || r.round  === round)
    );
  }, [season, round]);

  const totalPages   = Math.ceil(filtered.length / PAGE_SIZE);
  const pageResults  = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <>
      {/* Page header band */}
      <div className="page-header">
        <div className="container">
          <p className="page-header__breadcrumb">
            <Link to="/">Home</Link>
            <span> &rsaquo; Results</span>
          </p>
          <h1 className="page-header__title">Results</h1>
        </div>
      </div>

      {/* Main content */}
      <section className="section section--bg" aria-label="Results list">
        <div className="container">
          {/* Filters */}
          <div className="results-page__filters" role="search" aria-label="Filter results">
            <span className="results-page__filter-label">Season:</span>
            <select
              className="results-page__select"
              value={season}
              onChange={e => setSeason(e.target.value)}
              id="filter-season"
              aria-label="Filter by season"
            >
              <option value="All">All seasons</option>
              {seasons.map(s => <option key={s} value={s}>{s}</option>)}
            </select>

            <span className="results-page__filter-label">Round:</span>
            <select
              className="results-page__select"
              value={round}
              onChange={e => setRound(e.target.value)}
              id="filter-round"
              aria-label="Filter by round"
            >
              <option value="All">All rounds</option>
              {rounds.map(r => <option key={r} value={r}>{r}</option>)}
            </select>

            <span className="results-page__count">
              {filtered.length} result{filtered.length !== 1 ? 's' : ''}
            </span>
          </div>

          {/* Table header (desktop only) */}
          <div className="results-page__table-header" aria-hidden="true">
            <span>Date</span>
            <span>Round</span>
            <span>White</span>
            <span className="center">Result</span>
            <span>Black</span>
            <span className="right">Game</span>
          </div>

          {/* Rows */}
          <div role="table" aria-label="Match results">
            {pageResults.length > 0 ? (
              pageResults.map(r => <ResultRow key={r.id} result={r} />)
            ) : (
              <p style={{ color: 'var(--muted)', padding: '40px 0', textAlign: 'center', fontFamily: 'Inter, sans-serif' }}>
                No results match the selected filters.
              </p>
            )}
          </div>

          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        </div>
      </section>
    </>
  );
};

export default Results;
