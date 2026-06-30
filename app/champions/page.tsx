import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { champions, playoffs2024 } from "@/lib/data";

export default function ChampionsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Page Header */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full mb-5 uppercase tracking-widest">
            🏆 Hall of Champions
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-3">Previous Winners</h1>
          <p className="text-slate-300 text-lg max-w-xl">Every champion who conquered the Bloodtype=Awesome Fantasy league.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">

        {/* Champion Cards */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-8">League Champions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {champions.map((champ) => (
              <div
                key={champ.year}
                className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Card top accent */}
                <div className="h-2 bg-gradient-to-r from-blue-600 to-blue-400" />

                <div className="p-7">
                  <div className="flex items-start gap-6">
                    {/* Headshot */}
                    <div className="shrink-0">
                      {champ.headshot ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={champ.headshot}
                          alt={champ.owner}
                          className="w-24 h-24 rounded-2xl object-cover border border-slate-200"
                        />
                      ) : (
                        <>
                          <div className="w-24 h-24 rounded-2xl bg-slate-100 border-2 border-dashed border-slate-300 flex flex-col items-center justify-center text-slate-400 overflow-hidden">
                            <span className="text-3xl">👤</span>
                            <span className="text-[10px] font-semibold mt-1 text-center leading-tight px-1">Add Photo</span>
                          </div>
                          <p className="text-[10px] text-slate-400 text-center mt-1.5">
                            /public/headshots/<br />{champ.owner.split(" ")[0].toLowerCase()}.jpg
                          </p>
                        </>
                      )}
                    </div>

                    {/* Info */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-2xl font-black text-blue-700">{champ.year}</span>
                        <span className="text-xs font-bold bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">Champion</span>
                      </div>
                      <h3 className="text-xl font-black text-slate-900 leading-tight">{champ.owner}</h3>

                      <div className="mt-4 grid grid-cols-2 gap-3">
                        <div className="bg-slate-50 rounded-xl px-3 py-2">
                          <div className="text-xs text-slate-400 font-medium">Record</div>
                          <div className="text-base font-black text-slate-800">{champ.record}</div>
                        </div>
                        <div className="bg-slate-50 rounded-xl px-3 py-2">
                          <div className="text-xs text-slate-400 font-medium">Platform</div>
                          <div className="text-base font-black text-slate-800">{champ.platform}</div>
                        </div>
                        {champ.champScore !== "—" && (
                          <div className="bg-blue-50 rounded-xl px-3 py-2 col-span-2">
                            <div className="text-xs text-blue-400 font-medium">Championship Score</div>
                            <div className="text-base font-black text-blue-800">{champ.champScore}</div>
                          </div>
                        )}
                      </div>

                      {champ.note && (
                        <p className="text-xs text-slate-400 italic mt-3">{champ.note}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* How to add headshots note */}
          <div className="mt-6 bg-blue-50 border border-blue-100 rounded-xl px-5 py-4 flex items-start gap-3">
            <span className="text-blue-500 text-lg mt-0.5">📸</span>
            <div>
              <p className="text-sm text-blue-700 font-semibold">Adding Headshots</p>
              <p className="text-sm text-blue-600 mt-0.5">
                Drop photos into <code className="bg-blue-100 px-1 rounded text-xs">public/headshots/</code> — name them <code className="bg-blue-100 px-1 rounded text-xs">garyn.jpg</code>, <code className="bg-blue-100 px-1 rounded text-xs">david.jpg</code>, etc. They'll appear automatically in the card above.
              </p>
            </div>
          </div>
        </section>

        {/* 2024 Playoff Bracket */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-2">2024 Playoff Bracket</h2>
          <p className="text-sm text-slate-500 mb-8">ESPN · Winner's Bracket (Top 4 Seeds)</p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Semifinals */}
            <div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Semifinals · Week 15</div>
              <div className="space-y-4">
                {playoffs2024.semifinals.map((game, i) => (
                  <div key={i} className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
                    {game.note && (
                      <div className="bg-amber-50 border-b border-amber-100 px-4 py-1.5 text-xs font-bold text-amber-700">
                        ⚡ {game.note}
                      </div>
                    )}
                    <div className="p-4 space-y-2">
                      {[
                        { team: game.team1, score: game.score1, won: game.winner === game.team1.replace(/^#\d+ /, "") },
                        { team: game.team2, score: game.score2, won: game.winner === game.team2.replace(/^#\d+ /, "") },
                      ].map((side, j) => (
                        <div key={j} className={`flex items-center justify-between px-3 py-2 rounded-xl ${side.won ? "bg-blue-50" : "bg-slate-50"}`}>
                          <span className={`text-sm font-semibold truncate ${side.won ? "text-blue-800" : "text-slate-500"}`}>
                            {side.team}
                          </span>
                          <span className={`text-sm font-black tabular-nums ml-2 ${side.won ? "text-blue-700" : "text-slate-400"}`}>
                            {side.score ?? "—"}
                            {side.won && <span className="ml-1 text-xs">✓</span>}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Championship */}
            <div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Championship · Week 16</div>
              <div className="bg-white border-2 border-blue-200 rounded-2xl overflow-hidden shadow-sm">
                <div className="bg-gradient-to-r from-blue-700 to-blue-900 px-4 py-2 text-white text-xs font-bold uppercase tracking-widest">
                  🏆 Championship Game
                </div>
                <div className="p-4 space-y-2">
                  {[
                    { team: playoffs2024.championship.team1, score: playoffs2024.championship.score1, won: true },
                    { team: playoffs2024.championship.team2, score: playoffs2024.championship.score2, won: false },
                  ].map((side, j) => (
                    <div key={j} className={`flex items-center justify-between px-3 py-2.5 rounded-xl ${side.won ? "bg-blue-50" : "bg-slate-50"}`}>
                      <span className={`text-sm font-semibold truncate ${side.won ? "text-blue-800" : "text-slate-500"}`}>
                        {side.team}
                      </span>
                      <span className={`text-sm font-black tabular-nums ml-2 ${side.won ? "text-blue-700" : "text-slate-400"}`}>
                        {side.score}
                        {side.won && <span className="ml-1">👑</span>}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Final Standings */}
            <div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Final Standings</div>
              <div className="bg-white border border-slate-200 rounded-2xl divide-y divide-slate-100 overflow-hidden">
                {playoffs2024.finalStandings.map((s) => (
                  <div key={s.place} className="px-4 py-3 flex items-start gap-3">
                    <span className="text-lg leading-none mt-0.5">{s.emoji}</span>
                    <div>
                      <div className="text-sm font-bold text-slate-900">{s.owner}</div>
                      <div className="text-xs text-slate-400 mt-0.5">{s.note}</div>
                    </div>
                    <div className="ml-auto text-xs font-bold text-slate-500 shrink-0">{s.record}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Runner-ups / Notable Moments */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">Notable Moments</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { emoji: "😤", title: "Biggest Heartbreak", body: "Teddy Burgess went 10-4 in 2024 and 11-3 in 2025 — the best record in the league both years — and never won a ring.", label: "2× Runner-Up" },
              { emoji: "⚡", title: "Closest Game Ever", body: "The 2024 Semifinals saw Teddy Burgess beat Karl Grabowski by just 0.7 points (146.4 – 145.7).", label: "2024 Playoffs" },
              { emoji: "👑", title: "Biggest Upset", body: "Garyn Angel entered the 2024 playoffs as the 3-seed with an 8-6 record and won the whole thing.", label: "2024 Champ" },
            ].map((m) => (
              <div key={m.title} className="bg-white border border-slate-200 rounded-2xl p-6">
                <div className="text-3xl mb-3">{m.emoji}</div>
                <div className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-1">{m.label}</div>
                <h3 className="font-black text-slate-900 mb-2">{m.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{m.body}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
      <Footer />
    </main>
  );
}
