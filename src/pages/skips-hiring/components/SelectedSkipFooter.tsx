import { calculatePriceWithVAT } from "../../../libs/functions";
import type { SelectedSkipFooterProps } from "../types/components";

export const SelectedSkipFooter = ({
  selectedSkip,
  setSelectedSkip,
}: SelectedSkipFooterProps) => {
  const handleCancel = () => {
    setSelectedSkip(null);
  };

  const handleContinue = () => {
    console.log("Continue with:", selectedSkip);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      {/* Glass background with blur effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-slate-900/70 backdrop-blur-xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-6">
          {/* Left section - Skip details */}
          <div className="flex items-center space-x-3">
            {/* Skip visualization */}
            <div className="relative">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-indigo-500/20 flex items-center justify-center overflow-hidden">
                <div className="w-7 h-5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded transform -rotate-6 shadow-md"></div>
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white text-xs font-bold">
                {selectedSkip.size}
              </div>
            </div>

            {/* Skip information */}
            <div>
              <h3 className="text-lg font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                {selectedSkip.size} Yard Skip
              </h3>
              <div className="flex items-center space-x-2">
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  {selectedSkip.hire_period_days}d
                </span>
              </div>
            </div>
          </div>

          {/* Middle section - Disclaimer */}
          <div className="lg:flex-1 lg:max-w-md lg:mx-6">
            <p className="text-xs text-white text-center lg:text-center leading-tight">
              Imagery and information shown may not reflect exact
              specifications. Colors may vary, options at additional cost.
            </p>
          </div>

          {/* Right section - Price and actions */}
          <div className="flex flex-col sm:flex-row items-center justify-between sm:justify-end gap-3 sm:gap-4">
            {/* Price display */}
            <div className="text-center sm:text-right">
              <div className="flex items-baseline justify-center sm:justify-end">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                  £{calculatePriceWithVAT(selectedSkip).toFixed(2)}
                </span>
                <span className="ml-1 text-white text-xs">inc. VAT</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex space-x-2 w-full sm:w-auto">
              <button
                onClick={handleCancel}
                className="flex-1 sm:flex-none px-4 py-2 rounded-lg text-white border border-slate-600 hover:border-slate-500 hover:bg-slate-800/50 transition-all duration-300 text-sm cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleContinue}
                className="flex-1 sm:flex-none px-5 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium shadow-md shadow-blue-500/25 hover:shadow-blue-500/40 transform hover:-translate-y-0.5 transition-all duration-300 text-sm cursor-pointer"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
