import type { PriceRangeSliderProps } from "../../types/components";
import AccessibleRangeSlider from "./AccessibleRangeSlider";

export const PriceRangeSlider = ({
  min,
  max,
  valueMin,
  valueMax,
  setValueMin,
  setValueMax,
}: PriceRangeSliderProps) => {
  const range = max - min;
  return (
    <div className="flex-1 min-w-64">
      <label className="block text-sm font-semibold text-slate-700 mb-3">
        Price Range: £{valueMin} - £{valueMax}
      </label>
      <div className="relative">
        <div className="h-2 bg-slate-200 rounded-full relative">
          <div
            className="absolute h-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"
            style={{
              left: `${((valueMin - min) / range) * 100}%`,
              width: `${((valueMax - valueMin) / range) * 100}%`,
            }}
          />
        </div>

        <AccessibleRangeSlider
          value={valueMin}
          min={min}
          max={max}
          ariaLabel="Minimum value"
          onChange={(val) => setValueMin(val)}
          thumbColorClass="bg-blue-600"
          constraintValue={valueMax}
          constrainFn={(input, max) => Math.min(input, max - 1)}
        />

        <AccessibleRangeSlider
          value={valueMax}
          min={min}
          max={max}
          ariaLabel="Maximum value"
          onChange={(val) => setValueMax(val)}
          thumbColorClass="bg-indigo-600"
          constraintValue={valueMin}
          constrainFn={(input, min) => Math.max(input, min + 1)}
        />

      </div>
      <div className="flex justify-between text-xs text-slate-500 mt-2">
        <span>£{min}</span>
        <span>£{max}</span>
      </div>
    </div>
  );
};
