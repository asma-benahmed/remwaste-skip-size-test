import { useQuery } from "@tanstack/react-query";
import type { Skip } from "../types/data";

const fetchSkips = async (): Promise<Skip[]> => {
  const response = await fetch(
    "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch skips");
  }
  return response.json();
};

export const useSkips = () => {
  return useQuery({
    queryKey: ["skips"],
    queryFn: fetchSkips,
  });
};
