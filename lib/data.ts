export const LEAGUE_NAME = "Bloodtype=Awesome Fantasy";
export const LEAGUE_FORMAT = "8-Team PPR";

export const champions = [
  {
    year: 2025,
    teamName: "dschauer",
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
    teamName: "Bring you to heaven",
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
  { rank: 1, teamName: "They Hit The Second Bower", username: "TBurgess5", owner: "Teddy Burgess", w: 11, l: 3, pf: 1889.4, pa: 1630.14, playoff: true },
  { rank: 2, teamName: "dschauer", username: "dschauer", owner: "David Schauer", w: 9, l: 5, pf: 1851.38, pa: 1687.9, playoff: true },
  { rank: 3, teamName: "Corbans Sister", username: "Gangel2", owner: "Garyn Angel", w: 9, l: 5, pf: 1679.68, pa: 1614.04, playoff: true },
  { rank: 4, teamName: "glorillagorillas", username: "—", owner: "—", w: 7, l: 7, pf: 1867.66, pa: 1738.94, playoff: true },
  { rank: 5, teamName: "Pickens my Balls", username: "EForman", owner: "Eli Forman", w: 7, l: 7, pf: 1643.38, pa: 1576.48, playoff: false },
  { rank: 6, teamName: "Stefon dih", username: "darcyireland", owner: "—", w: 6, l: 8, pf: 1618.68, pa: 1769.9, playoff: false },
  { rank: 7, teamName: "CMoney", username: "CFraise83", owner: "Corban Fraser", w: 5, l: 9, pf: 1567.94, pa: 1762.64, playoff: false },
  { rank: 8, teamName: "Al-Qaeda", username: "ebhurgri", owner: "—", w: 2, l: 12, pf: 1506.5, pa: 1844.58, playoff: false },
];

export const standings2024 = [
  { rank: 1, teamName: "Bring you to heaven", owner: "Garyn Angel", w: 8, l: 6, pf: 1659.94, pa: 1751.88, playoff: true },
  { rank: 2, teamName: "The Diddy Party", owner: "Teddy Burgess", w: 10, l: 4, pf: 1902.92, pa: 1562.26, playoff: true },
  { rank: 3, teamName: "Corban's Competitive Team", owner: "Corban Fraser", w: 8, l: 6, pf: 1871.12, pa: 1734.68, playoff: true },
  { rank: 4, teamName: "Suck Deez Fat Juicy Nuts", owner: "Karl Grabowski", w: 7, l: 7, pf: 1889.7, pa: 1808.32, playoff: true },
  { rank: 5, teamName: "Bloons Tower Defence", owner: "Eli Forman", w: 7, l: 7, pf: 1784.18, pa: 1577.72, playoff: false },
  { rank: 6, teamName: "Hawk fart ontt", owner: "Trajan Pagano", w: 6, l: 8, pf: 1645.16, pa: 1786.4, playoff: false },
  { rank: 7, teamName: "OJ Didn't Do It", owner: "David Schauer", w: 7, l: 7, pf: 1706.86, pa: 1688.98, playoff: false },
  { rank: 8, teamName: "Shray's BhatNIGARS", owner: "Shray Bhat", w: 3, l: 11, pf: 1277.64, pa: 1827.28, playoff: false },
];

export const playoffs2024 = {
  semifinals: [
    { team1: "#1 The Diddy Party", score1: 146.4, team2: "#4 Suck Deez Fat Juicy Nuts", score2: 145.7, winner: "The Diddy Party", note: "Closest game: 0.7 pts" },
    { team1: "#3 Bring you to heaven", score1: 143.54, team2: "#2 Corban's Competitive Team", score2: null, winner: "Bring you to heaven", note: "" },
  ],
  championship: { team1: "#3 Bring you to heaven", score1: 142.68, team2: "#1 The Diddy Party", score2: 130.02, winner: "Bring you to heaven" },
  thirdPlace: { team1: "Corban's Competitive Team", score1: 143.64, team2: "Suck Deez Fat Juicy Nuts", score2: 142.68, winner: "Corban's Competitive Team" },
  finalStandings: [
    { place: 1, emoji: "🥇", team: "Bring you to heaven", owner: "Garyn Angel", record: "8-6", note: "Champion — 3-seed upset!" },
    { place: 2, emoji: "🥈", team: "The Diddy Party", owner: "Teddy Burgess", record: "10-4", note: "Best record, no ring" },
    { place: 3, emoji: "🥉", team: "Corban's Competitive Team", owner: "Corban Fraser", record: "8-6", note: "Won 3rd place 143.64–142.68" },
    { place: 4, emoji: "4️⃣", team: "Suck Deez Fat Juicy Nuts", owner: "Karl Grabowski", record: "7-7", note: "Lost semis by 0.7 pts" },
  ],
};

// All-time records (sourced from Dashboard)
export const allTimeRecords = [
  { stat: "Most Championships", value: "1 each", holder: "Garyn Angel & David Schauer", season: "2024 / 2025", note: "Both won exactly once" },
  { stat: "Best Regular Season Record", value: "11-3", holder: "Teddy Burgess", season: "2025 Sleeper", note: "They Hit The Second Bower" },
  { stat: "Most Points For (season)", value: "1,902.92", holder: "Teddy Burgess", season: "2024 ESPN", note: "Still didn't win the ring" },
  { stat: "Worst Record", value: "2-12", holder: "Al-Qaeda (ebhurgri)", season: "2025 Sleeper", note: "Touch grass." },
  { stat: "Best Record, No Ring", value: "10-4 / 11-3", holder: "Teddy Burgess", season: "2024 & 2025", note: "2× heartbreak. Legend." },
  { stat: "Closest Playoff Game", value: "0.7 pts", holder: "Diddy 146.4 def. SDFJ 145.7", season: "2024 Semis", note: "Week 15" },
  { stat: "Fewest Points Allowed", value: "1,562.26", holder: "Teddy Burgess", season: "2024 ESPN", note: "The Diddy Party" },
  { stat: "Highest Playoff Score", value: "146.4", holder: "The Diddy Party", season: "2024 Semis", note: "Still lost in the finals" },
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
  { owner: "Trajan Pagano", seasons: 1, wins: 6, losses: 8, winPct: 0.429, totalPF: 1645.16, championships: 0, note: "2024 only" },
  { owner: "Shray Bhat", seasons: 1, wins: 3, losses: 11, winPct: 0.214, totalPF: 1277.64, championships: 0, note: "All-time worst record" },
];

export const upcomingEvents = [
  { event: "2026 Draft", date: "TBD", description: "Annual snake draft — platform TBD", icon: "📋" },
  { event: "2026 Season Kickoff", date: "TBD", description: "Regular season begins with NFL Week 1", icon: "🏈" },
  { event: "Trade Deadline", date: "TBD", description: "Final date to make trades for 2026 season", icon: "🔄" },
  { event: "2026 Playoffs", date: "TBD", description: "Top 4 teams compete for the championship", icon: "🏆" },
];
