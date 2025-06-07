import { BsArrowRight } from "react-icons/bs";
import { CiCalendarDate } from "react-icons/ci";

import { BiCheckCircle, BiXCircle } from "react-icons/bi";
import type { SkipCardProps } from "../../types/components";
import {
  calculatePriceWithVAT,
  getSkipExtraFeaturesCosts,
  getSkipFeatures,
} from "../../utils/functions";

export function SkipCard({
  skip,
  selectedSkip,
  setSelectedSkip,
}: SkipCardProps) {
  const isSelected = selectedSkip?.id === skip.id;

  return (
    <div
      key={skip.id}
      className="relative group cursor-pointer transition-all duration-300 hover:transform hover:scale-102"
      onClick={() => setSelectedSkip(isSelected ? null : skip)}
    >
      <div className="absolute -top-2 right-1 z-10 flex flex-wrap gap-2">
        {getSkipExtraFeaturesCosts(skip).map((feature, index) => (
          <div
            className="text-white px-3 py-1 text-xs font-bold bg-blue-600 rounded-lg flex items-center gap-1"
            key={`${feature}-${index}`}
          >
            {feature}
          </div>
        ))}
      </div>

      <div
        className={`bg-white rounded-3xl p-8 h-full shadow-lg border-2 transition-all duration-300 ${
          isSelected
            ? "border-blue-600 shadow-blue-100"
            : "border-gray-100 hover:border-gray-200 hover:shadow-xl"
        }`}
      >
        <div className="text-center mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            {skip.size} Yard Skip
          </h2>
          <p className="text-gray-500 font-medium">{skip.size} cubic yards</p>
        </div>

        <div className="text-center mb-8">
          <div className="text-3xl font-bold text-gray-900 mb-2">
            £{calculatePriceWithVAT(skip).toFixed(2)}
          </div>
          <div className="text-sm text-gray-500 mb-2">
            (£{skip.price_before_vat} + £
            {((skip.price_before_vat * skip.vat) / 100).toFixed(0)} VAT)
          </div>
          <div className="flex items-center justify-center text-gray-500">
            <CiCalendarDate className="w-4 h-4 mr-2" />
            <span className="text-sm">
              {skip.hire_period_days} day hire period
            </span>
          </div>
        </div>

        <div className="space-y-4 mb-8">
          {getSkipFeatures(skip).map((feature, index) => (
            <div key={index} className="flex items-start">
              {feature.includes("only") || feature.includes("Private") ? (
                <BiXCircle className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
              ) : (
                <BiCheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              )}
              <span className="text-gray-700 text-sm leading-relaxed">
                {feature}
              </span>
            </div>
          ))}
        </div>

        <button
          onClick={() => setSelectedSkip(isSelected ? null : skip)}
          className={`w-full py-2 px-4 rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
            isSelected
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          {isSelected ? "Selected" : "Select Skip"}{" "}
          {!isSelected && <BsArrowRight className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
}
