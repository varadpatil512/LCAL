import React from 'react';
import './LatestVideos.css';

const videos = [
  {
    icon: '♟',
    title: 'Season 2 Grand Finale Highlights',
    views: '12.4K views',
    duration: '18:42',
    category: 'Highlights',
  },
  {
    icon: '♛',
    title: 'Queen\'s Gambit Masterclass',
    views: '8.1K views',
    duration: '24:15',
    category: 'Tutorial',
  },
  {
    icon: '♞',
    title: 'Knight Tactics in Endgame',
    views: '5.6K views',
    duration: '31:08',
    category: 'Tutorial',
  },
  {
    icon: '♗',
    title: 'Top 10 Moves of Season 2',
    views: '22.3K views',
    duration: '09:55',
    category: 'Highlights',
  },
];

const LatestVideos = () => {
  return (
    <section className="videos section" id="videos">
      <div className="container">
        <div className="section-header">
          <div>
            <h2 className="section-title">Latest <span>Videos</span></h2>
            <div className="section-divider" />
          </div>
          <a href="#all-videos" className="btn btn-outline btn-sm" id="btn-all-videos">View All</a>
        </div>

        <div className="videos__grid">
          {videos.map((v, i) => (
            <div className="videos__card card" key={i} id={`video-card-${i}`}>
              <div className="videos__thumbnail">
                <span className="videos__thumb-icon">{v.icon}</span>
                <span className="videos__duration">{v.duration}</span>
                <div className="videos__play-btn">▶</div>
                <div className="videos__thumb-overlay" />
              </div>
              <div className="videos__info">
                <span className="badge badge-gold">{v.category}</span>
                <h3 className="videos__title">{v.title}</h3>
                <span className="videos__views">👁 {v.views}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestVideos;
