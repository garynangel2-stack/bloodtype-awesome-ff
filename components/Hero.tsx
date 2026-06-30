import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-blue-800/40 border border-blue-600/30 text-blue-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
            2026 Season · Offseason · Draft TBD
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight mb-5">
            Bloodtype=Awesome
            <span className="block text-blue-400 mt-1">Fantasy Football</span>
          </h1>
          <p className="text-lg text-slate-300 mb-8 max-w-xl leading-relaxed">
            The official hub for the league. Track standings, scores, records, and all-time history — one clean place for everything.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/champions" className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-5 py-2.5 rounded-xl transition-colors text-sm">
              View Champions
            </Link>
            <Link href="/history" className="bg-white/10 hover:bg-white/20 border border-white/10 text-white font-semibold px-5 py-2.5 rounded-xl transition-colors text-sm">
              League History
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
