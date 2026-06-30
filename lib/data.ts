export const LEAGUE_NAME = "Bloodtype=Awesome Fantasy";
export const LEAGUE_FORMAT = "8-Team PPR";

// Sleeper integration.
// Option A (auto): set your Sleeper username and the site finds your league for
// the current NFL season automatically — no need to update an ID each year.
export const SLEEPER_USERNAME = "Gangel2";
// Option B (manual override): paste a specific league ID to force it. Leave ""
// to use the username auto-lookup above.
export const SLEEPER_LEAGUE_ID = "";

// Maps Sleeper usernames/display names -> real manager names used on the site.
// Falls back to the Sleeper name if a manager isn't listed here.
export const SLEEPER_NAME_MAP: Record<string, string> = {
  TBurgess5: "Teddy Burgess",
  dschauer: "David Schauer",
  Gangel2: "Garyn Angel",
  EForman: "Eli Forman",
  darcyireland: "Darcy Ireland",
  CFraise83: "Corban Fraser",
  ebhurgri: "Eshan Bhurgi",
};

export const champions = [
  {
    year: 2025,
    owner: "David Schauer",
    record: "9-5",
    platform: "Sleeper · PPR",
    champScore: "—",
    seed: 2,
    note: "Back-to-back different champs",
    headshot: null,
  },
  {
    year: 2024,
    owner: "Garyn Angel",
    record: "8-6",
    platform: "ESPN",
    champScore: "142.68 – 130.02",
    seed: 3,
    note: "Won as 3-seed upset!",
    headshot: null,
  },
];

export const standings2025 = [
  { rank: 1, owner: "Teddy Burgess", w: 11, l: 3, pf: 1889.4, pa: 1630.14, playoff: true },
  { rank: 2, owner: "David Schauer", w: 9, l: 5, pf: 1851.38, pa: 1687.9, playoff: true },
  { rank: 3, owner: "Garyn Angel", w: 9, l: 5, pf: 1679.68, pa: 1614.04, playoff: true },
  { rank: 4, owner: "Shray Bhatnagar", w: 7, l: 7, pf: 1867.66, pa: 1738.94, playoff: true },
  { rank: 5, owner: "Eli Forman", w: 7, l: 7, pf: 1643.38, pa: 1576.48, playoff: false },
  { rank: 6, owner: "Darcy Ireland", w: 6, l: 8, pf: 1618.68, pa: 1769.9, playoff: false },
  { rank: 7, owner: "Corban Fraser", w: 5, l: 9, pf: 1567.94, pa: 1762.64, playoff: false },
  { rank: 8, owner: "Eshan Bhurgi", w: 2, l: 12, pf: 1506.5, pa: 1844.58, playoff: false },
];

export const standings2024 = [
  { rank: 1, owner: "Garyn Angel", w: 8, l: 6, pf: 1659.94, pa: 1751.88, playoff: true },
  { rank: 2, owner: "Teddy Burgess", w: 10, l: 4, pf: 1902.92, pa: 1562.26, playoff: true },
  { rank: 3, owner: "Corban Fraser", w: 8, l: 6, pf: 1871.12, pa: 1734.68, playoff: true },
  { rank: 4, owner: "Karl Grabowski", w: 7, l: 7, pf: 1889.7, pa: 1808.32, playoff: true },
  { rank: 5, owner: "Eli Forman", w: 7, l: 7, pf: 1784.18, pa: 1577.72, playoff: false },
  { rank: 6, owner: "Trajan Pagano", w: 6, l: 8, pf: 1645.16, pa: 1786.4, playoff: false },
  { rank: 7, owner: "David Schauer", w: 7, l: 7, pf: 1706.86, pa: 1688.98, playoff: false },
  { rank: 8, owner: "Shray Bhatnagar", w: 3, l: 11, pf: 1277.64, pa: 1827.28, playoff: false },
];

export const playoffs2024 = {
  semifinals: [
    { team1: "#1 Teddy Burgess", score1: 146.4, team2: "#4 Karl Grabowski", score2: 145.7, winner: "Teddy Burgess", note: "Closest game: 0.7 pts" },
    { team1: "#3 Garyn Angel", score1: 143.54, team2: "#2 Corban Fraser", score2: null, winner: "Garyn Angel", note: "" },
  ],
  championship: { team1: "#3 Garyn Angel", score1: 142.68, team2: "#1 Teddy Burgess", score2: 130.02, winner: "Garyn Angel" },
  thirdPlace: { team1: "Corban Fraser", score1: 143.64, team2: "Karl Grabowski", score2: 142.68, winner: "Corban Fraser" },
  finalStandings: [
    { place: 1, emoji: "🥇", owner: "Garyn Angel", record: "8-6", note: "Champion — 3-seed upset!" },
    { place: 2, emoji: "🥈", owner: "Teddy Burgess", record: "10-4", note: "Best record, no ring" },
    { place: 3, emoji: "🥉", owner: "Corban Fraser", record: "8-6", note: "Won 3rd place 143.64–142.68" },
    { place: 4, emoji: "4️⃣", owner: "Karl Grabowski", record: "7-7", note: "Lost semis by 0.7 pts" },
  ],
};

