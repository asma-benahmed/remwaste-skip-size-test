import { defaultSkips } from "../../data/skips";
import { useSkips } from "../../hooks/use-fetch-skips";
import type { Skip } from "../../types/skip";
import { SkipCard } from "./SkipCard";

export const SkipsList = () => {
  
  const { data: skips, isLoading } = useSkips()
  const skipsList = !isLoading && skips ? skips : defaultSkips

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 px-12">
      {skipsList?.map((skip: Skip) => (
        <SkipCard
          key={skip.id}
          skip={skip}
        />
      ))}
    </div>
  );
};
