/**
 * Podium.jsx — Top-3 leaderboard podium display
 * Mobile: stacked full-width cards (1st, 2nd, 3rd order), rank eyebrow inside card.
 * Desktop: 3-column layout with 1st centered and larger.
 */
import React from 'react';
import './Podium.css';

const PLACE_LABELS = { 1: '1ST', 2: '2ND', 3: '3RD' };
const PIECES = { 1: '♛', 2: '♜', 3: '♝' };

const Podium = ({ players }) => {
  const top3 = players.slice(0, 3);

  return (
    <div className="podium" aria-label="Top 3 standings">
      {top3.map((p) => (
        <div
          key={p.id}
          className={`podium__place podium__place--${p.rank}`}
          aria-label={`${PLACE_LABELS[p.rank]} place: ${p.player}, ${p.points} points`}
        >
          <div className="podium__card">
            <span className="podium__eyebrow">{PLACE_LABELS[p.rank]}</span>
            <span className="podium__piece" aria-hidden="true">{PIECES[p.rank]}</span>
            <span className="podium__name">{p.player}</span>
            <span className="podium__points">{p.points}</span>
            <span className="podium__points-label">Points</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Podium;
