/**
 * HallOfFame.jsx — Full hall of fame grid
 */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ChampionCard from '../components/ChampionCard';
import { champions } from '../data/champions';

const HallOfFame = () => {
  useEffect(() => { document.title = 'Hall of Fame | LCAL'; }, []);

  return (
    <>
      <div className="page-header">
        <div className="container">
          <p className="page-header__breadcrumb">
            <Link to="/">Home</Link>
            <span> &rsaquo; Hall of Fame</span>
          </p>
          <h1 className="page-header__title">Hall of Fame</h1>
        </div>
      </div>

      <section className="section section--bg" aria-label="Champions">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '24px',
          }}>
            {champions.map(c => (
              <ChampionCard key={c.name + c.season} champion={c} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HallOfFame;
