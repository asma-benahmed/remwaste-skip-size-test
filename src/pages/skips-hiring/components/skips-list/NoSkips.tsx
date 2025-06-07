import type { NoSkipsProps } from "../../types/components";

export const NoSkips = ({ onClearFilters }: NoSkipsProps) => {
  return (
    <div className="col-span-full text-center py-16">
      <div className="max-w-md mx-auto">
        <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-slate-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-slate-700 mb-2">
          No skips found
        </h3>
        <p className="text-slate-500 mb-6">
          Try adjusting your filters to see more results
        </p>
        <button
          onClick={onClearFilters}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5"
        >
          Clear All Filters
        </button>
      </div>
    </div>
  );
};
