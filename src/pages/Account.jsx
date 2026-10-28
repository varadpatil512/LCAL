/**
 * Account.jsx — Protected profile page (requires login)
 */
import React, { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Account = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => { document.title = 'My Account | LCAL'; }, []);

  // Route guard
  if (!user) return <Navigate to="/login" replace />;

  const handleLogout = () => {
    logout();
    navigate('/', { replace: true });
  };

  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1 className="page-header__title">My Account</h1>
          <p className="page-header__desc">Welcome back, {user.name}.</p>
        </div>
      </div>

      <section className="section section--bg">
        <div className="container" style={{ maxWidth: '640px' }}>
          {/* Profile card */}
          <div style={{
            background: 'var(--card)',
            border: '1px solid var(--border)',
            padding: '40px',
            marginBottom: '24px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '32px' }}>
              <div style={{
                width: '64px', height: '64px',
                background: 'var(--bg)', border: '1px solid var(--gold)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.6rem', color: 'var(--gold)', fontFamily: 'Cinzel, serif',
                flexShrink: 0,
              }}>
                {user.name.charAt(0).toUpperCase()}
              </div>
              <div>
                <p style={{ fontFamily: 'Newsreader, Cinzel, serif', fontSize: '1.2rem', color: 'var(--cream)' }}>{user.name}</p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', color: 'var(--muted)' }}>{user.email}</p>
              </div>
            </div>

            {/* Profile fields */}
            {[
              ['Member since', user.memberSince || 'Season 1'],
              ['Starting rating', user.rating || 1500],
              ['Account ID', user.id],
            ].map(([label, value]) => (
              <div key={label} style={{
                display: 'flex', justifyContent: 'space-between',
                padding: '14px 0', borderBottom: '1px solid var(--border)',
                fontFamily: 'Inter, sans-serif', fontSize: '0.87rem',
              }}>
                <span style={{ color: 'var(--muted)', textTransform: 'uppercase', fontSize: '11px', letterSpacing: '0.1em' }}>{label}</span>
                <span style={{ color: 'var(--cream)' }}>{value}</span>
              </div>
            ))}
          </div>

          <button
            className="btn btn-secondary"
            onClick={handleLogout}
            id="btn-logout"
          >
            Log out
          </button>
        </div>
      </section>
    </>
  );
};

export default Account;
