import React from 'react';
import './Announcement.css';

const announcements = [
  {
    icon: '♟',
    title: 'Season 3 Registration Open',
    desc: 'Register now for the upcoming LCAL Season 3. Limited spots available for elite players.',
    date: 'Oct 25, 2026',
    tag: 'Registration',
  },
  {
    icon: '♛',
    title: 'The Summit',
    desc: 'Grand finale of Season 2 scheduled. Watch top 8 players battle for the championship crown.',
    date: 'Nov 5, 2026',
    tag: 'Tournament',
  },
  {
    icon: '♞',
    title: 'Important Advisory',
    desc: 'Updated player conduct guidelines and fair play policies effective from next season.',
    date: 'Oct 20, 2026',
    tag: 'Advisory',
  },
];

const Announcement = () => {
  return (
    <section className="announcement section" id="announcements">
      <div className="announcement__banner">
        <div className="container">
          <div className="announcement__banner-content">
            <div className="announcement__banner-icon">📢</div>
            <div>
              <h2 className="announcement__banner-title">Important Advisory &amp; Announcement</h2>
              <p className="announcement__banner-sub">
                Stay updated with the latest news, schedules, and official communications from LCAL
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="announcement__grid">
          {announcements.map((item, i) => (
            <div className="announcement__card card" key={i} id={`announcement-card-${i}`}>
              <div className="announcement__card-header">
                <span className="announcement__card-icon">{item.icon}</span>
                <span className={`badge badge-gold`}>{item.tag}</span>
              </div>
              <h3 className="announcement__card-title">{item.title}</h3>
              <p className="announcement__card-desc">{item.desc}</p>
              <div className="announcement__card-footer">
                <span className="announcement__card-date">📅 {item.date}</span>
                <a href="#" className="announcement__card-link">Read More →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Announcement;
