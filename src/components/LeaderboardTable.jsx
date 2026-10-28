/**
 * LeaderboardTable.jsx — Full standings table
 * Mobile (<640px): shows Rank, Player (with "Xp · Xw" sub-line), Points.
 * Tablet (640–1023px): shows Rank, Player, Played, Won, Points.
 * Desktop (1024px+): shows all columns.
 */
import React from 'react';
import './LeaderboardTable.css';

const RANK_ICONS = { 1: '♛', 2: '♜', 3: '♝' };
const ROW_CLASS  = { 1: 'lb-row--gold', 2: 'lb-row--silver', 3: 'lb-row--bronze' };

const LeaderboardTable = ({ players }) => (
  <div className="lb-table-wrap" role="region" aria-label="Standings table" tabIndex="0">
    <table className="lb-table" aria-label="Leaderboard">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col" style={{ textAlign: 'left' }}>Player</th>
          <th scope="col" className="lb-col-played">Played</th>
          <th scope="col" className="lb-col-won">Won</th>
          <th scope="col" className="lb-col-drawn">Drawn</th>
          <th scope="col" className="lb-col-lost">Lost</th>
          <th scope="col">Points</th>
        </tr>
      </thead>
      <tbody>
        {players.map((p) => (
          <tr
            key={p.id}
            className={ROW_CLASS[p.rank] || ''}
          >
            <td className="lb-rank">
              {RANK_ICONS[p.rank] ?? p.rank}
            </td>
            <td>
              <div className="lb-player">
                <div className="lb-avatar" aria-hidden="true">{p.player.charAt(0)}</div>
                <div className="lb-player__info">
                  <span className="lb-player__name">{p.player}</span>
                  {/* Mobile compact stats shown via CSS on small screens */}
                  <span className="lb-player__compact" aria-hidden="true">
                    {p.played}p · {p.won}w
                  </span>
                </div>
              </div>
            </td>
            <td className="lb-col-played">{p.played}</td>
            <td className="lb-col-won lb-won">{p.won}</td>
            <td className="lb-col-drawn lb-drawn">{p.drawn}</td>
            <td className="lb-col-lost lb-lost">{p.lost}</td>
            <td className="lb-points">{p.points}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default LeaderboardTable;
