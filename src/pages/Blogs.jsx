/**
 * Blogs.jsx — Blog listing page
 */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import BlogCard from '../components/BlogCard';
import { blogs } from '../data/blogs';

const Blogs = () => {
  useEffect(() => { document.title = 'Blogs — LCAL'; }, []);

  return (
    <>
      <div className="page-header">
        <div className="container">
          <p className="page-header__breadcrumb">
            <Link to="/">Home</Link>
            <span> &rsaquo; Blogs</span>
          </p>
          <h1 className="page-header__title">Blog</h1>
          <p className="page-header__desc">
            Coaching guides, season previews, tactical analysis, and news from the LCAL community.
          </p>
        </div>
      </div>

      <section className="section section--bg" aria-label="Blog posts">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}>
            {blogs.map((b, i) => (
              <BlogCard key={b.slug} blog={b} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
