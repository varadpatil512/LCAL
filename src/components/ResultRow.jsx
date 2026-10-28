/**
 * ResultRow.jsx — Single result row for Results page table
 */
import React from 'react';
import './ResultRow.css';

const ResultRow = ({ result }) => {
  const { date, round, white, black, result: score, gameUrl } = result;

  const formattedDate = new Date(date).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'short',
  });

  return (
    <div className="result-row" role="row">
      <span className="result-row__date"  role="cell">{formattedDate}</span>
      <span className="result-row__round" role="cell">{round}</span>
      <span className="result-row__player" role="cell">{white}</span>
      <span className="result-row__result" role="cell" aria-label={`Result: ${score}`}>{score}</span>
      <span className="result-row__player result-row__player--right" role="cell">{black}</span>
      <div className="result-row__link" role="cell">
        {gameUrl ? (
          <a href={gameUrl} target="_blank" rel="noopener noreferrer" aria-label={`View game ${white} vs ${black}`}>
            Game link ↗
          </a>
        ) : (
          <span style={{ color: 'var(--muted)', fontSize: '0.75rem' }}>—</span>
        )}
      </div>
    </div>
  );
};

export default ResultRow;
