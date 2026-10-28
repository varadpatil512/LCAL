/**
 * BlogPost.jsx — Individual blog post page
 * Renders markdown-like content with basic HTML conversion.
 */
import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { blogs } from '../data/blogs';
import './BlogPost.css';

/* Very basic markdown-to-HTML converter for the content field */
function markdownToHtml(md) {
  return md
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/^/, '<p>')
    .replace(/$/, '</p>')
    .replace(/<p>(<h[23]>)/g, '$1')
    .replace(/(<\/h[23]>)<\/p>/g, '$1');
}

const PIECES = ['♟', '♛', '♞', '♗', '♜', '♔'];

const BlogPost = () => {
  const { slug } = useParams();
  const blog = blogs.find(b => b.slug === slug);
  const idx  = blogs.findIndex(b => b.slug === slug);

  useEffect(() => {
    if (blog) document.title = `${blog.title} — LCAL`;
  }, [blog]);

  if (!blog) return <Navigate to="/blogs" replace />;

  const formattedDate = new Date(blog.date).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric',
  });

  return (
    <>
      <div className="page-header">
        <div className="container">
          <p className="page-header__breadcrumb">
            <Link to="/">Home</Link>
            <span> &rsaquo; </span>
            <Link to="/blogs">Blog</Link>
            <span> &rsaquo; {blog.title}</span>
          </p>
        </div>
      </div>

      <section className="section section--bg" aria-label="Blog post">
        <div className="container">
          <div className="blog-post__body">
            {/* Hero graphic */}
            <div className="blog-post__hero" aria-hidden="true">
              {PIECES[idx % PIECES.length]}
            </div>

            {/* Meta */}
            <div className="blog-post__meta">
              {blog.tags?.[0] && <span className="badge badge-gold">{blog.tags[0]}</span>}
              <span style={{ fontSize: '0.82rem', color: 'var(--muted)', fontFamily: 'Inter, sans-serif' }}>
                {formattedDate}
              </span>
              {blog.author && (
                <span style={{ fontSize: '0.82rem', color: 'var(--muted)', fontFamily: 'Inter, sans-serif' }}>
                  By {blog.author}
                </span>
              )}
            </div>

            <h1 className="blog-post__title">{blog.title}</h1>

            {/* Content */}
            <article
              className="blog-post__content"
              dangerouslySetInnerHTML={{ __html: markdownToHtml(blog.content) }}
            />

            {/* Tags */}
            {blog.tags && (
              <div className="blog-post__tags" aria-label="Post tags">
                {blog.tags.map(t => (
                  <span key={t} className="badge badge-gold">{t}</span>
                ))}
              </div>
            )}

            {/* Back */}
            <div className="blog-post__back">
              <Link to="/blogs" className="btn btn-secondary">← Back to blog</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPost;
