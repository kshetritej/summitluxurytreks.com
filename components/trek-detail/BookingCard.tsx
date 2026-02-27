"use client";

import { useMemo, useState } from "react";

export default function BookingCard({ trip }: { trip: any }) {
  const [date, setDate] = useState("2026-09-24");
  const [travellers, setTravellers] = useState(2);

  const price = trip?.price;

  const travellersLabel = useMemo(() => {
    if (travellers === 1) return "1 Traveler";
    return `${travellers} Travelers`;
  }, [travellers]);

  return (
    <div className="rounded-xl border  p-5 shadow-sm">
      <div className="font-bold">{trip?.title}</div>
      <div className="text-sm ">Starting from</div>

      <div className="mt-1 flex items-end gap-2">
        <div className="text-2xl font-semibold text-slate-900">
          ${price?.toLocaleString()}
        </div>
        <div>/person</div>
      </div>

      <div className="mt-4 space-y-3">
        <div>
          <label className="font-semibold">Travel Date</label>
          <div className="mt-2 rounded-lg border border-slate-200 bg-white px-3 py-2">
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full bg-transparent text-sm text-slate-700 outline-none"
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-semibold text-slate-700">Guests</label>

          <div className="mt-2 flex items-center justify-between rounded-lg border border-slate-200 bg-white px-3 py-2">
            <span className="text-sm text-slate-700">{travellersLabel}</span>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setTravellers((v) => Math.max(1, v - 1))}
                className="h-8 w-8 rounded-md border border-slate-200 text-slate-700 hover:bg-slate-50"
              >
                –
              </button>
              <button
                type="button"
                onClick={() => setTravellers((v) => Math.min(12, v + 1))}
                className="h-8 w-8 rounded-md border border-slate-200 text-slate-700 hover:bg-slate-50"
              >
                +
              </button>
            </div>
          </div>
        </div>

        <button
          className="mt-2 w-full rounded-lg bg-primary/90 px-4 py-2.5 text-sm font-semibold text-white hover:bg-primary"
          type="button"
        >
          Book This Trek
        </button>

        <div className="text-center text-xs text-slate-500">
          Full refund up to 30 days before start date
        </div>
      </div>

      <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4">
        <div className="text-sm font-semibold text-slate-800">
          Need help with booking?
        </div>
        <div className="mt-1 text-sm text-slate-600">
          Our travel experts are available 24/7 to help you customize your
          journey.
        </div>
        <button
          type="button"
          className="mt-3 w-full rounded-lg border border-primary/20 bg-white px-4 py-2 text-sm font-semibold text-primary hover:bg-primary/5"
        >
          Contact Expert →
        </button>
      </div>
    </div>
  );
}
