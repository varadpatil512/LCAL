import React from 'react';
import './Hero.css';

const ChessBoard = () => {
  const squares = [];
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const isLight = (row + col) % 2 === 0;
      squares.push(
        <div
          key={`${row}-${col}`}
          className={`chess-square ${isLight ? 'chess-square--light' : 'chess-square--dark'}`}
        />
      );
    }
  }

  return (
    <div className="hero__chessboard-wrap">
      <div className="hero__chessboard">
        {squares}
        {/* Pieces overlay */}
        <div className="hero__piece hero__piece--king">♔</div>
        <div className="hero__piece hero__piece--queen">♕</div>
        <div className="hero__piece hero__piece--pawn">♟</div>
        <div className="hero__piece hero__piece--bishop">♗</div>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero__bg-overlay" />

      <div className="container hero__container">
        {/* Left Content */}
        <div className="hero__content">
          <div className="hero__badge">
            <span className="gold-dot" />
            Season 3 — Now Live
          </div>

          <h1 className="hero__title">
            Every move<br />
            <span className="text-gradient-gold">tells a story</span>
          </h1>

          <p className="hero__subtitle">
            Experience the art of chess at its finest. Join LCAL — Lokhandwala Chess Academy League,
            where every game is a chapter, every player a legend.
          </p>

          <div className="hero__actions">
            <a href="#fixtures" className="btn btn-gold" id="btn-hero-fixtures">
              ♟ View Fixtures
            </a>
            <a href="#about" className="btn btn-outline" id="btn-hero-learn">
              Learn More
            </a>
          </div>

          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-value">1,500<span className="hero__stat-plus">+</span></span>
              <span className="hero__stat-label">Players</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-value">10</span>
              <span className="hero__stat-label">Seasons</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-value">150</span>
              <span className="hero__stat-label">Tournaments</span>
            </div>
          </div>
        </div>

        {/* Right Chessboard Visual */}
        <div className="hero__visual">
          <ChessBoard />
        </div>
      </div>

      {/* Bottom gold line */}
      <div className="gold-line" style={{ marginTop: 0 }} />
    </section>
  );
};

export default Hero;
