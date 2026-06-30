import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row items-start justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-xs">FF</span>
              </div>
              <span className="text-white font-black">Bloodtype=Awesome Fantasy</span>
            </div>
            <p className="text-sm max-w-xs">8-Team PPR · Est. 2024 · ESPN & Sleeper</p>
          </div>
          <div className="flex gap-8 text-sm">
            <div className="space-y-2">
              <div className="text-white font-semibold text-xs uppercase tracking-wider mb-3">Pages</div>
              <Link href="/" className="block hover:text-white transition-colors">Home</Link>
              <Link href="/season" className="block hover:text-white transition-colors">Current Season</Link>
              <Link href="/champions" className="block hover:text-white transition-colors">Champions</Link>
              <Link href="/history" className="block hover:text-white transition-colors">League History</Link>
              <Link href="/commissioner" className="block hover:text-white transition-colors">Commissioner</Link>
            </div>
            <div className="space-y-2">
              <div className="text-white font-semibold text-xs uppercase tracking-wider mb-3">Links</div>
              <a href="https://sleeper.com" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors">Sleeper</a>
              <a href="https://www.espn.com/fantasy/football/" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors">ESPN Fantasy</a>
              <a href="https://www.espn.com/nfl/" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors">NFL on ESPN</a>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-6 text-xs text-slate-600 flex flex-col sm:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} Bloodtype=Awesome Fantasy Football. All rights reserved.</span>
          <span>News powered by ESPN · Not affiliated with the NFL</span>
        </div>
      </div>
    </footer>
  );
}
