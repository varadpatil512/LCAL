/**
 * AuthContext.jsx — Mock authentication context
 * Stores login state in localStorage so it persists on refresh.
 * To swap for real auth: replace the login/logout functions with
 * calls to your backend (Firebase, Supabase, custom JWT, etc.).
 */

import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Rehydrate from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('lcal_user');
    if (stored) {
      try { setUser(JSON.parse(stored)); } catch { /* ignore */ }
    }
  }, []);

  /**
   * Mock login — accepts any email/password where password.length >= 6.
   * Returns { ok: true } or { ok: false, error: '...' }
   */
  function login(email, password) {
    if (!email || !password) return { ok: false, error: 'All fields are required.' };
    if (password.length < 6) return { ok: false, error: 'Password must be at least 6 characters.' };

    const mockUser = {
      id: 'u1',
      email,
      name: email.split('@')[0].replace(/[._]/g, ' '),
      memberSince: 'Season 1',
      rating: 1500,
    };
    setUser(mockUser);
    localStorage.setItem('lcal_user', JSON.stringify(mockUser));
    return { ok: true };
  }

  function logout() {
    setUser(null);
    localStorage.removeItem('lcal_user');
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

/** Hook for consuming auth in any component */
export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within <AuthProvider>');
  return ctx;
}
