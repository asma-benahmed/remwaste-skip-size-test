import { useState, useMemo } from "react";
import type { Skip } from "../types/data";
import { calculatePriceWithVAT } from "../utils/functions";

export const useSkipsFilters = (skipsList: Skip[]) => {
  // Filter states
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(2000);
  const [allowedOnRoad, setAllowedOnRoad] = useState<boolean | null>(null);
  const [heavyWasteAccepted, setHeavyWasteAccepted] = useState<boolean | null>(
    null
  );

  // Calculate price bounds from data
  const priceBounds = useMemo(() => {
    if (skipsList.length === 0) return { min: 0, max: 2000 };

    const allPrices = skipsList.map((skip) => calculatePriceWithVAT(skip));
    const lowestPrice = Math.floor(Math.min(...allPrices));
    const highestPrice = Math.ceil(Math.max(...allPrices));

    return { min: lowestPrice, max: highestPrice };
  }, [skipsList]);

  // Initialize price range if not set
  const initializedMinPrice =
    minPrice === 0 && maxPrice === 2000 ? priceBounds.min : minPrice;
  const initializedMaxPrice =
    minPrice === 0 && maxPrice === 2000 ? priceBounds.max : maxPrice;

  // Apply filters and get filtered results
  const filteredSkips = useMemo(() => {
    if (!skipsList.length) return [];

    return skipsList.filter((skip: Skip) => {
      const skipPrice = calculatePriceWithVAT(skip);

      // Price filter
      const matchesPrice =
        skipPrice >= initializedMinPrice && skipPrice <= initializedMaxPrice;

      // Road allowance filter
      const matchesRoad =
        allowedOnRoad === null || skip.allowed_on_road === allowedOnRoad;

      // Heavy waste filter
      const matchesHeavyWaste =
        heavyWasteAccepted === null ||
        skip.allows_heavy_waste === heavyWasteAccepted;

      return matchesPrice && matchesRoad && matchesHeavyWaste;
    });
  }, [
    skipsList,
    initializedMinPrice,
    initializedMaxPrice,
    allowedOnRoad,
    heavyWasteAccepted,
  ]);

  // Clear all filters
  const clearFilters = () => {
    setMinPrice(priceBounds.min);
    setMaxPrice(priceBounds.max);
    setAllowedOnRoad(null);
    setHeavyWasteAccepted(null);
  };

  // Safe price values (ensure they're within bounds)
  const safeMinPrice = Math.max(initializedMinPrice, priceBounds.min);
  const safeMaxPrice = Math.min(initializedMaxPrice, priceBounds.max);

  return {
    // Filter values
    minPrice: safeMinPrice,
    maxPrice: safeMaxPrice,
    allowedOnRoad,
    heavyWasteAccepted,

    // Filter setters
    setMinPrice,
    setMaxPrice,
    setAllowedOnRoad,
    setHeavyWasteAccepted,

    // Computed values
    filteredSkips,
    priceBounds,
    filteredCount: filteredSkips.length,
    totalCount: skipsList.length,

    // Actions
    clearFilters,
  };
};
