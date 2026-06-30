import { standings2025 } from "@/lib/data";

export default function CurrentMatchups() {
  return (
    <section id="matchups">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-black text-slate-900">2025 Season Recap</h2>
          <p className="text-sm text-slate-500 mt-0.5">Final playoff results · Champion crowned</p>
        </div>
        <span className="bg-slate-100 text-slate-600 text-xs font-bold px-3 py-1.5 rounded-full">Season Complete</span>
      </div>

      {/* Champion callout */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-2xl p-6 mb-6 text-white flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="text-4xl">🏆</div>
        <div className="flex-1">
          <div className="text-xs font-bold text-blue-300 uppercase tracking-widest mb-1">2025 Champion</div>
          <div className="text-2xl font-black">David Schauer</div>
          <div className="text-blue-200 text-sm mt-0.5">9-5 Regular Season · Sleeper PPR</div>
        </div>
        <div className="text-right">
          <div className="text-xs text-blue-300 font-medium">Championship</div>
          <div className="text-3xl font-black mt-0.5">—</div>
          <div className="text-xs text-blue-300">Score TBD</div>
        </div>
      </div>

      {/* 2025 Final Standings Quick View */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
        <div className="px-5 py-4 border-b border-slate-100">
          <h3 className="font-bold text-slate-900 text-sm">2025 Final Standings</h3>
        </div>
        <div className="divide-y divide-slate-100">
          {standings2025.map((team) => (
            <div key={team.rank} className="flex items-center gap-3 px-5 py-3">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-black shrink-0 ${
                team.rank <= 4 ? "bg-blue-100 text-blue-700" : "bg-slate-100 text-slate-500"
              }`}>
                {team.rank}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-slate-900 text-sm truncate">{team.owner}</div>
              </div>
              <div className="text-sm font-bold text-slate-700 tabular-nums">{team.w}-{team.l}</div>
              <div className="text-sm text-slate-500 tabular-nums w-20 text-right">{team.pf.toFixed(1)} pts</div>
              {team.playoff && (
                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full shrink-0">Playoff</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
