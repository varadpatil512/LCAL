import React from 'react';
import './StatsBar.css';

const stats = [
  { value: '1,500', suffix: '+', label: 'Players' },
  { value: '10', suffix: '', label: 'Seasons' },
  { value: '150', suffix: '', label: 'Tournaments' },
  { value: '15', suffix: '', label: 'Venues' },
];

const StatsBar = () => {
  return (
    <section className="statsbar" id="stats">
      <div className="container">
        <div className="statsbar__grid">
          {stats.map((s, i) => (
            <div className="statsbar__item" key={i} id={`stat-${i}`}>
              <div className="statsbar__value">
                {s.value}
                <span className="statsbar__suffix">{s.suffix}</span>
              </div>
              <div className="statsbar__label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
