import React from 'react';
import './Ticker.css';

const items = [
  '♟ Season 3 Registrations Open — Register Now',
  '♛ Round 1 Results: Arjun Mehta 1-0 Rahul Shah',
  '♞ Top Rated Player: Dev Patel (1810)',
  '♜ Next Fixture: Oct 28, 2026 at Lokhandwala Community Centre',
  '♝ Watch Season 2 Finals Replay on LCAL YouTube',
  '♙ Player of the Month: Priya Nair — Congratulations!',
];

const Ticker = () => {
  return (
    <div className="ticker" id="ticker">
      <div className="ticker__label">
        <span>LIVE</span>
      </div>
      <div className="ticker__track-wrap">
        <div className="ticker__track">
          {[...items, ...items].map((item, i) => (
            <span className="ticker__item" key={i}>{item}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ticker;
