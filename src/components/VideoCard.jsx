/**
 * VideoCard.jsx — Video thumbnail card with chess piece graphic
 * Replace the piece icon with a real <img> or YouTube thumbnail when available.
 */
import React from 'react';
import './VideoCard.css';

const VideoCard = ({ video }) => {
  const { icon, title, views, duration, category, youtubeUrl } = video;

  return (
    <a
      href={youtubeUrl || '#'}
      className="video-card"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Watch: ${title}`}
    >
      {/* Thumbnail — replace .video-card__piece with <img> when real thumbnails are available */}
      <div className="video-card__thumb">
        <span className="video-card__piece" aria-hidden="true">{icon}</span>
        <span className="video-card__duration">{duration}</span>
        <div className="video-card__play" aria-hidden="true">
          <div className="video-card__play-icon">▶</div>
        </div>
      </div>

      <div className="video-card__info">
        <span className="badge badge-gold">{category}</span>
        <h3 className="video-card__title">{title}</h3>
        <span className="video-card__views">👁 {views}</span>
      </div>
    </a>
  );
};

export default VideoCard;
