/**
 * Podium.jsx — Top-3 leaderboard podium display
 */
import React from 'react';
import './Podium.css';

const PLACE_LABELS = { 1: '1st', 2: '2nd', 3: '3rd' };
const PIECES = { 1: '♛', 2: '♜', 3: '♝' };

const Podium = ({ players }) => {
  const top3 = players.slice(0, 3);

  return (
    <div className="podium" aria-label="Top 3 standings">
      {top3.map((p) => (
        <div
          key={p.id}
          className={`podium__place podium__place--${PLACE_LABELS[p.rank]}`}
          aria-label={`${PLACE_LABELS[p.rank]} place: ${p.player}, ${p.points} points`}
        >
          <div className="podium__card">
            <span className="podium__piece" aria-hidden="true">{PIECES[p.rank]}</span>
            <span className="podium__name">{p.player}</span>
            <span className="podium__points">{p.points}</span>
            <span className="podium__points-label">Points</span>
          </div>
          <div className="podium__bar">{PLACE_LABELS[p.rank]}</div>
        </div>
      ))}
    </div>
  );
};

export default Podium;
