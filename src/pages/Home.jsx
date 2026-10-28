/**
 * Home.jsx — Gateway homepage
 *
 * Mobile/tablet hero (<900px):
 *   Centered column: pill → headline → subtitle → board → buttons
 *
 * Desktop hero (≥900px):
 *   Two-column grid: (badge + headline + subtitle + buttons) LEFT | board RIGHT
 *   — unchanged from original.
 */

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import MatchCard     from '../components/MatchCard';
import VideoCard     from '../components/VideoCard';
import BlogCard      from '../components/BlogCard';
import ChampionCard  from '../components/ChampionCard';
import { results }   from '../data/results';
import { videos }    from '../data/videos';
import { blogs }     from '../data/blogs';
import { champions } from '../data/champions';
import { YOUTUBE_STREAMS_URL } from '../data/videos';
import './Home.css';

/* ── 4×4 Chessboard graphic ── */
const BOARD_PIECES = {
  '0-1': ['♔', 'gold'],   // gold king on dark square
  '2-2': ['♕', 'cream'],  // cream queen on light square
};

const ChessBoard = () => {
  const squares = [];
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 4; col++) {
      const isLight = (row + col) % 2 === 0;
      const key = `${row}-${col}`;
      const piece = BOARD_PIECES[key];
      squares.push(
        <div
          key={key}
          className={`chess-square chess-square--${isLight ? 'light' : 'dark'}`}
        >
          {piece && (
            <span
              className={`chess-square__piece chess-square__piece--${piece[1]}`}
              aria-hidden="true"
            >
              {piece[0]}
            </span>
          )}
        </div>
      );
    }
  }
  return (
    <div className="hero__chessboard-wrap" aria-label="Decorative chessboard">
      <div className="hero__chessboard" aria-hidden="true">{squares}</div>
    </div>
  );
};

/* ── Stats data ── */
const STATS = [
  { number: '1,500+', label: 'Members' },
  { number: '10+',    label: 'Coaches' },
  { number: '150+',   label: 'Tournaments' },
  { number: '15+',    label: 'Years' },
];

const Home = () => {
  useEffect(() => {
    document.title = 'LCAL | League of Chess Association';
  }, []);

  const latestResults  = results.slice(0, 3);
  const latestVideos   = videos.slice(0, 4);
  const featuredChamps = champions.slice(0, 3);
  const latestBlogs    = blogs.slice(0, 3);

  return (
    <>
      {/* ── 1. Hero ── */}
      <section className="hero" id="hero" aria-labelledby="hero-title">
        <div className="container hero__container">

          {/*
           * hero__content holds ALL text + board + buttons.
           * On desktop (≥900px) it is the LEFT column; the board sits separately
           * in hero__visual (right column).
           * On mobile/tablet (<900px) the board inside hero__content is shown
           * via .hero__board-mobile; the hero__visual (right col) is hidden.
           */}
          <div className="hero__content">

            {/* ── Pill badge — visible only on mobile/tablet ── */}
            <div className="hero__pill" aria-label="Season 3 is live">
              <span className="hero__pill-dot" aria-hidden="true" />
              <span className="hero__pill-text">Season 3 is Live</span>
            </div>

            {/* ── Eyebrow — visible only on desktop ── */}
            <p className="hero__badge">
              <span className="gold-dot" aria-hidden="true" />
              League of Chess Association
            </p>

            {/* ── Headline ── */}
            <h1 className="hero__title" id="hero-title">
              Every move<br />
              <span className="text-gradient-gold">tells a story</span>
            </h1>

            {/* ── Short subtitle (mobile only, <600px) ── */}
            <p className="hero__subtitle hero__subtitle--short">
              LCAL is Lokhandwala's premier chess league. Follow the action and climb the leaderboard.
            </p>

            {/* ── Full subtitle (tablet 600px+ and desktop) ── */}
            <p className="hero__subtitle hero__subtitle--full">
              LCAL is Lokhandwala's premier chess league — where competitive spirit meets
              timeless strategy. Season 3 is live. Join the community, follow the action,
              climb the leaderboard.
            </p>

            {/* ── Chessboard — mobile/tablet only (inside content column) ── */}
            <div className="hero__board-mobile" aria-hidden="true">
              <ChessBoard />
            </div>

            {/* ── CTA buttons ── */}
            <div className="hero__actions">
              <a
                href={YOUTUBE_STREAMS_URL}
                className="btn btn-primary hero__btn"
                target="_blank"
                rel="noopener noreferrer"
                id="btn-watch-streams"
              >
                ▶ Watch the streams
              </a>
              <Link
                to="/leaderboard"
                className="btn btn-outline hero__btn"
                id="btn-leaderboard"
              >
                Leaderboard
              </Link>
            </div>
          </div>

          {/* ── Chessboard — desktop only (right column) ── */}
          <div className="hero__visual" aria-hidden="true">
            <ChessBoard />
          </div>
        </div>
      </section>

      {/* ── 2. Stats strip ── */}
      <div className="stats-strip" aria-label="Key statistics">
        <div className="container">
          <div className="stats-strip__grid">
            {STATS.map((s) => (
              <div className="stats-strip__item" key={s.label}>
                <span className="stats-strip__number" aria-label={`${s.number} ${s.label}`}>
                  {s.number}
                </span>
                <span className="stats-strip__label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 3. Latest Results ── */}
      <section className="home-section home-section--chess" id="latest-results" aria-labelledby="results-heading">
        <div className="container">
          <SectionHeader
            eyebrow="Season 3"
            title='Latest <span>Results</span>'
            linkTo="/results"
            linkLabel="View all results"
          />
          <div className="results-list" id="results-heading">
            {latestResults.map(r => <MatchCard key={r.id} result={r} />)}
          </div>
        </div>
      </section>

      {/* ── 4. Latest Videos ── */}
      <section className="home-section home-section--band" id="latest-videos" aria-labelledby="videos-heading">
        <div className="container">
          <SectionHeader
            eyebrow="Watch"
            title='Latest <span>Videos</span>'
            linkTo="/videos"
            linkLabel="View more"
          />
          <div className="video-grid" id="videos-heading">
            {latestVideos.map(v => <VideoCard key={v.id} video={v} />)}
          </div>
        </div>
      </section>

      {/* ── 5. Hall of Fame teaser ── */}
      <section className="home-section" id="hof-teaser" aria-labelledby="hof-heading">
        <div className="container">
          <SectionHeader
            eyebrow="Legends"
            title='Hall of <span>Fame</span>'
            linkTo="/hall-of-fame"
            linkLabel="See all champions"
          />
          <div className="champions-grid" id="hof-heading">
            {featuredChamps.map(c => <ChampionCard key={c.name + c.season} champion={c} />)}
          </div>
        </div>
      </section>

      {/* ── 6. From the Blog ── */}
      <section className="home-section home-section--band" id="blog-teaser" aria-labelledby="blog-heading">
        <div className="container">
          <SectionHeader
            eyebrow="Knowledge"
            title='From the <span>Blog</span>'
            linkTo="/blogs"
            linkLabel="All blogs"
          />
          <div className="blog-grid" id="blog-heading">
            {latestBlogs.map((b, i) => <BlogCard key={b.slug} blog={b} index={i} />)}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
