import { PriceRangeSlider } from "./PriceRangeSlider";
import { ToggleFilter } from "./ToggleFilter";
import { FilterSummary } from "./FilterSummary";
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
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 flex-1">
            <PriceRangeSlider
              min={priceBounds.min}
              max={priceBounds.max}
              valueMin={minPrice}
              valueMax={maxPrice}
              setValueMin={setMinPrice}
              setValueMax={setMaxPrice}
            />

            <div className="flex items-center gap-6">
              <ToggleFilter
                id="allowed-on-road"
                label="Road Safe"
                checked={allowedOnRoad}
                onChange={setAllowedOnRoad}
                activeColor="blue"
              />

              <ToggleFilter
                id="heavy-waste"
                label="Heavy Waste"
                checked={heavyWasteAccepted}
                onChange={setHeavyWasteAccepted}
                activeColor="green"
              />
            </div>
          </div>

          <FilterSummary
            filteredCount={filteredCount}
            totalCount={totalCount}
            onClear={onClearFilters}
          />
        </div>
      </div>
    </div>
  );
};
