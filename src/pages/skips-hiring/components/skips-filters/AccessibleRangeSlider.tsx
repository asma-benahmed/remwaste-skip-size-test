import React from "react";
import type { AccessibleRangeSliderProps } from "../../types/components";

const AccessibleRangeSlider: React.FC<AccessibleRangeSliderProps> = ({
  value,
  min,
  max,
  ariaLabel,
  onChange,
  thumbColorClass,
  constraintValue,
  constrainFn,
}) => {
  return (
    <input
      type="range"
      min={min}
      max={max}
      aria-label={ariaLabel}
      value={value}
      onChange={(e) => {
        const inputValue = Number(e.target.value);
        const newValue =
          constraintValue !== undefined && constrainFn
            ? constrainFn(inputValue, constraintValue)
            : inputValue;
        onChange(newValue);
      }}
      className={`absolute top-1 w-full h-2 bg-transparent appearance-none pointer-events-none
  [&::-webkit-slider-thumb]:appearance-none
  [&::-webkit-slider-thumb]:h-6
  [&::-webkit-slider-thumb]:w-6
  [&::-webkit-slider-thumb]:mt-[-12px]
  [&::-webkit-slider-thumb]:rounded-full
  [&::-webkit-slider-thumb]:${thumbColorClass}
  [&::-webkit-slider-thumb]:pointer-events-auto
  [&::-webkit-slider-thumb]:shadow-lg
  [&::-webkit-slider-thumb]:border-2
  [&::-webkit-slider-thumb]:border-white`}
    />
  );
};

export default AccessibleRangeSlider;
