/**
 * BlogCard.jsx — Blog post preview card
 */
import React from 'react';
import { Link } from 'react-router-dom';
import './BlogCard.css';

// Chess pieces cycle for blog thumbnails
const PIECES = ['♟', '♛', '♞', '♗', '♜', '♔'];

const BlogCard = ({ blog, index = 0 }) => {
  const { slug, title, excerpt, date, author, tags } = blog;

  const formattedDate = new Date(date).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric',
  });

  return (
    <Link to={`/blogs/${slug}`} className="blog-card" aria-label={`Read: ${title}`}>
      {/* Replace .blog-card__piece with <img> when real images are available */}
      <div className="blog-card__thumb">
        <span className="blog-card__piece" aria-hidden="true">
          {PIECES[index % PIECES.length]}
        </span>
      </div>

      <div className="blog-card__body">
        {tags?.[0] && <span className="badge badge-gold">{tags[0]}</span>}

        <div className="blog-card__meta">
          <span className="blog-card__date">{formattedDate}</span>
          {author && <span className="blog-card__author">· {author}</span>}
        </div>

        <h3 className="blog-card__title">{title}</h3>
        <p className="blog-card__excerpt">{excerpt}</p>
        <span className="blog-card__read-more">Read more →</span>
      </div>
    </Link>
  );
};

export default BlogCard;
