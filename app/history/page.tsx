import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OwnerRankingsTable from "@/components/OwnerRankingsTable";
import { standings2024, standings2025, allTimeRecords, allTimeOwners } from "@/lib/data";

export default function HistoryPage() {
  const sortedByWinPct = [...allTimeOwners].sort((a, b) => b.winPct - a.winPct);
  const bestEver = sortedByWinPct[0];
  const worstEver = sortedByWinPct[sortedByWinPct.length - 1];

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Page Header */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-blue-800/40 border border-blue-600/30 text-blue-300 text-xs font-bold px-3 py-1.5 rounded-full mb-5 uppercase tracking-widest">
            📊 League History
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-3">All-Time Records</h1>
          <p className="text-slate-300 text-lg max-w-xl">
            Every stat, every season. See who's dominated and who's struggled since day one.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">

        {/* Best & Worst Callout */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">Best & Worst All-Time</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* GOAT */}
            <div className="bg-gradient-to-br from-blue-700 to-blue-900 text-white rounded-3xl p-7">
              <div className="text-xs font-bold uppercase tracking-widest text-blue-300 mb-1">🐐 All-Time Best</div>
              <div className="text-3xl font-black mt-2">{bestEver.owner}</div>
              <div className="text-blue-200 text-sm mt-1">{bestEver.seasons} seasons · {bestEver.wins}W – {bestEver.losses}L</div>
              <div className="mt-5 grid grid-cols-3 gap-4">
                <div className="bg-white/10 rounded-xl p-3">
                  <div className="text-2xl font-black">{(bestEver.winPct * 100).toFixed(1)}%</div>
                  <div className="text-blue-300 text-xs mt-0.5">Win Rate</div>
                </div>
                <div className="bg-white/10 rounded-xl p-3">
                  <div className="text-2xl font-black">{(bestEver.totalPF / (bestEver.wins + bestEver.losses)).toFixed(1)}</div>
                  <div className="text-blue-300 text-xs mt-0.5">Avg Pts/Wk</div>
                </div>
                <div className="bg-white/10 rounded-xl p-3">
                  <div className="text-2xl font-black">{bestEver.championships}</div>
                  <div className="text-blue-300 text-xs mt-0.5">Rings 💍</div>
                </div>
              </div>
              <p className="text-blue-200 text-xs italic mt-4">{bestEver.note}</p>
            </div>

            {/* Worst */}
            <div className="bg-white border border-slate-200 rounded-3xl p-7">
              <div className="text-xs font-bold uppercase tracking-widest text-red-400 mb-1">💀 All-Time Worst</div>
              <div className="text-3xl font-black mt-2 text-slate-900">{worstEver.owner}</div>
              <div className="text-slate-400 text-sm mt-1">{worstEver.seasons} season · {worstEver.wins}W – {worstEver.losses}L</div>
              <div className="mt-5 grid grid-cols-3 gap-4">
                <div className="bg-red-50 rounded-xl p-3">
                  <div className="text-2xl font-black text-red-700">{(worstEver.winPct * 100).toFixed(1)}%</div>
                  <div className="text-red-400 text-xs mt-0.5">Win Rate</div>
                </div>
                <div className="bg-slate-50 rounded-xl p-3">
                  <div className="text-2xl font-black text-slate-700">{(worstEver.totalPF / (worstEver.wins + worstEver.losses)).toFixed(1)}</div>
                  <div className="text-slate-400 text-xs mt-0.5">Avg Pts/Wk</div>
                </div>
                <div className="bg-slate-50 rounded-xl p-3">
                  <div className="text-2xl font-black text-slate-700">{worstEver.championships}</div>
                  <div className="text-slate-400 text-xs mt-0.5">Rings 💍</div>
                </div>
              </div>
              <p className="text-slate-400 text-xs italic mt-4">{worstEver.note}</p>
            </div>
          </div>
        </section>

        {/* All-Time Owner Standings */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-black text-slate-900">All-Time Owner Rankings</h2>
              <p className="text-sm text-slate-500 mt-0.5">Combined across all seasons · click a column to sort</p>
            </div>
            <span className="text-xs font-bold bg-slate-100 text-slate-600 px-3 py-1.5 rounded-full">2024–2025</span>
          </div>

          <OwnerRankingsTable owners={allTimeOwners} />
        </section>

        {/* All-Time Fun Records */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">League Record Book</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {allTimeRecords.map((record) => (
              <div key={record.stat} className="bg-white border border-slate-200 rounded-2xl p-5">
                <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-2">{record.stat}</div>
                <div className="text-2xl font-black text-blue-700 mb-1">{record.value}</div>
                <div className="text-sm font-semibold text-slate-800">{record.holder}</div>
                <div className="text-xs text-slate-400 mt-0.5">{record.season}</div>
                {record.note && (
                  <div className="text-xs text-slate-500 italic mt-2 pt-2 border-t border-slate-100">{record.note}</div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 2025 Season Standings */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-black text-slate-900">2025 Season — Sleeper</h2>
              <p className="text-sm text-slate-500 mt-0.5">8-Team PPR · Champion: David Schauer</p>
            </div>
            <span className="text-xs font-bold bg-purple-100 text-purple-700 px-3 py-1.5 rounded-full">Sleeper · PPR</span>
          </div>
          <SeasonTable
            teams={standings2025.map(t => ({
              rank: t.rank,
              owner: t.owner,
              w: t.w,
              l: t.l,
              pf: t.pf,
              pa: t.pa,
              playoff: t.playoff,
            }))}
          />
        </section>

        {/* 2024 Season Standings */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-black text-slate-900">2024 Season — ESPN</h2>
              <p className="text-sm text-slate-500 mt-0.5">8-Team PPR · Champion: Garyn Angel</p>
            </div>
            <span className="text-xs font-bold bg-orange-100 text-orange-700 px-3 py-1.5 rounded-full">ESPN</span>
          </div>
          <SeasonTable
            teams={standings2024.map(t => ({
              rank: t.rank,
              owner: t.owner,
              w: t.w,
              l: t.l,
              pf: t.pf,
              pa: t.pa,
              playoff: t.playoff,
            }))}
          />
        </section>

      </div>
      <Footer />
    </main>
  );
}

function SeasonTable({ teams }: {
  teams: { rank: number; owner: string; w: number; l: number; pf: number; pa: number; playoff: boolean }[]
}) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
      {/* Header — full on tablet/desktop, trimmed on mobile */}
      <div className="hidden sm:flex items-center gap-3 px-5 py-3 bg-slate-50 border-b border-slate-200 text-xs font-bold text-slate-500 uppercase tracking-wider">
        <div className="w-6 shrink-0">#</div>
        <div className="flex-1">Manager</div>
        <div className="w-16 text-center">Record</div>
        <div className="w-20 text-right">PF</div>
        <div className="w-20 text-right">PA</div>
        <div className="w-12 text-right">Diff</div>
      </div>
      <div className="divide-y divide-slate-100">
        {teams.map((t) => {
          const diff = t.pf - t.pa;
          return (
            <div key={t.rank} className={`flex items-center gap-3 px-4 sm:px-5 py-3.5 ${t.playoff ? "hover:bg-blue-50/50" : "hover:bg-slate-50"} transition-colors`}>
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-black shrink-0 ${
                t.rank <= 4 ? "bg-blue-100 text-blue-700" : "bg-slate-100 text-slate-500"
              }`}>
                {t.rank}
              </span>
              <div className="flex-1 min-w-0 font-semibold text-slate-900 text-sm truncate">{t.owner}</div>
              <div className="w-14 sm:w-16 text-center font-bold text-sm text-slate-700 tabular-nums">{t.w}–{t.l}</div>
              <div className="w-16 sm:w-20 text-right text-sm text-slate-600 tabular-nums">{t.pf.toFixed(1)}</div>
              <div className="hidden sm:block w-20 text-right text-sm text-slate-400 tabular-nums">{t.pa.toFixed(2)}</div>
              <div className={`hidden sm:block w-12 text-right text-xs font-bold tabular-nums ${diff >= 0 ? "text-emerald-600" : "text-red-500"}`}>
                {diff >= 0 ? "+" : ""}{diff.toFixed(0)}
              </div>
            </div>
          );
        })}
      </div>
      <div className="px-4 sm:px-5 py-3 bg-slate-50 border-t border-slate-100 text-xs text-slate-400">
        🔵 Blue rank = Playoff qualifier (Top 4)
      </div>
    </div>
  );
}
