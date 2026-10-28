import React from 'react';
import './NewsForums.css';

const news = [
  {
    icon: '♛',
    category: 'Match Report',
    title: 'Arjun Mehta Wins Decisive Game with Brilliant Rook Sacrifice',
    excerpt: 'In a stunning display of tactical brilliance, Arjun Mehta secured top position with a jaw-dropping rook sacrifice on move 24.',
    date: 'Oct 22, 2026',
    readTime: '3 min read',
  },
  {
    icon: '♞',
    category: 'Feature',
    title: 'Strategy Behind LCAL\'s Season 3 Format Change',
    excerpt: 'The organizing committee explains the new Swiss system format and how it benefits both top and developing players.',
    date: 'Oct 18, 2026',
    readTime: '5 min read',
  },
  {
    icon: '♝',
    category: 'Interview',
    title: 'Season 2 Champion Shares Secrets of Success',
    excerpt: 'Exclusive interview with the Season 2 champion discussing preparation, mental fortitude, and plans for Season 3.',
    date: 'Oct 15, 2026',
    readTime: '7 min read',
  },
];

const NewsForums = () => {
  return (
    <section className="news section" id="news">
      <div className="container">
        <div className="section-header">
          <div>
            <h2 className="section-title">News &amp; <span>Forums</span></h2>
            <div className="section-divider" />
          </div>
          <a href="#all-news" className="btn btn-outline btn-sm" id="btn-all-news">View All</a>
        </div>

        <div className="news__grid">
          {news.map((n, i) => (
            <article className="news__card card" key={i} id={`news-card-${i}`}>
              <div className="news__thumbnail">
                <span className="news__thumb-icon">{n.icon}</span>
                <span className="news__category badge badge-gold">{n.category}</span>
              </div>
              <div className="news__content">
                <h3 className="news__title">{n.title}</h3>
                <p className="news__excerpt">{n.excerpt}</p>
                <div className="news__meta">
                  <span className="news__date">📅 {n.date}</span>
                  <span className="news__read-time">⏱ {n.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsForums;
