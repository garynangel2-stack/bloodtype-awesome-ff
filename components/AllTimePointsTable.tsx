"use client";
import { useState } from "react";

type Owner = {
  owner: string;
  totalPF: number;
  totalPA: number;
};

type SortKey = "manager" | "pf" | "pa" | "diff";

const diffOf = (o: Owner) => o.totalPF - o.totalPA;

const SORT_OPTIONS: { key: SortKey; label: string; defaultDir: "asc" | "desc" }[] = [
  { key: "diff", label: "Diff", defaultDir: "desc" },
  { key: "pf", label: "PF", defaultDir: "desc" },
  { key: "pa", label: "PA", defaultDir: "desc" },
  { key: "manager", label: "Name", defaultDir: "asc" },
];

export default function AllTimePointsTable({ owners }: { owners: Owner[] }) {
  const [sortKey, setSortKey] = useState<SortKey>("diff");
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
      case "manager": return o.owner.toLowerCase();
      case "pf": return o.totalPF;
      case "pa": return o.totalPA;
      case "diff": return diffOf(o);
    }
  }

  const sorted = [...owners].sort((a, b) => {
    const av = valueOf(a);
    const bv = valueOf(b);
    let cmp: number;
    if (typeof av === "string" && typeof bv === "string") cmp = av.localeCompare(bv);
    else cmp = (av as number) - (bv as number);
    if (cmp === 0) cmp = diffOf(b) - diffOf(a);
    return dir === "asc" ? cmp : -cmp;
  });

  const arrow = (key: SortKey) => (sortKey === key ? (dir === "asc" ? " ↑" : " ↓") : "");

  return (
    <div>
      {/* Mobile sort chips */}
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

      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center gap-3 px-4 sm:px-5 py-3 bg-slate-50 border-b border-slate-200 text-xs font-bold text-slate-500 uppercase tracking-wider">
          <div className="w-6 shrink-0">#</div>
          <button onClick={() => toggle("manager", "asc")} className={`flex-1 text-left hover:text-blue-600 ${sortKey === "manager" ? "text-blue-600" : ""}`}>Manager{arrow("manager")}</button>
          <button onClick={() => toggle("pf")} className={`w-16 sm:w-20 text-right hover:text-blue-600 ${sortKey === "pf" ? "text-blue-600" : ""}`}>PF{arrow("pf")}</button>
          <button onClick={() => toggle("pa")} className={`w-16 sm:w-20 text-right hover:text-blue-600 ${sortKey === "pa" ? "text-blue-600" : ""}`}>PA{arrow("pa")}</button>
          <button onClick={() => toggle("diff")} className={`w-14 sm:w-16 text-right hover:text-blue-600 ${sortKey === "diff" ? "text-blue-600" : ""}`}>Diff{arrow("diff")}</button>
        </div>
        <div className="divide-y divide-slate-100">
          {sorted.map((o, i) => {
            const diff = diffOf(o);
            return (
              <div key={o.owner} className="flex items-center gap-3 px-4 sm:px-5 py-3.5 hover:bg-slate-50 transition-colors">
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-black shrink-0 ${
                  i === 0 ? "bg-blue-700 text-white" : "bg-slate-100 text-slate-500"
                }`}>
                  {i + 1}
                </span>
                <div className="flex-1 min-w-0 font-semibold text-slate-900 text-sm truncate">{o.owner}</div>
                <div className="w-16 sm:w-20 text-right text-sm font-bold text-slate-700 tabular-nums">{o.totalPF.toFixed(1)}</div>
                <div className="w-16 sm:w-20 text-right text-sm text-slate-400 tabular-nums">{o.totalPA.toFixed(1)}</div>
                <div className={`w-14 sm:w-16 text-right text-sm font-bold tabular-nums ${diff >= 0 ? "text-emerald-600" : "text-red-500"}`}>
                  {diff >= 0 ? "+" : ""}{diff.toFixed(0)}
                </div>
              </div>
            );
          })}
        </div>
        <div className="px-4 sm:px-5 py-3 bg-slate-50 border-t border-slate-100 text-xs text-slate-400">
          PF / PA / Diff combined across all seasons · tap a column to sort
        </div>
      </div>
    </div>
  );
}
