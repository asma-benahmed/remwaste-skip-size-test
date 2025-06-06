import type { SkipsFiltersProps } from "../../types/components";

export const SkipsFilters = ({
  minPrice,
  maxPrice,
  setMinPrice,
  setMaxPrice,
  allowedOnRoad,
  setAllowedOnRoad,
  heavyWasteAccepted,
  setHeavyWasteAccepted,
  filteredCount,
  totalCount,
  priceBounds,
  onClearFilters,
}: SkipsFiltersProps) => {
  return (
    <div className="mb-6 px-6 sm:px-12">
      <div className="bg-white rounded-2xl border border-slate-100 px-6 py-5">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          {/* Left side - Filters */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 flex-1">
            {/* Price Range Filter */}
            <div className="flex-1 min-w-64">
              <label className="block text-sm font-semibold text-slate-700 mb-3">
                Price Range: £{minPrice} - £{maxPrice}
              </label>
              <div className="relative">
                {/* Track */}
                <div className="h-2 bg-slate-200 rounded-full relative">
                  {/* Active range */}
                  <div
                    className="absolute h-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"
                    style={{
                      left: `${Math.max(
                        0,
                        ((minPrice - priceBounds.min) /
                          (priceBounds.max - priceBounds.min)) *
                          100
                      )}%`,
                      width: `${Math.max(
                        0,
                        Math.min(
                          100,
                          ((maxPrice - minPrice) /
                            (priceBounds.max - priceBounds.min)) *
                            100
                        )
                      )}%`,
                    }}
                  />
                </div>

                {/* Min range input */}
                <input
                  type="range"
                  min={priceBounds.min}
                  max={priceBounds.max}
                  value={minPrice}
                  onChange={(e) => {
                    const value = Math.min(
                      Number(e.target.value),
                      maxPrice - 1
                    );
                    setMinPrice(value);
                  }}
                  className="absolute top-0 w-full h-2 bg-transparent appearance-none cursor-pointer pointer-events-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-600 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white"
                />

                {/* Max range input */}
                <input
                  type="range"
                  min={priceBounds.min}
                  max={priceBounds.max}
                  value={maxPrice}
                  onChange={(e) => {
                    const value = Math.max(
                      Number(e.target.value),
                      minPrice + 1
                    );
                    setMaxPrice(value);
                  }}
                  className="absolute top-0 w-full h-2 bg-transparent appearance-none cursor-pointer pointer-events-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-indigo-600 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white"
                />
              </div>
              <div className="flex justify-between text-xs text-slate-500 mt-2">
                <span>£{priceBounds.min}</span>
                <span>£{priceBounds.max}</span>
              </div>
            </div>

            {/* Checkbox Filters */}
            <div className="flex items-center gap-6">
              <div className="flex items-center">
                <div className="relative">
                  <input
                    id="allowed-on-road"
                    type="checkbox"
                    checked={allowedOnRoad === true}
                    onChange={(e) =>
                      setAllowedOnRoad(e.target.checked ? true : null)
                    }
                    className="sr-only"
                  />
                  <label
                    htmlFor="allowed-on-road"
                    className={`flex items-center cursor-pointer px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      allowedOnRoad === true
                        ? "bg-blue-100 text-blue-700 border-2 border-blue-300"
                        : "bg-slate-100 text-slate-600 border-2 border-transparent hover:bg-slate-200"
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded-full mr-2 flex items-center justify-center ${
                        allowedOnRoad === true ? "bg-blue-600" : "bg-slate-400"
                      }`}
                    >
                      {allowedOnRoad === true && (
                        <svg
                          className="w-2.5 h-2.5 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </div>
                    Road Safe
                  </label>
                </div>
              </div>

              <div className="flex items-center">
                <div className="relative">
                  <input
                    id="heavy-waste"
                    type="checkbox"
                    checked={heavyWasteAccepted === true}
                    onChange={(e) =>
                      setHeavyWasteAccepted(e.target.checked ? true : null)
                    }
                    className="sr-only"
                  />
                  <label
                    htmlFor="heavy-waste"
                    className={`flex items-center cursor-pointer px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      heavyWasteAccepted === true
                        ? "bg-green-100 text-green-700 border-2 border-green-300"
                        : "bg-slate-100 text-slate-600 border-2 border-transparent hover:bg-slate-200"
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded-full mr-2 flex items-center justify-center ${
                        heavyWasteAccepted === true
                          ? "bg-green-600"
                          : "bg-slate-400"
                      }`}
                    >
                      {heavyWasteAccepted === true && (
                        <svg
                          className="w-2.5 h-2.5 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </div>
                    Heavy Waste
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Clear button and results */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="text-sm text-slate-600 font-medium">
              {filteredCount} of {totalCount} skips
            </div>
            <button
              onClick={onClearFilters}
              className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-sm font-semibold transition-all duration-200 hover:shadow-md"
            >
              Clear All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