// All-time records (sourced from Dashboard)
export const allTimeRecords = [
  { stat: "Most Championships", value: "1 each", holder: "Garyn Angel & David Schauer", season: "2024 / 2025", note: "Both won exactly once" },
  { stat: "Best Regular Season Record", value: "11-3", holder: "Teddy Burgess", season: "2025 Sleeper", note: "Led the league wire-to-wire" },
  { stat: "Most Points For (season)", value: "1,902.92", holder: "Teddy Burgess", season: "2024 ESPN", note: "Still didn't win the ring" },
  { stat: "Worst Record", value: "2-12", holder: "Eshan Bhurgi", season: "2025 Sleeper", note: "Touch grass." },
  { stat: "Best Record, No Ring", value: "10-4 / 11-3", holder: "Teddy Burgess", season: "2024 & 2025", note: "2× heartbreak. Legend." },
  { stat: "Closest Playoff Game", value: "0.7 pts", holder: "Burgess 146.4 def. Grabowski 145.7", season: "2024 Semis", note: "Week 15" },
  { stat: "Fewest Points Allowed", value: "1,562.26", holder: "Teddy Burgess", season: "2024 ESPN", note: "Stingy all season" },
  { stat: "Highest Playoff Score", value: "146.4", holder: "Teddy Burgess", season: "2024 Semis", note: "Still lost in the finals" },
  { stat: "Comeback Champ", value: "142.68", holder: "Garyn Angel", season: "2024 Finals", note: "Won as 3-seed (8-6)" },
];

// All-time owner stats (combined across seasons)
export const allTimeOwners = [
  { owner: "Teddy Burgess", seasons: 2, wins: 21, losses: 7, winPct: 0.75, totalPF: 3792.32, championships: 0, note: "All-time best record" },
  { owner: "Garyn Angel", seasons: 2, wins: 17, losses: 11, winPct: 0.607, totalPF: 3339.62, championships: 1, note: "2024 Champion" },
  { owner: "David Schauer", seasons: 2, wins: 16, losses: 12, winPct: 0.571, totalPF: 3558.24, championships: 1, note: "2025 Champion" },
  { owner: "Eli Forman", seasons: 2, wins: 14, losses: 14, winPct: 0.5, totalPF: 3427.56, championships: 0, note: "" },
  { owner: "Corban Fraser", seasons: 2, wins: 13, losses: 15, winPct: 0.464, totalPF: 3439.06, championships: 0, note: "" },
  { owner: "Karl Grabowski", seasons: 1, wins: 7, losses: 7, winPct: 0.5, totalPF: 1889.7, championships: 0, note: "2024 only" },
  { owner: "Darcy Ireland", seasons: 1, wins: 6, losses: 8, winPct: 0.429, totalPF: 1618.68, championships: 0, note: "2025 only" },
  { owner: "Trajan Pagano", seasons: 1, wins: 6, losses: 8, winPct: 0.429, totalPF: 1645.16, championships: 0, note: "2024 only" },
  { owner: "Shray Bhatnagar", seasons: 2, wins: 10, losses: 18, winPct: 0.357, totalPF: 3145.3, championships: 0, note: "Big year-2 jump" },
  { owner: "Eshan Bhurgi", seasons: 1, wins: 2, losses: 12, winPct: 0.143, totalPF: 1506.5, championships: 0, note: "All-time worst record" },
];

export const upcomingEvents = [
  { event: "2026 Draft", date: "TBD", description: "Annual snake draft — platform TBD", icon: "📋" },
  { event: "2026 Season Kickoff", date: "TBD", description: "Regular season begins with NFL Week 1", icon: "🏈" },
  { event: "Trade Deadline", date: "TBD", description: "Final date to make trades for 2026 season", icon: "🔄" },
  { event: "2026 Playoffs", date: "TBD", description: "Top 4 teams compete for the championship", icon: "🏆" },
];
