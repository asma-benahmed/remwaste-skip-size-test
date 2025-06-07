import { SkipCard } from "./SkipCard";
import type { Skip } from "../../types/data";
import { useState } from "react";
import { SkipsListSkeleton } from "./SkipsListSkeleton";
import { SelectedSkipFooter } from "../SelectedSkipFooter";
import { useSkipsFilters } from "../../hooks/use-filter-skips";
import { useSkips } from "../../hooks/use-fetch-skips";
import { AnimatedWrapper } from "../AnimatedWrapper";
import { SkipsFilters } from "../skips-filters";
import { defaultSkips } from "../../utils/data/skips";
import { NoSkips } from "./NoSkips";

export const SkipsList = () => {
  const [selectedSkip, setSelectedSkip] = useState<Skip | null>(null);

  const { data: skips, isLoading } = useSkips();
  const skipsList = !isLoading && skips ? skips : defaultSkips;

  const {
    minPrice,
    maxPrice,
    allowedOnRoad,
    heavyWasteAccepted,
    setMinPrice,
    setMaxPrice,
    setAllowedOnRoad,
    setHeavyWasteAccepted,
    filteredSkips,
    filteredCount,
    totalCount,
    priceBounds,
    clearFilters,
  } = useSkipsFilters(skipsList);

  return (
    <>
      <SkipsFilters
        minPrice={minPrice}
        maxPrice={maxPrice}
        setMinPrice={setMinPrice}
        setMaxPrice={setMaxPrice}
        allowedOnRoad={allowedOnRoad}
        setAllowedOnRoad={setAllowedOnRoad}
        heavyWasteAccepted={heavyWasteAccepted}
        setHeavyWasteAccepted={setHeavyWasteAccepted}
        filteredCount={filteredCount}
        totalCount={totalCount}
        priceBounds={priceBounds}
        onClearFilters={clearFilters}
      />

      {isLoading ? (
        <SkipsListSkeleton />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 px-6 sm:px-12">
          {filteredSkips.length > 0 ? (
            filteredSkips.map((skip: Skip, index: number) => (
              <AnimatedWrapper
                key={skip.id}
                delay={index * 0.05}
                y={20}
                onceInView={true}
              >
                <SkipCard
                  skip={skip}
                  selectedSkip={selectedSkip}
                  setSelectedSkip={setSelectedSkip}
                />
              </AnimatedWrapper>
            ))
          ) : (
            <NoSkips onClearFilters={clearFilters} />
          )}
        </div>
      )}

      {selectedSkip && (
        <SelectedSkipFooter
          selectedSkip={selectedSkip}
          setSelectedSkip={setSelectedSkip}
        />
      )}
    </>
  );
};
