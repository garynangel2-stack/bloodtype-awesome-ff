import { upcomingEvents } from "@/lib/data";

export default function UpcomingEvents() {
  return (
    <section id="upcoming">
      <div className="mb-6">
        <h2 className="text-2xl font-black text-slate-900">Upcoming Events</h2>
        <p className="text-sm text-slate-500 mt-0.5">2026 season schedule — dates to be announced</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {upcomingEvents.map((event) => (
          <div
            key={event.event}
            className="bg-white border border-slate-200 rounded-2xl p-5 flex items-start gap-4 hover:shadow-sm transition-shadow"
          >
            <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-2xl shrink-0">
              {event.icon}
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <h3 className="font-bold text-slate-900 text-sm">{event.event}</h3>
                <span className="text-xs font-bold bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">
                  {event.date}
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-1">{event.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 bg-blue-50 border border-blue-100 rounded-xl px-5 py-4 flex items-start gap-3">
        <span className="text-blue-500 text-lg mt-0.5">ℹ️</span>
        <p className="text-sm text-blue-700">
          <span className="font-semibold">Commissioner note:</span> Dates will be updated as the 2026 season approaches. Check back for draft date announcements.
        </p>
      </div>
    </section>
  );
}
