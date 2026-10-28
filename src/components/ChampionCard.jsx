/**
 * ChampionCard.jsx — Hall of Fame champion card
 */
import React from 'react';
import './ChampionCard.css';

const ChampionCard = ({ champion }) => {
  const { season, name, title, piece, achievement } = champion;

  return (
    <article className="champion-card">
      <span className="champion-card__piece" aria-hidden="true">{piece}</span>
      <span className="champion-card__season">Season {season}</span>
      <div className="champion-card__divider" />
      <h3 className="champion-card__name">{name}</h3>
      <p className="champion-card__title">{title}</p>
      {achievement && <p className="champion-card__achievement">{achievement}</p>}
    </article>
  );
};

export default ChampionCard;
