# LCAL — League of Chess Association

> Every move tells a story.

A multi-page React site for LCAL — built with Vite, React 18, React Router v7, and plain CSS with design tokens.

---

## Quick Start

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Production build
npm run build

# Preview production build locally
npm run preview
```

---

## Folder Structure

```
LCAL/
├── public/                     # Static assets (chess-icon.svg, etc.)
├── src/
│   ├── _archive/               # Old single-page components (safe to delete or reuse)
│   ├── assets/                 # Images, fonts if self-hosted
│   ├── components/             # Shared UI components
│   │   ├── Layout.jsx/.css     # Navbar + <main> + Footer wrapper
│   │   ├── Navbar.jsx/.css     # Sticky nav, hamburger, More dropdown, auth-aware
│   │   ├── Footer.jsx/.css     # 4-column footer with router Links
│   │   ├── SectionHeader.jsx   # Eyebrow + title + "View all" button
│   │   ├── MatchCard.jsx/.css  # Match result card (used on Home + Results)
│   │   ├── VideoCard.jsx/.css  # Video thumbnail card
│   │   ├── BlogCard.jsx/.css   # Blog preview card
│   │   ├── ChampionCard.jsx    # Hall of Fame champion card
│   │   ├── ResultRow.jsx/.css  # Table row for Results page
│   │   ├── LeaderboardTable.jsx# Full standings table
│   │   ├── Podium.jsx/.css     # Top-3 podium display
│   │   └── Pagination.jsx/.css # Page navigation controls
│   ├── context/
│   │   └── AuthContext.jsx     # Mock login/logout (localStorage persistence)
│   ├── data/                   # Mock data files (swap for API calls)
│   │   ├── results.js          # Match results
│   │   ├── leaderboard.js      # Player standings + points computation
│   │   ├── videos.js           # Video library
│   │   ├── blogs.js            # Blog posts
│   │   ├── champions.js        # Hall of Fame
│   │   └── jobs.js             # Job listings
│   ├── pages/                  # Route-level page components (all lazy-loaded)
│   │   ├── Home.jsx/.css
│   │   ├── Results.jsx/.css
│   │   ├── ResultDetail.jsx
│   │   ├── Leaderboard.jsx/.css
│   │   ├── HallOfFame.jsx
│   │   ├── Videos.jsx/.css
│   │   ├── Blogs.jsx
│   │   ├── BlogPost.jsx/.css
│   │   ├── Constitution.jsx
│   │   ├── Legal.jsx
│   │   ├── Static.css          # Shared CSS for static content pages
│   │   ├── Jobs.jsx
│   │   ├── Login.jsx/.css
│   │   ├── Account.jsx         # Protected — redirects to /login if not authed
│   │   └── NotFound.jsx        # 404 catch-all
│   ├── sections/               # (empty — originals moved to _archive)
│   ├── App.jsx                 # Router setup, lazy imports, Suspense
│   ├── main.jsx                # React root + BrowserRouter
│   ├── index.css               # Global design system (tokens, typography, utilities)
│   └── App.css                 # Minimal root styles
├── index.html                  # HTML entry point (Google Fonts loaded here)
├── vite.config.js
└── package.json
```

---

## Routes

| Path              | Page          | Notes                            |
|-------------------|---------------|----------------------------------|
| `/`               | Home          | Gateway with section previews    |
| `/results`        | Results       | Filterable list + pagination     |
| `/results/:id`    | ResultDetail  | Single match detail              |
| `/leaderboard`    | Leaderboard   | Podium + full standings table    |
| `/hall-of-fame`   | HallOfFame    | Champions grid                   |
| `/videos`         | Videos        | Video library + streams strip    |
| `/blogs`          | Blogs         | Blog listing                     |
| `/blogs/:slug`    | BlogPost      | Single blog post (720px column)  |
| `/constitution`   | Constitution  | Static page with TOC             |
| `/jobs`           | Jobs          | Job listings with Apply buttons  |
| `/legal`          | Legal         | Terms & Privacy                  |
| `/login`          | Login         | Form with validation             |
| `/account`        | Account       | Protected — requires login       |
| `*`               | NotFound      | 404 catch-all                    |

---

## Replacing Mock Data with a Real API

All data lives in `src/data/`. Each file is shaped to mirror a real REST or CMS response. To swap:

### Example: Results page → REST API

```js
// src/data/results.js — replace the exported array with:
export async function fetchResults() {
  const res = await fetch('https://your-api.com/api/results');
  return res.json();
}
```

Then in `Results.jsx`, replace the import with:
```jsx
import { fetchResults } from '../data/results';

