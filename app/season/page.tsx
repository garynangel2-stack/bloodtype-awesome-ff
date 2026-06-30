import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SLEEPER_LEAGUE_ID, SLEEPER_NAME_MAP, upcomingEvents } from "@/lib/data";

export const revalidate = 1800; // refresh live data every 30 min

const SLEEPER = "https://api.sleeper.app/v1";

/* eslint-disable @typescript-eslint/no-explicit-any */

async function getJSON(url: string): Promise<any | null> {
  try {
    const r = await fetch(url, { next: { revalidate } });
    if (!r.ok) return null;
    return await r.json();
  } catch {
    return null;
  }
}

function realName(user: any): string {
  if (!user) return "Unknown";
  const dn = user.display_name as string | undefined;
  if (dn && SLEEPER_NAME_MAP[dn]) return SLEEPER_NAME_MAP[dn];
  return dn || user.username || "Unknown";
}

const SKILL_POSITIONS = ["QB", "RB", "WR", "TE", "K", "DEF"];

export default async function SeasonPage() {
  const state = await getJSON(`${SLEEPER}/state/nfl`);
  const seasonType: string = state?.season_type ?? "off"; // pre | regular | post | off
  const season: string = state?.season ?? "2026";
  const week: number = state?.week ?? 0;
  const inSeason = (seasonType === "regular" || seasonType === "post") && week >= 1;
  const configured = SLEEPER_LEAGUE_ID.trim().length > 0;

  // --- Live data (only when configured + in season) ---
  let matchupCards: { id: number; a: SideInfo; b: SideInfo }[] = [];
  let standoutTeams: { name: string; pts: number }[] = [];
  const topByPos: Record<string, { player: string; team: string; pts: number; manager: string }> = {};

  if (configured && inSeason) {
    const [users, rosters, players, thisWk, lastWk] = await Promise.all([
      getJSON(`${SLEEPER}/league/${SLEEPER_LEAGUE_ID}/users`),
      getJSON(`${SLEEPER}/league/${SLEEPER_LEAGUE_ID}/rosters`),
      getJSON(`${SLEEPER}/players/nfl`),
      getJSON(`${SLEEPER}/league/${SLEEPER_LEAGUE_ID}/matchups/${week}`),
      week > 1 ? getJSON(`${SLEEPER}/league/${SLEEPER_LEAGUE_ID}/matchups/${week - 1}`) : Promise.resolve(null),
    ]);

    const userById = new Map<string, any>((users ?? []).map((u: any) => [u.user_id, u]));
    const managerByRoster = new Map<number, string>();
    for (const r of rosters ?? []) {
      managerByRoster.set(r.roster_id, realName(userById.get(r.owner_id)));
    }

    // This week's matchups (pair by matchup_id)
    if (thisWk) {
      const groups = new Map<number, any[]>();
      for (const m of thisWk) {
        if (m.matchup_id == null) continue;
        const arr = groups.get(m.matchup_id) ?? [];
        arr.push(m);
        groups.set(m.matchup_id, arr);
      }
      matchupCards = [...groups.entries()].map(([id, pair]) => ({
        id,
        a: side(pair[0], managerByRoster),
        b: side(pair[1], managerByRoster),
      }));
    }

    // Last week standouts
    if (lastWk) {
      standoutTeams = lastWk
        .map((m: any) => ({ name: managerByRoster.get(m.roster_id) ?? "Unknown", pts: m.points ?? 0 }))
        .sort((x: any, y: any) => y.pts - x.pts)
        .slice(0, 3);

      for (const m of lastWk) {
        const pts: Record<string, number> = m.players_points ?? {};
        const starters: string[] = m.starters ?? Object.keys(pts);
        for (const pid of starters) {
          const p = players?.[pid];
          const pos = p?.position;
          if (!pos || !SKILL_POSITIONS.includes(pos)) continue;
          const score = pts[pid] ?? 0;
          if (!topByPos[pos] || score > topByPos[pos].pts) {
            topByPos[pos] = {
              player: p.full_name || `${p.first_name ?? ""} ${p.last_name ?? ""}`.trim() || pid,
              team: p.team || "FA",
              pts: score,
              manager: managerByRoster.get(m.roster_id) ?? "Unknown",
            };
          }
        }
      }
    }
  }

  const sleeperUrl = configured ? `https://sleeper.com/leagues/${SLEEPER_LEAGUE_ID}` : "https://sleeper.com";

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest">
              🏈 Current Season
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-800/40 border border-blue-600/30 text-blue-300 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest">
              {inSeason ? `${season} · Week ${week}` : `${season} · Offseason`}
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-3">
            {inSeason ? `Week ${week}` : "Season Hub"}
          </h1>
          <p className="text-slate-300 text-lg max-w-xl">
            Live from Sleeper — matchups, weekly standouts, and players to watch.
          </p>
          <a
            href={sleeperUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-5 py-2.5 rounded-xl transition-colors text-sm"
          >
            Open league on Sleeper ↗
          </a>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">
        {!inSeason ? (
          /* ---------- Offseason state ---------- */
          <section>
            <div className="bg-white border border-slate-200 rounded-3xl p-8 text-center">
              <div className="text-5xl mb-4">😴</div>
              <h2 className="text-2xl font-black text-slate-900 mb-2">The season hasn&apos;t kicked off yet</h2>
              <p className="text-slate-500 max-w-lg mx-auto">
                Once the {season} regular season starts, this page fills in automatically — this week&apos;s
                matchups, last week&apos;s standout managers and top players at every position, and the
                week&apos;s players to watch. Nothing to update manually.
              </p>
              {!configured && (
                <p className="text-xs text-amber-600 bg-amber-50 border border-amber-100 rounded-xl px-4 py-2 mt-5 inline-block">
                  ⚙️ Connect the league by adding your Sleeper league ID in <code className="bg-amber-100 px-1 rounded">lib/data.ts</code>.
                </p>
              )}
            </div>

            {/* Upcoming events while we wait */}
            <div className="mt-10">
              <h3 className="text-xl font-black text-slate-900 mb-6">On the Calendar</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {upcomingEvents.map((e) => (
                  <div key={e.event} className="bg-white border border-slate-200 rounded-2xl p-5">
                    <div className="text-3xl mb-3">{e.icon}</div>
                    <div className="font-black text-slate-900">{e.event}</div>
                    <div className="text-xs font-bold text-blue-600 mt-0.5">{e.date}</div>
                    <p className="text-sm text-slate-500 mt-2 leading-relaxed">{e.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : (
          <>
            {/* ---------- This week's matchups ---------- */}
            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-6">This Week&apos;s Matchups</h2>
              {matchupCards.length === 0 ? (
                <p className="text-slate-500">Matchups for Week {week} aren&apos;t posted yet.</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {matchupCards.map((mc) => (
                    <div key={mc.id} className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
                      <MatchSide info={mc.a} opp={mc.b.pts} />
                      <div className="border-t border-slate-100" />
                      <MatchSide info={mc.b} opp={mc.a.pts} />
                    </div>
                  ))}
                </div>
              )}
            </section>

            {/* ---------- Last week standout teams ---------- */}
            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-2">Last Week&apos;s Standout Managers</h2>
              <p className="text-sm text-slate-500 mb-6">Highest team scores in Week {week - 1}</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {standoutTeams.map((t, i) => (
                  <div key={t.name} className={`rounded-2xl p-6 ${i === 0 ? "bg-gradient-to-br from-blue-700 to-blue-900 text-white" : "bg-white border border-slate-200"}`}>
                    <div className={`text-xs font-bold uppercase tracking-widest mb-1 ${i === 0 ? "text-blue-300" : "text-slate-400"}`}>
                      {i === 0 ? "🔥 Top Scorer" : `#${i + 1}`}
                    </div>
                    <div className={`text-xl font-black ${i === 0 ? "text-white" : "text-slate-900"}`}>{t.name}</div>
                    <div className={`text-3xl font-black mt-2 tabular-nums ${i === 0 ? "text-white" : "text-blue-700"}`}>{t.pts.toFixed(1)}</div>
                    <div className={`text-xs ${i === 0 ? "text-blue-300" : "text-slate-400"}`}>points</div>
                  </div>
                ))}
              </div>
            </section>

            {/* ---------- Top player per position ---------- */}
            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-2">Last Week&apos;s Top Performers</h2>
              <p className="text-sm text-slate-500 mb-6">Best starter at each position, Week {week - 1}</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {SKILL_POSITIONS.map((pos) => {
                  const top = topByPos[pos];
                  return (
                    <div key={pos} className="bg-white border border-slate-200 rounded-2xl p-4">
                      <div className="text-xs font-black text-blue-600 uppercase tracking-widest mb-2">{pos}</div>
                      {top ? (
                        <>
                          <div className="font-bold text-slate-900 text-sm leading-tight">{top.player}</div>
                          <div className="text-xs text-slate-400">{top.team}</div>
                          <div className="text-2xl font-black text-slate-900 mt-2 tabular-nums">{top.pts.toFixed(1)}</div>
                          <div className="text-[11px] text-slate-400 mt-1 truncate">{top.manager}</div>
                        </>
                      ) : (
                        <div className="text-sm text-slate-300">—</div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* ---------- Players to watch (momentum) ---------- */}
            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-2">Players to Watch</h2>
              <p className="text-sm text-slate-500 mb-6">Riding momentum from last week into Week {week}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {SKILL_POSITIONS.map((pos) => {
                  const top = topByPos[pos];
                  if (!top) return null;
                  return (
                    <div key={pos} className="bg-white border border-slate-200 rounded-2xl p-5 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-700 font-black text-sm shrink-0">
                        {pos}
                      </div>
                      <div className="min-w-0">
                        <div className="font-bold text-slate-900 truncate">{top.player}</div>
                        <div className="text-xs text-slate-500">
                          {top.team} · {top.pts.toFixed(1)} pts last week
                        </div>
                        <div className="text-xs text-slate-400 truncate">Rostered by {top.manager}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </>
        )}
      </div>
      <Footer />
    </main>
  );
}

type SideInfo = { manager: string; pts: number };

function side(m: any, managerByRoster: Map<number, string>): SideInfo {
  if (!m) return { manager: "TBD", pts: 0 };
  return { manager: managerByRoster.get(m.roster_id) ?? "Unknown", pts: m.points ?? 0 };
}

function MatchSide({ info, opp }: { info: SideInfo; opp: number }) {
  const winning = info.pts >= opp && info.pts > 0;
  return (
    <div className={`flex items-center justify-between px-5 py-4 ${winning ? "bg-blue-50/60" : ""}`}>
      <span className={`font-semibold text-sm ${winning ? "text-blue-800" : "text-slate-600"}`}>{info.manager}</span>
      <span className={`font-black tabular-nums ${winning ? "text-blue-700" : "text-slate-500"}`}>{info.pts.toFixed(1)}</span>
    </div>
  );
}
