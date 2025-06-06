import type { FilterSummaryProps } from "../../types/components";

export const FilterSummary = ({ filteredCount, totalCount, onClear }: FilterSummaryProps) => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4">
      <div className="text-sm text-slate-600 font-medium">
        {filteredCount} of {totalCount} skips
      </div>
      <button
        onClick={onClear}
        className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-sm font-semibold transition-all duration-200 hover:shadow-md"
      >
        Clear All
      </button>
    </div>
  );
};
