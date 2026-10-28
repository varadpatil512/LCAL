/**
 * SectionHeader.jsx — Reusable eyebrow + title + optional "View all" link
 */
import React from 'react';
import { Link } from 'react-router-dom';
import './SectionHeader.css';

/**
 * @param {string}  eyebrow   — Small label above the title (optional)
 * @param {string}  title     — Main heading (use <span> for gold highlight)
 * @param {string}  linkTo    — React Router path for the "View all" button
 * @param {string}  linkLabel — Button label (default: "View all")
 * @param {string}  linkHref  — External href (use instead of linkTo)
 */
const SectionHeader = ({ eyebrow, title, linkTo, linkLabel = 'View all', linkHref }) => (
  <div className="section-header">
    <div className="section-header__left">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="section-title" dangerouslySetInnerHTML={{ __html: title }} />
      <div className="section-divider" />
    </div>

    {(linkTo || linkHref) && (
      linkHref ? (
        <a
          href={linkHref}
          className="btn btn-outline btn-sm"
          target="_blank"
          rel="noopener noreferrer"
        >
          {linkLabel}
        </a>
      ) : (
        <Link to={linkTo} className="btn btn-outline btn-sm">
          {linkLabel}
        </Link>
      )
    )}
  </div>
);

export default SectionHeader;
