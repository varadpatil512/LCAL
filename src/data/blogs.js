/**
 * blogs.js — Mock blog data
 * Shape mirrors a headless CMS response (e.g. Contentful, Sanity).
 * To swap: replace with fetch to your CMS API.
 */

export const blogs = [
  {
    slug: 'season-3-preview',
    title: 'Season 3 Preview: Who Are the Ones to Watch?',
    excerpt: 'As Season 3 kicks off, we analyse the form guide, head-to-head records, and bold predictions from our coaching panel.',
    date: '2026-10-20',
    author: 'Coach Rajesh Kumar',
    tags: ['Season 3', 'Preview', 'Analysis'],
    content: `
Season 3 is here — and after a breathtaking Season 2 finale, expectations have never been higher.

## The Title Favourites

**Arjun Mehta** enters as reigning champion and clear favourite. His control of the centre and razor-sharp tactical vision make him the benchmark every other player is measured against.

**Dev Patel** is the closest challenger. He has shown remarkable improvement in endgame technique and is hungry after narrowly missing the Season 2 trophy.

## Dark Horses

**Priya Nair** is this season's most exciting prospect. She showed flashes of brilliance in the Season 2 semi-finals and has been working closely with the coaching team over the off-season.

## The Coaching Panel's Bold Prediction

We expect at least one decisive upset in the opening rounds — form guides can only tell you so much. Chess is, after all, a battle of the mind.

*Follow all the action live on our [YouTube channel](https://www.youtube.com/@spiritofaustralianimishrau4608/featured).*
    `.trim(),
  },
  {
    slug: 'queens-gambit-guide',
    title: "The Queen's Gambit: A Practical Guide for Club Players",
    excerpt: "Whether you're facing it or playing it, the Queen's Gambit is one of chess's most important openings. Here's what you need to know.",
    date: '2026-10-10',
    author: 'Coach Dev Sharma',
    tags: ['Tutorial', 'Openings', 'Queen\'s Gambit'],
    content: `
The Queen's Gambit (1. d4 d5 2. c4) is one of the oldest and most respected chess openings. Club players who understand its key ideas will find themselves on solid ground in most positions.

## The Core Idea

White offers a pawn to gain central control. Black can accept (QGA) or decline (QGD) — both are equally valid.

## Key Plans for White

- Develop pieces rapidly to e2 (bishop) and f3 (knight)
- Aim for e2–e4 to establish a strong pawn centre
- Castle kingside early for safety

## Key Plans for Black (QGD)

- Play ...e6 to solidify and prepare ...c5
- Develop the dark-squared bishop before closing the centre
- Watch for the minority attack on the queenside

## Recommended Study

Watch Coach Dev's full masterclass on our YouTube channel for in-depth analysis of grandmaster games.
    `.trim(),
  },
  {
    slug: 'endgame-fundamentals',
    title: 'Endgame Fundamentals Every Club Player Must Know',
    excerpt: 'Most club games are decided by endgame mistakes. Master these five core concepts and you will convert wins more often.',
    date: '2026-09-28',
    author: 'Coach Priya Anand',
    tags: ['Tutorial', 'Endgame', 'Fundamentals'],
    content: `
The endgame is where most club-level games are won and lost. Here are five fundamentals every LCAL player should master.

## 1. King Activity

The king is a strong piece in the endgame. Centralise it immediately after queens are off the board.

## 2. The Opposition

In king-and-pawn endgames, "opposition" — where kings face each other — determines who wins. The side that forces the other to move away wins key squares.

## 3. Rook Behind Passed Pawns

Always place your rook behind a passed pawn (yours or your opponent's). This maximises the rook's activity in both attack and defence.

## 4. The Lucena Position

This famous winning setup in rook endgames is essential study material. Once you recognise it, you will know when to push for a win.

## 5. The Philidor Position

The defending technique to hold a draw against a rook + pawn versus rook endgame. Learn this and you will save half-points you would otherwise lose.
    `.trim(),
  },
  {
    slug: 'season-2-recap',
    title: 'Season 2 in Numbers: A Statistical Deep Dive',
    excerpt: 'We crunch the numbers from Season 2 — decisive results, longest games, favourite openings, and the most memorable moment.',
    date: '2025-12-10',
    author: 'LCAL Editorial',
    tags: ['Season 2', 'Statistics', 'Recap'],
    content: `
Season 2 is in the books — and what a season it was. Here are the numbers.

## By the Numbers

- **Total games played:** 45
- **Decisive results:** 28 (62%)
- **Draws:** 17 (38%)
- **Average game length:** 42 moves

## Most Popular Opening

The Sicilian Defence (1. e4 c5) was played in 28% of all games — a testament to the fighting spirit of LCAL players.

## Longest Game

Round 6, Board A: Kiran Desai vs. Ananya Rao — a 98-move rook endgame that ended in a draw just as the clocks reached zero.

## Most Memorable Moment

Arjun Mehta's queen sacrifice on move 24 of the semi-final. The crowd (online!) erupted. It has since been watched 18,000+ times on YouTube.

## Season 3 Outlook

With ratings continuing to rise and coaching quality improving year on year, Season 3 looks set to be the most competitive yet.
    `.trim(),
  },
];
