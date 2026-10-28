import React from 'react';
import './Sponsors.css';

const sponsors = [
  { name: 'Gold', tier: 'Gold', sponsors: ['ChessKing Pro', 'Mumbai Chess Club', 'Strategic Minds'] },
  { name: 'Silver', tier: 'Silver', sponsors: ['Anand Academy', 'Chess.com India'] },
  { name: 'Bronze', tier: 'Bronze', sponsors: ['Lokhandwala Sports', 'West Mumbai FC'] },
];

const Sponsors = () => {
  return (
    <section className="sponsors section" id="sponsors">
      <div className="container">
        <div className="sponsors__header">
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            Our <span>Sponsors</span>
          </h2>
          <div className="section-divider" style={{ margin: '8px auto 40px' }} />
        </div>

        {sponsors.map((tier, i) => (
          <div className="sponsors__tier" key={i}>
            <div className="sponsors__tier-label">
              <div className={`sponsors__tier-badge tier-${tier.tier.toLowerCase()}`}>
                {tier.tier === 'Gold' ? '♛' : tier.tier === 'Silver' ? '♜' : '♟'} {tier.tier}
              </div>
            </div>
            <div className="sponsors__logos">
              {tier.sponsors.map((s, j) => (
                <div className="sponsors__logo-card card" key={j} id={`sponsor-${i}-${j}`}>
                  <div className="sponsors__logo-icon">
                    {tier.tier === 'Gold' ? '♛' : tier.tier === 'Silver' ? '♜' : '♟'}
                  </div>
                  <div className="sponsors__logo-name">{s}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sponsors;
