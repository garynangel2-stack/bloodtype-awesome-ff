import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { allTimeOwners } from "@/lib/data";

export default function CommissionerPage() {
  const garyn = allTimeOwners.find((o) => o.owner === "Garyn Angel")!;
  const sorted = [...allTimeOwners].sort((a, b) => b.winPct - a.winPct);
  const rank = sorted.findIndex((o) => o.owner === "Garyn Angel") + 1;
  const avg = (garyn.totalPF / (garyn.wins + garyn.losses)).toFixed(1);

  const stats = [
    { label: "Championships", value: "1", sub: "2024 Champion 🏆" },
    { label: "All-Time Rank", value: `#${rank}`, sub: `${(garyn.winPct * 100).toFixed(1)}% win rate` },
    { label: "Career Record", value: `${garyn.wins}–${garyn.losses}`, sub: "Two seasons in" },
    { label: "Playoff Rate", value: "2 / 2", sub: "Makes it every year" },
    { label: "Avg Points / Week", value: avg, sub: "Steady production" },
    { label: "Title Game", value: "142.68", sub: "Beat Teddy 142.68–130.02" },
  ];

  const qualities = [
    { icon: "⚖️", title: "Unshakable Integrity", body: "Every ruling is made by the book and in the best interest of the league — no favorites, no shortcuts." },
    { icon: "🤝", title: "Honest to a Fault", body: "Straight answers, transparent decisions, and a commissioner you can actually trust with the keys." },
    { icon: "🧠", title: "Fair & Even-Handed", body: "Trades, disputes, and rule changes are handled calmly and fairly, keeping the league competitive and fun." },
    { icon: "🏈", title: "Backs It Up On The Field", body: "Not just an administrator — a 2024 champion who took the title as a 3-seed underdog." },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full mb-5 uppercase tracking-widest">
            ⭐ Your Commissioner
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-3">Garyn Angel</h1>
          <p className="text-slate-300 text-lg max-w-xl">
            Founder, champion, and the steady hand keeping Bloodtype=Awesome running right.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">

        {/* Photo + Bio */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Photo */}
          <div className="flex flex-col items-center md:items-start">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/headshots/garyn.jpg"
              alt="Garyn Angel, Commissioner"
              className="w-full max-w-xs aspect-square object-cover rounded-3xl border border-slate-200 shadow-sm"
            />
          </div>

          {/* Bio */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-black text-slate-900 mb-4">About the Commissioner</h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Garyn Angel doesn&apos;t just run the Bloodtype=Awesome Fantasy Football League — he sets the
                standard for what a commissioner should be. Known league-wide for his unshakable integrity and
                scrupulous fairness, Garyn keeps things honest, transparent, and fun, season after season.
              </p>
              <p>
                Whether it&apos;s settling a trade dispute, drawing up the schedule, or making the tough call,
                he does it with a level head and a straight answer every time. Managers know that under his
                watch the league is in the best possible hands — competitive, well-run, and above board.
              </p>
              <p>
                And he&apos;s no armchair administrator. Garyn is a <span className="font-semibold text-slate-800">2024 league
                champion</span> who took the title as a 3-seed underdog and owns one of the best win rates in
                league history. Simply put: the most honest, fair, and accomplished commissioner the league
                could ask for.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">By The Numbers</h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-white border border-slate-200 rounded-2xl p-5">
                <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-2">{s.label}</div>
                <div className="text-3xl font-black text-blue-700">{s.value}</div>
                <div className="text-xs text-slate-500 mt-1">{s.sub}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Why he's the best */}
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">Why He&apos;s The Best in the Business</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {qualities.map((q) => (
              <div key={q.title} className="bg-white border border-slate-200 rounded-2xl p-6 flex items-start gap-4">
                <div className="text-3xl shrink-0">{q.icon}</div>
                <div>
                  <h3 className="font-black text-slate-900 mb-1">{q.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{q.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
      <Footer />
    </main>
  );
}
