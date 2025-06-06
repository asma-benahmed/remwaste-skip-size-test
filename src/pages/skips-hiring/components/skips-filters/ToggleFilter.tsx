import type { ToggleFilterProps } from "../../types/components";

export const ToggleFilter = ({
  id,
  label,
  checked,
  onChange,
  activeColor,
}: ToggleFilterProps) => {
  const bgColor =
    activeColor === "blue"
      ? "bg-blue-100 text-blue-700 border-blue-300"
      : "bg-green-100 text-green-700 border-green-300";

  const dotColor =
    activeColor === "blue" ? "bg-blue-600" : "bg-green-600";

  return (
    <div className="relative">
      <input
        id={id}
        type="checkbox"
        checked={checked === true}
        onChange={(e) => onChange(e.target.checked ? true : null)}
        className="sr-only"
      />
      <label
        htmlFor={id}
        className={`flex items-center cursor-pointer px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${checked === true
            ? `${bgColor} border-2`
            : "bg-slate-100 text-slate-600 border-2 border-transparent hover:bg-slate-200"
          }`}
      >
        <div
          className={`w-4 h-4 rounded-full mr-2 flex items-center justify-center ${checked === true ? dotColor : "bg-slate-400"
            }`}
        >
          {checked === true && (
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
        {label}
      </label>
    </div>
  );
};
