import React from 'react';
import './Standings.css';

const players = [
  { rank: 1, name: 'Arjun Mehta', played: 6, wins: 5, draws: 1, losses: 0, points: 11, rating: 1820, form: ['W','W','W','D','W','W'] },
  { rank: 2, name: 'Dev Patel',   played: 6, wins: 4, draws: 1, losses: 1, points: 9,  rating: 1810, form: ['W','L','W','W','D','W'] },
  { rank: 3, name: 'Priya Nair',  played: 6, wins: 3, draws: 2, losses: 1, points: 8,  rating: 1750, form: ['D','W','W','D','L','W'] },
  { rank: 4, name: 'Rahul Shah',  played: 6, wins: 3, draws: 1, losses: 2, points: 7,  rating: 1795, form: ['W','W','L','W','D','L'] },
  { rank: 5, name: 'Amit Joshi',  played: 6, wins: 2, draws: 2, losses: 2, points: 6,  rating: 1720, form: ['D','D','W','L','W','L'] },
  { rank: 6, name: 'Sonal Kapoor',played: 6, wins: 1, draws: 1, losses: 4, points: 3,  rating: 1680, form: ['L','L','W','D','L','L'] },
];

const formColor = { W: '#4caf50', D: '#c9a227', L: '#f44336' };

const Standings = () => {
  return (
    <section className="standings section" id="standings">
      <div className="container">
        <div className="section-header">
          <div>
            <h2 className="section-title">Point <span>Table</span></h2>
            <div className="section-divider" />
          </div>
          <div className="standings__meta">
            <span className="badge badge-gold">Season 3 — Live</span>
          </div>
        </div>

        <div className="standings__table-wrap">
          <table className="standings__table">
            <thead>
              <tr>
                <th>#</th>
                <th style={{ textAlign: 'left' }}>Player</th>
                <th>Rating</th>
                <th>P</th>
                <th>W</th>
                <th>D</th>
                <th>L</th>
                <th>Pts</th>
                <th>Form</th>
              </tr>
            </thead>
            <tbody>
              {players.map((p, i) => (
                <tr
                  key={i}
                  className={`standings__row ${i === 0 ? 'standings__row--gold' : i === 1 ? 'standings__row--silver' : i === 2 ? 'standings__row--bronze' : ''}`}
                  id={`standings-row-${i}`}
                >
                  <td className="standings__rank">
                    {i === 0 ? '♛' : i === 1 ? '♜' : i === 2 ? '♝' : p.rank}
                  </td>
                  <td>
                    <div className="standings__player">
                      <div className="standings__avatar">{p.name.charAt(0)}</div>
                      <span className="standings__name">{p.name}</span>
                    </div>
                  </td>
                  <td className="standings__rating">{p.rating}</td>
                  <td>{p.played}</td>
                  <td className="standings__wins">{p.wins}</td>
                  <td className="standings__draws">{p.draws}</td>
                  <td className="standings__losses">{p.losses}</td>
                  <td className="standings__points">{p.points}</td>
                  <td>
                    <div className="standings__form">
                      {p.form.map((f, j) => (
                        <span
                          key={j}
                          className="standings__form-dot"
                          style={{ background: formColor[f] }}
                          title={f === 'W' ? 'Win' : f === 'D' ? 'Draw' : 'Loss'}
                        >{f}</span>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Standings;
