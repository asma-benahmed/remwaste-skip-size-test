import React from "react";
import type { AccessibleRangeSliderProps } from "../../types/components";

const AccessibleRangeSlider: React.FC<AccessibleRangeSliderProps> = ({
  value,
  min,
  max,
  ariaLabel,
  onChange,
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
      className={`accessible-range`}
    />
  );
};

export default AccessibleRangeSlider;
