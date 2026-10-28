import React from 'react';
import './SeasonGlimpse.css';

const pieces = [
  { icon: '♔', label: 'King' },
  { icon: '♕', label: 'Queen' },
  { icon: '♖', label: 'Rook' },
  { icon: '♗', label: 'Bishop' },
  { icon: '♘', label: 'Knight' },
  { icon: '♙', label: 'Pawn' },
];

const SeasonGlimpse = () => {
  return (
    <section className="glimpse section" id="glimpse">
      <div className="container">
        <div className="glimpse__header">
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            Glimpse of <span>LCAL Season 1</span>
          </h2>
          <div className="section-divider" style={{ margin: '8px auto 0' }} />
        </div>

        <div className="glimpse__pieces">
          {pieces.map((p, i) => (
            <div className="glimpse__piece" key={i} id={`glimpse-piece-${i}`}>
              <div className="glimpse__piece-icon">{p.icon}</div>
              <div className="glimpse__piece-label">{p.label}</div>
            </div>
          ))}
        </div>

        <div className="glimpse__gallery">
          <div className="glimpse__gallery-banner">
            <div className="glimpse__gallery-text">
              <h3>Season 1 — The Beginning of a Legend</h3>
              <p>Relive the historic first season that started it all. Epic battles, emerging champions, and unforgettable chess moments.</p>
              <a href="#season1" className="btn btn-gold btn-sm" id="btn-season1">Explore Season 1 →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeasonGlimpse;
