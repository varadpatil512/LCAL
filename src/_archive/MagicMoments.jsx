import React from 'react';
import './MagicMoments.css';

const moments = [
  { icon: '♟', title: 'The Pawn Promotion', event: 'Quarter Finals S2', caption: 'A breathtaking pawn promotion that decided the match' },
  { icon: '♛', title: 'Queen\'s Sacrifice', event: 'Semi Finals S2', caption: 'A shocking queen sacrifice that stunned the audience' },
  { icon: '♝', title: 'Bishop Endgame', event: 'Round 6 S2', caption: 'Brilliant bishop endgame technique on display' },
  { icon: '♜', title: 'Rook Brilliancy', event: 'Finals S2', caption: 'The rook maneuver that won the championship' },
];

const MagicMoments = () => {
  return (
    <section className="moments section" id="moments">
      <div className="container">
        <div className="section-header">
          <div>
            <h2 className="section-title">Magic <span>Moments</span></h2>
            <div className="section-divider" />
          </div>
          <a href="#all-moments" className="btn btn-outline btn-sm" id="btn-all-moments">View All</a>
        </div>

        <div className="moments__grid">
          {moments.map((m, i) => (
            <div className="moments__card card" key={i} id={`moment-card-${i}`}>
              <div className="moments__visual">
                <span className="moments__icon">{m.icon}</span>
                <div className="moments__overlay" />
                <span className="moments__event-tag">{m.event}</span>
              </div>
              <div className="moments__info">
                <h3 className="moments__title">{m.title}</h3>
                <p className="moments__caption">{m.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MagicMoments;