const [results, setResults] = useState([]);
useEffect(() => {
  fetchResults().then(setResults);
}, []);
```

### Leaderboard → Google Sheet

1. Publish your Google Sheet as CSV (File → Share → Publish to web → CSV)
2. Create `.env` in the project root:
   ```
   VITE_SHEET_URL=https://docs.google.com/spreadsheets/d/YOUR_ID/pub?output=csv
   ```
3. The Leaderboard page automatically fetches from the sheet when this env var is set.

---

## Design System

Design tokens are defined as CSS custom properties in `src/index.css`:

| Token            | Value       | Usage                       |
|------------------|-------------|------------------------------|
| `--bg`           | `#14110d`   | Page background              |
| `--bg-deep`      | `#0e0c09`   | Deepest background           |
| `--band`         | `#1a160f`   | Alternate section band       |
| `--card`         | `#1d1913`   | Card / surface background    |
| `--border`       | `#2e2819`   | Default border               |
| `--border-strong`| `#3a3322`   | Emphasized border            |
| `--gold`         | `#c9a44c`   | Primary accent               |
| `--gold-hover`   | `#d8b862`   | Hover / active state         |
| `--cream`        | `#f1ece0`   | Primary text                 |
| `--muted`        | `#a39d8f`   | Secondary / muted text       |

**Fonts** (loaded in `index.html`):
- Headings: `Newsreader` (serif), fallback `Cinzel`
- Body: `Inter`, fallback `Raleway`

**Buttons**: `.btn-primary` (gold), `.btn-secondary` (dark border), `.btn-outline` (gold border)

---

## Replacing Chess Piece Placeholders with Real Images

Every card that shows a chess piece glyph has a comment marking the slot:
```jsx
{/* Replace .video-card__piece with <img> when real thumbnails are available */}
<span className="video-card__piece" aria-hidden="true">{icon}</span>
```

To replace: swap the `<span>` with:
```jsx
<img src={video.thumbnailUrl} alt={video.title} className="video-card__img" />
```
And add `.video-card__img { width: 100%; height: 100%; object-fit: cover; }` to the CSS.

---

## Authentication

Authentication uses a mock `AuthContext` (`src/context/AuthContext.jsx`) that stores login state in `localStorage`. Any email + password ≥ 6 characters will work.

To integrate real auth (e.g. Supabase, Firebase):
1. Replace the `login()` function body with your auth SDK call
2. Replace the `logout()` function with your SDK's sign-out
3. Replace the `user` object shape with your user model

---

## Responsive Breakpoints

| Breakpoint | Width  | Key Changes                               |
|------------|--------|-------------------------------------------|
| Mobile     | 360px+ | 1-col grids, stacked hero, 2×2 stats      |
| Tablet     | 768px+ | 2-col grids, wider containers             |
| Laptop     | 1024px+| 3–4 col grids, full navbar               |
| Desktop    | 1280px+| Max-width container centered              |
| Large      | 1440px+| Content stays centered, whitespace grows  |

Navbar collapses to hamburger below **900px**.

---

## Accessibility

- Semantic HTML: `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<aside>`
- Focus styles: visible gold 2px outline on all interactive elements
- `aria-label` on all icon-only buttons and landmark regions
- `prefers-reduced-motion` disables all animations
- Contrast: gold `#c9a44c` on dark `#0e0c09` ≈ 7.2:1 (WCAG AA+)
