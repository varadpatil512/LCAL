/**
 * Videos.jsx — Video library with streams feature strip
 */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import VideoCard from '../components/VideoCard';
import { videos, YOUTUBE_STREAMS_URL } from '../data/videos';
import './Videos.css';

const Videos = () => {
  useEffect(() => { document.title = 'Videos — LCAL'; }, []);

  return (
    <>
      <div className="page-header">
        <div className="container">
          <p className="page-header__breadcrumb">
            <Link to="/">Home</Link>
            <span> &rsaquo; Videos</span>
          </p>
          <h1 className="page-header__title">Videos</h1>
          <p className="page-header__desc">
            Tutorials, highlights, full matches and masterclasses from LCAL coaches and players.
          </p>
        </div>
      </div>

      {/* Streams feature strip */}
      <div className="videos-streams-strip">
        <div className="container">
          <div className="videos-streams-inner">
            <div>
              <h2>Watch the live streams</h2>
              <p>All LCAL rounds are streamed live on YouTube. Subscribe so you never miss a move.</p>
            </div>
            <a
              href={YOUTUBE_STREAMS_URL}
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
              id="btn-streams-youtube"
            >
              ▶ YouTube Channel ↗
            </a>
          </div>
        </div>
      </div>

      {/* Video grid */}
      <section className="section section--bg" aria-label="Video library">
        <div className="container">
          <div className="videos-grid">
            {videos.map(v => (
              <VideoCard key={v.id} video={v} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Videos;
