/**
 * leaderboard.js — Mock leaderboard data
 * Points are NOT hardcoded here; they are computed in code: points = won + drawn * 0.5
 * To swap for a Google Sheet: export VITE_DATA_SOURCE=sheet in .env and
 * fetch from your published sheet's CSV/JSON URL in the LeaderboardTable component.
 */

export const leaderboardData = [
  { id: 'p1', player: 'Arjun Mehta',  played: 10, won: 8, drawn: 1, lost: 1, rating: 1820 },
  { id: 'p2', player: 'Dev Patel',    played: 10, won: 6, drawn: 2, lost: 2, rating: 1810 },
  { id: 'p3', player: 'Priya Nair',   played: 10, won: 6, drawn: 1, lost: 3, rating: 1750 },
  { id: 'p4', player: 'Rahul Shah',   played: 10, won: 5, drawn: 2, lost: 3, rating: 1795 },
  { id: 'p5', player: 'Amit Joshi',   played: 10, won: 4, drawn: 2, lost: 4, rating: 1720 },
  { id: 'p6', player: 'Sonal Kapoor', played: 10, won: 3, drawn: 1, lost: 6, rating: 1680 },
  { id: 'p7', player: 'Kiran Desai',  played: 10, won: 2, drawn: 3, lost: 5, rating: 1670 },
  { id: 'p8', player: 'Ananya Rao',   played: 10, won: 2, drawn: 2, lost: 6, rating: 1660 },
];

/** Compute points client-side: won + drawn * 0.5 */
export function computePoints(entry) {
  return entry.won + entry.drawn * 0.5;
}

/** Return sorted leaderboard (descending points) with computed points attached */
export function getSortedLeaderboard(data) {
  return data
    .map(p => ({ ...p, points: computePoints(p) }))
    .sort((a, b) => b.points - a.points)
    .map((p, i) => ({ ...p, rank: i + 1 }));
}

/** Available seasons for the select filter */
export const leaderboardSeasons = ['Season 3', 'Season 2', 'Season 1'];
