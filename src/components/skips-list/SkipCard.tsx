"use client";

import type { Skip } from "../../types/skip";

interface SkipCardProps {
  skip: Skip;
}

export function SkipCard({ skip }: SkipCardProps) {
  return (
    <div className="relative bg-slate-800/50 border-slate-700 p-6 text-white">
      <div className="text-center mb-4">
        <h3 className="text-xl font-bold mb-1">{skip.size} Yard Skip</h3>
      </div>

      <div className="text-center mb-4">
        <div className="text-slate-400 text-sm flex items-center justify-center gap-1">
          <span className="w-3 h-3 rounded-full border border-slate-400 flex items-center justify-center">
            <span className="w-1 h-1 bg-slate-400 rounded-full"></span>
          </span>
          {skip.hire_period_days} day hire period
        </div>
      </div>

      <button
        type="button"
        className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800 w-full cursor-pointer"
      >
        Select This Skip
      </button>
    </div>
  );
}
