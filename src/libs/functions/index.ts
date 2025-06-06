import type { Skip } from "../../types/skip";

export function calculatePriceWithVAT(skip: Skip): number {
  const { price_before_vat, vat } = skip;
  return price_before_vat + (price_before_vat * vat) / 100;
}

export const getSkipFeatures = (skip: Skip) => {
  const features = [];

  if (skip.allowed_on_road) {
    features.push("Road placement allowed");
  } else {
    features.push("Private property only");
  }

  if (skip.allows_heavy_waste) {
    features.push("Heavy waste accepted");
  } else {
    features.push("Light waste only");
  }

  return features;
};

export const getSkipExtraFeaturesCosts = (skip: Skip) => {
  const extraFeaturesCosts = [];

  if (skip.transport_cost) {
    extraFeaturesCosts.push(`Transport: £${skip.transport_cost}`);
  }

  if (skip.per_tonne_cost) {
    extraFeaturesCosts.push(`Per tonne: £${skip.per_tonne_cost}`);
  }

  return extraFeaturesCosts;
};
