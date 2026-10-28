/**
 * Leaderboard.jsx — Full standings with Podium, table, and season filter.
 *
 * DATA SOURCE CONFIG (see README for details):
 *   Local mock: default (no .env needed)
 *   Google Sheet: set VITE_SHEET_URL in .env to your published CSV URL.
 */

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Podium          from '../components/Podium';
import LeaderboardTable from '../components/LeaderboardTable';
import { leaderboardData, getSortedLeaderboard, leaderboardSeasons } from '../data/leaderboard';
import './Leaderboard.css';

const SHEET_URL = import.meta.env.VITE_SHEET_URL; // optional Google Sheet CSV

const Leaderboard = () => {
  const [season,  setSeason]  = useState(leaderboardSeasons[0]);
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => { document.title = 'Leaderboard | LCAL'; }, []);

  useEffect(() => {
    if (SHEET_URL) {
      setLoading(true);
      fetch(SHEET_URL)
        .then(r => r.text())
        .then(csv => {
          const [header, ...rows] = csv.trim().split('\n');
          const keys = header.split(',').map(k => k.trim());
          const data = rows.map(row => {
            const vals = row.split(',');
            const obj  = {};
            keys.forEach((k, i) => { obj[k] = isNaN(vals[i]) ? vals[i] : Number(vals[i]); });
            return obj;
          });
          setPlayers(getSortedLeaderboard(data));
        })
        .catch(() => setPlayers(getSortedLeaderboard(leaderboardData)))
        .finally(() => setLoading(false));
    } else {
      setPlayers(getSortedLeaderboard(leaderboardData));
    }
  }, [season]);

  const top3 = players.slice(0, 3);

  return (
    <>
      {/* Page header band */}
      <div className="page-header">
        <div className="container">
          <p className="page-header__breadcrumb">
            <Link to="/">Home</Link>
            <span> &rsaquo; Leaderboard</span>
          </p>
          <h1 className="page-header__title">Leaderboard</h1>
        </div>
      </div>

      {/* Podium + table */}
      <section className="section section--bg" aria-label="Leaderboard standings">
        <div className="container">
          {/* Season selector */}
          <div className="lb-season-filter">
            <label htmlFor="lb-season">Season</label>
            <select
              id="lb-season"
              value={season}
              onChange={e => setSeason(e.target.value)}
              aria-label="Select season"
            >
              {leaderboardSeasons.map(s => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          {loading ? (
            <p style={{ color: 'var(--muted)', fontFamily: 'Inter, sans-serif', textAlign: 'center', padding: '60px 0' }}>
              Loading standings…
            </p>
          ) : (
            <>
              {/* Podium top 3 */}
              {top3.length >= 3 && <Podium players={players} />}

              {/* Full table */}
              <p className="lb-full-standings-title">Full Standings</p>
              <LeaderboardTable players={players} />
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Leaderboard;
