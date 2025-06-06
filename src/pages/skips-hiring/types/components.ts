import type { Dispatch, SetStateAction } from "react";
import type { Skip } from "./data";

export interface SkipsFiltersProps {
  minPrice: number;
  maxPrice: number;
  setMinPrice: (price: number) => void;
  setMaxPrice: (price: number) => void;
  allowedOnRoad: boolean | null;
  setAllowedOnRoad: (value: boolean | null) => void;
  heavyWasteAccepted: boolean | null;
  setHeavyWasteAccepted: (value: boolean | null) => void;
  filteredCount: number;
  totalCount: number;
  priceBounds: { min: number; max: number };
  onClearFilters: () => void;
}

export interface SkipCardProps {
  skip: Skip;
  selectedSkip: Skip | null;
  setSelectedSkip: Dispatch<SetStateAction<Skip | null>>;
}

export interface SelectedSkipFooterProps {
  selectedSkip: Skip;
  setSelectedSkip: Dispatch<SetStateAction<Skip | null>>;
}

export type FilterSummaryProps = {
  filteredCount: number;
  totalCount: number;
  onClear: () => void;
};

export type PriceRangeSliderProps = {
  min: number;
  max: number;
  valueMin: number;
  valueMax: number;
  setValueMin: (value: number) => void;
  setValueMax: (value: number) => void;
};

export type ToggleFilterProps = {
  id: string;
  label: string;
  checked: boolean | null;
  onChange: (value: boolean | null) => void;
  activeColor: string;
};
