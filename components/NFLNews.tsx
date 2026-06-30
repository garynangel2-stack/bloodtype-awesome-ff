"use client";
import { useEffect, useState } from "react";

interface NewsItem {
  headline: string;
  description: string;
  published: string;
  links?: { web?: { href?: string } };
  images?: { url: string }[];
  categories?: { description?: string }[];
}

function timeAgo(dateStr: string) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  return `${Math.floor(hrs / 24)}d ago`;
}

function getCategoryLabel(item: NewsItem) {
  const cats = item.categories ?? [];
  for (const c of cats) {
    const desc = c.description?.toLowerCase() ?? "";
    if (desc.includes("injury")) return { label: "Injury", color: "bg-red-100 text-red-700" };
    if (desc.includes("trade")) return { label: "Trade", color: "bg-purple-100 text-purple-700" };
    if (desc.includes("transaction")) return { label: "Transaction", color: "bg-amber-100 text-amber-700" };
  }
  return { label: "News", color: "bg-blue-100 text-blue-700" };
}

export default function NFLNews() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [activeTab, setActiveTab] = useState<"all" | "injuries" | "trades">("all");

  useEffect(() => {
    fetch("https://site.api.espn.com/apis/site/v2/sports/football/nfl/news?limit=30")
      .then((r) => r.json())
      .then((data) => {
        setNews(data.articles ?? []);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  const filtered = news.filter((item) => {
    if (activeTab === "all") return true;
    const cats = (item.categories ?? []).map((c) => c.description?.toLowerCase() ?? "");
    if (activeTab === "injuries") return cats.some((c) => c.includes("injur"));
    if (activeTab === "trades") return cats.some((c) => c.includes("trade") || c.includes("transaction"));
    return true;
  });

  return (
    <section id="news">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-black text-slate-900">NFL News</h2>
          <p className="text-sm text-slate-500 mt-0.5">Live updates from ESPN · Stay on top of injuries & trades</p>
        </div>
        <div className="flex gap-1 bg-slate-100 p-1 rounded-xl">
          {(["all", "injuries", "trades"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition-colors ${
                activeTab === tab ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white rounded-2xl border border-slate-200 p-4 animate-pulse">
              <div className="h-3 bg-slate-200 rounded w-1/4 mb-3"></div>
              <div className="h-4 bg-slate-200 rounded w-full mb-2"></div>
              <div className="h-4 bg-slate-200 rounded w-3/4 mb-3"></div>
              <div className="h-3 bg-slate-100 rounded w-full mb-1"></div>
              <div className="h-3 bg-slate-100 rounded w-4/5"></div>
            </div>
          ))}
        </div>
      )}

      {error && (
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 text-center">
          <div className="text-3xl mb-2">📡</div>
          <p className="text-slate-600 font-medium">Couldn't load NFL news right now.</p>
          <p className="text-slate-400 text-sm mt-1">Check back later or visit ESPN.com directly.</p>
        </div>
      )}

      {!loading && !error && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.slice(0, 9).map((item, i) => {
              const cat = getCategoryLabel(item);
              const url = item.links?.web?.href ?? "#";
              return (
                <a
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-2xl border border-slate-200 p-4 hover:shadow-md hover:border-blue-200 transition-all group flex flex-col"
                >
                  {item.images?.[0] && (
                    <img
                      src={item.images[0].url}
                      alt=""
                      className="w-full h-36 object-cover rounded-xl mb-3"
                    />
                  )}
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${cat.color}`}>
                      {cat.label}
                    </span>
                    <span className="text-xs text-slate-400">{timeAgo(item.published)}</span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 leading-snug group-hover:text-blue-700 transition-colors mb-2 line-clamp-2">
                    {item.headline}
                  </h3>
                  {item.description && (
                    <p className="text-xs text-slate-500 line-clamp-2 mt-auto">{item.description}</p>
                  )}
                </a>
              );
            })}
          </div>
          {filtered.length === 0 && (
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 text-center">
              <p className="text-slate-500 text-sm">No {activeTab} news right now.</p>
            </div>
          )}
        </>
      )}
    </section>
  );
}
