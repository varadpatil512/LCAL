/**
 * Constitution.jsx — Static constitution page
 */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Static.css';

const SECTIONS = [
  { id: 'name',     heading: '1. Name and Establishment', content: 'The association shall be known as the League of Chess Association, abbreviated as LCAL. It was established in Season 1 with the aim of promoting competitive chess within the Lokhandwala community and beyond.' },
  { id: 'mission',  heading: '2. Mission', content: 'LCAL exists to foster a love of chess through competitive, fair, and inclusive league play. We are committed to developing players of all skill levels, providing quality coaching, and streaming our events to grow the global chess community.' },
  { id: 'membership', heading: '3. Membership', content: 'Membership is open to all chess players regardless of age, rating, or background. Members must register for each season and agree to abide by the LCAL Code of Conduct. Annual membership fees, if any, are determined by the governing committee before each season.' },
  { id: 'structure', heading: '4. Governing Structure', content: 'LCAL is governed by a committee comprising the President, Vice President, Chief Arbiter, and two elected Player Representatives. The committee meets quarterly and is responsible for rules, scheduling, budget, and strategic direction.' },
  { id: 'rules',   heading: '5. Rules of Play', content: 'All games are played under FIDE Laws of Chess unless stated otherwise. Time controls, pairing systems, and tiebreak methods are published before each season. The Chief Arbiter has final say on all disputes during play.' },
  { id: 'conduct', heading: '6. Code of Conduct', content: 'All participants must treat opponents, arbiters, and spectators with respect. Cheating, unsportsmanlike behaviour, or harassment will result in immediate disqualification. Repeated violations may lead to a season or permanent ban at the committee\'s discretion.' },
  { id: 'amendments', heading: '7. Amendments', content: 'This constitution may be amended by a two-thirds majority vote of the governing committee. Proposed amendments must be circulated to all members at least 14 days before the vote.' },
];

const Constitution = () => {
  useEffect(() => { document.title = 'Constitution — LCAL'; }, []);

  return (
    <>
      <div className="page-header">
        <div className="container">
          <p className="page-header__breadcrumb">
            <Link to="/">Home</Link>
            <span> &rsaquo; Constitution</span>
          </p>
          <h1 className="page-header__title">Constitution</h1>
          <p className="page-header__desc">The founding document of the League of Chess Association.</p>
        </div>
      </div>

      <section className="section section--bg">
        <div className="container">
          <div className="static-page">
            {/* Table of contents */}
            <aside className="static-page__toc" aria-label="Table of contents">
              <p className="static-page__toc-title">Contents</p>
              <ul>
                {SECTIONS.map(s => (
                  <li key={s.id}>
                    <a href={`#${s.id}`}>{s.heading}</a>
                  </li>
                ))}
              </ul>
            </aside>

            {/* Content */}
            <div className="static-page__content">
              {SECTIONS.map(s => (
                <div key={s.id}>
                  <h2 id={s.id}>{s.heading}</h2>
                  <p>{s.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Constitution;
