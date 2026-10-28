/**
 * LeaderboardTable.jsx — Full standings table
 * Points are computed here: won + drawn * 0.5
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
          <th scope="col">Played</th>
          <th scope="col">Won</th>
          <th scope="col">Drawn</th>
          <th scope="col">Lost</th>
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
                <span>{p.player}</span>
              </div>
            </td>
            <td>{p.played}</td>
            <td className="lb-won">{p.won}</td>
            <td className="lb-drawn">{p.drawn}</td>
            <td className="lb-lost">{p.lost}</td>
            <td className="lb-points">{p.points}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default LeaderboardTable;
