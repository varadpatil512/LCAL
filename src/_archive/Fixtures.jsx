import React, { useState } from 'react';
import './Fixtures.css';

const fixturesData = [
  {
    round: 'Round 1',
    date: 'Oct 28, 2026',
    matches: [
      { player1: 'Arjun Mehta', rating1: 1820, player2: 'Rahul Shah', rating2: 1795, result: '1-0', board: 'Board A' },
      { player1: 'Priya Nair', rating1: 1750, player2: 'Dev Patel', rating2: 1810, result: '½-½', board: 'Board B' },
      { player1: 'Sonal Kapoor', rating1: 1680, player2: 'Amit Joshi', rating2: 1720, result: '0-1', board: 'Board C' },
    ]
  },
  {
    round: 'Round 2',
    date: 'Nov 4, 2026',
    matches: [
      { player1: 'Rahul Shah', rating1: 1795, player2: 'Sonal Kapoor', rating2: 1680, result: '', board: 'Board A' },
      { player1: 'Dev Patel', rating1: 1810, player2: 'Arjun Mehta', rating2: 1820, result: '', board: 'Board B' },
      { player1: 'Amit Joshi', rating1: 1720, player2: 'Priya Nair', rating2: 1750, result: '', board: 'Board C' },
    ]
  },
];

const Fixtures = () => {
  const [activeRound, setActiveRound] = useState(0);

  const getResultClass = (result) => {
    if (!result) return '';
    if (result === '1-0') return 'result--win';
    if (result === '0-1') return 'result--loss';
    return 'result--draw';
  };

  return (
    <section className="fixtures section" id="fixtures">
      <div className="container">
        <div className="section-header">
          <div>
            <h2 className="section-title">Fixtures</h2>
            <div className="section-divider" />
          </div>
          <div className="fixtures__controls">
            <div className="fixtures__tabs">
              {fixturesData.map((r, i) => (
                <button
                  key={i}
                  className={`fixtures__tab ${activeRound === i ? 'active' : ''}`}
                  onClick={() => setActiveRound(i)}
                  id={`fixture-tab-${i}`}
                >
                  {r.round}
                </button>
              ))}
            </div>
            <a href="#all-fixtures" className="btn btn-gold btn-sm" id="btn-all-fixtures">Full Schedule</a>
          </div>
        </div>

        <div className="fixtures__content">
          <div className="fixtures__round-info">
            <span className="fixtures__round-label">{fixturesData[activeRound].round}</span>
            <span className="fixtures__round-date">📅 {fixturesData[activeRound].date}</span>
          </div>

          <div className="fixtures__matches">
            {fixturesData[activeRound].matches.map((match, i) => (
              <div className="fixtures__match card" key={i} id={`match-${activeRound}-${i}`}>
                <span className="fixtures__board">{match.board}</span>

                <div className="fixtures__player fixtures__player--left">
                  <div className="fixtures__player-info">
                    <div className="fixtures__player-avatar">
                      {match.player1.charAt(0)}
                    </div>
                    <div>
                      <div className="fixtures__player-name">{match.player1}</div>
                      <div className="fixtures__player-rating">Rating: {match.rating1}</div>
                    </div>
                  </div>
                </div>

                <div className="fixtures__result-center">
                  {match.result ? (
                    <span className={`fixtures__result ${getResultClass(match.result)}`}>
                      {match.result}
                    </span>
                  ) : (
                    <span className="fixtures__vs">VS</span>
                  )}
                </div>

                <div className="fixtures__player fixtures__player--right">
                  <div className="fixtures__player-info reverse">
                    <div>
                      <div className="fixtures__player-name">{match.player2}</div>
                      <div className="fixtures__player-rating">Rating: {match.rating2}</div>
                    </div>
                    <div className="fixtures__player-avatar">
                      {match.player2.charAt(0)}
                    </div>
                  </div>
                </div>

                <div className="fixtures__stars">
                  <div className="stars">
                    {'★★★★☆'.split('').map((s, j) => (
                      <span key={j} style={{ color: j < 4 ? '#c9a227' : '#333' }}>{s}</span>
                    ))}
                  </div>
                  <span className="fixtures__rating-num">4.0</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fixtures;
