"use client";
import { useState } from "react";

type Owner = {
  owner: string;
  seasons: number;
  wins: number;
  losses: number;
  winPct: number;
  totalPF: number;
  championships: number;
  note: string;
};

type SortKey = "owner" | "seasons" | "record" | "winPct" | "avgPts" | "championships";

const avgPts = (o: Owner) => o.totalPF / (o.wins + o.losses);

const SORT_OPTIONS: { key: SortKey; label: string; defaultDir: "asc" | "desc" }[] = [
  { key: "winPct", label: "Win %", defaultDir: "desc" },
  { key: "record", label: "Wins", defaultDir: "desc" },
  { key: "avgPts", label: "Avg Pts", defaultDir: "desc" },
  { key: "seasons", label: "Seasons", defaultDir: "desc" },
  { key: "championships", label: "Titles", defaultDir: "desc" },
  { key: "owner", label: "Name", defaultDir: "asc" },
];

export default function OwnerRankingsTable({ owners }: { owners: Owner[] }) {
  const [sortKey, setSortKey] = useState<SortKey>("winPct");
  const [dir, setDir] = useState<"asc" | "desc">("desc");

  function toggle(key: SortKey, defaultDir: "asc" | "desc" = "desc") {
    if (sortKey === key) setDir(dir === "asc" ? "desc" : "asc");
    else {
      setSortKey(key);
      setDir(defaultDir);
    }
  }

  function valueOf(o: Owner): number | string {
    switch (sortKey) {
      case "owner": return o.owner.toLowerCase();
      case "seasons": return o.seasons;
      case "record": return o.wins;
      case "winPct": return o.winPct;
      case "avgPts": return avgPts(o);
      case "championships": return o.championships;
    }
  }

  const sorted = [...owners].sort((a, b) => {
    const av = valueOf(a);
    const bv = valueOf(b);
    let cmp: number;
    if (typeof av === "string" && typeof bv === "string") cmp = av.localeCompare(bv);
    else cmp = (av as number) - (bv as number);
    if (cmp === 0) cmp = b.winPct - a.winPct;
    return dir === "asc" ? cmp : -cmp;
  });

  const arrow = (key: SortKey) => (sortKey === key ? (dir === "asc" ? " ↑" : " ↓") : "");

  function HeaderButton({ label, k, className, defaultDir = "desc" }: { label: string; k: SortKey; className: string; defaultDir?: "asc" | "desc" }) {
    const active = sortKey === k;
    return (
      <button
        onClick={() => toggle(k, defaultDir)}
        className={`${className} flex items-center gap-0.5 uppercase tracking-wider hover:text-blue-600 transition-colors ${active ? "text-blue-600" : ""}`}
      >
        {label}<span className="text-[10px]">{arrow(k)}</span>
      </button>
    );
  }

  return (
    <div>
      {/* Mobile: sort chips */}
      <div className="md:hidden flex flex-wrap gap-2 mb-3">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider self-center mr-1">Sort:</span>
        {SORT_OPTIONS.map((o) => {
          const active = sortKey === o.key;
          return (
            <button
              key={o.key}
              onClick={() => toggle(o.key, o.defaultDir)}
              className={`text-xs font-bold px-3 py-1.5 rounded-full border transition-colors ${
                active ? "bg-blue-600 text-white border-blue-600" : "bg-white text-slate-600 border-slate-200"
              }`}
            >
              {o.label}{active ? (dir === "asc" ? " ↑" : " ↓") : ""}
            </button>
          );
        })}
      </div>

      {/* Mobile: card list */}
      <div className="md:hidden space-y-3">
        {sorted.map((o, i) => (
          <div key={o.owner} className="bg-white border border-slate-200 rounded-2xl p-4">
            <div className="flex items-center gap-3">
              <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black shrink-0 ${
                i === 0 ? "bg-blue-700 text-white" : "bg-slate-100 text-slate-500"
              }`}>
                {i + 1}
              </span>
              <div className="flex-1 min-w-0">
                <div className="font-bold text-slate-900 leading-tight">{o.owner}</div>
                {o.note && <div className="text-xs text-slate-400 italic">{o.note}</div>}
              </div>
              <div className="text-right shrink-0">
                <div className="text-lg font-black text-blue-700 tabular-nums leading-none">{(o.winPct * 100).toFixed(1)}%</div>
                <div className="text-[10px] text-slate-400 uppercase tracking-wide mt-0.5">Win %</div>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-2 mt-3 pt-3 border-t border-slate-100 text-center">
              <Stat label="Record" value={`${o.wins}–${o.losses}`} />
              <Stat label="Seasons" value={o.seasons} />
              <Stat label="Avg Pts" value={avgPts(o).toFixed(1)} />
              <Stat label="Titles" value={o.championships} />
            </div>
          </div>
        ))}
      </div>

      {/* Desktop: table */}
      <div className="hidden md:block bg-white border border-slate-200 rounded-2xl overflow-hidden">
        <div className="grid grid-cols-12 gap-2 px-5 py-3 bg-slate-50 border-b border-slate-200 text-xs font-bold text-slate-500">
          <div className="col-span-1 uppercase tracking-wider">Rank</div>
          <HeaderButton label="Owner" k="owner" defaultDir="asc" className="col-span-3 justify-start" />
          <HeaderButton label="Seasons" k="seasons" className="col-span-1 justify-center" />
          <HeaderButton label="Record" k="record" className="col-span-2 justify-center" />
          <HeaderButton label="Win %" k="winPct" className="col-span-2 justify-end" />
          <HeaderButton label="Avg Pts/Wk" k="avgPts" className="col-span-2 justify-end" />
          <HeaderButton label="Titles" k="championships" className="col-span-1 justify-center" />
        </div>
        <div className="divide-y divide-slate-100">
          {sorted.map((owner, i) => (
            <div key={owner.owner} className="grid grid-cols-12 gap-2 px-5 py-4 items-center hover:bg-slate-50 transition-colors">
              <div className="col-span-1">
                <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black ${
                  i === 0 ? "bg-blue-700 text-white" : "bg-slate-100 text-slate-500"
                }`}>
                  {i + 1}
                </span>
              </div>
              <div className="col-span-3">
                <div className="font-bold text-slate-900 text-sm">{owner.owner}</div>
                {owner.note && <div className="text-xs text-slate-400 italic">{owner.note}</div>}
              </div>
              <div className="col-span-1 text-center text-sm text-slate-500">{owner.seasons}</div>
              <div className="col-span-2 text-center font-bold text-sm text-slate-700 tabular-nums">
                {owner.wins}–{owner.losses}
              </div>
              <div className="col-span-2 text-right">
                <div className="text-sm font-bold text-slate-800 tabular-nums">{(owner.winPct * 100).toFixed(1)}%</div>
                <div className="w-full bg-slate-100 rounded-full h-1.5 mt-1">
                  <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: `${Math.round(owner.winPct * 100)}%` }} />
                </div>
              </div>
              <div className="col-span-2 text-right text-sm font-bold text-slate-700 tabular-nums">
                {avgPts(owner).toFixed(1)}
              </div>
              <div className="col-span-1 text-center text-sm font-bold text-slate-700 tabular-nums">
                {owner.championships}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string | number }) {
  return (
    <div>
      <div className="text-sm font-bold text-slate-800 tabular-nums">{value}</div>
      <div className="text-[10px] text-slate-400 uppercase tracking-wide mt-0.5">{label}</div>
    </div>
  );
}
