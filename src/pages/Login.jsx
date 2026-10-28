/**
 * Login.jsx — Login form with validation and AuthContext
 */
import React, { useState, useEffect } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Login.css';

const Login = () => {
  const { user, login } = useAuth();
  const navigate = useNavigate();

  const [email,    setEmail]    = useState('');
  const [password, setPassword] = useState('');
  const [errors,   setErrors]   = useState({});
  const [loading,  setLoading]  = useState(false);

  useEffect(() => { document.title = 'Log In — LCAL'; }, []);

  // Already logged in → redirect to account
  if (user) return <Navigate to="/account" replace />;

  const validate = () => {
    const e = {};
    if (!email.trim())         e.email    = 'Email is required.';
    else if (!/\S+@\S+\.\S+/.test(email)) e.email = 'Enter a valid email address.';
    if (!password)             e.password = 'Password is required.';
    else if (password.length < 6) e.password = 'Password must be at least 6 characters.';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setLoading(true);
    // Simulate async login
    setTimeout(() => {
      const res = login(email, password);
      if (res.ok) {
        navigate('/account', { replace: true });
      } else {
        setErrors({ form: res.error });
        setLoading(false);
      }
    }, 600);
  };

  return (
    <div className="login-page section--bg">
      <div className="login-card">
        <span className="login-card__icon" aria-hidden="true">♞</span>
        <h1 className="login-card__title">Welcome back</h1>
        <p className="login-card__subtitle">Log in to your LCAL account</p>

        <form className="login-form" onSubmit={handleSubmit} noValidate aria-label="Login form">
          {errors.form && (
            <p className="login-form__error" role="alert">{errors.form}</p>
          )}

          <div className="login-form__group">
            <label className="login-form__label" htmlFor="login-email">Email address</label>
            <input
              className={`login-form__input${errors.email ? ' error' : ''}`}
              id="login-email"
              type="email"
              name="email"
              autoComplete="email"
              value={email}
              onChange={e => { setEmail(e.target.value); setErrors(prev => ({ ...prev, email: '' })); }}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
              placeholder="you@example.com"
            />
            {errors.email && (
              <span id="email-error" className="login-form__error" role="alert">{errors.email}</span>
            )}
          </div>

          <div className="login-form__group">
            <label className="login-form__label" htmlFor="login-password">Password</label>
            <input
              className={`login-form__input${errors.password ? ' error' : ''}`}
              id="login-password"
              type="password"
              name="password"
              autoComplete="current-password"
              value={password}
              onChange={e => { setPassword(e.target.value); setErrors(prev => ({ ...prev, password: '' })); }}
              aria-invalid={!!errors.password}
              aria-describedby={errors.password ? 'password-error' : undefined}
              placeholder="••••••••"
            />
            {errors.password && (
              <span id="password-error" className="login-form__error" role="alert">{errors.password}</span>
            )}
          </div>

          <button
            type="submit"
            className="btn btn-primary login-form__submit"
            id="btn-login-submit"
            disabled={loading}
          >
            {loading ? 'Logging in…' : 'Log In'}
          </button>
        </form>

        <p style={{ marginTop: '24px', fontSize: '0.82rem', color: 'var(--muted)', fontFamily: 'Inter, sans-serif', textAlign: 'center' }}>
          Mock login — any email + 6+ character password works.
        </p>
      </div>
    </div>
  );
};

export default Login;
