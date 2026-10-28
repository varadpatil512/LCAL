/**
 * MatchCard.jsx — Displays a single chess match result
 */
import React from 'react';
import './MatchCard.css';

const MatchCard = ({ result }) => {
  const { date, round, white, black, result: score, gameUrl, season } = result;

  const formattedDate = new Date(date).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'short', year: 'numeric',
  });

  return (
    <article className="match-card" aria-label={`${white} vs ${black}, ${score}`}>
      <div className="match-card__meta">
        <span className="match-card__date">{formattedDate}</span>
        <span className="match-card__round">{round}</span>
        {season && <span className="match-card__date">{season}</span>}
      </div>

      {/* White (left) */}
      <div className="match-card__player">
        <div className="match-card__player-inner">
          <div className="match-card__avatar" aria-hidden="true">{white.charAt(0)}</div>
          <div>
            <div className="match-card__name">{white}</div>
            <div className="match-card__side">White</div>
          </div>
        </div>
      </div>

      {/* Score */}
      <div className="match-card__result-wrap">
        <span className="match-card__result" aria-label={`Result: ${score}`}>{score}</span>
        {gameUrl && (
          <a
            href={gameUrl}
            className="match-card__game-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View game: ${white} vs ${black}`}
          >
            View game ↗
          </a>
        )}
      </div>

      {/* Black (right) */}
      <div className="match-card__player match-card__player--right">
        <div className="match-card__player-inner">
          <div className="match-card__avatar" aria-hidden="true">{black.charAt(0)}</div>
          <div>
            <div className="match-card__name">{black}</div>
            <div className="match-card__side">Black</div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default MatchCard;
