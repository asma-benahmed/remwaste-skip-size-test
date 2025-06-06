import type { PriceRangeSliderProps } from "../../types/components";

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

        <input
          type="range"
          min={min}
          max={max}
          value={valueMin}
          onChange={(e) =>
            setValueMin(Math.min(Number(e.target.value), valueMax - 1))
          }
          className="absolute top-0 w-full h-2 bg-transparent appearance-none pointer-events-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-600 [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white"
        />

        <input
          type="range"
          min={min}
          max={max}
          value={valueMax}
          onChange={(e) =>
            setValueMax(Math.max(Number(e.target.value), valueMin + 1))
          }
          className="absolute top-0 w-full h-2 bg-transparent appearance-none pointer-events-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-indigo-600 [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white"
        />
      </div>
      <div className="flex justify-between text-xs text-slate-500 mt-2">
        <span>£{min}</span>
        <span>£{max}</span>
      </div>
    </div>
  );
};
