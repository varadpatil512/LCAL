/**
 * results.js — Mock results data
 * Shape mirrors a future REST API: GET /api/results
 * To swap for real API: replace this array with a fetch() call in your page component.
 */

export const results = [
  { id: 'r001', date: '2026-10-28', round: 'Round 1', season: 'Season 3', white: 'Arjun Mehta', black: 'Rahul Shah',   result: '1-0',  gameUrl: 'https://www.youtube.com/@spiritofaustralianimishrau4608/featured' },
  { id: 'r002', date: '2026-10-28', round: 'Round 1', season: 'Season 3', white: 'Priya Nair',  black: 'Dev Patel',    result: '½-½',  gameUrl: 'https://www.youtube.com/@spiritofaustralianimishrau4608/featured' },
  { id: 'r003', date: '2026-10-28', round: 'Round 1', season: 'Season 3', white: 'Sonal Kapoor',black: 'Amit Joshi',   result: '0-1',  gameUrl: 'https://www.youtube.com/@spiritofaustralianimishrau4608/featured' },
  { id: 'r004', date: '2026-10-21', round: 'Round 2', season: 'Season 3', white: 'Dev Patel',   black: 'Arjun Mehta',  result: '½-½',  gameUrl: 'https://www.youtube.com/@spiritofaustralianimishrau4608/featured' },
  { id: 'r005', date: '2026-10-21', round: 'Round 2', season: 'Season 3', white: 'Rahul Shah',  black: 'Sonal Kapoor', result: '1-0',  gameUrl: 'https://www.youtube.com/@spiritofaustralianimishrau4608/featured' },
  { id: 'r006', date: '2026-10-21', round: 'Round 2', season: 'Season 3', white: 'Amit Joshi',  black: 'Priya Nair',   result: '0-1',  gameUrl: 'https://www.youtube.com/@spiritofaustralianimishrau4608/featured' },
  { id: 'r007', date: '2026-10-14', round: 'Round 3', season: 'Season 3', white: 'Arjun Mehta', black: 'Amit Joshi',   result: '1-0',  gameUrl: 'https://www.youtube.com/@spiritofaustralianimishrau4608/featured' },
  { id: 'r008', date: '2026-10-14', round: 'Round 3', season: 'Season 3', white: 'Priya Nair',  black: 'Rahul Shah',   result: '1-0',  gameUrl: 'https://www.youtube.com/@spiritofaustralianimishrau4608/featured' },
  { id: 'r009', date: '2026-10-14', round: 'Round 3', season: 'Season 3', white: 'Dev Patel',   black: 'Sonal Kapoor', result: '1-0',  gameUrl: 'https://www.youtube.com/@spiritofaustralianimishrau4608/featured' },
  { id: 'r010', date: '2026-10-07', round: 'Round 4', season: 'Season 3', white: 'Rahul Shah',  black: 'Dev Patel',    result: '½-½',  gameUrl: 'https://www.youtube.com/@spiritofaustralianimishrau4608/featured' },
  { id: 'r011', date: '2026-10-07', round: 'Round 4', season: 'Season 3', white: 'Sonal Kapoor',black: 'Arjun Mehta',  result: '0-1',  gameUrl: 'https://www.youtube.com/@spiritofaustralianimishrau4608/featured' },
  { id: 'r012', date: '2026-10-07', round: 'Round 4', season: 'Season 3', white: 'Amit Joshi',  black: 'Priya Nair',   result: '½-½',  gameUrl: 'https://www.youtube.com/@spiritofaustralianimishrau4608/featured' },
  // Season 2 results
  { id: 'r013', date: '2025-11-15', round: 'Final',   season: 'Season 2', white: 'Kiran Desai', black: 'Ananya Rao',   result: '1-0',  gameUrl: 'https://www.youtube.com/@spiritofaustralianimishrau4608/featured' },
  { id: 'r014', date: '2025-11-08', round: 'Semi-final', season: 'Season 2', white: 'Ananya Rao', black: 'Rohan Gupta', result: '1-0',  gameUrl: 'https://www.youtube.com/@spiritofaustralianimishrau4608/featured' },
  { id: 'r015', date: '2025-11-08', round: 'Semi-final', season: 'Season 2', white: 'Kiran Desai', black: 'Player F',  result: '½-½',  gameUrl: 'https://www.youtube.com/@spiritofaustralianimishrau4608/featured' },
];

/** Unique seasons derived from data */
export const seasons = [...new Set(results.map(r => r.season))];

/** Unique rounds derived from data */
export const rounds = [...new Set(results.map(r => r.round))];
